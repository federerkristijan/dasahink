import React from "react";

import MailchimpSubscribe from "react-mailchimp-subscribe";

// credits to https://github.com/revolunet/react-mailchimp-subscribe

// const SubscribeForm = () => {
//   return (
//     <div className="sub-form">
//       <MailchimpSubscribe url={process.env.REACT_APP_MAILCHIMP_URL} className="mailchimp" style={{ display: "flex", minWidth: "20vw"}}/>
//     </div>
//   )
// }

const SubscribeForm = () => {
  return;
  <>
    <div className="subscribeForm">
      <form
        action="https://dasahink.us7.list-manage.com/subscribe/post"
        method="POST"
        data-dashlane-rid="a08624bd94e0af3d"
        data-form-type="identity,newsletter"
      >
        <input type="hidden" name="u" value="33adc5afe6f7f43ff37d3ad0b" />
        <input type="hidden" name="id" value="39f79eca81" />

        <label for="b_name">Name: </label>
        <input type="text" name="b_name" tabindex="-1" value="" placeholder="Freddie" id="b_name" />

        <label for="b_email">Email: </label>
        <input type="email" name="b_email" tabindex="-1" value="" placeholder="youremail@gmail.com" id="b_email" />

      </form>
      <button className="customButton" onClick={submit}>
        Subscribe
      </button>
    </div>
  </>;
};

export default SubscribeForm;
