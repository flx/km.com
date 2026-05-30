# kyokomiyake.com

Static rebuild of the current Squarespace site for deployment to Cloudflare Pages.

## Local preview

From the repository root:

```bash
python3 -m http.server 4173
```

Then open [http://localhost:4173](http://localhost:4173).

## Structure

- `index.html` is the `DIRECTOR` landing page.
- Each route lives in its own folder with an `index.html`.
- `assets/styles.css` contains the custom replacement styling.
- `assets/site.js` handles mobile navigation and current-page nav state.
- `assets/images/` contains local copies of the image assets pulled from the existing site.
- `_redirects` keeps old Squarespace aliases working on Cloudflare Pages.

## Notes

- The Squarespace-specific CSS, scripts, and proprietary font stack were not reused.
- The replacement uses open-licensed web fonts (`League Spartan` and `Source Sans 3`) to stay visually close without depending on Squarespace assets.
- Existing Vimeo trailers/excerpts are preserved as embeds.

## Cloudflare Pages

This repository is plain static HTML.

For the current Cloudflare Pages Git flow:

- Create a Pages project with `Connect to Git`.
- Select this GitHub repository.
- Use `main` as the production branch.
- Do not choose a framework preset.
- Leave the Build command blank.
- Leave the Root directory at the repository root.

Cloudflare's Git integration will automatically deploy each push to the connected branch and generate preview deployments for other branches.
