import { defineConfig } from "drizzle-kit";
import { ENV } from "./src/config/db.config";

export default defineConfig({
    schema: "./src/db/schema.db.ts",
    dialect: "postgresql",
    dbCredentials: {
    url: ENV.DB_URL!,
    }
});
