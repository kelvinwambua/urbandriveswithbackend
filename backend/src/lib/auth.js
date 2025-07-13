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

        clientId: process.env.GOOGLE_CLIENT_ID || "425418103832-84fdpo564o82h16878is9o3251hstp86.apps.googleusercontent.com",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || "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"
    },
},
    
    trustedOrigins: [
        'http://localhost:3000',
        'http://localhost:5173'
    ]
});