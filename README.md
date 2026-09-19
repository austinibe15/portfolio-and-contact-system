# Ezenwa Augustine Ibe — Full-Stack Software Engineer Portfolio

> A production-oriented personal portfolio showcasing full-stack software engineering, AI-enabled systems, mobile applications, backend architecture, research prototypes, and digital systems engineering.

## Overview

This repository contains the source code for the personal portfolio of **Ezenwa Augustine Ibe**, a Full-Stack Software Engineer working across modern web applications, backend systems, mobile platforms, AI-enabled applications, APIs, databases, and digital systems.

The portfolio is designed to communicate more than a collection of projects. It presents an engineering-focused view of how software is:

* Designed
* Architected
* Built
* Integrated
* Tested
* Deployed
* Documented
* Applied to real-world problems

The site combines a modern editorial interface with dedicated sections for engineering work, research, professional background, and contact.

## Portfolio Positioning

### Full-Stack Software Engineer

**AI · Web · Mobile · Digital Systems**

> I build software systems that turn complex real-world problems into reliable digital products.

The portfolio emphasizes practical engineering across:

* Full-stack web development
* Backend systems and REST APIs
* Artificial intelligence and intelligent systems
* Mobile application development
* Database design
* Cloud and third-party integrations
* Digital identity and trust infrastructure
* Healthcare technology
* Education technology
* Research prototypes
* Data-driven applications

---

# Core Features

## Portfolio Experience

The website provides dedicated sections for:

* **Work** — selected software projects and engineering case studies
* **About** — professional background and engineering profile
* **Engineering** — technical capabilities, architecture and development practices
* **Research** — research-oriented projects and emerging technology work
* **Contact** — production contact form backed by a database and transactional email system

## Project Case Studies

Projects are presented as engineering systems rather than simple screenshots.

Each project can communicate:

* Problem being addressed
* Product purpose
* Engineering approach
* Technology stack
* Architecture
* Key capabilities
* Integrations
* Deployment
* Source code
* Live demonstration

## Responsive Design

The interface is designed for:

* Desktop
* Laptop
* Tablet
* Mobile

The design uses responsive typography, spacing, layouts and navigation to maintain usability across screen sizes.

## Accessibility

The interface includes accessibility-oriented practices such as:

* Semantic HTML
* Visible keyboard focus states
* Responsive layouts
* Appropriate interactive element sizing
* Reduced reliance on decorative UI
* Readable typography and contrast
* Mobile-friendly navigation

## Performance-Oriented Design

The application is built with Vite and React and uses a lightweight client-side architecture.

The project avoids unnecessary framework complexity and keeps the visual system focused on:

* Fast page rendering
* Small reusable components
* Responsive CSS
* Minimal visual dependencies
* Static asset delivery where possible

---

# Featured Engineering Projects

## 1. BATI — Barbados AI Trust Infrastructure

**Category:** AI · Digital Identity · Trust Infrastructure · Governance

BATI is a research-oriented prototype exploring digital identity, verifiable credentials, verification, AI-assisted risk intelligence, explainability, accountability and governance.

The system explores how digital trust infrastructure can connect:

```text
Digital Identity
       ↓
Credential Layer
       ↓
Verification
       ↓
Trust Intelligence
       ↓
Risk Assessment / Anomaly Detection
       ↓
Explainable AI
       ↓
Governance & Compliance
       ↓
Audit & Accountability
       ↓
Institutional Decision Support
```

### Key Concepts

* Digital identities
* Verifiable credentials
* Credential verification
* Risk events
* AI-assisted anomaly detection
* Explainable AI
* Privacy engineering
* Accountability
* Auditability
* Governance
* Institutional decision support

BATI is positioned as a **research prototype**, rather than a claim of a fully productionized national identity infrastructure.

### Repository

`Barbados-AI-Trust-Infrastructure`

---

## 2. NeuroCare AI

**Category:** AI · Healthcare Technology · Web Application · Blockchain Research

NeuroCare AI is an AI-enabled healthcare-oriented application focused on recording and analyzing seizure-related events.

The system explores how AI, structured health-event logging, emergency workflows and blockchain-oriented integrity mechanisms can work together.

### Features

* Voice-based event logging
* Text-based event logging
* AI-assisted severity analysis
* Emergency alert simulation
* GPS/emergency location simulation
* Health-event analytics
* AI chat functionality
* Mobile-first interface
* Blockchain-ready event architecture
* MetaMask integration
* Mantle testnet integration
* IPFS/CID-oriented data integrity workflow

