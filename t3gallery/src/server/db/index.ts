import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

// Initialize the Neon serverless driver
const sql = neon(process.env.POSTGRES_URL!);

// Create the Drizzle ORM instance with the Neon connection
export const db = drizzle(sql, { schema });

