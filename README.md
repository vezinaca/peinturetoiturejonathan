# Peinture Toiture Jonathan

French and English Astro website for Peinture Toiture Jonathan.

## Run locally

1. Install Node.js and npm if they are not already installed.
2. In this folder, run `npm install` once.
3. Copy `.env.example` to `.env` and replace the example Formspree endpoint with the endpoint from the business's Formspree account.
4. Run `npm run dev` and open the local address printed in the terminal.

The contact form cannot deliver messages until the real Formspree endpoint is configured. Formspree sends submissions to the destination configured in its dashboard.

## Publish with GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and publishes the site after a push to `main` or `master`. In the GitHub repository, open **Settings → Pages** and choose **GitHub Actions** as the publishing source. For a repository site, the build automatically prefixes links and images with that repository's name. An account site named `<username>.github.io` is served from the root.

If the Formspree form has been configured, add its endpoint in the GitHub repository under **Settings → Secrets and variables → Actions → Variables** as `PUBLIC_FORMSPREE_ENDPOINT`. The endpoint is public in the generated page, so it belongs in a repository variable, not a secret.

## Pages

- `/` — French homepage
- `/en/` — English homepage
- `/fr/services/`, `/fr/projects/`, `/fr/about/`, `/fr/contact/`, `/fr/privacy/`
- `/en/services/`, `/en/projects/`, `/en/about/`, `/en/contact/`, `/en/privacy/`

The former site's image assets in `public/images/reference/` were downloaded with the new owner's permission and are stored locally.
