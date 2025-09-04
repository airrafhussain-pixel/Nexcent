import '../App.css';
function Achievements() {
  return (
    <div className="ach-div">
      <div className="ach-des">
        <h4 className="des-01">Helping a local</h4>
        <h4 className="des-02">business reinvent itself</h4>
      </div>

      <div className="achi-icons">
        <div className="icon-count">
          <img src="/Icon (7).png" className="icon" alt="members" />
          <p className="num">2,245,341</p>
          <p className="nam">Members</p>
        </div>

        <div className="icon-count">
          <img src="/Icon (4).png" className="icon" alt="clubs" />
          <p className="num">46,457</p>
          <p className="nam">Clubs</p>
        </div>

        <div className="icon-count">
          <img src="/Icon (5).png" className="icon" alt="event booking" />
          <p className="num">828,867</p>
          <p className="nam">Event Booking</p>
        </div>

        <div className="icon-count">
          <img src="/Icon (7).png" className="icon" alt="payments" />
          <p className="num">1,926,445</p>
          <p className="nam">Payments</p>
        </div>
      </div>
    </div>
  );
}

export default Achievements;
