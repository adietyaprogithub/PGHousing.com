import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp" id="Rooms">
      <div className="fpItem">
        <img
          src="https://thumbs.dreamstime.com/b/hostel-dormitory-beds-arranged-room-98117029.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Pune PGHousing.com</span>
        <span className="fpCity">Maharashter</span>
        <span className="fpPrice">Starting from $50/Month</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://plus.unsplash.com/premium_photo-1661963540233-94097ba21f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Mumbai PGHousing.com</span>
        <span className="fpCity">Maharashtra</span>
        <span className="fpPrice">Starting from $140</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://images.unsplash.com/photo-1623625434462-e5e42318ae49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Ahmdabad PGHousing.com</span>
        <span className="fpCity">Gujrat</span>
        <span className="fpPrice">Starting from $70/Month</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Bengaluru PGHousing.com</span>
        <span className="fpCity">Karanataka</span>
        <span className="fpPrice">Starting from $70/Month</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
