# 🎬 YouTube Clone (Simple)

A very simple **YouTube-like clone** built with **React**.

This project is half-static and half-dynamic — some parts are hardcoded (like recommended categories and user icons), while search and filtering are dynamic using the **YouTube Data API.**

---

## 🚀 Features

- 🔍 **Search Bar**: Search YouTube videos dynamically using Google API.
- 🏷️ **Category Filter**: Clickable categories to filter content.
- 👤 **User Section**: Static user profile and action icons.
- 📺 **Video Grid (Static + Dynamic)**: Mix of static and API-fetched videos.

---

## 🛠️ Tech Stack

- **React** (functional components + hooks)
- **CSS** for styling
- **YouTube Data API v3** (Google API key)
- **Static assets** (icons, images from GitHub repo)

---

## 📂 Project Structure

```jsx
src/
│ ├── MainContent/
│ │ ├── MainContent.jsx # Fetches videos from YouTube API & displays them
│ │ └── MainContent.css
│ │
│ ├── Menu/
│ │ ├── Menu.jsx # Sidebar / menu items
│ │ └── Menu.css
│ │
│ ├── Top/
│ │ ├── Top.jsx # Header (search bar, categories, user icons)
│ │ └── Top.css
│ │
│ └── ...
│
├── App.jsx # Root component
├── main.jsx # React entry point
├── index.css # Base styles
├── style.css # Global styles
│
├── .gitignore
├── README.md
```

---
