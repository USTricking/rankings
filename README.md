# US Tricking Rankings

## Features

- ✅ **Raw Data View of UST Rankings Data**
- ✅ **Open Source UX**
- ✅ **Multi-language i18n**
- ✅ **Automatic table of contents**

## 👀 Want to learn more?

See the full US Tricking League Specifications at [USTricking.com](https://www.ustricking.com/rankings)

## Development

### Project Setup

This site is built using [astro](https://astro.build/). To get started, run the following commands:

#### Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |



Feel free to check [the official documentation](https://docs.astro.build) or jump into their [Discord server](https://astro.build/chat).

## Customize The Theme

### CSS styling

The theme's look and feel is controlled by a few key variables that you can customize yourself. You'll find them in the `src/styles/theme.css` CSS file.

If you've never worked with CSS variables before, give [MDN's guide on CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) a quick read.

The default theme uses a "cool blue" accent color by default. To customize this, change the `--theme-accent` variable to whatever color you'd like:

```diff
/* src/styles/theme.css */
:root {
  color-scheme: light;
-  --theme-accent: hsla(var(--color-blue), 1);
+  --theme-accent: hsla(var(--color-red), 1);   /* or: hsla(#FF0000, 1); */
```

## Page metadata

Astro uses frontmatter in Markdown pages to choose layouts and pass properties to those layouts. If you are using the default layout, you can customize the page in many different ways to optimize SEO and other things. For example, you can use the `title` and `description` properties to set the document title, meta title, meta description, and Open Graph description.

```markdown
---
title: Example title
description: Really cool docs example that uses Astro
layout: ../../layouts/MainLayout.astro
---

# Page content...
```

For more SEO related properties, look at `src/components/HeadSEO.astro`

### Sidebar navigation

The sidebar navigation is controlled by the `SIDEBAR` variable in your `src/config.ts` file. You can customize the sidebar by modifying this object. A default, starter navigation has already been created for you.

```ts
export const SIDEBAR = {
  en: [
    { text: "Section Header", header: true },
    { text: "Introduction", link: "en/introduction" },
    { text: "Page 2", link: "en/page-2" },
    { text: "Page 3", link: "en/page-3" },

    { text: "Another Section", header: true },
    { text: "Page 4", link: "en/page-4" },
  ],
};
```

Note the top-level `en` key: This is needed for multi-language support. You can change it to whatever language you'd like, or add new languages as you go. More details on this below.

### Multiple Languages support

The Astro docs template supports multiple languages out of the box. The default theme only shows `en` documentation, but you can enable multi-language support features by adding a second language to your project.

To add a new language to your project, you'll want to extend the current `src/content/docs/[lang]/...` layout:

```diff
 📂 src/content/docs
 ┣ 📂 en
 ┃ ┣ 📜 page-1.md
 ┃ ┣ 📜 page-2.md
 ┃ ┣ 📜 page-3.astro
+ ┣ 📂 es
+ ┃ ┣ 📜 page-1.md
+ ┃ ┣ 📜 page-2.md
+ ┃ ┣ 📜 page-3.astro
```

You'll also need to add the new language name to the `KNOWN_LANGUAGES` map in your `src/config.ts` file. This will enable your new language switcher in the site header.

```diff
// src/config.ts
export const KNOWN_LANGUAGES = {
  English: 'en',
+  Spanish: 'es',
};
```

Last step: you'll need to add a new entry to your sidebar, to create the table of contents for that language. While duplicating every page might not sound ideal to everyone, this extra control allows you to create entirely custom content for every language.

> Make sure the sidebar `link` value points to the correct language!

```diff
// src/config.ts
export const SIDEBAR = {
  en: [
    { text: 'Section Header', header: true, },
    { text: 'Introduction', link: 'en/introduction' },
    // ...
  ],
+  es: [
+    { text: 'Encabezado de sección', header: true, },
+    { text: 'Introducción', link: 'es/introduction' },
+    // ...
+  ],
};

// ...
```

If you plan to use Spanish as the default language, you just need to modify the redirect path in `src/pages/index.astro`:

```diff
<script>
- window.location.pathname = `/en/introduction`;
+ window.location.pathname = `/es/introduction`;
</script>
```

You can also remove the above script and write a landing page in Spanish instead.

TODO:
- [ ] Add a language switcher to the site header
- [ ] Import and display data
- [ ] Create license file
- [ ] Add a license badge to the README
- [ ] Add deployment instructions
- [ ] Launch site

