import { useState } from "react";
import "./searchItem.css";

const SearchItem = () => {

  const [data , setdata] = useState('Book Room  ')


  const handler = ()=> {
    setdata('Booked ')
    alert('Congraclation You Have Booked the Room ')
  }
  return (
    <div className="searchItem">
      <img
        src="https://plus.unsplash.com/premium_photo-1661963540233-94097ba21f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">PG Housing Room </h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Near to the Station </span>
        <span className="siSubtitle">
           Air conditioning
        </span>
        <span className="siFeatures">
          • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$90</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button onClick={handler} className="siCheckButton">{data}</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
