import React from 'react';
import './n_chandigarh.css';

const KeralaPage = () => {
  return (
    <div>
        {/* <div className="background-image-chd">
            <img src='https://images.unsplash.com/photo-1528460033278-a6ba57020470?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D'></img>
            
        </div> */}

      <div className="background-chd">
        <img src="https://i.makeagif.com/media/8-22-2017/i7BXb_.gif" alt="Kerala background" />
        <div className="chandigarh">
          <h1>Kerala</h1>
        </div>
      </div>
      <div className="content">
        <p>Kerala, located in southwestern India, is renowned for its lush landscapes, backwaters, and coastal beauty. Known as "God's Own Country," it boasts a rich cultural heritage, high literacy rates, and a strong emphasis on education and healthcare. The state is also famous for its traditional dance forms like Kathakali and its unique cuisine.
        </p>
      </div>

      <div className="container-chd">
        <div className="logo">
          <img src="https://i.pinimg.com/736x/ee/87/58/ee8758552972ad0bd401f182dacb6a44.jpg" alt="kerala logo" />
        </div>
        <div className="website">
          <h3>State Tourism Website: 
            <a href="https://www.keralatourism.org/">http://www.keralatourism.gov.in/</a>
          </h3>
        </div>
        <div className="map">
          <a href="http://www.keralatourism.gov.in/" target="_blank" rel="noopener noreferrer">
            <img src="https://static.vecteezy.com/system/resources/previews/000/440/480/original/vector-location-icon.jpg" alt="Chandigarh map" />
          </a>
        </div>
      </div>

      <h1 style={{ textAlign: 'center' }}>Explore Kerala</h1>
      <div className="bigmap">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d251482.54470023207!2d76.30093384999999!3d9.9825565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d514abec6bf%3A0xbd582caa5844192!2sKochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1716205541136!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <div className="content">
        <p>Kerala, in southwestern India, is celebrated for its scenic backwaters, verdant hills, and pristine beaches. Known for its high literacy rate and advanced healthcare system, the state also offers a rich cultural tapestry with traditional arts like Kathakali and Ayurveda practices.
        </p>
      </div>

      <h1 style={{ textAlign: 'center' }}>Here are Some of the Famous Places of Kerala</h1>

      <div className="cards">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="https://i.ytimg.com/vi/voZQ4xCS6fE/maxresdefault.jpg" alt="Kochi" style={{ width: '350px', height: '350px' }} />
            </div>
            <div className="flip-card-back">
              <h1>Kochi</h1>
              <p>Kochi, a vibrant port city in Kerala, is known for its historical significance and cosmopolitan culture. It features a blend of modernity and tradition, with attractions like the ancient Chinese fishing nets, Fort Kochi, and the bustling Marine Drive.
              </p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="https://media.istockphoto.com/id/511119924/photo/tea-plantations-and-river-in-hills-kerala-india.jpg?s=612x612&w=0&k=20&c=pYHem1q8SIdCC7t7pv3s6QM1ZrmU3nkCoSaEQMg8vqg=" alt="Munnar" style={{ width: '350px', height: '350px' }} />
            </div>
            <div className="flip-card-back">
              <h1>Munnar</h1>
              <p>Munnar, a picturesque hill station in Kerala, is renowned for its lush tea plantations, rolling hills, and cool climate. Nestled in the Western Ghats, it attracts tourists with its scenic beauty, rich biodiversity, and tranquil landscapes.</p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="https://s3.india.com/travel/wp-content/uploads/2017/05/Alleppey.jpg" alt="Alappuzha" style={{ width: '350px', height: '350px' }} />
            </div>
            <div className="flip-card-back">
              <h1>Alappuzha</h1>
              <p>Alappuzha, often called the Venice of the East, is known for its intricate network of backwaters, canals, and lagoons. Famous for its serene houseboat cruises and vibrant snake boat races, it offers a unique glimpse into Kerala's coastal lifestyle and rich cultural heritage.</p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="https://deih43ym53wif.cloudfront.net/thiruvananthapuram-india-shutterstock_498424870_54ec620099.jpeg" alt="Thiruvanthampuram" style={{ width: '350px', height: '350px' }} />
            </div>
            <div className="flip-card-back">
              <h1>Thiruvanthampuram</h1>
              <p>Thiruvananthapuram, the capital city of Kerala, is steeped in history and culture, with landmarks like the Padmanabhaswamy Temple, an architectural marvel. Renowned for its clean beaches, lush greenery, and vibrant festivals, it offers a blend of traditional charm and modern amenities.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default KeralaPage;