import '../App.css';
function Clients() {
  return (
    <div className="clients">
      <div className="clients-header">
        <h4 className="clients-title">Our Clients</h4>
        <p className="clients-subtitle">
          We have been working with some Fortune 500+ clients
        </p>
      </div>

      <div className="clients-logos">
        <img src="/Logo (2).png" className="client-logo" alt="Client Logo 1" />
        <img src="/Logo (3).png" className="client-logo" alt="Client Logo 2" />
        <img src="/Logo (4).png" className="client-logo" alt="Client Logo 3" />
        <img src="/Logo (5).png" className="client-logo" alt="Client Logo 4" />
        <img src="/Logo (6).png" className="client-logo" alt="Client Logo 5" />
        <img src="/Logo (7).png" className="client-logo" alt="Client Logo 6" />
        <img src="/Logo (8).png" className="client-logo" alt="Client Logo 7" />
      </div>
    </div>
  );
}

export default Clients;
