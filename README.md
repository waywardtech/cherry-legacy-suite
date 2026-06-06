# Cherry Framework Legacy Suite

A maintained collection of six forked Cherry Framework plugins and the parent theme, patched for PHP 8.2/8.4 and WordPress 6.7+ compatibility.

## What's included

### Plugins
- **cherry-plugin** — Core plugin (1.2.8.3) — PHP 7.4-deprecated `${0}` syntax removed
- **cherry-portfolio** — Portfolio post type (1.0.5.2) — Textdomain JIT, page-template deferred `__()` calls
- **cherry-shortcodes** — Shortcode builder (1.0.7.7) — `wp_add_inline_script` for AJAX, JS `$.browser` removed
- **cherry-team** — Team post type (1.0.9) — Textdomain JIT, page-template deferred `__()` calls
- **cherry-testimonials** — Testimonials (1.1.4) — Textdomain JIT, page-template deferred `__()` calls

### Theme
- **cherryframework4** — Parent theme (4.0.5.7) — `each()` removal, implicit defaults, dynamic properties, cherry_ajax refactored, JS `$.browser` removed

## Background

The Cherry Framework was last actively maintained around 2015–2017. These forks address PHP 8.0+ removals and WordPress 6.7+ deprecations so legacy Cherry-based sites can continue running on modern WordPress and PHP versions without being forced to switch themes immediately.

## Installation

### Option 1: Manual installation
1. Download the `.zip` from the [Releases](../../releases) page
2. Extract into `wp-content/plugins/` or `wp-content/themes/`
3. Activate in WordPress admin

### Option 2: Copy individual plugins/theme
Copy the specific plugin or theme folder from this repo into your site's `wp-content/`:
```bash
cp -r cherry-legacy-suite/plugins/cherry-portfolio your-site/wp-content/plugins/
cp -r cherry-legacy-suite/themes/cherryframework4 your-site/wp-content/themes/
```

## Version numbering

Each fork is version-bumped one patch level from upstream:
- **Upstream:** cherry-plugin v1.2.8.2
- **Fork:** cherry-plugin v1.2.8.3

This preserves traceability and ensures proper cache-busting for assets.

## Header customization

Each plugin/theme includes a `(TheFarEdge-2026)` suffix in its name so WordPress admin clearly shows these are maintained forks, not upstream Cherry.

## Unforked (still vanilla)

These are not included here because they required no changes:
- `cherry-charts`
- `cherry-grid`
- `cherry-simple-slider`
- `cherry-shortcodes-templater`
- `cherry-social`

## License

All files inherit the GPL license from the original Cherry Framework code.

## Attribution

Forked and maintained by **SitesFareEdge**.  
Original code by Cherry Team (cherryframework.com, archived ~2017).

## Questions or issues?

Open an issue on GitHub or see the [development repo](https://github.com/waywardtech/thefaredge-space-wp-dev) for the full migration context.
