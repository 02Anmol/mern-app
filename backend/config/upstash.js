import dotenv from 'dotenv';
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";


dotenv.config();


const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(10, "20 s")
});

export default ratelimit;