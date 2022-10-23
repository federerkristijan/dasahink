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
  return (
    <>
      <div className="subscribeForm">
        <form
          action={process.env.REACT_APP_MAILCHIMP_URL}
          method="POST"
          data-form-type="identity,newsletter"
        >
          {/* u & id */}
          <input type="hidden" name="u" value="33adc5afe6f7f43ff37d3ad0b" />
          <input type="hidden" name="id" value="39f79eca81" />

          {/* email */}
          {/* <input
            type="email"
            name="33adc5afe6f7f43ff37d3ad0b"
            tabIndex="-1"
            placeholder="youremail@gmail.com"
            id="39f79eca81"
          /> */}

          {/* merge */}
          <input
            type="email"
            name="email"
            id="39f79eca81"
            size="25"
            defaultValue=""
            data-kwimpalastatus="alive"
            data-kwimpalaid="1666363758386-0"
            data-form-type="email"
          ></input>
        </form>
        <div className="submit_container clear">
          <input
            type="submit"
            className="formEmailButton"
            name="submit"
            value="Subscribe"
            data-form-type="action,subscribe"
          />
        </div>
      </div>
    </>
  );
};

export default SubscribeForm;
