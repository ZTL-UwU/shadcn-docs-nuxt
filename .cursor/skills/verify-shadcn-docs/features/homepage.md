# Homepage

The homepage tells a visitor what the template is, lets them open the docs, and keeps site identity in the header and footer.

## Sub-features

- `home-hero` shows the hero title and description.
- `home-get-started` follows Get Started into Introduction.
- `home-announcement` follows Upgrade to Nuxt 4 into the upgrade guide.
- `home-identity` shows the shadcn-docs header title and a footer credit.
- `home-blog` follows Blog in the header to the blog index.

## How to get to it (user POV)

- Open `/`.
- Choose the `shadcn-docs` header title from any inner page.
- Choose `Blog` in the header.

## Driving it with control-shadcn-docs

Preconditions:

- The site is healthy at `http://127.0.0.1:4317`.
- `control-shadcn-docs doctor` reports `ok: true`.
- Locale is English.

- **Open home.** Go to `/`. Run `control-shadcn-docs browser goto --url /`. Title is `Home - shadcn-docs`. The page shows `Effortless and Beautiful` and `Get Started`.
- **Get Started.** Choose Get Started. Run `control-shadcn-docs browser click --role button --name "Get Started"`. URL contains `/getting-started/introduction` and the heading is `Introduction`.
- **Return home.** Choose the header title. Run `control-shadcn-docs browser click --role link --name "shadcn-docs"`. URL is `/` and the title is `Home - shadcn-docs`.
- **Announcement.** Choose Upgrade to Nuxt 4. Run `control-shadcn-docs browser click --role link --name "Upgrade to Nuxt 4"`. URL contains `/getting-started/upgrade/v1-2`.
- **Blog.** Go to `/` and choose Blog. Run `control-shadcn-docs browser goto --url /` then `control-shadcn-docs browser click --role link --name "Blog"`. URL contains `/blog` and the heading is `Blog`.
- **Footer.** On `/`, the footer shows `Made with` and `Tony Zhang`, and a `Sponsor Me` button.
- **Proof.** Capture home. Run `control-shadcn-docs browser goto --url /`, `control-shadcn-docs browser snapshot --path homepage/home.aria.txt`, and `control-shadcn-docs browser screenshot --path homepage/home.png`. Both artifacts show `shadcn-docs`, the hero, and Get Started.

## Gotchas

- Get Started is a button inside a link. Aim at the button name `Get Started`, not a CSS class.
- `Blog` is a header link, not the Docs dropdown.
- The homepage embeds an iframe of Introduction. Do not treat iframe copy as proof you navigated. Check the URL.
- Header GitHub and Sponsor buttons open external sites. Do not follow them as part of this feature.