### Technology

* HTML
* CSS
* JavaScript
* Chart.js
* Node.js
* Express
* Google Generative AI
* Web Speech API
* MetaMask
* Mantle
* Hardhat
* IPFS-oriented storage workflow
* Netlify

Some blockchain and emergency workflows are explicitly implemented as demonstrations or simulations rather than representations of a clinical production system.

### Repository

`seizure-care-assistant`

---

## 3. Grove Medics

**Category:** Mobile · Healthcare · Backend · Payments

Grove Medics is a healthcare-oriented mobile platform designed around healthcare service discovery and access.

The application explores a digital platform connecting users with healthcare-related services including laboratory and diagnostic services.

### Technology

* React Native
* Expo
* Node.js
* Express
* MongoDB
* Mongoose
* Firebase
* Paystack
* RevenueCat
* OneSignal

### Capabilities

The broader platform architecture includes areas such as:

* Authentication
* Healthcare service discovery
* Laboratory services
* Pathology
* Imaging
* Dialysis
* Sensory therapy
* Notifications
* Payments
* Subscription-oriented functionality
* Backend APIs
* Database persistence

### Repository

`grove-medics`

---

## 4. Parent–Teacher Communication Platform

**Category:** Full-Stack Web · Education Technology · REST API

A full-stack communication platform designed to support communication between parents and teachers.

### Features

* Secure messaging
* Announcements
* User profiles
* Role-oriented functionality
* Backend API
* Persistent data storage

### Technology

**Frontend**

* React
* Bootstrap

**Backend**

* Python
* Django
* Django REST Framework

**Database**

* SQLite

### Repository

`parent_teacher_communication`

---

##

---

# Technology Stack

## Frontend

* React
* TypeScript
* Vite
* React Router
* Tailwind CSS
* CSS
* Responsive design

## Backend

Depending on the project:

* Node.js
* Express
* Python
* Django
* Django REST Framework
* Flask
* FastAPI

## Databases

* MySQL
* MongoDB
* SQLite

## AI / Machine Learning

Project work includes:

* Generative AI
* Natural language processing
* AI-assisted risk analysis
* AI-assisted healthcare workflows
* Multilingual AI
* Anomaly detection concepts
* Explainable AI

## Mobile

* React Native
* Expo

## Blockchain / Web3

Selected research prototypes explore:

* Solidity
* Hardhat
* MetaMask
* Mantle
* IPFS/CID concepts
* Digital identity
* Verifiable credentials

## Cloud / Infrastructure

The portfolio and selected projects use services and platforms such as:

* Netlify
* Aiven
* Firebase
* GitHub
* Resend

---

# Portfolio Architecture

The portfolio itself follows a component-based React architecture.

```text
Portfolio
│
├── React Application
│   │
│   ├── Home
│   ├── Work
│   ├── Project Details
│   ├── About
│   ├── Engineering
│   ├── Research
│   └── Contact
│
├── Reusable UI Components
│   │
│   ├── Navbar
│   ├── Footer
│   ├── Button
│   ├── ProjectCard
│   ├── ProjectDetails
│   ├── SectionHeading
│   └── TechBadge
│
├── Project Data
│   └── projects.ts
│
└── Contact Infrastructure
    │
    ├── React Contact Form
    │
    ├── Netlify Function
    │
    ├── Aiven MySQL
    │
    └── Resend
```

---

# Contact System Architecture

The contact page is not a static form.

It uses a serverless backend that processes submissions, stores them in MySQL and sends notification emails.

```text
Visitor
   │
   ▼
React Contact Form
   │
   │ POST
   ▼
Netlify Function
   │
   ├───────────────┐
   ▼               ▼
Aiven MySQL      Resend
   │               │
   ▼               ▼
contact_messages  Email
   │               │
   └───────┬───────┘
           ▼
    Portfolio Owner
```

## Contact Workflow

When a visitor submits the form:

1. The React application collects the form data.
2. The frontend sends a POST request to the Netlify serverless function.
3. The function validates the submitted fields.
4. The message is inserted into MySQL.
5. Resend sends an email notification.
6. The API returns a success or error response to the frontend.

This keeps database credentials and email API credentials out of the browser.

---

# Contact Database

The contact system uses a dedicated MySQL database.

Database:

