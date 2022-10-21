import React from 'react'

import MailchimpSubscribe from "react-mailchimp-subscribe"

// credits to https://github.com/revolunet/react-mailchimp-subscribe

// const SubscribeForm = () => {
//   return (
//     <div className="sub-form">
//       <MailchimpSubscribe url={process.env.REACT_APP_MAILCHIMP_URL} className="mailchimp" style={{ display: "flex", minWidth: "20vw"}}/>
//     </div>
//   )
// }

const SubscribeForm = ({ status, message, onValidated }) => {
  let email;
  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
    });

  return (
    <div className="customForm">
      <input className="customInput"
        ref={node => (email = node)}
        type="email"
      />
      <button className="customButton" onClick={submit}>
        Subscribe
      </button>
    </div>
  );
};

export default SubscribeForm
