import { Client, GatewayIntentBits } from "discord.js";

// ========================================
// Discord Client
// ========================================
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds
    ]
});

// ========================================
// Login
// ========================================
client.login(
    process.env.DISCORD_TOKEN
);