```text
portfolio_db
```

Table:

```text
contact_messages
```

Schema:

```sql
CREATE TABLE contact_messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    subject VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    status ENUM('new','read','replied','archived') DEFAULT 'new',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Message Status

Messages can be tracked through:

* `new`
* `read`
* `replied`
* `archived`

---

# Environment Variables

The contact backend requires environment variables for database and email services.

Create a local `.env` file:

```env
DB_HOST=
DB_PORT=18543
DB_NAME=portfolio_db
DB_USER=
DB_PASSWORD=

DB_CA_CERT=

RESEND_API_KEY=

CONTACT_EMAIL=
EMAIL_FROM=
```

### Important

Never commit `.env` to Git.

The repository uses `.gitignore` to prevent environment files from being uploaded.

For deployment, configure the same variables through the hosting provider's environment-variable system.

---

# SSL Database Connection

The production MySQL service requires an SSL connection.

The serverless function supports the database CA certificate through the `DB_CA_CERT` environment variable.

The certificate is represented as Base64 in deployment environments so it can safely be stored as an environment variable.

The backend decodes the certificate at runtime and establishes an encrypted MySQL connection with certificate verification enabled.

Conceptually:

```text
DB_CA_CERT
    ↓
Base64 decode
    ↓
CA certificate
    ↓
TLS connection
    ↓
Aiven MySQL
```

This avoids disabling TLS certificate verification.

---

# Email Delivery

Contact notifications are sent through Resend.

The application does not expose the Resend API key to the frontend.

Instead:

```text
React
  ↓
Netlify Function
  ↓
Resend API
  ↓
Portfolio email inbox
```

The development configuration uses Resend's available sender identity for testing. A production deployment can use a verified domain and production sender address.

---

# Project Structure

```text
Portfolio/
│
├── public/
│   ├── images/
│   │   └── profile.jpg
│   └── resume/
│
├── src/
│   ├── components/
│   │   ├── Button.tsx
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectDetails.tsx
│   │   ├── SectionHeading.tsx
│   │   └── TechBadge.tsx
│   │
│   ├── data/
│   │   └── projects.ts
│   │
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Work.tsx
│   │   ├── ProjectDetails.tsx
│   │   ├── About.tsx
│   │   ├── Engineering.tsx
│   │   ├── Research.tsx
│   │   └── Contact.tsx
│   │
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
│
├── netlify/
│   └── functions/
│       └── contact.ts
│
├── .env.example
├── .gitignore
├── netlify.toml
├── package.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

---

# Routing

The React application uses React Router.

```text
/
├── /work
│
├── /work/:slug
│
├── /about
│
├── /engineering
│
├── /research
│
└── /contact
```

Project detail pages are dynamically resolved using the project slug.

For example:

```text
/work/bati
/work/neurocare-ai
/work/grove-medics
/work/parent-teacher-communication
```

---

# Getting Started

## Prerequisites

Install:

* Node.js
* npm
* Git

Verify the installations:

```bash
node --version
npm --version
git --version
```

---

## Clone the Repository

```bash
git clone <repository-url>
cd portfolio-and-contact-system
```

---

## Install Dependencies

```bash
npm install
```

---

## Configure Environment Variables

Create a `.env` file based on `.env.example`.

```bash
copy .env.example .env
```

Then configure the required database and email credentials.

Do not commit the `.env` file.

---

# Development

Start the Vite development server:

```bash
npm run dev
```

The application will normally be available at:

```text
http://localhost:5173
```

---

# Production Build

Create a production build:

```bash
npm run build
```

The compiled application is generated in:

```text
dist/
```

---

# Preview Production Build

After building:

```bash
npm run preview
```

This allows the production build to be tested locally before deployment.

---

# Type Checking

The TypeScript project can be checked without producing build output:

```bash
npx tsc --noEmit
```

The project has been tested with TypeScript compilation successfully.

---

# Deployment

The portfolio is designed for deployment on Netlify.

The repository contains:

```text
netlify.toml
```

with the build configuration:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[functions]
  directory = "netlify/functions"
```

## Netlify Deployment Flow

```text
GitHub
   │
   ▼
Netlify
   │
   ├── npm run build
   │
   ├── Deploy dist/
   │
   └── Deploy Netlify Functions
             │
             ├── Aiven MySQL
             └── Resend
