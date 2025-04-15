source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby file: ".ruby-version"

gem "rails", github: "rails/rails", branch: "main"
gem "propshaft"
gem "pg", "~> 1.1"
gem "puma", "~> 6.0"
gem "importmap-rails"
gem "turbo-rails"
gem "stimulus-rails"
gem "tailwindcss-rails"
gem "jbuilder"
gem "redis", "~> 4.0"
gem "tzinfo-data", platforms: %i[mswin mswin64 mingw x64_mingw jruby]
gem "bootsnap", require: false
gem "image_processing", "~> 1.2"
gem "devise"
gem "good_job"
gem "inline_svg"
gem "pagy"
gem "rss", github: "ruby/rss"
gem "nice_partials", github: "bullet-train-co/nice_partials"
gem 'motor-admin'
group :development, :test do
  gem "debug", platforms: %i[mri mswin mswin64 mingw x64_mingw]
  gem "factory_bot_rails"
  gem "faker"
  gem "standard"
end

group :development do
  gem "web-console"
  gem "letter_opener"
end

group :test do
  gem "action_dispatch-testing-integration-capybara",
    github: "thoughtbot/action_dispatch-testing-integration-capybara", tag: "v0.1.0",
    require: "action_dispatch/testing/integration/capybara/minitest"
  # Use system testing [https://guides.rubyonrails.org/testing.html#system-testing]
  gem "capybara"
  gem "capybara_accessible_selectors", github: "citizensadvice/capybara_accessible_selectors", branch: "main"
  gem "selenium-webdriver"
end
