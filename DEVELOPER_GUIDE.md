# 🎓 Bhatia Master Classes — Developer Guide
### Complete Onboarding & Learning Document for New Developers

> **Who this is for:** A developer who is new to this codebase and wants to understand, maintain, and extend the BMC website independently.
>
> **Live Website:** [https://prabhakarmdes12-cmyk.github.io/Bhatia-Master-Classes/](https://prabhakarmdes12-cmyk.github.io/Bhatia-Master-Classes/)
>
> **GitHub Repository:** [https://github.com/prabhakarmdes12-cmyk/Bhatia-Master-Classes](https://github.com/prabhakarmdes12-cmyk/Bhatia-Master-Classes)

---

## 📋 Table of Contents

| # | Chapter | What You'll Learn |
|---|---------|-------------------|
| 1 | [Project Overview](#-chapter-1-project-overview) | What this site is and who it serves |
| 2 | [Core Concepts & Theory](#-chapter-2-core-concepts--theory) | HTML, CSS, JS fundamentals you must know |
| 3 | [Tech Stack Deep Dive](#-chapter-3-tech-stack-deep-dive) | Every tool used and why |
| 4 | [File Structure & Page Map](#-chapter-4-file-structure--page-map) | Where everything lives |
| 5 | [GitHub & Version Control](#-chapter-5-github--version-control) | How to manage the codebase |
| 6 | [Local Development Setup](#-chapter-6-local-development-setup) | Run the site on your computer |
| 7 | [Design System Reference](#-chapter-7-design-system-reference) | Colors, fonts, spacing — the visual rules |
| 8 | [Page-by-Page Breakdown](#-chapter-8-page-by-page-breakdown) | Every page explained in full detail |
| 9 | [JavaScript Features Explained](#-chapter-9-javascript-features-explained) | Every major JS feature with theory |
| 10 | [How to Update Content](#-chapter-10-how-to-update-content) | Step-by-step content editing guide |
| 11 | [Deployment Guide](#-chapter-11-deployment-guide) | Publishing changes to the live website |
| 12 | [Known Issues & Fixes](#-chapter-12-known-issues--fixes) | Current bugs and how to resolve them |
| 13 | [Future Roadmap](#-chapter-13-future-roadmap) | What comes next across 3 phases |
| 14 | [Glossary](#-chapter-14-glossary) | Plain-English definitions of every technical term |

---

## 🏫 Chapter 1: Project Overview

### What Is This Project?

**Bhatia Master Classes (BMC)** is a JEE & NEET coaching institute located in Ujjain, Madhya Pradesh. This project is their complete digital presence — a fully functional website that serves students, teachers, and the admin.

Think of it as three things in one:
1. **A marketing website** — attracting new students, showcasing the institute
2. **A student portal** — enrolled students log in to download study material, check notices, attend live classes
3. **An admin dashboard** — the institute owner/admin manages students, leads, notices, uploads

### Who Uses This Website?

| User Type | What They Do | Which Pages They Use |
|-----------|-------------|---------------------|
| **Prospective Students** | Browse the site, fill the admission form, try sample questions | `index.html` |
| **Enrolled Students** | Log in, download DPPs/PYQs, attend live class, submit doubts | `login.html` → `portal.html`, `live-class.html`, `doubt.html` |
| **Admin / Teacher** | Manage students, view leads, post notices, upload files | `login.html` → `admin.html` |

### What Can the Website Do Right Now?

- ✅ Full responsive marketing website with 10 sections
- ✅ Student login portal (8 sections: Dashboard, Profile, DPP, Tests, PYQ, Performance, Timetable, Notices)
- ✅ Admin dashboard (9 sections including leads tracking)
- ✅ BMC Challenger — weekly JEE question with OTP verification and lead capture
- ✅ "Crack These" — 4 daily sample questions with gated solutions
- ✅ DPP (Daily Practice Papers) downloads for 6 subjects
- ✅ PYQ (Previous Year Questions) downloads for JEE Advanced
- ✅ Video gallery with 3 slots
- ✅ Doubt submission page with camera capture, file upload, drawing tool
- ✅ Live class page with YouTube embed + Jitsi doubt sessions
- ✅ NEET 2026 Guess Paper lead capture section
- ✅ Branded social share cards (drawn using Canvas API)
- ✅ WhatsApp integration throughout

---

## 🧠 Chapter 2: Core Concepts & Theory

Before diving into the code, you need to understand the three building blocks of every web page.

### 2.1 HTML — The Structure

HTML (HyperText Markup Language) is the skeleton of every web page. It tells the browser *what* to show.

```/dev/null/example.html#L1-10
<!-- This is an HTML element -->
<section id="hero">
  <h1>Welcome to Bhatia Master Classes</h1>
  <p>This is a paragraph of text.</p>
  <button onclick="doSomething()">Click Me</button>
</section>
```

**Key concepts you'll see throughout this codebase:**

| Concept | What It Is | Example in This Project |
|---------|-----------|------------------------|
| **Tags** | `<div>`, `<p>`, `<h1>` — container elements | Every section, card, and form |
| **Attributes** | Extra information inside an opening tag | `id="hero"`, `class="nav-link"`, `href="#contact"` |
| **IDs** | Unique identifier — only ONE element per page can have an ID | `id="mainNav"`, `id="bmc-challenger"` |
| **Classes** | Reusable labels — MANY elements can share a class | `class="card-custom"`, `class="btn-primary-custom"` |
| **Anchor links** | `href="#section-id"` — scrolls to that section on the page | All navbar links like `href="#daily-practice"` |
| **Semantic HTML** | Using the right tag for the right job | `<nav>` for navigation, `<footer>` for footer, `<section>` for page sections |

### 2.2 CSS — The Style

CSS (Cascading Style Sheets) controls how HTML elements *look* — colors, fonts, sizes, spacing, layout.

```/dev/null/example.css#L1-15
/* This targets any element with class "card-custom" */
.card-custom {
  background: white;
  border-radius: 20px;       /* rounded corners */
  padding: 24px;             /* inner spacing */
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);  /* drop shadow */
}

/* This adds a hover effect */
.card-custom:hover {
  transform: translateY(-4px);  /* lift up on hover */
}
```

**CSS concepts used heavily in this project:**

| Concept | What It Does | Used Where |
|---------|-------------|-----------|
| **CSS Variables** | Store reusable values like colors | `:root { --primary: #1B3A6B; }` — top of every file |
| **Flexbox** | Arrange items in a row or column | Navbar, cards, stat pills |
| **Grid** | 2D layout — rows AND columns | DPP cards, stat grids in admin |
| **Media queries** | Different styles for different screen sizes | `@media (max-width: 768px) { ... }` |
| **Pseudo-classes** | Style based on state | `:hover`, `:focus`, `::before`, `::after` |
| **Transitions** | Smooth animation between states | `transition: all 0.3s ease;` on buttons |
| **CSS Custom Properties** | Variables defined in `:root` | `var(--primary)`, `var(--accent)` |

### 2.3 JavaScript — The Behaviour

JavaScript (JS) makes the page *interactive* — it responds to clicks, validates forms, animates things, and communicates with external services.

```/dev/null/example.js#L1-15
// This function runs when a button is clicked
function openModal() {
  // "document.getElementById" finds an HTML element by its ID
  const modal = document.getElementById('solutionModal');
  
  // ".classList.add()" adds a CSS class to that element
  modal.classList.add('show');
}

// This is an "event listener" — it waits for a click
document.getElementById('myButton').addEventListener('click', function() {
  console.log('Button was clicked!');
});
```

**JS concepts used in this project:**

| Concept | What It Does | Example |
|---------|-------------|---------|
| **DOM Manipulation** | Finding and changing HTML elements | `document.getElementById()`, `.classList.add()` |
| **Event Listeners** | Running code when user does something | `addEventListener('click', ...)` |
| **localStorage** | Save data in the browser that persists | Admin leads storage |
| **sessionStorage** | Save data that clears when tab closes | Live class login session |
| **fetch API** | Send data to external services | Formspree form submission |
| **Canvas API** | Draw graphics programmatically | Share cards, login background animation |
| **Intersection Observer** | Detect when elements scroll into view | Scroll reveal animations |
| **Template literals** | Build strings with variables | `` `Hello ${name}!` `` |
| **Arrow functions** | Shorter function syntax | `const fn = () => { ... }` |

---

## 🛠️ Chapter 3: Tech Stack Deep Dive

This project uses **no frameworks or build systems**. Everything is pure HTML, CSS, and JavaScript. Here's every tool used:

### 3.1 Bootstrap 5.3.2

**What it is:** A CSS framework — a pre-written collection of CSS classes that handle grid layout and common UI patterns.

**Why it's used:** Without Bootstrap, you'd have to write all layout CSS from scratch. Bootstrap's grid system (using classes like `col-lg-6`, `row`, `container`) makes it fast to create responsive layouts.

**How it's loaded:** Via CDN (Content Delivery Network) — a link in the `<head>` of each HTML file:
```Bhatia-Master-Classes-main/index.html#L50-51
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" />
```

**Key Bootstrap classes used in this project:**

| Class | What It Does |
|-------|-------------|
| `container` | Centers content with max-width + padding |
| `row` | A horizontal row of columns |
| `col-lg-6` | A column that's 6/12 wide on large screens |
| `d-flex` | Makes an element a flexbox container |
| `gap-3` | Adds spacing between flex/grid children |
| `ms-auto` | Pushes an element to the far right (margin-start: auto) |
| `py-5` | Adds vertical padding (top + bottom) of size 5 |
| `navbar-expand-lg` | Navbar collapses to hamburger on screens smaller than "lg" |
| `collapse navbar-collapse` | The collapsible part of the navbar |

**Important:** Bootstrap is only for layout utilities. ALL actual design styles (colors, shadows, custom components) are written as custom CSS.

### 3.2 Bootstrap Icons 1.11.3

**What it is:** An icon library — over 1,900 SVG icons as CSS classes.

**How to use:** Add `class="bi bi-ICON-NAME"` to any `<i>` tag.

```/dev/null/icon-example.html#L1-5
<!-- A lightning bolt icon -->
<i class="bi bi-lightning-fill"></i>

<!-- A download arrow icon -->
<i class="bi bi-download"></i>
```

**Browse all icons:** [icons.getbootstrap.com](https://icons.getbootstrap.com)

### 3.3 Google Fonts

**Two fonts are used — no others:**

| Font | Use | Style |
|------|-----|-------|
| **Barlow Condensed** | All headings (h1–h5), nav links, badges | Tall, narrow, bold — gives a strong coaching institute feel |
| **DM Sans** | All body text, paragraphs, form labels | Clean, modern, highly readable |

**How they're loaded:**
```Bhatia-Master-Classes-main/index.html#L52-53
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
```

### 3.4 Formspree

**What it is:** A free form-submission service. When a student fills the admissions form, the data is sent to Formspree, which emails it to the client.

**Status:** Currently using **placeholder IDs** — not yet active. See [Chapter 12](#-chapter-12-known-issues--fixes).

**How it works:** The form's `action` attribute points to a Formspree URL. When submitted, Formspree emails the form data.

### 3.5 WhatsApp Business Integration

**No API needed.** Uses the `wa.me` redirect format:
```/dev/null/whatsapp.txt#L1-3
https://wa.me/919516210209?text=ENCODED_MESSAGE
```
Clicking a WhatsApp link opens WhatsApp with a pre-filled message. The phone number is `+91 9516210209`.

### 3.6 Canvas API (Built-in Browser Feature)

**What it is:** A browser API that lets JavaScript draw graphics onto a `<canvas>` HTML element — like a painting canvas but made of code.

**Used in this project for:**
1. **Branded share cards** — when a user shares a question on social media, a custom-designed image card is drawn using Canvas
2. **Login page background** — the animated math symbols grid that reacts to mouse movement

### 3.7 Jitsi Meet (Public Instance)

**What it is:** An open-source video conferencing tool (like a free Zoom). Currently using the public `meet.jit.si` servers.

**How it's embedded:** Via an `<iframe>` in `live-class.html`. The room name is auto-generated based on the date: `BMC-Doubt-YYYY-MM-DD`.

### 3.8 YouTube Live Embed

**How it works:** A standard YouTube `<iframe>` embed. The video ID is set manually in the `CONFIG` block at the top of `live-class.html`'s JavaScript section before each live class.

---

## 📁 Chapter 4: File Structure & Page Map

```/dev/null/tree.txt#L1-32
Bhatia-Master-Classes-main/
│
├── index.html          ← Main marketing website (entry point for all visitors)
├── login.html          ← Login page (students + admin, two tabs)
├── portal.html         ← Student portal (8 sections, requires login)
├── admin.html          ← Admin dashboard (9 sections, requires admin login)
├── doubt.html          ← Doubt submission (3-step wizard)
├── live-class.html     ← Live class viewer (requires student login)
├── JOURNAL.md          ← Developer project journal (technical notes)
├── DEVELOPER_GUIDE.md  ← This file (learning document)
│
├── image/
│   ├── BMC_LOGO.svg              ← Logo used everywhere (nav, footer, login)
│   ├── shyam-bhatia.jpg          ← Mentor's photo (mentor section)
│   ├── shyam-bhatia1.jpg         ← Alternate mentor photo
│   ├── shyam-bhatia2.jpg         ← Alternate mentor photo
│   ├── guess_paper_banner.jpeg   ← NEET 2026 guess paper banner image
│   └── placeholder.png           ← Fallback image
│
├── assets/
│   ├── videos/
│   │   ├── video-1.mp4  ← Video gallery reel 1 (9:16 portrait)
│   │   ├── video-2.mp4  ← Video gallery reel 2
│   │   └── video-3.mp4  ← Video gallery reel 3
│   └── pdfs/
│       ├── DPP-Maths_Quadratic.docx
│       ├── DPP_EMI-Physics.docx
│       ├── DPP-Thermodynamics-Physics.docx
│       ├── DPP-DPP_hydrocarben_chemistry.docx
│       ├── Chemistry_DPP__Ionic_Equilirium.docx
│       ├── DPP_Advance_Problem_in_physics.docx
│       ├── jee_adv2023_1_English.pdf
│       ├── jee_adv_2023_2_English.pdf
│       ├── jee_adev_2023_1_Hindi.pdf
│       ├── jeea_dv_2023_2_Hindi.pdf
│       ├── jeeadv2024_1_Hindi.pdf
│       └── Guess_paper_NEET2026.pdf
│
└── new_section/
    ├── Guess paper neet2026.pdf  ← Alternate PDF location
    └── guess_paper.jpeg          ← Alternate image
```

### How the Pages Connect

```/dev/null/flowchart.txt#L1-18
[index.html] ──→ [login.html]      (via "Student Login" button in navbar)
           ──→ [doubt.html]        (via "Solve Your Doubt" navbar button + hero button)
           ──→ #video-gallery      (via "Videos" nav link — same page scroll)
           ──→ #admissions         (via "Enroll Now" button — same page scroll)

[login.html] ──→ [portal.html]     (after successful STUDENT login)
           ──→ [admin.html]        (after successful ADMIN login)

[portal.html] ──→ [live-class.html]   (via "Live Classes" nav item)
            ──→ [doubt.html]          (via "Submit Doubt" quick action)
            ──→ [index.html]          (via logo link)

[live-class.html] ──→ [portal.html]  (via back arrow)

[doubt.html] ──→ [index.html]       (via back arrow + success screen)

[admin.html] ← reads localStorage   (bmc_leads set by index.html challenger flow)
```

---

## 🐙 Chapter 5: GitHub & Version Control

### What is Git and GitHub?

- **Git** is a version control system — it tracks every change ever made to your files, like an unlimited "undo" history for your entire codebase.
- **GitHub** is a website that hosts your Git repository online so you and others can collaborate.

### 5.1 Understanding the Workflow

Every change you make goes through this cycle:

```/dev/null/git-flow.txt#L1-8
YOUR COMPUTER  →  git add  →  git commit  →  git push  →  GITHUB
(local changes)   (stage)     (save with    (upload)    (live on
                              a message)                GitHub Pages)
```

### 5.2 Setting Up Git (First Time Only)

```/dev/null/terminal.sh#L1-10
# 1. Install Git from https://git-scm.com/downloads

# 2. Set your identity (use your real name and email)
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# 3. Clone (download) the repository to your computer
git clone https://github.com/prabhakarmdes12-cmyk/Bhatia-Master-Classes.git

# 4. Move into the project folder
cd Bhatia-Master-Classes
```

### 5.3 Daily Workflow — Making and Publishing Changes

**Step 1: Always pull latest changes first**
```/dev/null/terminal.sh#L1-3
# Download any changes others have pushed
git pull origin main
```

**Step 2: Make your edits** (in any code editor — VS Code recommended)

**Step 3: Check what changed**
```/dev/null/terminal.sh#L1-4
# See which files you changed
git status

# See exactly what changed inside files
git diff
```

**Step 4: Stage your changes**
```/dev/null/terminal.sh#L1-4
# Stage all changed files
git add .

# Or stage specific files only
git add index.html
```

**Step 5: Commit with a descriptive message**
```/dev/null/terminal.sh#L1-7
# The message should describe WHAT you changed and WHY
git commit -m "feat: add new Chemistry DPP card for Organic Reactions"

# Message format guide:
# feat: new feature
# fix: bug fix
# update: content update
# style: visual/CSS change only
```

**Step 6: Push to GitHub (this makes it live!)**
```/dev/null/terminal.sh#L1-3
git push origin main
# GitHub Pages auto-deploys within 30–60 seconds after push
```

### 5.4 Good Commit Message Examples

| ✅ Good | ❌ Bad |
|--------|--------|
| `feat: add NEET Biology DPP download card` | `changes` |
| `fix: correct mentor photo file path` | `update stuff` |
| `update: change WhatsApp number to new one` | `fixed bug` |
| `style: increase hero heading font size on mobile` | `css` |
| `content: update BMC Challenger question for week 3` | `wk3` |

### 5.5 Alternative: Edit Directly on GitHub (No Git Required)

For small single-file edits:
1. Go to the repo: `github.com/prabhakarmdes12-cmyk/Bhatia-Master-Classes`
2. Click on the file you want to edit (e.g., `index.html`)
3. Click the **pencil icon ✏️** (top right of the file viewer)
4. Make your changes in the editor
5. Scroll down → write a description → click **"Commit changes"**
6. The site updates automatically in ~60 seconds

### 5.6 Viewing Deployment Status

After pushing, go to:
`github.com/prabhakarmdes12-cmyk/Bhatia-Master-Classes/actions`

You'll see a green ✅ checkmark when deployment is successful, or a red ❌ if something failed.

---

## 💻 Chapter 6: Local Development Setup

### Why Run Locally?

Before pushing changes to the live site, always test them locally first. This prevents breaking the live website for students.

### 6.1 Recommended Tools

| Tool | Purpose | Download |
|------|---------|---------|
| **VS Code** | Code editor | [code.visualstudio.com](https://code.visualstudio.com) |
| **Live Server** (VS Code extension) | Runs a local web server | Search "Live Server" in VS Code Extensions |
| **Git** | Version control | [git-scm.com](https://git-scm.com) |
| **Google Chrome** | Best browser for development | [google.com/chrome](https://google.com/chrome) |

### 6.2 Running the Site Locally

**Method 1: VS Code Live Server (Recommended)**
1. Open the project folder in VS Code (`File → Open Folder`)
2. Click **"Go Live"** button in the bottom-right status bar
3. Your browser opens at `http://127.0.0.1:5500/index.html`
4. Any file you save automatically refreshes the browser

**Method 2: Python Simple Server**
```/dev/null/terminal.sh#L1-4
# Navigate to the project folder
cd Bhatia-Master-Classes-main

# Start a local server (Python 3)
python -m http.server 8000
# Then open http://localhost:8000 in your browser
```

### 6.3 Browser Developer Tools (Your Best Friend)

Press **F12** in Chrome to open Developer Tools. These are essential for debugging.

| Tab | What You Use It For |
|-----|-------------------|
| **Elements** | Inspect HTML structure, see applied CSS, edit values live |
| **Console** | See JavaScript errors, run JS commands |
| **Network** | See if files are loading, check form submissions |
| **Sources** | See all loaded files, add breakpoints for debugging |
| **Responsive** | Toggle device simulation (mobile/tablet views) |

**Pro tip:** Right-click any element on the page → "Inspect" — it jumps directly to that element in the Elements tab.

---

## 🎨 Chapter 7: Design System Reference

The design system ensures everything looks consistent. **Never hardcode color values** — always use the CSS variables.

### 7.1 Color Palette

These variables are defined in the `:root {}` block at the top of every HTML file's `<style>` section.

| Variable | Color | Hex Value | When to Use |
|----------|-------|-----------|-------------|
| `--primary` | Navy Blue | `#1B3A6B` | Primary buttons, card borders, headings |
| `--primary-dark` | Dark Navy | `#0F2245` | Navbar background, dark sections, footer |
| `--accent` | Gold | `#F4A825` | CTAs (Call to Action buttons), highlights, active nav states |
| `--accent-light` | Light Gold | `#FCC84A` | Hover states of accent elements |
| `--teal` | Teal | `#00A8A8` | Secondary accent, Physics subject color |
| `--light-bg` | Soft White | `#F5F7FA` | Alternating section backgrounds |
| `--text` | Near Black | `#1A1A2E` | All body text |
| `--text-muted` | Grey | `#6B7280` | Captions, metadata, placeholder text |
| `--border` | Light Grey | `#E5E9F0` | Card borders, dividers |
| `--success` | Green | `#16A34A` | Success states, Biology subject color |
| `--danger` | Red | `#DC2626` | Error states, hard difficulty labels |

**How to use a variable in CSS:**
```/dev/null/example.css#L1-6
/* Instead of this: */
background: #1B3A6B;

/* Always write this: */
background: var(--primary);
```

### 7.2 Typography Scale

| Where Used | Font | Weight | CSS Size |
|-----------|------|--------|----------|
| Hero heading (h1) | Barlow Condensed | 800 | `clamp(2.8rem, 6vw, 5rem)` |
| Section titles (h2) | Barlow Condensed | 800 | `clamp(2rem, 4vw, 3.2rem)` |
| Card titles (h3/h4) | Barlow Condensed | 800 | `1.25rem – 1.6rem` |
| Body text | DM Sans | 400 | `1rem` (= 16px) |
| Captions / metadata | DM Sans | 500 | `0.82rem – 0.88rem` |
| Badges / labels | Barlow Condensed | 700–800 | `0.75rem – 0.95rem` |
| Navigation links | Barlow Condensed | 600 | `1.05rem` |

**What `clamp()` means:** `clamp(min, preferred, max)` — the font scales with the screen but never goes below `min` or above `max`. This is responsive typography.

### 7.3 Spacing & Shape Rules

| Property | Value | Used For |
|----------|-------|---------|
| `--radius` | `12px` | Small cards, inputs, badges |
| `--radius-lg` | `20px` | Main content cards, modals |
| `--shadow-sm` | `0 2px 8px rgba(27,58,107,0.08)` | Card at rest |
| `--shadow-md` | `0 8px 32px rgba(27,58,107,0.12)` | Card on hover, modals |
| `--shadow-lg` | `0 20px 60px rgba(27,58,107,0.18)` | Floating elements |
| `--transition` | `all 0.3s cubic-bezier(0.4, 0, 0.2, 1)` | All hover animations |
| `.section-pad` | `padding: 80px 0` | All top-level sections |

### 7.4 Subject Color Coding

Used consistently on DPP cards, PYQ cards, share cards, and subject tags:

| Subject | Badge Class | Background | Text Color |
|---------|-------------|-----------|-----------|
| Mathematics | `badge-math` | Blue tint | `--primary` |
| Physics | `badge-phys` | Teal tint | `--teal` |
| Chemistry | `badge-chem` | Gold tint | `#B7750A` |
| Biology | `badge-bio` | Green tint | `#166534` |

### 7.5 Section Structure Pattern

Every major section on the main page follows this exact pattern:

```/dev/null/section-pattern.html#L1-12
<section id="section-id" class="section-pad">
  <div class="container">
    <!-- 1. Section header -->
    <div class="section-header text-center mb-5">
      <span class="section-label">SHORT LABEL</span>     <!-- e.g., "DAILY PRACTICE" -->
      <h2 class="section-title">Main Heading <span>Highlight Word</span></h2>
      <div class="section-divider"></div>
      <p class="section-sub">Supporting description text goes here.</p>
    </div>
    <!-- 2. Content (cards, grid, form, etc.) -->
  </div>
</section>
```

### 7.6 Alternating Section Backgrounds

Dark and light sections alternate to create visual rhythm:
- **Dark (navy):** Navbar, Hero, Mentor, BMC Challenger, Admissions, Footer
- **Light (off-white):** DPP, Test Series, PYQ, Contact
- This alternation is set using `background: var(--primary-dark)` or `background: var(--light-bg)`

---

## 📄 Chapter 8: Page-by-Page Breakdown

### 8.1 `index.html` — The Main Marketing Website

This is the most complex file (~3,235 lines). It contains **all CSS, all HTML, and all JS** for the main site. Here is every section explained:

---

#### Section 1: `<head>` — Page Setup (Lines 1–1226)

The `<head>` section contains everything that doesn't appear on the page directly:

| What's Inside | Purpose |
|--------------|---------|
| `<title>` tag | The text that appears in the browser tab |
| SEO `<meta>` tags | Help Google find and rank the page |
| Open Graph tags | Control how the page looks when shared on Facebook/WhatsApp |
| `<link>` to Bootstrap CSS | Loads Bootstrap styles from CDN |
| `<link>` to Google Fonts | Loads Barlow Condensed and DM Sans |
| `<link>` to Bootstrap Icons | Loads icon library |
| `<style>` block | **All custom CSS for the entire page** (1,000+ lines) |

**The CSS Variables Block** (Lines 57–76) — This is the most important part. It defines all design tokens:
```Bhatia-Master-Classes-main/index.html#L57-76
:root {
  --primary: #1B3A6B;
  --primary-dark: #0F2245;
  --accent: #F4A825;
  ...
}
```

---

#### Section 2: Navbar (Lines 1230–1261)

The sticky navigation bar at the top of the page.

**How it works:**
- Uses Bootstrap's `navbar` component for responsive collapse
- On desktop: shows all links in a row
- On mobile (< 991px): collapses to a hamburger menu `☰` button
- JavaScript (Intersection Observer) adds/removes `.active` class to the correct link as you scroll

**Key HTML elements:**

| Element | What It Is |
|---------|-----------|
| `id="mainNav"` | The navbar container — CSS styles it dark navy |
| `.navbar-brand` | The BMC logo link (top-left) |
| `.navbar-toggler` | The hamburger button (mobile) |
| `#navMenu` | The collapsible menu |
| `.nav-link` | Each navigation link |
| `.btn-nav-solve` | The gold "Solve Your Doubt" button |

**To add a new nav link:**
```/dev/null/nav-example.html#L1-3
<!-- Add inside the <ul> in the navbar, before the Login li -->
<li class="nav-item">
  <a class="nav-link" href="#new-section">New Section</a>
</li>
```

---

#### Section 3: Hero Section (Lines 1264–1333)

The large first section visitors see. Contains:
- **Left column:** Badge, headline, description, CTA buttons, stats pills
- **Right column:** "Crack These" — 4 interactive sample questions

**Hero Stats Pills** — The 4 numbers (3 Batches, 90% Success Rate, etc.):
```Bhatia-Master-Classes-main/index.html#L1283-1288
<div class="hero-stats reveal">
  <div class="stat-pill"><span class="num">3</span><span class="lbl">Batches</span></div>
  <div class="stat-pill"><span class="num">90%</span><span class="lbl">Success Rate</span></div>
  ...
</div>
```
**To update stats:** Change the text inside `<span class="num">` and `<span class="lbl">`.

**"Crack These" Questions Panel:**
- 4 question cards, each with a subject label, question text, and "View Solution" button
- Clicking "View Solution" triggers `openSolutionModal(index)` — which opens a modal with the full solution
- Each question also has a share button that opens the share sheet

---

#### Section 4: Mentor Section (Lines 1336–1399)

Showcases the lead teacher, Shyam Bhatia.

**Left column:** Photo with glow effect and "12+ Years" experience badge
**Right column:** Name, designation, bio text, achievement stats

**To update mentor stats:**
```Bhatia-Master-Classes-main/index.html#L1373-1390
<div class="mentor-stats">
  <div class="mentor-stat"><span class="m-num">500+</span><span class="m-lbl">Students Taught</span></div>
  ...
</div>
```

---

#### Section 5: BMC Challenger (Lines 1401–1485)

The most technically complex section. A weekly JEE challenge question with:
- A countdown timer (counts down to next Monday)
- Difficulty badge, subject tag, meta strip
- "Solve & Reveal" button — triggers OTP verification flow
- OTP verification: 6-box input, 30-second resend timer
- On correct OTP → lead is saved to localStorage → solution revealed

**The Lead Capture Flow:**
```/dev/null/otp-flow.txt#L1-8
User clicks "Solve & Reveal"
  → Modal opens with Name/Phone/Class form
  → User submits → OTP is generated (simulated) + displayed in dev banner
  → OTP step shown: 6 input boxes
  → User enters OTP → if correct → lead saved to localStorage + solution shown
  → Admin can view leads in admin.html → "Question Leads" tab
```

**To update the weekly question:**
1. Change the question text in `.challenger-question-text`
2. Change the solution in `#challengerSolutionContent`
3. Update the `CHALLENGER_SHARE` object in the JS (the `text` field)
4. Update dates in `.challenger-meta-strip`

---

#### Section 6: Daily Practice Papers / DPP (Lines 1487–1613)

6 download cards, one per subject. Each card has:
- A thumbnail area with day number + subject icon
- Subject badge (color-coded)
- Title, description
- Download button linked to a file in `assets/pdfs/`

**To add a new DPP card:** Copy an existing card div and update:
- `data-subject` attribute
- Subject badge class (`badge-math`, `badge-phys`, etc.)
- `card-title` text
- `<p>` description text
- `href` on the download button (path to the PDF)

---

#### Section 7: Test Series (Lines 1616–1717)

6 test cards for different test types (JEE Main, JEE Advanced, NEET, etc.)

Each test card has:
- A test icon (color-coded by subject)
- Test name (h4)
- Meta info (number of tests, questions, marks)
- "Enroll" button

Currently all "Enroll" buttons redirect to the WhatsApp number.

---

#### Section 8: PYQ — Previous Year Questions (Lines 1720–1865)

6 PYQ download cards for different exam years/papers. Each has:
- Year badge (e.g., "2023")
- Paper title and description
- Stats row (questions count, marks, time)
- Download button linked to a PDF in `assets/pdfs/`

---

#### Section 9: NEET 2026 Guess Paper (Lines 1868–1972)

Added in April 2026. A promotional section with:
- Left: Stats overlay (97 Chapters, 5000+ Downloads, 4.9/5 Rating), "Share" button
- Right: Lead capture form (Name, Phone, WhatsApp number, State)

**How the form works:** When submitted, it validates the fields, then opens WhatsApp with a pre-filled message and auto-downloads the PDF.

---

#### Section 10: Video Gallery (Lines 2072–2185)

3 video cards with:
- Self-hosted MP4 video (plays on hover on desktop, thumbnail otherwise)
- Subject tag
- Title and caption
- "Fullscreen" button → opens video lightbox modal

**Video specs required:**
- Format: MP4 (H.264)
- Aspect ratio: 9:16 (portrait, like Instagram Reels)
- Resolution: 1080×1920
- Max size: 15MB per video

**To add/update videos:** Place MP4 files in `assets/videos/` and update the `src` attribute and `data-title`/`data-caption` attributes in the video card HTML.

---

#### Section 11: Admissions Form (Lines 1975–2057)

A lead generation form with:
- Name, Email, Phone, Course dropdown, Class dropdown, Message fields
- Validation (all fields required)
- On submit: data sent to Formspree (currently placeholder), WhatsApp message sent

---

#### Section 12: Contact Section (Lines 2203–2245)

4 contact info cards: Address, Phone, Email, Social Links.

---

#### Section 13: Footer (Lines 2248–2303)

- Left column: Logo, tagline, social media links
- Middle columns: Quick links (page sections) and Resources (pages)
- Right column: Contact info
- Bottom bar: Copyright, Privacy Policy, Terms links

---

#### Section 14: Modals (Lines 2311–2427)

**Two modals:**
1. **Solution Modal** (`div#solutionModal`) — Shows the solution to a "Crack These" question
2. **Doubt Modal** (`div#doubtModal`) — A shortcut form to submit a doubt

**How modals work:**
```/dev/null/modal-theory.txt#L1-6
A modal is a popup overlay.
- It's always in the HTML but hidden (display: none or opacity: 0)
- A CSS class ".show" makes it visible
- openModal() → adds ".show" class → modal appears
- closeModal() → removes ".show" class → modal disappears
```

---

#### Section 15: Share Sheet (Lines 2794–2826)

A bottom sheet overlay that lets users share questions. Options: WhatsApp, Facebook, Instagram, Copy Link, Save Image.

**How share cards are generated:**
1. `openShareSheet(index, type)` is called with the question index and type ('crack' or 'challenger')
2. `drawShareCard(data)` draws a branded image onto a `<canvas>` element
3. The canvas is converted to an image blob
4. `doShare()` uses the Web Share API (on mobile) or triggers download (on desktop)

---

### 8.2 `login.html` — The Login Page

A beautifully animated login page with two tabs: Student and Admin.

**The Math Symbol Background Animation:**
- A `<canvas>` element covers the entire background
- JavaScript builds a grid of math symbols (∑, ∫, √, π, Δ, etc.)
- On each animation frame, symbols subtly shift opacity
- When you move the mouse, symbols near the cursor glow and scale up
- Built using `requestAnimationFrame()` — the browser's animation loop

**The Two Login Tabs:**

| Tab | Fields | Credentials (Phase 1 hardcoded) |
|-----|--------|----------------------------------|
| Student | Student ID + Password | ID: `BMC-2026-001`, Password: `bmc2026` |
| Admin | Email + Password | Email: `admin@bhatiamc.in`, Password: `admin2026` |

**On successful login:**
- Student → redirects to `portal.html`
- Admin → redirects to `admin.html`

**Security note:** These credentials are visible in the HTML source code. This is fine for Phase 1 (demo/MVP) but **must** be replaced with real authentication in Phase 2.

**Quick Login Badges:** Three demo badges at the bottom for fast login — useful for testing.

---

### 8.3 `portal.html` — The Student Portal

A sidebar layout with 8 sections. Only accessible after successful student login (the page checks `sessionStorage` for `bmc_auth`).

**Layout:** Fixed sidebar on the left + scrollable main content on the right.

**The 8 Sections:**

| Section | What's Inside |
|---------|--------------|
| **Dashboard** | Stats (DPPs remaining, tests given, attendance), quick actions, recent notices, upcoming schedule |
| **Profile** | Student name, ID, batch badge, personal details |
| **DPP** | 6 DPP download cards (same content as main site) |
| **Tests** | Test history (score, percentage, date) |
| **PYQ** | 5 PYQ download packs |
| **Performance** | Score bars by subject, recent scores table |
| **Timetable** | Weekly class schedule table |
| **Notices** | Announcements from the admin |

**How section switching works:**
```/dev/null/portal-js.txt#L1-7
JavaScript maintains which section is "active".
Each sidebar nav item calls: showPage('dashboard')
showPage() hides all sections, then shows only the requested one.
The topbar title and subtitle update to match.
On mobile, the sidebar overlays and can be closed with a button.
```

**Auth Guard:** At the bottom of the script:
```/dev/null/auth-guard.js#L1-5
// If not logged in, redirect to login page
if (!sessionStorage.getItem('bmc_auth')) {
  window.location.href = 'login.html';
}
```

---

### 8.4 `admin.html` — The Admin Dashboard

Similar sidebar layout to `portal.html` but with 9 admin-specific sections.

**The 9 Sections:**

| Section | What's Inside |
|---------|--------------|
| **Dashboard** | Stats overview (leads, students, revenue), recent activity feed, batch performance table |
| **Students** | Student roster table with search, status badges, approve/deactivate actions |
| **Admissions** | Admission enquiries table + a "New Admission" registration form |
| **Upload** | File uploader for DPPs and PYQs, uploaded files table |
| **Tests** | Test management — create tests with subject, date, batch, type |
| **Notices** | Post new notices with title, body, priority tags + published notices list |
| **Performance** | Subject-wise and batch-wise performance analytics |
| **Fees** | Fee records table with status indicators |
| **Question Leads** | Leads captured by BMC Challenger OTP flow — export CSV, WhatsApp follow-up |

**The Question Leads Tab** is the most important for the admin. It reads from `localStorage`:
```/dev/null/leads-read.js#L1-5
const leads = JSON.parse(localStorage.getItem('bmc_leads') || '[]');
// leads is an array of objects:
// [{ name, phone, class, source, timestamp }, ...]
```

**Export CSV:** Converts the leads array to a downloadable `.csv` file — clicking the button triggers a file download.

---

### 8.5 `doubt.html` — Doubt Submission

A 3-step wizard that guides students through submitting a doubt to the teacher.

**Step 1 — Details:**
- Student name, subject dropdown, topic, difficulty, message
- Validation on all required fields

**Step 2 — Attach (Three methods to attach evidence):**
- **Camera:** Uses `getUserMedia()` browser API to access the device camera, capture a photo
- **Upload:** Standard file input (`<input type="file">`)
- **Draw:** A canvas-based drawing tool where students can write/draw their doubt

**The Drawing Tool features:**
- Choose pen thickness (3 sizes)
- Choose color
- Undo last stroke
- Clear all

**Step 3 — Preview & Send:**
- Shows preview of attached image
- Rotate and crop controls
- WhatsApp button (primary send method)
- Formspree submit button (secondary — currently placeholder)

---

### 8.6 `live-class.html` — Live Class Page

**Login Gate:** Before the page loads, a fullscreen login gate appears. Students must enter their Student ID and Password (hardcoded same as `login.html`).

**CONFIG block** (set at the top of the script before each class):
```/dev/null/live-config.js#L1-10
const CONFIG = {
  isLive: false,              // Set to true before class starts, false after
  videoId: 'dQw4w9WgXcQ',    // YouTube Live video ID (get from YouTube Studio)
  classTitle: 'Physics — Electrostatics',
  startTime: '2026-04-20T10:00:00+05:30',  // IST time
  teacherId: 'ADMIN',
  teacherPassword: 'admin2026'  // Teacher admin bar password
};
```

**When `isLive: false`:** Shows a countdown timer until the next class.
**When `isLive: true`:** Shows the YouTube live embed + "LIVE NOW" badge.

**Teacher Admin Bar:** A hidden bar only visible after teacher enters admin password. Allows toggling the LIVE status without editing code (short-term fix).

**Jitsi Doubt Session:** Beside the main video, students can join a Jitsi video call for live doubt sessions. Room name: `BMC-Doubt-YYYY-MM-DD` (auto-generated from today's date).

---

## ⚡ Chapter 9: JavaScript Features Explained

### 9.1 The Scroll Reveal Animation

**Theory:** Uses the `IntersectionObserver` API — a modern browser feature that efficiently watches for elements entering/exiting the viewport (visible area of the screen).

**How it works:**
1. Every element with class `.reveal` starts invisible (`opacity: 0`)
2. An `IntersectionObserver` watches all `.reveal` elements
3. When an element scrolls into view, the observer fires
4. JavaScript adds class `.visible` to that element
5. CSS transition animates it to `opacity: 1` + slides it up

```/dev/null/reveal-theory.txt#L1-6
User scrolls down
  → Element enters viewport
  → IntersectionObserver callback fires
  → element.classList.add('visible')
  → CSS: .reveal.visible { opacity: 1; transform: translateY(0); }
  → Element smoothly fades + slides in
```

### 9.2 The Active Nav Link Highlighting

As you scroll, the navbar link for the current section turns gold. This works via:
1. An `IntersectionObserver` watching each `<section>` element
2. When 30% of a section is visible, it's considered "active"
3. The matching `<a>` in the navbar gets the `.active` class
4. CSS: `.nav-link.active::after { width: 100%; }` — an underline slides in

### 9.3 The OTP Verification Flow (BMC Challenger)

**Theory:** OTP = One-Time Password. A temporary code sent to verify a phone number.

**Current implementation (simulated):**
1. User fills Name/Phone/Class form → submits
2. A random 6-digit OTP is generated: `Math.floor(100000 + Math.random() * 900000)`
3. OTP is shown in a "dev hint" banner (visible during development)
4. In production (Phase 2): this would be sent via SMS
5. 6 individual input boxes — each auto-advances to the next on key press
6. 30-second countdown for "Resend" button
7. On correct OTP: lead saved to `localStorage`, solution revealed

**The 6-box OTP input UX:**
- Typing a digit moves focus to the next box automatically
- Backspace on an empty box moves focus back
- Paste support — pasting `123456` fills all boxes at once

### 9.4 The Canvas Share Card Generator

**Theory:** The Canvas API lets JavaScript "paint" an image pixel by pixel. This is used to create a branded image card for social sharing.

**What it draws:**
1. Navy gradient background
2. Gold accent bar at the top
3. BMC logo text and "BHATIA MASTER CLASSES" label
4. "CAN YOU SOLVE THIS?" header
5. Subject pill (color-coded: blue/teal/gold/green)
6. Question text (auto-wraps to multiple lines)
7. Footer with website URL and week info

**The rendering process:**
```/dev/null/canvas-flow.txt#L1-8
openShareSheet(index, type)
  → drawShareCard(data) draws onto hidden <canvas>
  → canvas.toBlob() converts canvas to image file
  → Web Share API (mobile) → share as file to WhatsApp/Instagram
  → OR trigger file download (desktop) → user saves image, shares manually
```

### 9.5 The Login Background Animation

**Theory:** `requestAnimationFrame()` is a browser method that runs a function before every screen repaint (~60 times per second on most screens). This creates smooth animations.

**How the math symbol grid works:**
1. `buildGrid()` — calculates a grid of positions and assigns random math symbols
2. `resize()` — recalculates on window resize
3. `draw()` loop runs 60 times/second:
   - Clears the canvas
   - Calculates mouse distance for each symbol
   - Symbols near mouse: increase opacity + scale up + shift color toward gold
   - Symbols far from mouse: return to dim base state
   - Each symbol has a slow random "morph" animation (slowly changes symbol)

### 9.6 Form Validation

**Theory:** Client-side validation checks form inputs in the browser before sending data. This provides instant feedback to the user without waiting for a server.

**Pattern used across all forms:**
1. Each field has a matching error `<div>` with class `invalid-feedback-custom` or `error-msg`
2. `validateField(fieldId)` — checks if the field is empty/invalid, shows/hides error message
3. `validateForm()` — runs `validateField()` on every required field, returns `true` only if all valid
4. On form submit: `validateForm()` is called → if returns `false`, submission is blocked

### 9.7 localStorage vs sessionStorage

| Feature | `localStorage` | `sessionStorage` |
|---------|---------------|-----------------|
| **Persists when tab closes?** | ✅ Yes | ❌ No (clears on tab close) |
| **Persists when browser closes?** | ✅ Yes | ❌ No |
| **Shared between tabs?** | ✅ Yes | ❌ No |
| **Used in this project for** | BMC Challenger leads (`bmc_leads`) | Live class session (`bmc_live_session`) |

**How to read/write:**
```/dev/null/storage-example.js#L1-10
// Write to localStorage
localStorage.setItem('bmc_leads', JSON.stringify(leadsArray));

// Read from localStorage
const leads = JSON.parse(localStorage.getItem('bmc_leads') || '[]');

// Clear localStorage (careful — this deletes everything!)
localStorage.removeItem('bmc_leads');
```

---

## ✏️ Chapter 10: How to Update Content

### 10.1 Changing Hero Section Stats

**File:** `index.html`
**Look for:** The `hero-stats` div around line 1283

Change the numbers/labels inside `<span class="num">` and `<span class="lbl">`:
```Bhatia-Master-Classes-main/index.html#L1283-1288
<div class="hero-stats reveal">
  <div class="stat-pill"><span class="num">3</span><span class="lbl">Batches</span></div>
  <div class="stat-pill"><span class="num">90%</span><span class="lbl">Success Rate</span></div>
  <div class="stat-pill"><span class="num">15+</span><span class="lbl">EX-Brand Faculty</span></div>
  <div class="stat-pill"><span class="num">10yr+</span><span class="lbl">Experience</span></div>
</div>
```

### 10.2 Updating the BMC Challenger Question (Weekly Task)

Do all 5 steps to avoid any inconsistency:

1. **Update question text** — find `.challenger-question-text` in the BMC Challenger section, change the question
2. **Update solution** — find `#challengerSolutionContent`, change the solution text
3. **Update JS share data** — find `const CHALLENGER_SHARE = [...]` in the script, update the `text` field
4. **Update `shareChallenger()` text** — find this function in the script, update the share message text
5. **Update week dates** — find `.challenger-meta-strip` in the HTML, update the "Week of" date

### 10.3 Adding a New DPP Download

1. Place the new PDF file in `assets/pdfs/`
2. Copy any existing DPP card `<div>` (they're in the DPP section)
3. Update: subject badge class, card title, description, and the `href` in the download button

### 10.4 Updating Contact Information

**File:** `index.html` — Contact section near line 2203

Look for the contact info elements:
- Address: update the `<p>` inside the address card
- Phone: update the phone link (`tel:`) and display text
- Email: update the `mailto:` link and display text

**Also update in:**
- `footer` section (has duplicate contact links)
- `doubt.html` (WhatsApp button)
- `admin.html` (WhatsApp follow-up URLs)

**WhatsApp number** is `919516210209` (without the `+` sign, country code `91` + number). Search for this across all files when changing.

### 10.5 Updating Mentor Information

**File:** `index.html` — Mentor section around line 1336

| What to Change | Where to Find It |
|---------------|-----------------|
| Mentor name | `<h2 class="mentor-name">` |
| Designation | `<p class="mentor-designation">` |
| Bio paragraph | `<p class="mentor-bio">` |
| Achievement stats | Inside `.mentor-stats` div |
| Photo | Change `src` in `<img>` tag in `.mentor-photo-wrap` |

### 10.6 Updating SEO Meta Tags

**File:** `index.html` — Lines 4–46

When the institute name, location, or focus changes, update:
- `<title>` tag (browser tab title)
- `<meta name="description">` (Google search description)
- `<meta name="keywords">` (search keywords)
- `<meta property="og:title">` (WhatsApp/Facebook share title)
- `<meta property="og:description">` (WhatsApp/Facebook share description)

### 10.7 Adding a New Notice in the Student Portal

**File:** `portal.html` — Notices section

Add a new `<div class="notice-item">` inside the notices list:
```/dev/null/notice-example.html#L1-8
<div class="notice-item">
  <div class="notice-dot dot-accent"></div>  <!-- Color: dot-accent=gold, dot-teal=teal, dot-success=green, dot-danger=red -->
  <div class="notice-content">
    <h4>Notice Title Here</h4>
    <p>Notice description and details here.</p>
  </div>
  <span class="notice-date">Jan 15</span>
</div>
```

### 10.8 Weekly Checklist for the BMC Challenger

Every Monday, follow this checklist:

- [ ] Update question text in `.challenger-question-text` (HTML)
- [ ] Update solution in `#challengerSolutionContent` (HTML)
- [ ] Update `CHALLENGER_SHARE` text in JavaScript
- [ ] Update `shareChallenger()` message text in JavaScript
- [ ] Update week dates in `.challenger-meta-strip` (HTML)
- [ ] Test the OTP flow locally before pushing
- [ ] Push to GitHub and verify on live site
- [ ] Export any previous week's leads from admin dashboard before they reset

---

## 🚀 Chapter 11: Deployment Guide

### 11.1 How GitHub Pages Hosting Works

**GitHub Pages** is a free static website hosting service built into GitHub. It works like this:

```/dev/null/deployment-flow.txt#L1-6
You push code to GitHub (main branch)
  → GitHub detects the push
  → GitHub Pages builds (just copies files — no compilation needed)
  → Site is live at: prabhakarmdes12-cmyk.github.io/Bhatia-Master-Classes/
  → Takes 30–60 seconds
```

It's "static" hosting — it serves exactly the files you upload. There's no server running code. This is why this project has no backend yet.

### 11.2 Deploying a Change

**For quick single-file changes (no Git needed):**
1. Go to the file on GitHub
2. Click the ✏️ pencil icon
3. Make changes → Commit changes → Wait 60 seconds → Live

**For multiple file changes (use Git):**
```/dev/null/deploy.sh#L1-6
git add .
git commit -m "feat: describe what changed"
git push origin main
# Wait 30–60 seconds for GitHub Pages to update
```

### 11.3 Uploading Video Files

> ⚠️ **Important:** Video files are large. GitHub has a 100MB per-file limit.

**Best approach for videos:**
1. Compress the video first using **HandBrake** (free tool) — use CRF 28 quality, MP4/H.264 format
2. Keep each file under 15MB
3. Upload via GitHub web UI: Go to the repo → `assets/videos/` folder → "Add file" → "Upload files"
4. Drag and drop your compressed video files
5. Commit the upload

**Alternatively**, upload to the GoDaddy hosting `public_html/assets/videos/` via cPanel File Manager.

### 11.4 Setting Up a Custom Domain (When Ready)

When the client wants to use `bhatiamc.in` or similar:

```/dev/null/domain-setup.txt#L1-12
Step 1: In GoDaddy DNS Manager, add these records:
  Type: CNAME  |  Host: www   |  Points to: prabhakarmdes12-cmyk.github.io
  Type: A      |  Host: @     |  IP: 185.199.108.153
  Type: A      |  Host: @     |  IP: 185.199.109.153
  Type: A      |  Host: @     |  IP: 185.199.110.153
  Type: A      |  Host: @     |  IP: 185.199.111.153

Step 2: In GitHub repo Settings → Pages → Custom domain → type: bhatiamc.in → Save

Step 3: Check "Enforce HTTPS" (free SSL certificate — auto-provisioned)

Step 4: Wait 24–48 hours for DNS to propagate worldwide
```

### 11.5 Adding Google Analytics

Google Analytics tracks visitors — how many people visit, which pages they view, where they're from.

```/dev/null/ga4-setup.html#L1-8
<!-- Add this to the <head> of index.html, after getting a GA4 Measurement ID -->
<!-- Replace G-XXXXXXXXXX with the real ID from Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**How to get a GA4 ID:**
1. Go to [analytics.google.com](https://analytics.google.com)
2. Create a new property → "Web" → enter the website URL
3. Copy the Measurement ID (looks like `G-XXXXXXXXXX`)

---

## 🐛 Chapter 12: Known Issues & Fixes

### Issue 1 — Formspree IDs Are Placeholders [HIGH PRIORITY]

**Problem:** The admissions form and doubt form don't actually email data anywhere. They show success UI but the data is lost.

**Where:** `index.html` (admissions form) and `doubt.html` (doubt form).

**Fix:**
1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form → copy the Form ID (looks like `xknkjnqe`)
3. In `index.html`, find `YOUR_FORM_ID` and replace it with the real ID
4. In `doubt.html`, find `YOUR_DOUBT_FORM_ID` and replace it
5. Test by submitting the form — you should receive an email

### Issue 2 — OTP Is Simulated [HIGH PRIORITY]

**Problem:** The OTP is generated in the browser — any tech-savvy student can see it in the page source or the yellow dev banner.

**Current state:** The OTP is shown in a yellow `.otp-dev-hint` banner on the page.

**Short-term fix (hide the banner from students):**
Find the `.otp-dev-hint` div and add `style="display:none"` to it.

**Long-term fix (Phase 2):** Integrate Fast2SMS or MSG91 API to send a real SMS. The frontend OTP flow is already fully built — only the SMS delivery needs to be added.

### Issue 3 — Video Files Missing [HIGH PRIORITY]

**Problem:** `assets/videos/video-1.mp4`, `video-2.mp4`, `video-3.mp4` are referenced in the HTML but the files don't exist yet. The video gallery shows broken/black cards.

**Fix:** Client to provide video files → compress to spec (MP4, 9:16, under 15MB) → upload to repo.

### Issue 4 — Login Credentials Are Hardcoded [MEDIUM]

**Problem:** Anyone who views the page source can find the student ID, password, admin email, and admin password.

**Current values:**
- Student: `BMC-2026-001` / `bmc2026`
- Admin: `admin@bhatiamc.in` / `admin2026`

**Fix (Phase 2):** Replace with real API authentication. Acceptable for MVP/demo phase.

### Issue 5 — Leads Are Lost If Browser Data Is Cleared [LOW]

**Problem:** All BMC Challenger leads are stored in `localStorage` on the admin's device. If the admin clears browser data, leads are permanently lost.

**Immediate mitigation:** Regularly export CSV from the admin dashboard's "Question Leads" tab.

**Long-term fix (Phase 2):** Move leads storage to a real database.

---

## 🗺️ Chapter 13: Future Roadmap

The project is planned across 3 phases. Phase 1 is complete. Here's what's coming:

### 🟡 Phase 1.5 — Polish (No backend needed)

These can all be done by a frontend developer:

| Task | Priority | What to Do |
|------|---------|-----------|
| Set up Formspree form IDs | 🔴 Critical | See Issue 1 fix above |
| Upload video files | 🔴 Critical | Client provides videos → compress → upload |
| Add Google Analytics | 🟠 High | See Chapter 11.5 |
| Hide OTP dev banner | 🟠 High | Add `display:none` to `.otp-dev-hint` |
| Add more DPP files (Biology) | 🟡 Medium | Client provides PDFs → upload → add card |
| Add JEE Mains PYQ packs | 🟡 Medium | Client provides PDFs → upload → add card |
| Add NEET PYQ packs | 🟡 Medium | Client provides PDFs → upload → add card |
| Custom domain setup | 🟡 Medium | See Chapter 11.4 |

### 🔵 Phase 2 — Backend Integration

This phase requires a backend developer and infrastructure setup:

| Feature | Technology Options | Estimated Cost |
|---------|-------------------|----------------|
| **Real SMS OTP** | Fast2SMS or MSG91 | ~₹0.15/SMS |
| **Real user authentication** | Node.js + JWT or Firebase Auth | Depends on hosting |
| **Form submissions to database** | Custom API endpoint | Server cost |
| **Leads database** | PostgreSQL or Firestore | ₹0–500/month |
| **Jitsi self-hosted** | DigitalOcean Droplet | ~₹800/month |
| **Dynamic live class flag** | Simple REST API endpoint | Included in server |
| **Attendance tracking** | Database with timestamps | Included |
| **Class recording archive** | YouTube unlisted links per session | Free |

**Where to make changes for Phase 2:**

| What to Replace | File | Currently |
|----------------|------|-----------|
| Admissions form ID | `index.html` | `YOUR_FORM_ID` |
| Doubt form ID | `doubt.html` | `YOUR_DOUBT_FORM_ID` |
| Student credentials | `login.html` | Hardcoded in `CREDENTIALS` const |
| Admin credentials | `login.html` | Hardcoded in `CREDENTIALS` const |
| `isLive` flag | `live-class.html` | Hardcoded `CONFIG.isLive = false` |
| Leads storage | `index.html` + `admin.html` | `localStorage` |
| OTP generation | `index.html` | Client-side random number |

### 🟣 Phase 3 — Platform Expansion

Long-term vision for a full EdTech platform:

| Feature | Description |
|---------|-------------|
| **Student progress tracking** | Real performance data, not placeholder numbers |
| **Online test engine** | MCQ + integer type questions, auto-grading, timer |
| **Fee payment (Razorpay)** | Students can pay fees online |
| **Parent portal** | Read-only view for parents to check attendance, fees, performance |
| **Mobile app (PWA)** | Progressive Web App — works like a native app, no App Store needed |
| **Push notifications** | Class reminders sent to students' devices |
| **AI doubt resolution** | GPT-powered first-level doubt answering |

---

## 📚 Chapter 14: Glossary

A plain-English explanation of every technical term you'll encounter:

| Term | Plain-English Explanation |
|------|--------------------------|
| **API** | A way for two programs to talk to each other. Like a waiter who takes your order (request) and brings back food (response). |
| **Bootstrap** | A collection of pre-made CSS styles. Like a clothing kit — you pick pieces and combine them. |
| **Canvas API** | A browser tool for drawing graphics with code. Like a digital painting canvas. |
| **CDN** | Content Delivery Network — servers spread worldwide that serve files faster than a single server. |
| **Commit** | Saving a set of changes in Git with a message explaining what changed. |
| **CSS Variable** | A named value in CSS (like `--primary: #1B3A6B`) that you can reuse everywhere. Change it once, updates everywhere. |
| **DOM** | Document Object Model — the browser's internal representation of your HTML as a "tree" of objects that JavaScript can manipulate. |
| **Flexbox** | A CSS layout system for arranging items in a row or column with flexible sizing. |
| **Formspree** | A service that receives your HTML form data and emails it to you. No server needed. |
| **Git** | A system that tracks every change made to files over time. Like a time machine for code. |
| **GitHub** | A website that hosts Git repositories online. Like Google Drive but for code. |
| **GitHub Pages** | GitHub's free website hosting service — serves static HTML/CSS/JS files. |
| **Hardcoded** | A value written directly in the code rather than stored separately. E.g., `password: 'admin2026'`. |
| **ID (HTML)** | A unique identifier for one specific HTML element. Like a name tag. Only one element can have a given ID. |
| **IntersectionObserver** | A browser API that watches for elements entering/leaving the visible screen area. |
| **Jitsi** | Free, open-source video conferencing software. Like a free self-hostable Zoom. |
| **localStorage** | Browser storage that persists even after closing the tab/browser. |
| **Modal** | A popup overlay that appears on top of the page. Needs to be closed to interact with the page behind it. |
| **OTP** | One-Time Password — a temporary code used to verify a phone number or email. |
| **PWA** | Progressive Web App — a website that behaves like a native mobile app. |
| **Razorpay** | An Indian payment gateway for accepting online payments. |
| **Responsive** | A website that works well on all screen sizes — phones, tablets, desktops. |
| **SEO** | Search Engine Optimization — techniques to make Google rank your page higher. |
| **sessionStorage** | Browser storage that clears when the tab is closed. |
| **Static Site** | A website made of just HTML/CSS/JS files — no server-side code running. |
| **Vanilla JS** | Plain JavaScript with no frameworks. "Vanilla" = plain/original. |
| **Viewport** | The visible area of the browser window. On mobile it's small; on desktop it's large. |
| **wa.me** | WhatsApp's URL shortener for opening WhatsApp with a specific number and message. |
| **Web Share API** | A browser API (on mobile) that opens the native share sheet — same as when you share a photo from your phone's gallery. |

---

## ✅ Quick Reference Card

### Files to Edit for Common Tasks

| Task | File | Search For |
|------|------|-----------|
| Change hero stats | `index.html` | `hero-stats` |
| Update mentor info | `index.html` | `mentor-bio`, `mentor-name` |
| Update weekly challenge | `index.html` | `challenger-question-text` |
| Add DPP file | `index.html` + upload to `assets/pdfs/` | DPP section |
| Add PYQ file | `index.html` + upload to `assets/pdfs/` | PYQ section |
| Change phone number | All `.html` files | `919516210209` |
| Add student notice | `portal.html` | `notice-list` |
| View leads | `admin.html` (open in browser) | Question Leads tab |
| Change login credentials | `login.html` | `CREDENTIALS` |
| Set live class active | `live-class.html` | `CONFIG.isLive` |
| Change YouTube video ID | `live-class.html` | `CONFIG.videoId` |

### Emergency Quick Fixes

| Problem | Quick Fix |
|---------|-----------|
| Site looks broken after edit | Check browser console (F12) for errors, revert last change |
| Form not sending emails | Replace `YOUR_FORM_ID` with real Formspree ID |
| Live class not showing | Set `CONFIG.isLive = true` in `live-class.html` |
| Video gallery shows black | Upload video files to `assets/videos/` |
| Leads lost | Export CSV immediately from admin.html → Question Leads tab |

---

*This guide was created to help you understand and work on the BMC codebase independently. Read each chapter in order the first time. After that, use the Table of Contents to jump directly to what you need.*

*When in doubt, read the existing code carefully — it's well-structured and consistent. Follow the same patterns already in place.*

*Happy coding! 🚀*

---

**Last updated:** April 2026 | **Project version:** Phase 1 Complete, Phase 1.5 in progress
