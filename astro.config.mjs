import { defineConfig } from 'astro/config';

const [githubOwner, githubRepository] = process.env.GITHUB_REPOSITORY?.split('/') ?? [];
const isAccountSite = githubRepository && githubRepository === `${githubOwner}.github.io`;
const base = process.env.GITHUB_ACTIONS === 'true' && githubRepository && !isAccountSite
  ? `/${githubRepository}`
  : '/';

export default defineConfig({
  site: 'https://peinturetoiturejonathan.com',
  base,
  trailingSlash: 'always',
});
