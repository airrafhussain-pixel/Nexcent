import '../App.css';
function Community() {
  return (
    <div className="community">
      <div className="community-header">
        <h4 className="community-title">
          Manage your entire community<br></br>in a single system
        </h4>
        <p className="community-subtitle">Who is Nextcent suitable for?</p>
      </div>

      <div className="community-services">
        <div className="service-card">
          <img className="service-icon" src="/Icon.png" alt="Membership Organisations" />
          <h4 className="service-title">Membership Organisations</h4>
          <p className="service-desc">
            Our membership management software provides full automation of membership renewals and payments
          </p>
        </div>

        <div className="service-card">
          <img className="service-icon" src="/Icon (1).png" alt="National Associations" />
          <h4 className="service-title">National Associations</h4>
          <p className="service-desc">
            Our membership management software provides full automation of membership renewals and payments
          </p>
        </div>

        <div className="service-card">
          <img className="service-icon" src="/Icon (2).png" alt="Clubs and Groups" />
          <h4 className="service-title">Clubs and Groups</h4>
          <p className="service-desc">
            Our membership management software provides full automation of membership renewals and payments
          </p>
        </div>
      </div>
    </div>
  );
}

export default Community;
