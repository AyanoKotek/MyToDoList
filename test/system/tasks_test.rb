require "application_system_test_case"

class TasksTest < ApplicationSystemTestCase
  test "visiting the index" do
    visit root_url

    assert_selector "h1", text: "My Tasks"
    assert_selector ".task-card", count: Task.count
  end
end
