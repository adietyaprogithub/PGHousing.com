import { useState } from "react";
import "./mailList.css";

const MailList = () => {
  const [data, setData] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const changeHandler = (e) => {
    setData(e.target.value);
  };

  const clickHandler = () => {
    alert(`You have successfully subscribed: ${data}`);
    setData('');
    setSubscribed(true);
  };

  return (
    <div className="mail">
      <h1 className="mailTitle">Save time, save money!</h1>
      <span className="mailDesc">Sign up and we'll send the best deals to you</span>
      <div className="mailInputContainer">
        <input
          type="email"
          required
          placeholder="Your Email"
          onChange={changeHandler}
          value={data}
          readOnly={subscribed} // Make the input readOnly if already subscribed
        />
        <button onClick={clickHandler} disabled={subscribed}>
          {subscribed ? "Subscribed" : "Subscribe"}
        </button>
      </div>
    </div>
  );
};

export default MailList;
