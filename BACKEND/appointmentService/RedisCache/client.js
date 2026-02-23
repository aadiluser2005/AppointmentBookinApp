import Redis from "ioredis";




export const client = new Redis({
  host:  "redis"||"127.0.0.1",
  port: process.env.REDIS_PORT || 6379,
});