require 'test_helper'

class StroikesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get stroikes_index_url
    assert_response :success
  end

end
