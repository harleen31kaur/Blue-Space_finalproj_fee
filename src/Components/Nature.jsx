import React from 'react';
import './Nature.css';


const NaturePage = () => {
  return (
    <div>


      <div className="background-nature">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/1200px-Altja_j%C3%B5gi_Lahemaal.jpg" alt="Art Background" />
        <div className="Nature">
          <h1>Nature</h1>
        </div>
      </div>
      <section className="nature-section">
        <h2>Nature Of India</h2>
        <p>
        From hauntingly beautiful snowy escapades to lush forests and hills of rolling green,
        from the endless golden beaches to the sapphire and emerald lakes embedded in the 
        landscape, the natural beauty of the Indian subcontinent is unparalleled. The unspoilt
        and unexplored terrains of the country leave one in awe of their breathtaking splendour.
        Moreover, the differences and contrasts of one region from another accentuate the appeal
        of these landscapes - be it the frigid cold deserts of Leh that call to the soul-searcher
        in you or the sun-drenched mystique desert dunes of Rajasthan that take you back to the 
        times of royals.
          <br /><br />
          Starting from the snow-capped Himalayas in the north, traversing the 
        deserts of Rajasthan, crossing the lush forests of Madhya Pradesh and then sailing in
        the expansive backwaters of Kerala, and finally diving into the pristine waters of the
        Andaman and Nicobar Islands, the journey is full of adventurous highlands and serene 
        plains and lowlands. A land boasting a diverse variety of flora and fauna, India is 
        also home to many national parks, wildlife sanctuaries, tiger reserves and biosphere 
        reserves, which offer enchanting wildlife sightings.
          <br /><br />
          From hill stations and lakes to beaches, here are all the natural retreats to include 
        in your itinerary while travelling from one end of the country to another.
        </p>
        <h2>Colours Of Nature</h2>
        <p>
        Mountains, beaches, rivers, lakes and deserts awe you with their natural splendour.
        </p>
      </section>
      <section className="nature-gallery">
        <figure className="nature-figure">
          <a href="#">
            <img src="https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/05/Revel-in-the-sheer-beauty-of-gorgeous-Indian-Lakes-Bhimtal-Lake-Image-1.jpg" alt="Lakes" className="nature-image" />
          </a>
          <figcaption className="nature-caption">
            <h2>Lakes</h2>
          </figcaption>
        </figure>
        <figure className="nature-figure">
          <a href="#">
            <img src="Beaches.jpg" alt="Beaches" className="nature-image" />
          </a>
          <figcaption className="nature-caption">
            <h2>Beaches</h2>
          </figcaption>
        </figure>
        <figure className="nature-figure">
          <a href="#">
            <img src="mountain.jpg" alt="mountain" className="nature-image" />
          </a>
          <figcaption className="nature-caption">
            <h2>Mountain</h2>
          </figcaption>
        </figure>
        <figure className="nature-figure">
          <a href="#">
            <img src="https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20191114140852/Aerial-view-of%E2%80%8B-Cinque-Island-Andaman-1024x768.jpg" alt="Island" className="nature-image" />
          </a>
          <figcaption className="nature-caption">
            <h2>Island</h2>
          </figcaption>
        </figure>
        <figure className="nature-figure">
          <a href="#">
            <img src="https://www.india.com/wp-content/uploads/2017/02/Khasi-Hills-1.jpg" alt="Forest" className="nature-image" />
          </a>
          <figcaption className="nature-caption">
            <h2>Forest</h2>
          </figcaption>
        </figure>
        <figure className="nature-figure">
          <a href="#">
            <img src="wildlife.jpg" alt="Wildlife" className="nature-image" />
          </a>
          <figcaption className="nature-caption">
            <h2>Wildlife</h2>
          </figcaption>
        </figure>
      </section>
    </div>
  );
};

export default NaturePage;