import React from "react";

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

          <div className="submit_container clear">
            <input
              type="submit"
              className="subscribeButton"
              name="submit"
              value="Subscribe"
              data-form-type="action,subscribe"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default SubscribeForm;
