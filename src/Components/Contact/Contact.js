import React from "react";
import "./Contact.css";
import AdressOnMap from "./Map/Map";

function Contact() {
  return (
    <div className="contact">
      <div className="contactTekst">
        <h4>Openingstijden:</h4>
        <table align="center" className="tijden">
          <tbody>
            <tr>
              <td>Maandag:</td>
              <td>10:00 - 20:00</td>
            </tr>
            <tr>
              <td>Dinsdag:</td>
              <td>10:00 - 20:00</td>
            </tr>
            <tr>
              <td>Woensdag:</td>
              <td>10:00 - 20:00</td>
            </tr>
            <tr>
              <td>Donderdag:</td>
              <td>10:00 - 20:00</td>
            </tr>
            <tr>
              <td>Vrijdag:</td>
              <td>10:00 - 20:00</td>
            </tr>
            <tr>
              <td>Zaterdag:</td>
              <td>10:00 - 20:00</td>
            </tr>
            <tr>
              <td>Zondag:</td>
              <td>Gesloten</td>
            </tr>
          </tbody>
        </table>
        <p>
          <br /> Boterdiepstraat 95 <br />
          3000 TA Rotterdam <br /> 010 - 1234567
          <br /> Restaurant@site.nl
        </p>
      </div>
      <div className="contactKaart">
        <AdressOnMap />
      </div>
    </div>
  );
}

export default Contact;
