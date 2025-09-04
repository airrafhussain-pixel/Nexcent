import '../App.css';
function Updates() {
  return (
    <section className="updates">
      <div className="updates-header">
        <h2 className="updates-title">Caring is the new marketing</h2>
        <p className="updates-subtitle">
          The Nextcent blog is the best place to read about the latest membership insights, 
          trends and more. See who's joining the community, read about how our community 
          are increasing their membership income and lots more.
        </p>
      </div>

      <div className="updates-list">
        <div className="update-card">
          <img src="/image 18.png" alt="Safeguarding Processes" className="update-image" />
          <div className="update-content">
            <h3 className="update-heading">
              Creating Streamlined Safeguarding Processes with OneRen
            </h3>
            <p className="update-text">
              Learn how to safeguard your processes effectively and increase efficiency.
            </p>
            <button className="update-button">Read More</button>
          </div>
        </div>

        <div className="update-card">
          <img src="/image 19.png" alt="Safeguarding Responsibilities" className="update-image" />
          <div className="update-content">
            <h3 className="update-heading">
              What are your safeguarding responsibilities and how can you manage them?
            </h3>
            <p className="update-text">
              Understand responsibilities better and manage them with ease.
            </p>
            <button className="update-button">Read More</button>
          </div>
        </div>

        <div className="update-card">
          <img src="/image 20.png" alt="Triathlon Australia Membership" className="update-image" />
          <div className="update-content">
            <h3 className="update-heading">
              Revamping the Membership Model with Triathlon Australia
            </h3>
            <p className="update-text">
              Discover how Triathlon Australia revamped their membership model.
            </p>
            <button className="update-button">Read More</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Updates;
