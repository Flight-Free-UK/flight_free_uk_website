# Monkey-patch Markdown renderer to wrap images in figure with figcaption
require "middleman-core/renderers/kramdown"

Encoding.default_external = Encoding::UTF_8

class Middleman::Renderers::MiddlemanKramdownHTML
  def convert_img(el, _)
    attrs = el.attr.dup

    link = attrs.delete('src')
    "<figure>#{scope.image_tag(link, attrs)}<figcaption>#{attrs[:title]}</figcaption></figure>"
  end

  def convert_a(el, indent)
    content = inner(el, indent)

    if el.attr['href'].start_with?('mailto:')
      mail_addr = el.attr['href'].sub(/\Amailto:/, '')
      href = obfuscate('mailto') << ':' << obfuscate(mail_addr)
      content = obfuscate(content) if content == mail_addr
      return %(<a href="#{href}">#{content}</a>)
    end

    attr = el.attr.dup
    link = attr.delete('href')
    attr.transform_keys!(&:to_sym)
    attr[:target] = "_blank"

    scope.link_to(content, link, attr)
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

# the original "be inspired" section
activate :blog do |blog|
  blog.name = "be_inspired"
  #blog.prefix = "ffarticles"
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

# the new how to section
activate :blog do |blog|
  blog.name = "how_to"
  #blog.prefix = "how_to"
  blog.generate_day_pages = false
  blog.generate_month_pages = false
  blog.generate_year_pages = false
  blog.permalink = "how_to/{title}.html"
  blog.sources = "how_tos/{title}.html"
  blog.layout = "blog_howto_post_layout"
end

activate :external_pipeline,
  name: :webpack,
  command: (build? ? "npm run webpack" : "npm run webpack-watch"),
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
