import "../styles/contacts.css";
import MyContactsPic from "/public/mobile.gif";

function Contacts() {
  return (
    <>
      <div id="contacts">
        <div className="contacts-container">
          <div className="left-contacts-section">
            <h2>Contact Me</h2>
            <div className="contact-form">
              <form action="https://formspree.io/f/xyyqaonk" method="post">
                <input
                  type="text"
                  name="Name"
                  placeholder="Your name"
                  required
                />
                <input
                  type="email"
                  name="Email"
                  placeholder="Your email"
                  required
                />
                <textarea name="Message" rows="10" placeholder="Your message" />
                <button type="submit" className="button">
                  Send &nbsp;<i className="fa-solid fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
          <div className="right-contacts-section">
            <img src={MyContactsPic} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacts;
