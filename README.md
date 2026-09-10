# pypcoffee

Customer-facing table reservation page for pypcoffee.

Branding is centralized in `branding.js`; update that file to change the business
name, logo path, logo alt text, tagline, or WhatsApp destination. The current
logo asset is `pyp-logo.png` at its source ratio of 661 × 201.

## Run locally

Open `index.html` in a browser.

## Publish with GitHub Pages

1. Create a GitHub repository named `pypcoffee`.
2. Upload this project to the repository's `main` branch.
3. In **Settings → Pages**, select **GitHub Actions**.
4. The included workflow will deploy the site automatically.

The public URL will be:

```text
https://YOUR-GITHUB-USERNAME.github.io/pypcoffee/
```

## Phase 1A architecture

The existing `localStorage` data remains unchanged and continues to power the
application. The new files under `src/` provide a non-destructive abstraction
for future universal resources and reservations:

- `src/config/resource-types.js` defines extensible resource type codes.
- `src/models/resource.js` maps legacy tables and reservations to resource
  representations without changing stored data.
- `src/adapters/local-storage-adapter.js` reads and validates the existing
  storage format.
- `src/migrations/legacy-table-migration.js` exposes a preview only; it never
  writes or deletes data.
- `src/services/resource-service.js` provides the first universal resource
  lookup using existing tables.
- `src/customer/resource-card.js` standardizes resource metadata and
  accessibility attributes on selectable floor-plan resources.
