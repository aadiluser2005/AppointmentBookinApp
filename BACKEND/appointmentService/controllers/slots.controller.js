import status from "http-status";
import { slotModel } from "../models/slot.model.js";
import { client } from "../RedisCache/client.js"; // shared folder remains at BACKEND/RedisCache
import { nanoid } from 'nanoid'

export const slots = async (req, res) => {
  const { date } = req.body;

  try {
    const slotKey = `slots:${date}`;
    const cacheddata = await client.lrange(slotKey, 0, -1);
    if (cacheddata.length > 0) {
      console.log("cached data sent");
      res.status(status.OK).json(cacheddata.map(JSON.parse));
      return;
    }

    const allSlots = await slotModel.findOne({ date: new Date(date) });

    let data;
    //IF invalid date is encountered setting artificial data
    if (allSlots) {
      data = allSlots.slots.map((s) =>s.remainingSpots.toString());

      data=data.map((item)=>{
        return{
          slots:item,
          id:nanoid(),
        }
      })
    } else {
      console.log("Artificial data sent");
      data = [
        {
          slots:"2",
          id:nanoid(),
        },
        {
            slots:"2",
          id:nanoid(),
        },
        {
         slots:"2",
          id:nanoid(), 
        },
        {
           slots:"2",
          id:nanoid(), 
        }];
    }

    console.log(data);

    // Try to acquire a lock
    const lockKey = `lock:${date}`;
    const lock = await client.set(lockKey, "1", "NX", "EX", 5); // expires in 5s

    if (lock) {
      // Only one request will enter here
      await client.del(slotKey);

      for(let slot of data){
        await client.rpush(slotKey,JSON.stringify(slot));
      }

      await client.expire(slotKey, 10);

      // Release lock (optional, will expire automatically)
      await client.del(lockKey);
    }

    console.log("DB data sent");
    res.status(status.OK).json(data);
  } catch (error) {
    res
      .status(status.INTERNAL_SERVER_ERROR)
      .json({ message: "Internal error occurred" });
  }
};

export const dates = async (req, res) => {
  const cacheDates = await client.lrange("dates", 0, -1);
  if (cacheDates.length > 0) {
    console.log("Cached dates sent");
    return res.status(status.OK).json(cacheDates.map(JSON.parse));
  }
  const allDate = [];
  const today = new Date();
  for (let i = 1; i <= 14; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);

    const dateUTCStr = d.toUTCString();
    const dayName = dateUTCStr.slice(0, 3);

    const dateISOstr = d.toISOString();

    const completeDate = dateISOstr.slice(0, 10);

    const monthStr = dateISOstr.slice(5, 7);

    const dateStr = dateISOstr.slice(8, 10);

    allDate.push({
      day: dayName,
      date: dateStr,
      month: monthStr,
      fullDate: completeDate,
      id:nanoid(),
    });
  }

  for (let date of allDate) {
    await client.rpush("dates", JSON.stringify(date));
  }

  const expireAt = getMidnightISTTimestamp();

  await client.expireat("dates", expireAt);

 // console.log(expireAt);

  //console.log(allDate);
  console.log("Genrated dates");
  res.status(status.OK).json(allDate);
};

function getMidnightISTTimestamp() {
  const now = new Date();

  // Current time in IST
  const istOffset = 5.5 * 60; // minutes
  const localOffset = now.getTimezoneOffset(); // minutes (UTC - local)

  // Convert to IST by shifting
  const istDate = new Date(
    now.getTime() + (istOffset + localOffset) * 60 * 1000
  );
  // Set IST time to tomorrow 00:00:00
  istDate.setDate(istDate.getDate() + 1);
  istDate.setHours(0, 0, 0, 0);

  // Convert back to UTC timestamp (Redis expects UTC seconds)
  return Math.floor(istDate.getTime() / 1000);
}
