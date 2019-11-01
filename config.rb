# Monkey-patch Markdown renderer to wrap images in figure with figcaption
require "middleman-core/renderers/kramdown"

class Middleman::Renderers::MiddlemanKramdownHTML
  def convert_img(el, _)
    attrs = el.attr.dup

    link = attrs.delete('src')
    "<figure>#{scope.image_tag(link, attrs)}<figcaption>#{attrs[:title]}</figcaption></figure>"
  end
end

# Activate and configure extensions
# https://middlemanapp.com/advanced/configuration/#configuring-extensions

activate :livereload

# activate :autoprefixer do |prefix|
#   prefix.browsers = "last 2 versions"
# end

activate :directory_indexes
page "/admin/*", :directory_index => false

activate :blog do |blog|
  blog.generate_day_pages = false
  blog.generate_month_pages = false
  blog.generate_year_pages = false
  blog.permalink = "post/{title}.html"
  blog.sources = "posts/{title}.html"
  blog.layout = "blog_post_layout"
  blog.custom_collections = {
    category: {
      link: "/blog/categories/{category}.html",
      template: "/category.html"
    }
  }
end

assets_command = "npx postcss assets/source/css/styles.css -o assets/build/stylesheets/styles.css --verbose"

activate :external_pipeline,
  name: :tailwind,
  command: (build? ? "NODE_ENV=production #{assets_command}" : "npx watch '#{assets_command}' assets/source/css/"),
  source: "assets/build"

# Layouts
# https://middlemanapp.com/basics/layouts/

# Per-page layout changes
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
# page '/path/to/file.html', layout: 'other_layout'

# Proxy pages
# https://middlemanapp.com/advanced/dynamic-pages/

# proxy(
#   '/this-page-has-no-template.html',
#   '/template-file.html',
#   locals: {
#     which_fake_page: 'Rendering a fake page with a local variable'
#   },
# )

# Helpers
# Methods defined in the helpers block are available in templates
# https://middlemanapp.com/basics/helper-methods/

helpers do
  def markdown(text)
    Tilt["markdown"].new(context: @app) { text }.render
  end
end

# Build-specific configuration
# https://middlemanapp.com/advanced/configuration/#environment-specific-settings

# configure :build do
#   activate :minify_css
#   activate :minify_javascript
# end

ready do
  proxy "_redirects", "netlify_redirects", ignore: true
end
