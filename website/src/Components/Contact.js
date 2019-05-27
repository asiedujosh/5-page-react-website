import React, {Component} from 'react'
import ContactForm from './ContactForm.js'
import M from "materialize-css";


class Contact extends Component{

  componentDidMount() {
        M.AutoInit();
    }
    render(){
  return(
    <div className = "contact">
    <div className = "contact_body">
    <h2>Contact</h2>
    <div className = "row">
    <div className = "col s12 m6">
    <div className = "side1">
    Lorem ipsum dolor sit amet, eos id eros facer facete.
    Partem ancillae propriae ei nam, cu qui debitis detracto.
    Nec dolorum facilis expetenda ea, has at elit consequuntur.
    In duo augue semper dolorum. Ad per harum aperiri.
    Intellegat sadipscing qui ad, habemus tibique at est.
    Lorem ipsum dolor sit amet, eos id eros facer facete.
    Partem ancillae propriae ei nam, cu qui debitis detracto.
    Nec dolorum facilis expetenda ea, has at elit consequuntur.
    In duo augue semper dolorum. Ad per harum aperiri.
    Intellegat sadipscing qui ad, habemus tibique at est.
    </div>
    </div>
    <div className = "col s12 m6">
    <ContactForm/>
    </div>
    </div>
    <div className = "thank">Thank You</div>
    </div>
    </div>
  )
}

}
export default Contact
