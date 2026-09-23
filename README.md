# 🖼️ Img to PDF

A simple and user-friendly web application that allows users to convert multiple images into a single PDF document directly from the browser.

Built with **React.js** and **Vite**, this application provides image upload, preview, image management, PDF configuration, and PDF generation features in a clean interface.

## ✨ Features

* 📤 Upload multiple images
* 🖼️ Preview uploaded images
* 📋 View and manage selected images
* 🗑️ Remove unwanted images
* ⚙️ Configure PDF settings
* 📄 Convert multiple images into a single PDF
* 📥 Download the generated PDF
* 📱 Responsive user interface
* ⚡ Client-side PDF generation
* 🔒 Images are processed directly in the browser

## 🛠️ Tech Stack

* **React.js**
* **JavaScript (ES6+)**
* **HTML5**
* **CSS3**
* **Vite**
* **jsPDF**

## 📂 Project Structure

```text
Img-to-PDF/
├── public/
│
├── src/
│   ├── components/
│   │   ├── ConvertButton.jsx
│   │   ├── Header.jsx
│   │   ├── ImageList.jsx
│   │   ├── ImagePreview.jsx
│   │   ├── PdfSettings.jsx
│   │   └── UploadArea.jsx
│   │
│   ├── utils/
│   │   └── generatePdf.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## 🔄 How It Works

### 1. Upload Images

Select one or multiple images using the upload area.

### 2. Preview Images

Preview the selected images before generating the PDF.

### 3. Manage Images

View the uploaded images in the image list and remove any unwanted images.

### 4. Configure PDF

Adjust the available PDF settings according to your requirements.

### 5. Generate PDF

Click the **Convert to PDF** button to generate a PDF containing the selected images.

The PDF generation logic is handled by:

```text
src/utils/generatePdf.js
```

## 🔐 Privacy

The application performs image processing and PDF generation on the client side.

Images do not need to be uploaded to a backend server for conversion.
