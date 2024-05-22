import React from 'react';
import './n_chandigarh.css';

const LakshadweepPage = () => {
  return (
    <div>
        {/* <div className="background-image-chd">
            <img src='https://images.unsplash.com/photo-1528460033278-a6ba57020470?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D'></img>
            
        </div> */}

      <div className="background-chd">
        <img src="https://img.etimg.com/thumb/width-1600,height-900,imgsize-808858,resizemode-75,msid-106689775/news/how-to/planning-a-trip-to-lakshadweep-heres-a-complete-guide-on-how-to-reach-by-sea-or-air-apply-for-permits.jpg" alt="Lakshadweep background" />
        <div className="chandigarh">
          <h1>Lakshadweep</h1>
        </div>
      </div>
      <div className="content">
        <p>Lakshadweep, an archipelago off the southwestern coast of India, is renowned for its stunning coral reefs, crystal-clear waters, and pristine beaches. This group of 36 islands offers a tranquil paradise for snorkeling, diving, and experiencing unique marine life.
        </p>
      </div>

      <div className="container-chd">
        <div className="logo">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJmBHJcwFfYIxEtXAhwiqsIinf6oj7fvWaDvfB9lmCww&s" alt="lakshadweep logo" />
        </div>
        <div className="website">
          <h3>State Tourism Website: 
            <a href="https://lakshadweep.gov.in/tourism/tourist-packages/">http://www.lakshadweeptourism.gov.in/</a>
          </h3>
        </div>
        <div className="map">
          <a href="http://www.lakshadweeptourism.gov.in/" target="_blank" rel="noopener noreferrer">
            <img src="https://static.vecteezy.com/system/resources/previews/000/440/480/original/vector-location-icon.jpg" alt="Chandigarh map" />
          </a>
        </div>
      </div>

      <h1 style={{ textAlign: 'center' }}>Explore Lakshadweep</h1>
      <div className="bigmap">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4024288.6403101017!2d72.34346559607764!3d9.936506073242889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b9fcd65cae4973d%3A0x17bd7416842ce9aa!2sLakshadweep!5e0!3m2!1sen!2sin!4v1716210165196!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <div className="content">
        <p>Lakshadweep, a tropical archipelago in the Arabian Sea, comprises 36 islands known for their exceptional biodiversity, coral reefs, and marine life. The islands offer serene environments perfect for water sports, with a focus on sustainable tourism to preserve their natural beauty and ecological balance.
        </p>
      </div>

      <h1 style={{ textAlign: 'center' }}>Here are Some of the Famous Places of  Lakshadweep</h1>

      <div className="cards">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="https://www.holidify.com/images/cmsuploads/compressed/7543502394_1d22cbd3f0_b_20170423194400.jpg" alt="Kochi" style={{ width: '350px', height: '350px' }} />
            </div>
            <div className="flip-card-back">
              <h1>Minicoy Island</h1>
              <p>Minicoy Island, part of the Lakshadweep archipelago, is renowned for its vibrant coral reefs, white sandy beaches, and a historic lighthouse offering panoramic views. The island is unique for its distinct Maldivian culture, language, and traditional boat-building techniques.
              </p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="https://www.holidify.com/images/cmsuploads/compressed/3184673264_7e853a1ca8_b_20170423200100.jpg" alt="Munnar" style={{ width: '350px', height: '350px' }} />
            </div>
            <div className="flip-card-back">
              <h1>Agatti Island</h1>
              <p>
Agatti Island, located in the Lakshadweep archipelago, is celebrated for its breathtaking turquoise lagoons, coral reefs, and pristine beaches. It serves as the gateway to Lakshadweep, offering opportunities for water sports like snorkeling, scuba diving, and kayaking amidst stunning marine biodiversity.</p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="https://media.holidify.com/images/cmsuploads/compressed/8103_20240502154027.jpg" alt="Alappuzha" style={{ width: '350px', height: '350px' }} />
            </div>
            <div className="flip-card-back">
              <h1>Kalpeni Island</h1>
              <p>Kalpeni Island, part of the Lakshadweep archipelago, is renowned for its scenic beauty, with turquoise blue lagoons, coral reefs, and pristine beaches. It offers a tranquil escape for tourists seeking relaxation, water sports, and the opportunity to explore the rich marine life in its crystal-clear waters.</p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="https://www.holidify.com/images/cmsuploads/compressed/619_20200720091415.jpg" alt="Thiruvanthampuram" style={{ width: '350px', height: '350px' }} />
            </div>
            <div className="flip-card-back">
              <h1>Kavaratti</h1>
              <p>Kavaratti, the capital of Lakshadweep, is known for its serene beaches, coral reefs, and picturesque lagoons. With its laid-back atmosphere and stunning natural beauty, it's a perfect destination for leisurely beach vacations and underwater adventures like snorkeling and diving.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LakshadweepPage;