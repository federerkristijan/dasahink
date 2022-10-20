import React from 'react'

import MailchimpSubscribe from "react-mailchimp-subscribe"

// credits to https://github.com/revolunet/react-mailchimp-subscribe

// simplest form (only email)
const SimpleForm = () => <MailchimpSubscribe url={process.env.REACT_APP_MAILCHIMP_APP}/>

// use the render prop and your custom form
const SubscribeForm = () => (
  <MailchimpSubscribe
    url={process.env.REACT_APP_MAILCHIMP_APP}
    render={({ subscribe, status, message }) => (
      <div>
        <SimpleForm onSubmitted={formData => subscribe(formData)} />
        {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
        {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
        {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
      </div>
    )}
  />
)


export default SubscribeForm
