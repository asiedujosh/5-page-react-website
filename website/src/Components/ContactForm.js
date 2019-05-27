import React from 'react'


const ContactForm = () => {

    return(
      <div className = "contactForm">
      <h4>Send Us A Message</h4>
      <form>
					<div className = "input-field">
          <i className = "material-icons prefix">person</i>
          <input type = "text" id = "name" name = "name" />
          <label htmlFor = "name">Your Name</label>
					</div>

					<div className = "input-field">
						<i className = "material-icons prefix">email</i>
						<input type = "email" id = "email" name = "email" />
						<label for = "email">Your Email</label>
					</div>

          <div className = "input-field">
						<i className = "material-icons prefix">phone</i>
						<input type = "text" id = "tel" name = "phone" />
						<label htmlFor = "phone">Your Phone</label>
					</div>


					<div className = "input-field center">
						<button className = "btn-large blue-grey darkekn-4">Submit</button>
					</div>
			</form>
		</div>
    )
  }


export default ContactForm
