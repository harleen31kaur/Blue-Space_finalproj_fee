import React from 'react';
import './Food.css';


const LuxuryPage= () => {
  return (
    <div>


      <div className="background-food">
        <img src="https://bespokeindiatravel.co.uk/wp-content/uploads/2018/01/Luxury.jpg" alt="Art Background" />
        <div className="Food">
          <h1>Luxury</h1>
        </div>
      </div>
      <section className="food-section">
        <h2>Luxury Life</h2>
        <p>
        
        Home to several royal dynasties that enjoyed an opulent and ostentatious lifestyle, India is a land steeped in history. 
        Over the years, age-old cultures, traditions, arts, and practices have seamlessly blended with modern comforts, culminating
        in a regal experience for tourists who seek luxury. From its northernmost tip to its southernmost end, the country offers 
        numerous luxurious escapades that warrant a splurge. Spanning from the eastern corner to the western coast, India provides
        a plethora of luxe experiences, ranging from 
        rejuvenating beach getaways and luxurious desert oases to jungle jaunts and glorious journeys on cruises and trains.
          <br /><br />
          The diversity of a vast country like India is legendary, and its colorful culture is showcased beautifully through 
          the lens of luxury. If you wish to experience the gems of the jungle, why not do it as the regal Rajput royals did, 
          amidst the forests? For a journey through the interiors of the country, consider hopping on an elegant train for a ride
           to remember. Or perhaps you want to tee off and relax at some of the most scenic golf courses in the world. Whatever your 
           vacation desire, 
          India has the answer—one that’s laced with panache and designed to provide an unforgettable experience..
          <br /><br />
          India consistently ranks high among the world’s most regal getaways, with its 
          luxurious offerings never too far, no matter which corner of the country you visit.
        </p>
        <h2>Opulent Odysseys</h2>
        <p>
        Truly, the allure of luxury in India is irresistible, 
        promising a vacation that is as opulent and diverse as the country itself.
        </p>
      </section>
      <section className="food-gallery">
        <figure className="food-figure">
          <a href="#">
            <img src="luxury stays.jpg" alt="Stays" className="food-image" />
          </a>
          <figcaption className="food-caption">
            <h2>Stays</h2>
          </figcaption>
        </figure>
        <figure className="food-figure">
          <a href="#">
            <img src="luxury tents.jpg" alt="Tents" className="food-image" />
          </a>
          <figcaption className="food-caption">
            <h2>Tents</h2>
          </figcaption>
        </figure>
        <figure className="food-figure">
          <a href="#">
            <img src="luxury train.jpg" alt="Train" className="food-image" />
          </a>
          <figcaption className="food-caption">
            <h2>Train</h2>
          </figcaption>
        </figure>
        <figure className="food-figure">
          <a href="#">
            <img src="golf.jpg" alt="Golf" className="food-image" />
          </a>
          <figcaption className="food-caption">
            <h2>Golf</h2>
          </figcaption>
        </figure>
        <figure className="food-figure">
          <a href="#">
            <img src="river crusies.jpg" alt="River Crusies" className="food-image" />
          </a>
          <figcaption className="food-caption">
            <h2>River Crusies</h2>
          </figcaption>
        </figure>
        <figure className="food-figure">
          <a href="#">
            <img src="https://www.tigersafari.net/wp-content/uploads/2020/08/room-outside.jpg" alt="Lodges" className="food-image" />
          </a>
          <figcaption className="food-caption">
            <h2>Lodges</h2>
          </figcaption>
        </figure>
      </section>
    </div>
  );
};

export default LuxuryPage;