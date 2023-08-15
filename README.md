# geri.dev

![geri.dev on PC](https://i.geri.dev/1f5b03339865d443e09ab18e415624.png)

This my personal site, [geri.dev](https://geri.dev/) written with:

- [Astro](https://astro.build/) for static site generation,
- [Tailwind](https://tailwindcss.com/) for nicer CSS experience
- [Rollup](https://rollupjs.org/) to minimize the [FontAwesome](https://fontawesome.com/) icon bundle to the ones I need

The site is deployed using [GitHub Pages](https://pages.github.com/) behind [Cloudflare](https://cloudflare.com)'s CDN
for further protection and caching.

As you can tell I am still very much learning frontend..

---

# Todo
## Chores
- [x] Project setup
  - [x] Astro
  - [x] Tailwind
- [x] Deployment
- [x] Image optimization
- [x] FontAwesome optimization
- [x] Redirects

## Content
- [x] Brief about me page
- [x] New favicon/META tags
- [ ] Server archives
  - [x] Basic page listing servers with download links
  - [ ] Detail view with brief descriptions and all the images
- [ ] Technologies page
- [x] Contacts page
- [x] 404 page
- [ ] CV
- [ ] Basic blog (Markdown)
- [ ] Dark/light theme toggle
- [ ] Get the site to 100% in [Lighthouse](https://web.dev/measure/) categories
   ![Lighthouse showing 84 for accessibility](https://i.geri.dev/f537a541ac09affe1a9d7442f9c595.png)

---

# Developing

If you'd like to make any changes or create your own, feel free to do so!

Here are some steps to get you started.

1. Ensure you have Git, Node and NPM installed
2. Clone the repository: `git clone git@github.com:NotGeri/geri.dev.git` and open it in your favourite IDE.
3. Install the dependencies: `npm i`
4. Start the Astro dev process: `npm run dev`
5. You can access the site with live reloading at [127.0.0.1:3000](http://127.0.0.1:3000/)

If you need to make changes to what icons are included, do so in the `rollup/fontawesome.js` and then run `npm run
rollup`

Finally, if you want to build the site for production, use `npm run build` and you can find the final product
under `dist/`.
