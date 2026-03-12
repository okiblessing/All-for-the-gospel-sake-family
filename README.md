# All for the Gospel Sake Family

A modern single-page React website for a Christian fellowship, built with Vite and organized with reusable components.

## Features

- Responsive one-page layout with mobile navigation
- Fixed navbar with active section highlighting
- Smooth scrolling between sections
- Scroll reveal animations and polished hover states
- Reusable section and content components
- Placeholder founder, meeting, and contact details for easy editing

## Project Structure

```text
src/
  components/
    Contact.jsx
    Footer.jsx
    Founder.jsx
    Hero.jsx
    Meetings.jsx
    Navbar.jsx
    ScrollToTop.jsx
    Section.jsx
  App.jsx
  main.jsx
  styles.css
```

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

## Deploy to GitHub Pages

The project is configured for GitHub Pages deployment at:

`https://okiblessing.github.io/All-for-the-gospel-sake-family/`

After pushing to the `main` branch, GitHub Actions will build and deploy the site automatically.

If GitHub Pages is not live yet:

1. Open your GitHub repository.
2. Go to `Settings > Pages`.
3. Under `Build and deployment`, set `Source` to `GitHub Actions`.

## Editing Content

- Update section text in [src/App.jsx](/Users/macbook/test project/src/App.jsx) and the files inside [src/components](/Users/macbook/test project/src/components).
- Replace the founder placeholder block in [src/components/Founder.jsx](/Users/macbook/test project/src/components/Founder.jsx) with a real image or photo component.
- Edit meeting details in [src/components/Meetings.jsx](/Users/macbook/test project/src/components/Meetings.jsx).
- Edit contact channels and form behavior in [src/components/Contact.jsx](/Users/macbook/test project/src/components/Contact.jsx).
- Adjust colors, glow, spacing, and typography in [src/styles.css](/Users/macbook/test project/src/styles.css).

## Contact Form Setup

The contact form now works in two ways:

- If `VITE_CONTACT_ENDPOINT` is set to a Formspree endpoint, the form sends submissions directly from the website.
- If no endpoint is set, the form opens the user's mail app and drafts a message to `all4dgospelsakefamily@gmail.com`.

1. Create a form at Formspree and copy your endpoint.
2. Create a `.env` file in the project root.
3. Add your Formspree endpoint:

```bash
VITE_CONTACT_ENDPOINT=https://formspree.io/f/your-form-id
```

An example file is included at [.env.example](/Users/macbook/test project/.env.example).

## Notes

- Google Fonts are loaded in [index.html](/Users/macbook/test project/index.html); you can swap them if your fellowship has a preferred brand style.
