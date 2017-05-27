require 'test_helper'

class MechanikControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get mechanik_index_url
    assert_response :success
  end

end
