# Flight Free UK

This website is built using [Middleman](https://middlemanapp.com/) (a static
site generator), [TailwindCSS](https://tailwindcss.com/) (a CSS framework),
[NetlifyCMS](https://www.netlifycms.org/) (a CMS for managing some of the content)
and is hosted on [Netlify](https://www.netlify.com/).

## Development setup

To work on this website you'll need to do the following:

* Install Ruby (latest version should be fine)
* Install Ruby dependencies: `bundle install`
* Install NodeJS (latest version should be fine)
* Install NodeJS dependencies: `npm install`
* Run `bundle exec middleman server` to start a developmet server at
  [http://localhost:4567](http://localhost:4567)

## Project structure

Read more about [Middleman](https://middlemanapp.com/) in the docs, but the
source files are organised in these directories:

* `source` - HTML templates, images and other static files (fonts, PDFs, etc).
* `source/layouts` - Layout templates (everything but the actual page content:
  header, footer, etc)
* `source/posts` - blog posts as Markdown files that are edited using the CMS,
  but can also be edited manually.
* `source/admin` - [NetlifyCMS](https://www.netlifycms.org/)
* `assets/source` - contains CSS files (they are separate because they are not
  built by Middleman).
* `data` - YAML files with data that is used in HTML templates (some of it is
  edited using the CMS, like podcasts).

## Development workflow

In development mode Middleman serves the templates and other files from
`source` directory at [http://localhost:4567](http://localhost:4567) with
live-reload: it automatically refreshes pages when you edit them.

### Editing HTML

HTML templates are processed using
[ERB](https://ruby-doc.org/stdlib-2.6.5/libdoc/erb/rdoc/ERB.html) so you can
use conditions, loops, etc. Middleman also provides things like partials,
helpers, layouts.

### Editing CSS

This site is built using [TailwindCSS](https://tailwindcss.com/) which is a
utility-first CSS framework. It provides a bunch of classes that are used in
HTML and you end up writting very little CSS yourself. This is why there is
currently just one CSS file with CSS rules for things that TailwindCSS doesn't
support or for HTML that is automatically generated (e.g. blog posts are
generated from Markdown).

CSS files are currently only processed by PostCSS and the changes to files are
reloaded in the browser automatically.


### Javascript

There is currently very little javascript and so all of it is inline in the
HTML templates.

## Deployment

Once you've tested your changes locally and are happy for them to go live,
commit and push them to Github. Netlify (where the site is hosted) builds the
actual site from the templates and all the assets.

The site is built using: `bundle exec middleman build` in the `build`
directory. You don't need to build it locally unless you want to see the actual
HTML that is generated.

## CMS

[NetlifyCMS](https://www.netlifycms.org/) is a CMS for static websites. It's a
JS app that is loaded in `source/admin/index.html` that updates the content in
the git repository directly (i.e. when you edit a blog post it updates the
relevant file in the repository and commits it). Authentication is handled by
[Netlify](https://www.netlify.com/).
