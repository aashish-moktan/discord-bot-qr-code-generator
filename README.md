# 🤖 Discord Bot – QR Code Generator

A simple and powerful Discord bot built with Node.js and TypeScript that generates QR codes from user input. Users can send a command, and the bot responds with a scannable QR code image.

## ✨ Features

- Generate QR codes for any text or URL
- Easy slash command integration
- Written in TypeScript with full type safety
- Uses `discord.js` and `qrcode` libraries

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone git@github.com:aashish-moktan/discord-bot-qr-code-generator.git
cd discord-qr-code-bot
```

### 2. Install Dependencies

Install all required dependencies

```bash
pnpm install
```

### 3. Create a .env file

Create your environment config file:

```bash
cp .env.example .env
```

Then edit .env:

```bash
DISCORD_TOKEN=your-bot-token-here
```

### 4. Build & Run the Bot

For development (auto-compiled with ts-node)

```bash
pnpm run dev
```

For production (compiled to dist/):

```bash
pnpm run build
pnpm run start
```

## 🛠 Tech Stack

- Node.js
- Typescript
- discord.js
- qrcode
- dotenv
