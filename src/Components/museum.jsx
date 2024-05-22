import React from 'react';
import './Food.css';


const MuseumPage= () => {
  return (
    <div>


      <div className="background-food">
        <img src="meuseum.jpg" alt="Art Background" />
        <div className="Food">
          <h1>Museum</h1>
        </div>
      </div>
      <section className="food-section">
        <h2>Museums in India</h2>
        <p>
        
        Museums in India offer a fascinating journey through the country's rich history, diverse culture, and artistic heritage. 
        The National Museum in New Delhi, one of the largest museums in India, houses an extensive collection of artifacts that
         span over 5,000 years. From the ancient relics of the Indus Valley Civilization to exquisite Mughal miniatures 
         and intricate textiles, 
        the museum provides a comprehensive overview of India's historical and cultural evolution.
          <br /><br />
          Another notable institution is the Indian Museum in Kolkata, the oldest museum in the country. It boasts a vast array 
          of exhibits, including rare antiques, fossils, and an
           impressive collection of ancient sculptures, reflecting India's profound archaeological and artistic achievements.
          <br /><br />
          Additionally, museums like the Kiran Nadar Museum of Art in New Delhi focus on promoting contemporary and modern art, providing a platform for emerging artists and fostering a deeper appreciation for the current artistic landscape in India.


        </p>
        <h2>Popular Museums In India</h2>
        <p>
        These regional museums not only highlight the unique cultural identities within India but also contribute to a richer understanding of the country's diverse heritage.
        </p>
      </section>
      <section className="food-gallery">
        <figure className="food-figure">
          <a href="#">
            <img src="https://images.moneycontrol.com/static-mcnews/2023/09/national-770x385.jpg?impolicy=website&width=770&height=431" alt="Delhi Museum" className="food-image" />
          </a>
          <figcaption className="food-caption">
            <h2>Delhi Museum</h2>
          </figcaption>
        </figure>
        <figure className="food-figure">
          <a href="#">
            <img src="https://static.toiimg.com/thumb/93500155/Albert-Hall-Museum-Jaipur.jpg?width=1200&height=900" alt="Jaipur Museum" className="food-image" />
          </a>
          <figcaption className="food-caption">
            <h2>Jaipur Museum</h2>
          </figcaption>
        </figure>
        <figure className="food-figure">
          <a href="#">
            <img src="https://www.tripsavvy.com/thmb/X4S4asQ-MUVW65QBM9Umpt1ntjE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-5209859341-b74a3e2ea1f842c7a2192fdd8f5e8af9.jpg" alt="Mumbai Museum" className="food-image" />
          </a>
          <figcaption className="food-caption">
            <h2>Mumbai Museum</h2>
          </figcaption>
        </figure>
        
      </section>
    </div>
  );
};

export default MuseumPage;