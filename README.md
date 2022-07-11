# Flight Free UK

This website is built using [Middleman](https://middlemanapp.com/) (a static
site generator), [TailwindCSS](https://tailwindcss.com/) (a CSS framework),
[NetlifyCMS](https://www.netlifycms.org/) (a CMS for managing some of the content)
and is hosted on [Netlify](https://www.netlify.com/).

## Development setup

To work on this website you'll need to do the following:

* Install Ruby
* Install Ruby dependencies: `bundle install`
* Install NodeJS (latest version should be fine)
* Install NodeJS dependencies: `npm install`
* Run `netlify dev` to start a development server at
  [http://localhost:8888](http://localhost:8888)

## Project structure

Read more about [Middleman](https://middlemanapp.com/) in the docs, but the
source files are organised in these directories:

* `source` - HTML templates, images and other static files (fonts, PDFs, etc).
* `source/layouts` - Layout templates (everything but the actual page content:
  header, footer, etc)
* `source/posts` - blog posts as Markdown files that are edited using the CMS,
  but can also be edited manually.
* `source/admin` - [NetlifyCMS](https://www.netlifycms.org/)
* `assets/source` - contains CSS and JS files for the site (they are separate because we are using Webpack to build assets, not Middleman's default assets pipeline).
* `data` - YAML files with data that is used in HTML templates (some of it is
  edited using the CMS, like podcasts).
* `functions` - Netlify serverless functions that power the 'Sign the pledge'
  tool.

## Development workflow

Netlify Dev can be used to serve both the site and Netlify functions in
development mode. It starts Middleman server, serves Netlify functions and
proxes requests, so that both are available at
[http://localhost:8888](http://localhost:8888). Any changes to templates in
`source` and assets in `assets/source` automatically become available in the
browser. Changes to functions in `functions` are picked up automatically as
well.

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

CSS files are processed by Webpack and the changes to files are reloaded in the
browser automatically.

However, PurgeCSS may not find HTML elements created by the Markdown processor and will purge them. To prevent this happening, add elements to the whitelist in postcss.config.js

### Javascript

There is currently very little javascript and some of it is inline in the HTML
templates. JS files are processed by Webpack and changes are reloaded in the
browser automatically.

### Lambda Functions

We're using Lambda function for the pledge form.  
These are edited via the functions directory and transpiled into the lambda directory.
These functions use environment variables that are set locally via the .env file.
There is an example of this file '.env.example' that can be copied to .env for local testing.
You wil need to replace the <API_KEY> & <MAIL_LIST_ID> with the correct key and id from mailchimp.

You can test the development environment by running `netlify dev`

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

To run the CMS locally, set up the proxy server by running `npx netlify-cms-proxy-server`
then pointing your browser at [http://localhost:8888/admin/#/](http://localhost:8888/admin/#/)
