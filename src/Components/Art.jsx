import React from 'react';
import './Art.css';

const ArtPage = () => {
  return (
    <div>


      <div className="background-art">
        <img src="https://images.saymedia-content.com/.image/t_share/MTc1MjY4OTc0OTQ5OTAxNjk0/art-forms-of-india-that-have-survived-generations.jpg" alt="Art Background" />
        <div className="Art">
          <h1>Art</h1>
        </div>
      </div>
      <section className="art-section">
        <h2>Art In India</h2>
        <p>
          The land where classical melodies merge seamlessly with a mesmerising mosaic of
          exquisite paintings, ancient weaves and other handicrafts, divine dance forms,
          fascinating festivals and scintillating sculptures, India is a vibrant potpourri
          of arts and crafts. With each of its states and union territories bursting with
          ethnic flavours that multiply at every turn, the country sparkles with vitality and vivacity.
          <br /><br />
          Be it the gorgeous and remarkably intricate Bidriware in Bidar or the beautiful
          pink-kissed meenakari jewellery of Agra city, the roots of these crafts are
          embedded in various eras of history. While the premium heavy-weight silk Kanjeevaram
          sarees of Kanchipuram found a humble beginning during the reign of the Pallava kings
          (275 CE to 897 CE), the chikankari embroidery of Lucknow is said to be the endowment
          of Mughal empress, Nur Jahan, in the 17th century, who herself was a master of the craft.
          <br /><br />
          To savour the nuances of India's diverse cultural palate, deep dive into some of the most
          awe-inspiring archives of the country's arts and crafts.
        </p>
        <h2>Colours Of Culture</h2>
        <p>
          From splendid paintings to beautiful wood crafts and textiles, India resounds with a rich and unique heritage.
        </p>
      </section>
      <section className="art-gallery">
        <figure className="art-figure">
          <a href="#">
            <img src="Dance form.jpg" alt="Dance Form" className="art-image" />
          </a>
          <figcaption className="art-caption">
            <h2>Dance Form</h2>
          </figcaption>
        </figure>
        <figure className="art-figure">
          <a href="#">
            <img src="Textiles.jpg" alt="Textiles" className="art-image" />
          </a>
          <figcaption className="art-caption">
            <h2>Textiles</h2>
          </figcaption>
        </figure>
        <figure className="art-figure">
          <a href="#">
            <img src="Musical Form.jpg" alt="Musical Form" className="art-image" />
          </a>
          <figcaption className="art-caption">
            <h2>Musical Form</h2>
          </figcaption>
        </figure>
        <figure className="art-figure">
          <a href="#">
            <img src="Fair and festivals.jpg" alt="Fair and Festivals" className="art-image" />
          </a>
          <figcaption className="art-caption">
            <h2>Fair and Festivals</h2>
          </figcaption>
        </figure>
        <figure className="art-figure">
          <a href="#">
            <img src="Paintings.jpg" alt="Paintings" className="art-image" />
          </a>
          <figcaption className="art-caption">
            <h2>Paintings</h2>
          </figcaption>
        </figure>
        <figure className="art-figure">
          <a href="#">
            <img src="Cinema.jpg" alt="Cinema" className="art-image" />
          </a>
          <figcaption className="art-caption">
            <h2>Cinema</h2>
          </figcaption>
        </figure>
      </section>
    </div>
  );
};

export default ArtPage;

