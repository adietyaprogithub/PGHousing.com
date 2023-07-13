import "./propertyList.css";

const PropertyList = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img
          src="https://3.imimg.com/data3/IS/BV/MY-11016038/deluxe-ac-room-service-500x500.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Single AC Romms </h1>
          <h2>233 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://media-cdn.tripadvisor.com/media/photo-s/03/b3/a7/28/hotel-ankur.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Double AC Rooms </h1>
          <h2>2331 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://images.pexels.com/photos/430216/pexels-photo-430216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Apartments</h1>
          <h2>233 Apartments</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://images.pexels.com/photos/1743555/pexels-photo-1743555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Non-AC Rooms</h1>
          <h2>2331 Romms</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBJT17N_ICVDhkSmSiuxJkAVIMs6SmisvVLA&usqp=CAU"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Sharing Rooms </h1>
          <h2>233 hotels</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
