import '../App.css';
function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1 className="hero-title">
          Lessons and insights<br></br> from 8 years
        </h1>
        <p className="hero-subtitle">
          Where to grow your business as a photographer: site or social media?
        </p>
        <button className="hero-button">Register</button>
      </div>

      <div className="hero-illustration">
        <img
          src="/Illustration.png"
          alt="Business growth illustration"
          className="hero-image"
        />
      </div>
    </section>
  );
}

export default HeroSection;
