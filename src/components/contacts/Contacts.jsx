import "./contacts.css";
import { useTranslation } from "react-i18next";
import MyContactsVid from "/ghost.mp4";
import { FaPaperPlane } from "react-icons/fa";

function Contacts() {
  const { t } = useTranslation("global");

  return (
    <>
      <div id="contacts">
        <div className="contacts-container">
          <div className="left-contacts-section">
            <h2>{t("contacts.title")}</h2>
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
                  {t("contacts.button")} &nbsp;
                  <i>
                    <FaPaperPlane />
                  </i>
                </button>
              </form>
            </div>
          </div>
          <div className="right-contacts-section">
            <video autoPlay loop muted>
              <source src={MyContactsVid} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacts;
