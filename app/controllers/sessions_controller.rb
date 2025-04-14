class SessionsController < Devise::SessionsController
  def create
    self.resource = warden.authenticate(auth_options)
    if resource && resource.active_for_authentication?
      flash[:notice] = "تم تسجيل الدخول بنجاح!"
      sign_in(resource_name, resource)
      respond_to do |format|
        format.html { redirect_to after_sign_in_path_for(resource) }
        format.json { render json: { message: flash[:notice], redirect: after_sign_in_path_for(resource) } }
      end
    else
      flash[:alert] = "البريد الإلكتروني أو كلمة المرور غير صحيحة."
      respond_to do |format|
        format.html { redirect_to new_user_session_path }
        format.json { render json: { message: flash[:alert] }, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    super do
      flash[:notice] = "Signed out successfully!"
    end
  end
end