```

After deployment, configure all required environment variables in Netlify.

---

# Security Considerations

The project follows several basic security principles.

## Secrets

Sensitive credentials are stored in environment variables rather than source code.

Examples include:

* Database passwords
* Resend API keys
* Database certificates
* Other service credentials

## Database Credentials

Database credentials are only used by the server-side Netlify function.

They are never required by the React browser application.

## TLS

The Aiven MySQL connection uses TLS with certificate verification.

## Input Validation

The contact function validates required contact fields before attempting database insertion or email delivery.

## Git Protection

The repository ignores:

```text
.env
.env.*
node_modules/
dist/
```

This prevents local environment credentials and generated dependencies from being committed.

---

# Development Principles

The portfolio follows several engineering principles.

### Component Reuse

Common interface elements are implemented as reusable components rather than duplicated markup.

### Separation of Concerns

The project separates:

* Page-level UI
* Reusable components
* Project data
* Serverless backend functions
* Configuration
* Static assets

### Type Safety

The application uses TypeScript to reduce runtime errors and improve maintainability.

### Progressive Enhancement

The visual experience is built around readable content and semantic structure rather than relying entirely on animations.

### Practical Engineering

Projects are presented in the context of real problems and system design rather than technology names alone.

---

# Design System

The portfolio uses a dark editorial visual language.

### Visual Characteristics

* Near-black background
* Off-white typography
* Restrained accent colors
* Thin borders
* Technical labels
* Monospace metadata
* Large but controlled headings
* Subtle motion
* Responsive layouts

The design intentionally avoids excessive:

* Gradients
* Glassmorphism
* Neon effects
* Oversized typography
* Decorative animation
* Generic developer-portfolio patterns

The goal is a visual identity closer to a modern engineering/research publication than a template-based developer portfolio.

---

# Engineering Focus

The portfolio demonstrates experience across multiple layers of the software stack.

```text
User Interface
      ↓
Frontend Applications
      ↓
API Integration
      ↓
Backend Services
      ↓
Business Logic
      ↓
Databases
      ↓
Cloud Services
      ↓
AI / Intelligent Systems
      ↓
Infrastructure & Deployment
```

The projects also demonstrate cross-domain engineering involving:

* Healthcare
* Education
* Maritime logistics
* Digital identity
* Governance
* Artificial intelligence
* Data visualization
* Mobile applications

---

# Research Direction

Beyond conventional application development, the portfolio documents research-oriented work involving:

* AI governance
* Digital identity
* Verifiable credentials
* Privacy engineering
* Explainable AI
* AI-assisted risk intelligence
* Accountability infrastructure
* Multilingual NLP
* Historic handwriting recognition
* Healthcare AI

This research direction connects software engineering with emerging technologies and real-world institutional problems.

---

# Git Workflow

The project uses Git for version control.

Typical workflow:

```bash
git status
git add .
git commit -m "Describe the change"
git push
```

The primary branch is:

```text
main
```

---

# Repository Hygiene

The repository intentionally excludes generated and sensitive files.

Ignored content includes:

```text
node_modules/
dist/
.env
.env.*
```

This keeps the Git repository focused on source code, configuration templates, documentation and required project assets.

---

# Future Improvements

Potential future development areas include:

* Analytics for portfolio traffic
* Improved contact-message administration
* Automated email templates
* Domain-based production email
* Automated testing
* CI/CD workflows
* Accessibility auditing
* Performance monitoring
* Structured metadata and SEO improvements
* Open Graph/social sharing metadata
* Automated dependency updates
* More detailed project architecture diagrams
* Expanded research publications and technical writing

---

# Author

## Ezenwa Augustine Ibe

**Full-Stack Software Engineer**

AI · Web · Mobile · Digital Systems

Areas of interest:

* Full-Stack Development
* React
* Node.js
* Python
* REST APIs
* AI Applications
* Digital Identity
* Cloud Systems
* Mobile Development
* Database Systems
* Software Architecture
* Research & Emerging Technologies

### Profiles

**GitHub:** `austinibe15`

**LinkedIn:** Ezenwa Augustine Ibe

---

# License

This repository represents a personal professional portfolio.

Unless otherwise specified within an individual project or dependency, the portfolio's original source code and content are maintained by the author.

Third-party libraries, frameworks and services remain subject to their respective licenses and terms.

---

# Project Status

**Status:** Active development

The portfolio is continuously evolving as new engineering projects, research work, technical writing and professional experience are added.
