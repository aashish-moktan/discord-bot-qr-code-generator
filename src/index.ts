import dotenv from "dotenv";
dotenv.config();
import { Client, GatewayIntentBits } from "discord.js";
import QRCode from "qrcode";

// Create a nwe client with necessary intents
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

// Trggered when the bot is ready
client.once("ready", () => {
  console.log(`🤖 Logged in as ${client.user.tag}`);
});

let count = 1;
// Respond to messages
client.on("messageCreate", async (message) => {
  if (message.author.bot) return; // Ignore bot message

  if (message.content === "hello") {
    message.channel.send(`Hello, ${message.author.username}`);
  }

  if (message.content.startsWith("!qrcode")) {
    const text = message.content.split(" ").slice(1).join(" ");
    if (!text) {
      message.reply("Please provide text to generate a QR code.");
      return;
    }

    try {
      const qrCodeImage = await QRCode.toDataURL(text);
      const buffer = Buffer.from(qrCodeImage.split(",")[1], "base64");
      message.reply({ files: [{ attachment: buffer, name: "qrcode.png" }] });
      console.log(`QR code ${count} generated successfully.`);
      count++;
    } catch (error) {
      console.error(error);
      message.reply("Failed to generate QR code.");
    }
  }
});

// Login with your bot token
client.login(process.env.DISCORD_TOKEN);
