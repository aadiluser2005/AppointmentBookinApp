import amqp from "amqplib";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import fs from "fs";

if (fs.existsSync(".env.local")) {
  dotenv.config({ path: ".env.local" });
} else {
  dotenv.config(); // fallback to .env
}



export const notificationConsumer = async () => {
  try {
      //using loop retry method to avoid the case when rabbitmq service is not started but notification is trying to access it 
     let connection;
  while (!connection) {
    try {
      connection = await amqp.connect(process.env.RABBITMQ_URL );
      console.log("📩 Connected to RabbitMQ");
    } catch (err) {
      console.log("❌ RabbitMQ not ready, retrying in 3s...");
      await new Promise(res => setTimeout(res, 3000));
    }
  }
    const channel = await connection.createChannel();

    const exchange = "notificationExchange";
    const routingKey = "mailService";
    const queueName = "EmailQueue";

    await channel.assertExchange(exchange, "direct", { durable: true });
    await channel.assertQueue(queueName, { durable: true });
    await channel.bindQueue(queueName, exchange, routingKey);

    console.log("📩 Waiting for booking messages...");

    channel.consume(queueName, async (message) => {
      if (message) {
        try {
          const msg = JSON.parse(message.content.toString());
        // console.log(msg);

        

          await sendMail(msg.email, msg.subject,msg.msg);
          console.log(`✅ Email sent successfully to ${msg.email}`);

          channel.ack(message);
        } catch (err) {
          console.error("❌ Error processing message:", err);
          // Optionally: requeue message if needed
          channel.nack(message, false, true);
        }
      }
    });
  } catch (error) {
    console.error("❌ RabbitMQ Consumer Error:", error);
  }
};

// ✅ Nodemailer configuration
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "aadiluser2002@gmail.com",
    pass: process.env.GMAIL_APP_PASSWORD, // Gmail App Password (not your real Gmail password)
  },
});

function sendMail(to, subject, html) {
  return transporter.sendMail({
    from: "MK Hospital Jhansi <aadiluser2002@gmail.com>",
    to,
    subject,
    html,
  });
}


