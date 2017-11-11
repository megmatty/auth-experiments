import React from 'react';
import ContactForm from './ContactForm';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { registerUser } from '../../actions/auth';

class ContactPage extends React.Component {
  submit = (values) => {
    // print the form values to the console
    console.log(values);
    this.props.registerUser(values);
  }
  render() {
    return (
      <ContactForm onSubmit={this.submit} />
    )
  }
}

const mapStateToProps = state => ({
  
})

const mapDispatchToProps = dispatch => bindActionCreators({
  registerUser
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactPage)