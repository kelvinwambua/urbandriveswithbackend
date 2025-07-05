import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import db from "../db/connection.js";
import * as schema from "../db/schema.js";

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg",
        schema: {
            user:schema.user,
            account:schema.account,
            session:schema.session,
            verification: schema.verifications
        }
    }),
    
    emailAndPassword: {
        enabled: true,
        normalizeEmail: true
    },
    socialProviders: {
    google: {

        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
    },
},
    
    trustedOrigins: [
        'http://localhost:3000',
        'http://localhost:5173'
    ]
});