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
end

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
