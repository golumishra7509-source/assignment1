# Premium Personal Portfolio — Shivam Mishra

A clean, modern, fully responsive, and accessible personal portfolio website built with semantic **HTML5**, modern **CSS3**, and minimal **vanilla JavaScript**. Tailored specifically for a final-year B.Tech Computer Science student applying for software engineering and web development internships.

---

## 📁 Project Structure

```text
personal-portfolio/
├── index.html       # Semantic HTML5 markup, accessible landmarks, and content structure
├── style.css        # Pure CSS3 styles, custom properties (CSS variables), Grid & Flexbox
├── script.js        # Vanilla JS for mobile nav toggle, form validation, and scroll interactions
└── README.md        # Comprehensive setup, customization, and deployment documentation
```

---

## 🚀 Key Highlights & Design Standards

1. **Zero Dependencies & Buildless**: Runs instantly in any modern web browser by double-clicking `index.html` (no `npm`, `vite`, `node_modules`, React, or Bootstrap needed).
2. **Design Palette**: Professional light theme base (`#f8fafc`), deep navy slate text (`#0f172a`), tasteful indigo/purple accents (`#4f46e5`), and subtle teal highlights (`#0d9488`).
3. **Responsive & Mobile-First**: Fluid typography using CSS `clamp()`, flexible CSS Grid & Flexbox, and support for screens from 320px smartphones up to large desktop monitors.
4. **Accessible (WCAG Compliant)**:
   - Skip to main content link for keyboard navigation.
   - High color contrast ratios (passing WCAG AA / AAA standards).
   - Semantic landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
   - Accessible ARIA labels on buttons and interactive elements.
   - Respects `prefers-reduced-motion` settings.
5. **Authentic & Truthful**:
   - Accurately highlights academic record (B.Tech CSE, Technocrats Institute of Technology and Science, Bhopal; CGPA 8.5).
   - Clear placeholder markers for Class 10/12 school names and percentages.
   - Categorized skills without misleading percentage bars or fake progress indicators.
   - Transparent client-side contact form validation that does not falsely claim server delivery.

---

## 💻 How to Run and Test Locally

### Option 1: Direct File Open (Easiest)
1. Open your computer's File Explorer.
2. Navigate to the `personal-portfolio` folder.
3. Double-click `index.html` or right-click `index.html` and choose **Open with > Google Chrome** (or Edge / Firefox / Safari).

### Option 2: Using VS Code Live Server
1. Open VS Code.
2. Go to **File > Open Folder...** and select the `personal-portfolio` folder.
3. If you have the "Live Server" extension installed, right-click `index.html` and select **Open with Live Server**.
4. The site will open automatically at `http://127.0.0.1:5500`.

---

## ✏️ How to Customize Your Personal Details

All placeholder items in `index.html` are clearly marked with comments or brackets. Open `index.html` in your text editor (VS Code, Notepad, etc.) and search for the following:

| Section | Placeholder to Find | Replacement Instruction |
| :--- | :--- | :--- |
| **Email** | `your.email@example.com` | Replace with your genuine professional email address. (Update in Hero, Contact, Footer, and `script.js`). |
| **LinkedIn** | `https://linkedin.com/in/your-profile` | Replace with your actual LinkedIn profile URL. |
| **GitHub** | `https://github.com/yourusername` | Replace with your actual GitHub profile URL. |
| **Class 12 Education** | `[Your School Name, City]` | Replace with your Class 12 school name, city, and board (e.g. `Kendriya Vidyalaya, Bhopal • CBSE`). |
| **Class 12 Marks** | `[Your Percentage]%` | Replace with your Class 12 percentage (e.g. `88.4%`). |
| **Class 10 Education** | `[Your Secondary High School Name, City]` | Replace with your Class 10 school name, city, and board. |
| **Class 10 Marks** | `[Your Result]%` | Replace with your Class 10 percentage or CGPA. |
| **Project 2 (KrishiSetu)** | `https://github.com/yourusername/krishisetu` | Replace with your actual GitHub repository URL (or keep as a concept link). |
| **Project 3 (React)** | `https://github.com/yourusername/react-components-practice` | Replace with your actual repository URL. |

---

## 📋 Comprehensive Quality & Evaluation Checklist

Use this checklist before submitting your assignment:

- [ ] **Mobile Responsiveness**: Open Chrome DevTools (`F12`), press `Ctrl + Shift + M` to toggle device mode. Test on **iPhone SE (375px)**, **Pixel 7 (412px)**, **iPad (768px)**, and desktop (1200px+). Verify there is no horizontal scrollbar.
- [ ] **Mobile Navigation Menu**: Tap the hamburger button on mobile view. Verify it expands smoothly, closes when clicking any link, closes when pressing the `Escape` key, and locks background scrolling while active.
- [ ] **Internal Smooth Navigation**: Click each navigation link ("About", "Education", "Skills", "Projects", "Contact"). Ensure smooth scrolling takes you to the correct section with header offset compensation.
- [ ] **Buttons & Hover Effects**: Hover over all buttons and project cards. Verify subtle elevation and color transitions.
- [ ] **Form Validation**:
  - Click "Submit Demo Message" with empty fields. Verify red field highlights and clear error messages appear.
  - Type an invalid email (e.g. `test@`). Verify the email validation error triggers.
  - Fill all fields validly and submit. Verify the green accessible confirmation alert renders.
  - Test the "Open in Mail Client (mailto)" button to confirm it launches your default email app with pre-filled content.
- [ ] **Back to Top**: Scroll down past the hero section and click "Back to top" in the footer. Ensure it scrolls smoothly back to `#hero`.
- [ ] **Dynamic Copyright Year**: Verify the footer displays the current year automatically.

---

## 🌐 Publishing Online to Get a Free Public URL

Internship forms and recruiters need a live, clickable link. You can host this static website for free in under two minutes with either method below:

### Method A: Netlify Drop (Zero Setup & No Git Required)
1. Go to [https://app.netlify.com/drop](https://app.netlify.com/drop) in your browser.
2. Sign in with GitHub, Google, or your email.
3. Drag and drop the entire `personal-portfolio` folder directly onto the upload box on Netlify.
4. Netlify will deploy your site in ~5 seconds and give you a live URL (e.g., `https://shivam-mishra-portfolio.netlify.app`).
5. (Optional) Go to **Site Configuration > Change site name** to choose a custom name.

### Method B: GitHub Pages
1. Log in to [GitHub](https://github.com/) and create a new repository (e.g., `personal-portfolio`).
2. Upload the files (`index.html`, `style.css`, `script.js`, `README.md`) to the repository main branch.
3. In your repository, go to **Settings > Pages** (in the left sidebar).
4. Under **Build and deployment > Branch**, select `main` and root `/`, then click **Save**.
5. Wait 1 to 2 minutes. GitHub will provide your live URL (e.g., `https://yourusername.github.io/personal-portfolio/`).

---

## 📝 Submitting in Your Internship Assignment Form

When submitting your assignment in Google Forms, an internship portal, or an evaluator email:

1. **Portfolio Live Link**: Paste your public URL (e.g., `https://shivam-mishra-portfolio.netlify.app` or `https://yourusername.github.io/personal-portfolio/`).
2. **Source Code Link**: Paste your GitHub repository link (e.g., `https://github.com/yourusername/personal-portfolio`).
3. **Tech Stack Note**:
   > *"Built using semantic HTML5, pure CSS3 (Flexbox, CSS Grid, custom properties, responsive fluid typography), and vanilla JavaScript for menu toggling and client-side form validation. 100% buildless, lightweight, and accessible."*
