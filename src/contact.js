
function Contact() {
  return (
    <div className="contact-page">

      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you!</p>
      </div>

      <div className="contact-container">

       
        <div className="contact-info">

          <h2>Get In Touch</h2>

          <p>
            Have a question, feedback, or need help with your order?
            Feel free to contact us.
          </p>

          <div className="info-box">
            <span>📍</span>
            <div>
              <h3>Our Location</h3>
              <p>Madurai, Tamil Nadu</p>
            </div>
          </div>

          <div className="info-box">
            <span>📞</span>
            <div>
              <h3>Phone</h3>
              <p>+91 98765 43210</p>
            </div>
          </div>

          <div className="info-box">
            <span>✉️</span>
            <div>
              <h3>Email</h3>
              <p>fastfoodhub@gmail.com</p>
            </div>
          </div>

          <div className="info-box">
            <span>🕐</span>
            <div>
              <h3>Opening Hours</h3>
              <p>10:00 AM - 10:00 PM</p>
            </div>
          </div>

        </div>


        {/* Right Side */}
        <div className="contact-form">

          <h2>Send Us a Message</h2>

          <form>

            <label>Name</label>
            <input
              type="text"
              placeholder="Enter your name"
            />

            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
            />

            <label>Message</label>
            <textarea
              placeholder="Write your message..."
              rows="5"
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Contact;