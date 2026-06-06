# Cherry Portfolio

Version: 1.0.5.2 — Maintenance fork (TheFarEdge-2026)

Portfolio custom post type, templates and a shortcode originally from Cherry Framework. This fork fixes translation loading timing and template-call ordering to avoid compatibility warnings on modern WordPress.

Quick start

- Copy `plugins/cherry-portfolio/` into `wp-content/plugins/`
- Activate in WP Admin → Plugins
- Use the `[cherry_portfolio]` shortcode on a page, or use the provided Portfolio page template.

Compatibility

- Tested on WordPress 6.7+ and PHP 8.2/8.4

Notable fixes in this fork

- Textdomain loading deferred to `init` for correct i18n on WP 6.7+
- Template `__()` calls deferred to avoid `_doing_it_wrong` notices

License

- GPL-3.0+

Support

- Report issues in this repository.