import React from 'react';
import './yoga.css';

const YogaPage = () => {
  return (
    <div>
      <div className="background-yoga">
        <img src="https://images.everydayhealth.com/images/healthy-living/fitness/all-about-yoga-mega-722x406.jpg" alt="Yoga Background" />
        <div className="yoga">
          <h1>Yoga</h1>
        </div>
      </div>
      <section className="yoga-section">
        <h2>Yoga and Wellness</h2>
        <p>
          Yoga and wellness in India are deeply rooted in ancient traditions that have been practiced for thousands of years, offering holistic approaches to physical, mental, and spiritual well-being. Yoga, originating from the Sanskrit word "yuj," meaning to unite, encompasses various physical postures (asanas), breath control (pranayama), and meditation techniques.
          <br /><br />
          These practices aim to harmonize the body, mind, and spirit, promoting overall health and balance. Rishikesh, often referred to as the "Yoga Capital of the World," attracts practitioners from across the globe who seek authentic learning experiences from renowned yoga schools and ashrams nestled along the serene banks of the Ganges River.
          <br /><br />
          India's wellness landscape extends beyond yoga to include Ayurveda, a traditional system of medicine that emphasizes the balance of body, mind, and spirit through natural therapies and lifestyle practices.
        </p>
        <h2>Yoga</h2>
        <p>
          This fusion of ancient wisdom and modern comfort allows visitors to experience profound relaxation and healing, reinforcing India's reputation as a premier destination for yoga and wellness.
        </p>
      </section>
      <section className="yoga-gallery">
        <figure className="yoga-figure">
          <a href="#">
            <img src="https://static.toiimg.com/photo/105941382.cms" alt="Yoga" className="yoga-image" />
          </a>
          <figcaption className="yoga-caption">
            <h2>Yoga</h2>
          </figcaption>
        </figure>
        <figure className="yoga-figure">
          <a href="#">
            <img src="https://assets.aboutamazon.com/dims4/default/f3acdd0/2147483647/strip/true/crop/1279x720+0+0/resize/1240x698!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F13%2F93%2Ffd28d0a94e85a5cb06c670e751d2%2Fblog2-1280x720.jpg" alt="Ayurveda" className="yoga-image" />
          </a>
          <figcaption className="yoga-caption">
            <h2>Ayurveda</h2>
          </figcaption>
        </figure>
        <figure className="yoga-figure">
          <a href="#">
            <img src="https://www.vedafive.com/wp-content/uploads/2020/05/Naturopathy-Treatment-for-Skin-Detox-Vitality-in-Rishikesh-Best-Retreat-in-India.jpg" alt="Naturopathy" className="yoga-image" />
          </a>
          <figcaption className="yoga-caption">
            <h2>Naturopathy</h2>
          </figcaption>
        </figure>
      </section>
    </div>
  );
};

export default YogaPage;
