import styles from "../styles/contact/Contact.module.css";

const contact = () => {
  return (
    <div className={styles.contact_container}>
      <div className={styles.contact_card}>
        <form
          name="contact v2"
          method="POST"
          data-netlify="true"
          submit="submit"
        >
          <input type="hidden" name="form-name" value="contact v2" />
          <label htmlFor="name">Név:</label>
          <input type="text" name="name" placeholder="Név" />
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" placeholder="Email" />
          <label htmlFor="phone">Telefonszám:</label>
          <input type="text" name="phone" placeholder="Telefonszám" />
          <label htmlFor="message">Üzenet:</label>
          <textarea
            placeholder="Minta üzenet: 
            'Tisztel GyMoClock, szeretnék érdeklődni: 
          Mennyi idő egy egyedi eszköz legyártása? 
          Az árban benne van felszerelés-kitelepítés is?' "
            style={{ width: "100%" }}
            name="message"
            rows="10"
          ></textarea>
          <button type="submit" className={styles.submit}>
            ELKÜLD!
          </button>
        </form>
      </div>
      <div className={styles.contact_map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d172572.0975870283!2d18.990220016958983!3d47.48136018836486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741c334d1d4cfc9%3A0x400c4290c1e1160!2sBudapest%2C%20Magyarorsz%C3%A1g!5e0!3m2!1shu!2sat!4v1667740143390!5m2!1shu!2sat"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default contact;
