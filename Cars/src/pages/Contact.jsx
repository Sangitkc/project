import React from "react";
import "./Contact.css";
import clock from '../assets/clock.jpeg'
import phone from '../assets/phone.png'
import email from '../assets/email.png'
import location from '../assets/location.png'
import whatsup from '../assets/whatsup.jpeg'
import youtbe from '../assets/youtube.jpeg'
import facebook from '../assets/facebook.jpeg'
import twitter from '../assets/twitter.png'
import instagram from '../assets/instagram.jpeg'

const Contact = () => {
  return (
    <div className="contact">
      <div className="head">
        <div className="one">
          <h1>Contact</h1>
        </div>
        <div className="two">
          <p>LET'S GET IN TOUCH</p>
        </div>
      </div>
      <div className="row">
        <div className="left">
          <div className="inner">
            <h2>Contact Information</h2>
            <div className="value">
              <div className="lg">
              <img src={location} alt="" />
                <p> Address:</p>
                
              </div>
              <div className="rg">
                <p>
                  WAREHOUSE NO. 369 – 370 DUBAI AUTO ZONE RAS EL KHOR INDUSTRIAL
                  2, DUBAI P.O.BOX 296200 DUBAI – UAE
                </p>
              </div>
            </div>
            <div className="value">
              <div className="lg">
              <img src={phone} alt="" />
                <p> Phone:</p>
               
              </div>
              <div className="rg">
                <p>+9864851012</p>
              </div>
            </div>
            <div className="value">
              <div className="lg">
                <img src={email} alt="" />
                <p> Email:</p>
              </div>
              <div className="rg">
                <p>mrsaku26@gmail.com</p>
              </div>
            </div>
            <div className="value">
              <div className="lg">
                <img src={clock} alt="" />
                <p> Front Desks:</p>
              </div>
              <div className="rg">
                <p>
                 <h4>
                 UAE, GCC & MIDDLE EAST </h4>+971 56 571 0111
                  oghazawi@menamotors.com <h4>EUROPE, FRENCH & WEST AFRICA</h4> +32 497
                  22 72 98 | +971 52 628 50 50 gayoub@menamotors.com <h4>
                  NORTHERN
                  AFRICA, EASTERN AFRICA & WESTERN ASIA </h4>+971 50 211 9035
                  abishtawi@menamotors.com
                </p>
              </div>
            </div>
            <div className="value">
              <div className="lg">
                <img src={clock} alt="" />
                <p> WareHouses:</p>
              </div>
              <div className="rg">
                <p>
                 <h4> UNITED ARAB EMIRATES</h4> GEFCO - Jafza View 18 – 1805 Downtown
                  Jebel Ali - Dubai United Arab Emirates

                   <h4>BELGIUM </h4>INTERNATIONAL
                  CAR OPERATORS HAANDORPWEG STREET - NO. 2B-9130 KALLO
                  (ANTWERPEN) ANTWERP - BELGIUM
                  
                   <h4>SOUTH AFRICA</h4> VEHICLES DELIVERY
                  SERVICES (VDS) VDS DURBAN UMLAAS YARD UMLAAS ROAD, EXIT 61,
                  N3, CAMPERDOWNSOUTH AFRICA
                </p>
              </div>
            </div>
            <div className="till">
              <h2>Stay Connected</h2>
              <div className="icons">
              <a href="https://x.com/?lang=en&mx=2" > <img src={twitter} /> </a>
              <a href="https://www.instagram.com/" > <img src={instagram} /> </a>
                <a href="https://www.facebook.com" > <img src={facebook} /> </a>
                <a href="https://www.instagram.com/" > <img src={instagram} /> </a>
                <a href="https://www.whatsapp.com/" > <img src={whatsup} /> </a>
              
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="title">
            <h2>Get in touch</h2>
          </div>
          <div className="form-group">
            <input type="text" placeholder="Full Name*" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Company Name" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Email" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Country" />
          </div>
          <div className="last">
            <input type="text" placeholder="Message" />
          </div>
          <div className="last1">
            <button type="submit">Leave A Message</button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Contact;
