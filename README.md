# Cherry Framework Legacy Suite

Maintenance forks of select Cherry Framework plugins and the parent theme, updated for PHP 8.2/8.4 and WordPress 6.7+ compatibility. This repository aggregates the patched code so site maintainers can install the legacy components without running into modern-PHP deprecations.

Quick links
- Plugins: `plugins/`
- Theme: `themes/cherryframework4/`
- License: `LICENSE`

Installation
- Manual: copy the plugin folder into `wp-content/plugins/` or the theme folder into `wp-content/themes/` and activate in WP admin.
- Releases: download individual zips from GitHub Releases (built automatically on release).

Included forks (short summaries)
- cherry-plugin — Core Cherry extensions and widgets (v1.2.8.3). Fixes PHP 7.4+ string-offset deprecations and preserves upstream behaviour.
- cherry-portfolio — Portfolio CPT and templates (v1.0.5.2). Deferred textdomain and template-call fixes.
- cherry-shortcodes — Shortcodes library (v1.0.7.7). Replaces removed jQuery patterns and modernises AJAX script injection.
- cherry-team — Team CPT and widgets (v1.0.9). Internationalization and template deferral.
- cherry-testimonials — Testimonials CPT and shortcodes (v1.1.4). Minor compat fixes and template updates.
- cherryframework4 — Parent theme (v4.0.5.7). Removes `each()`, fixes dynamic properties, and modernises admin UI scripts.

Per-component READMEs
See the plugin/theme folders for per-plugin README files with install/usage and changelog notes:

- `plugins/cherry-portfolio/README.md`
- `plugins/cherry-shortcodes/README.md`
- `plugins/cherry-plugin/README.md`
- `plugins/cherry-team/README.md`
- `plugins/cherry-testimonials/README.md`
- `themes/cherryframework4/README.md`

Contributing
- Issues and PRs are welcome; open them in this repository. Keep changes small and focused: core fixes, PHP 8+ compatibility, and security patches only.

License
- GPL (same license as upstream Cherry Framework). See `LICENSE` for details.

Support
- This project was forked and is maintained by SitesFareEdge. For context about the original site and deployment, see the development repository: https://github.com/waywardtech/thefaredge-space-wp-dev
