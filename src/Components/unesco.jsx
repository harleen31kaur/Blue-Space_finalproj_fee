import React from 'react';
import './Food.css';


const UnescoPage= () => {
  return (
    <div>


      <div className="background-food">
        <img src="UNESCO world heritage background.jpg" alt="Art Background" />
        <div className="Food">
          <h1>UNESCO World Heritage</h1>
        </div>
      </div>
      <section className="food-section">
        <h2>UNESCO World Heritage</h2>
        <p>
        
        
        India is home to several UNESCO World Heritage Sites, encompassing a rich tapestry of natural wonders and architectural marvels.
        These sites are not merely tourist attractions but are pivotal in preserving the country's diverse heritage. From the majestic
        Taj Mahal in Agra, an epitome of love and architectural brilliance, to the ancient ruins of Hampi that whisper tales of a 
        grand bygone era, these sites reflect the magnificence of India's history. Each location 
        offers a unique glimpse into the country's past, showcasing the artistry, culture, and ingenuity of various periods.
          <br /><br />
          Beyond historical grandeur, some of India's UNESCO sites serve as sanctuaries for biodiversity, providing safe 
          and lush havens for a multitude of species to flourish. The Western Ghats, a biodiversity hotspot, is teeming with 
          endemic flora and fauna, 
          making it a paradise for nature lovers and conservationists alike.
          <br /><br />
          Similarly, the Sundarbans, home to the largest mangrove forest and the elusive Bengal tiger, stands as a 
          testament to India's commitment to preserving its natural heritage. These natural sites are crucial for ecological 
          balance, offering a 
          refuge for wildlife and a breath of fresh air amidst rapidly urbanizing landscapes.
        </p>
        <h2> Destinations In India</h2>
        <p>
        As you explore India, make sure to visit these spectacular UNESCO World Heritage Sites. Each visit promises not 
        only an educational 
        journey through time and nature but also an immersive experience into the diverse fabric of India's heritage. 
        </p>
      </section>
      <section className="food-gallery">
        <figure className="food-figure">
          <a href="#">
            <img src="agra fort.jpg" alt="Agra" className="food-image" />
          </a>
          <figcaption className="food-caption">
            <h2>Agra</h2>
          </figcaption>
        </figure>
        <figure className="food-figure">
          <a href="#">
            <img src="ajanta caves.jpg" alt="Ajanta Caves" className="food-image" />
          </a>
          <figcaption className="food-caption">
            <h2>Ajanta Caves</h2>
          </figcaption>
        </figure>
        <figure className="food-figure">
          <a href="#">
            <img src="Bhimbetka Rock Shelters.jpg" alt="Bhimbetka" className="food-image" />
          </a>
          <figcaption className="food-caption">
            <h2>Bhimbetka</h2>
          </figcaption>
        </figure>
        <figure className="food-figure">
          <a href="#">
            <img src="bodhgaya.jpg" alt="Bodhgaya" className="food-image" />
          </a>
          <figcaption className="food-caption">
            <h2>Bodhgaya</h2>
          </figcaption>
        </figure>
        <figure className="food-figure">
          <a href="#">
            <img src="chatrpati shivaji.jpg" alt="Chatrapati Shivaji" className="food-image" />
          </a>
          <figcaption className="food-caption">
            <h2>Chatrapati Shivaji</h2>
          </figcaption>
        </figure>
        <figure className="food-figure">
          <a href="#">
            <img src="church.jpg" alt="Church" className="food-image" />
          </a>
          <figcaption className="food-caption">
            <h2>Church</h2>
          </figcaption>
        </figure>
      </section>
    </div>
  );
};

export default UnescoPage;