# ⚖️ Case Law Search

A full-stack web application for searching case laws by keyword. Built with React (frontend) and Node.js + Express (backend).

## 🌐 Live Demo

- **Frontend**: https://case-law-search.vercel.app/
- **Backend API**: https://case-law-search.onrender.com

## 📁 Project Structure

```
case-law-search/
├── backend/
│   ├── package.json
│   ├── server.js
│   └── routes/
│       └── search.js
├── frontend/
│   ├── package.json
│   ├── public/
│   │   └── index.html
│   └── src/
│       ├── components/
│       │   ├── SearchBox.jsx
│       │   └── CaseCard.jsx
│       ├── pages/
│       │   └── Home.jsx
│       ├── App.jsx
│       ├── App.css
│       └── index.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

The backend server will run on **http://localhost:5000**

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The frontend app will run on **http://localhost:3000**

## ✨ Features

- 🔍 **Keyword Search**: Search for case laws by entering relevant keywords
- ⚡ **Real-time Results**: Instant search results with smooth animations
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- 🎨 **Modern UI**: Clean, minimal interface with smooth transitions
- ⚠️ **Error Handling**: Comprehensive error handling for better UX
- 🔄 **Loading States**: Visual feedback during API calls

## 🛠️ Technologies Used

### Backend
- Node.js
- Express.js
- CORS

### Frontend
- React 18
- CSS3 (with animations)
- Fetch API

## 📡 API Endpoints

### POST /api/search

Search for case laws by keyword.

**Request Body:**
```json
{
  "keyword": "bail"
}
```

**Response:**
```json
[
  {
    "title": "State of XYZ vs. Rohan Kumar",
    "citation": "2020 SCC 112",
    "keywords": ["bail", "custody"]
  }
]
```

## 🎯 Usage

1. Enter a keyword (e.g., "bail", "FIR", "arrest") in the search box
2. Click the "Search" button or press Enter
3. View the matching case laws displayed as cards
4. Hover over cards for smooth animations

## 📝 Sample Keywords

Try searching for:
- bail
- FIR
- arrest
- investigation
- custody

## 🎨 Features Implemented

✅ Clean, responsive UI
✅ Fade-in animations for results
✅ Hover effects on cards
✅ Loading spinner
✅ Error handling
✅ Input validation
✅ Mobile-first design
✅ Smooth transitions
✅ Disabled state for buttons during loading

## 📄 License

This project is open source and available for educational purposes.
