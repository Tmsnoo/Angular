# Mateusz Czech — portfolio

A responsive Angular portfolio for Mateusz Czech, with the original portfolio categories and photography:

- O mnie
- Portret
- Scena
- Gastro
- Nagrania Lektorskie

The about section uses the author's published introduction and portrait. Photography is served from the author's existing `cdn.myportfolio.com` media library. The voice-over category embeds the video player used on the original portfolio.

## Development

```sh
npm install
npm start
```

Create a production build with `npm run build`.

## Publications

`/publikacje` uses alternating white photo-and-description spreads, native scroll
snapping, slower-moving photographs and scroll-linked title blur. Opening a
publication preserves its photo/description orientation and provides manual photo
navigation. Reduced-motion preferences disable the parallax and title effects.

Edit publication text in `src/app/publication-projects.ts` using each project's
optional `description`. Projects without one display a 500-character Lorem ipsum
placeholder. The contact form at the end prepares a `mailto:` message in the
visitor's email application; it does not send email through a server.
