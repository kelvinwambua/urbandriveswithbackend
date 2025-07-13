import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
const db = drizzle(process.env.DATABASE_URL || "postgresql://neondb_owner:npg_9A5PSxyFQRuc@ep-raspy-hat-ae1soco4-pooler.c-2.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require");
export default db;