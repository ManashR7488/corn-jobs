# 🌽 Cron Job App (Node.js + Express + Axios)

A self-running cron job app built with **Express.js** and **Axios** to periodically ping APIs and prevent app sleep (e.g., on Render).

> 🔁 Keeps itself and other APIs awake — kind of like giving your backend a cup of coffee every 7 minutes.

---

## 📌 What is a Cron Job?

A **cron job** is a scheduled task that runs automatically at specific intervals. It’s commonly used in backend systems to:

- Ping APIs
- Clean up databases
- Sync data
- Run background processes

In this project, the cron job uses JavaScript’s `setInterval()` function (instead of Linux `cron`) to periodically:

1. **Ping its own endpoint** to prevent Render from sleeping the app.
2. **Ping external API links** provided in a list (like uptime monitoring or remote jobs).

---

## 🚀 Features

- ✅ Auto-starts an API loop when server runs
- ✅ Self-ping support to keep Render app alive
- ✅ Clean and configurable with `.env`
- ✅ Easily extendable

---

## 📁 Folder Structure

```bash
📦 corn-job-app
├── index.js          # Main server file
├── const.js          # External API list (array)
├── .env              # Environment variables
└── README.md         # You’re reading it :)
