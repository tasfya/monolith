class ContactsController < ApplicationController
  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(contact_params)
    
    if @contact.save
      # Optional: Add mailer functionality here to send the contact form
      # ContactMailer.contact_email(@contact).deliver_now
      
      redirect_to thank_you_path, notice: 'Your message has been sent successfully!'
    else
      render :new, status: :unprocessable_entity
    end
  end
  
  def thank_you
    # This action will render the thank_you.html.erb view
  end
  
  private
  
  def contact_params
    params.require(:contact).permit(:name, :email, :message)
  end
end
