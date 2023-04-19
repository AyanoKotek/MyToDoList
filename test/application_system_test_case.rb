require "test_helper"

#Make sure drivers dont fail under parallel testing
Webdrivers::Chromedriver.update

class ApplicationSystemTestCase < ActionDispatch::SystemTestCase
  driven_by :selenium, using: :headless_chrome, screen_size: [1400, 1400]
end
