import React from 'react';
import './Spiritual.css';


const SpiritualPage = () => {
  return (
    <div>


      <div className="background-spiritual">
        <img src="Spiritual background.jpg" alt="Art Background" />
        <div className="Spiritual">
          <h1>Spiritual</h1>
        </div>
      </div>
      <section className="spiritual-section">
        <h2>Spirtuality</h2>
        <p>
        India is its billion people, and it is safe to say that these people define what spirituality 
        in India is. The most prominent religions in the country are Hinduism, Islam, Christianity, Buddhism, 
        Sikhism, and Jainism. Apart from these, there are several other schools of thought that contribute to the
         rich tapestry of Indian spirituality. The country's diverse religious landscape is a testament to its history 
         of tolerance, inclusivity, and cultural exchange. Spirituality in India is not just about religious practices; 
         it is deeply woven into the fabric of daily life. From the rituals performed at dawn to the festivals 
        that light up the night, spirituality manifests in countless forms across the subcontinent.
          <br /><br />
          India is filled with many spiritual destinations that should not be missed by anyone looking for
           the true Indian experience. These places, steeped in history and tradition, offer a glimpse into the country's soul. 
           Varanasi, one of the oldest living cities in the world, is a prime example. Here, the sacred Ganges River draws pilgrims
           from all over the world who come to perform rituals, seek purification, and experience the serene beauty of the ghats.
          <br /><br />
          These diverse spiritual destinations
           are open and welcoming to everyone, offering a unique and profound experience
            of India's spiritual essence.
        </p>
        <h2>Door To Divinity</h2>
        <p>
        From opulent temples and mosques to marvellous churches, resplendent gurudwaras and serene monasteries, India is the home of holiness.
        </p>
      </section>
      <section className="spiritual-gallery">
        <figure className="spiritual-figure">
          <a href="#">
            <img src="buddhism.jpg" alt="Buddhism" className="spiritual-image" />
          </a>
          <figcaption className="spiritual-caption">
            <h2>Buddhism</h2>
          </figcaption>
        </figure>
        <figure className="spiritual-figure">
          <a href="#">
            <img src="islam.jpg" alt="Islam" className="spiritual-image" />
          </a>
          <figcaption className="spiritual-caption">
            <h2>Islam</h2>
          </figcaption>
        </figure>
        <figure className="spiritual-figure">
          <a href="#">
            <img src="hinduism.jpg" alt="Hinduism" className="spiritual-image" />
          </a>
          <figcaption className="spiritual-caption">
            <h2>Hinduism</h2>
          </figcaption>
        </figure>
        <figure className="spiritual-figure">
          <a href="#">
            <img src="sikhism.jpg" alt="Sikhism" className="spiritual-image" />
          </a>
          <figcaption className="spiritual-caption">
            <h2>Sikhism</h2>
          </figcaption>
        </figure>
        <figure className="spiritual-figure">
          <a href="#">
            <img src="Jainism.jpg" alt="Jainism" className="spiritual-image" />
          </a>
          <figcaption className="spiritual-caption">
            <h2>Jainism</h2>
          </figcaption>
        </figure>
        <figure className="spiritual-figure">
          <a href="#">
            <img src="Christianity.jpg" alt="Christianity" className="spiritual-image" />
          </a>
          <figcaption className="spiritual-caption">
            <h2>Christianity</h2>
          </figcaption>
        </figure>
      </section>
    </div>
  );
};

export default SpiritualPage;