

import React from 'react';
import './crafted.css';

const CraftedPage = () => {
  return (
    <div>
      <div className="background-crafted">
        <img src="crafted in india background.jpg" alt="Crafted in India Background" />
        <div className="crafted">
          <h1>Crafted in India</h1>
        </div>
      </div>
      <section className="crafted-section">
        <h2>Craftmanship</h2>
        <p>
          Home is where the art is, and nowhere is this more evident than in the diverse and vibrant crafts of India. 
          Each region of the country contributes its unique artistic flair, infusing interiors with color, style, and elegance. 
          From the intricate embroidery of Gujarat to the delicate weavings of Assam, the craftsmanship of India transforms homes 
          into living galleries. Artisans from various states bring their centuries-old traditions to modern spaces, creating a blend
          of heritage and contemporary design. These crafts not only 
          beautify interiors but also tell stories of their origins, reflecting the cultural richness and diversity of India.
          <br /><br />
          In Rajasthan, for example, the art of block printing adds a rustic yet sophisticated charm to fabrics and furnishings. 
          Artisans in Jaipur skillfully carve intricate patterns onto wooden blocks, which are then used to imprint vibrant designs
          onto textiles. This ancient technique has been passed down through generations and continues to thrive in both local 
          markets and international arenas. 
          Similarly, in the southern state of Tamil Nadu, the tradition of Tanjore painting brings opulence to home decor.
          <br /><br />
          Moreover, exploring these crafts provides a deeper understanding of the cultural and social fabric of India, 
          highlighting how traditional skills are adapted to contemporary tastes. Thus, the crafts of India not only enhance
          the beauty of interiors but also preserve and celebrate the rich heritage of the nation.
        </p>
        <h2>Craftsmanship Is Everywhere</h2>
        <p>
          Craftsmanship is everywhere, infusing every corner of our lives with the rich heritage and 
          vibrant creativity of artisans from around the world.
        </p>
      </section>
      <section className="crafted-gallery">
        <figure className="crafted-figure">
          <a href="#">
            <img src="entertainment.jpg" alt="Entertainment" className="crafted-image" />
          </a>
          <figcaption className="crafted-caption">
            <h2>Entertainment</h2>
          </figcaption>
        </figure>
        <figure className="crafted-figure">
          <a href="#">
            <img src="wear.jpg" alt="Clothes" className="crafted-image" />
          </a>
          <figcaption className="crafted-caption">
            <h2>Clothes</h2>
          </figcaption>
        </figure>
        <figure className="crafted-figure">
          <a href="#">
            <img src="decorate.jpg" alt="Decoration" className="crafted-image" />
          </a>
          <figcaption className="crafted-caption">
            <h2>Decoration</h2>
          </figcaption>
        </figure>
        <figure className="crafted-figure">
          <a href="#">
            <img src="https://authindia.com/wp-content/uploads/2023/02/Rajasthan-Pottery-8.jpg" alt="Pottery" className="crafted-image" />
          </a>
          <figcaption className="crafted-caption">
            <h2>Pottery</h2>
          </figcaption>
        </figure>
      </section>
    </div>
  );
};

export default CraftedPage;
