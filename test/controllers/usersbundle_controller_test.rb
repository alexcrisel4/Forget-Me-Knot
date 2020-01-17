require 'test_helper'

class UsersbundleControllerTest < ActionDispatch::IntegrationTest
  test "should get exec" do
    get usersbundle_exec_url
    assert_response :success
  end

  test "should get rails" do
    get usersbundle_rails_url
    assert_response :success
  end

  test "should get g" do
    get usersbundle_g_url
    assert_response :success
  end

  test "should get modle" do
    get usersbundle_modle_url
    assert_response :success
  end

  test "should get session" do
    get usersbundle_session_url
    assert_response :success
  end

end
