import React from 'react';
import './n_chandigarh.css';

const TamilnaduPage = () => {
  return (
    <div>
        {/* <div className="background-image-chd">
            <img src='https://images.unsplash.com/photo-1528460033278-a6ba57020470?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D'></img>
            
        </div> */}

      <div className="background-chd">
        <img src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFtaWxuYWR1fGVufDB8fDB8fHww" alt="Tamilnadu background" />
        <div className="chandigarh">
          <h1>Tamilnadu</h1>
        </div>
      </div>
      <div className="content">
        <p>Tamil Nadu, located in southern India, is renowned for its rich cultural heritage, classical arts, and ancient temples, including the majestic Brihadeeswarar Temple in Thanjavur. The state is also famous for its vibrant festivals, flavorsome cuisine, and scenic landscapes, such as the Nilgiri Hills and Marina Beach. With a strong emphasis on education and industry, Tamil Nadu is a dynamic hub of commerce, technology, and tradition.
        </p>
      </div>

      <div className="container-chd">
        <div className="logo">
          <img src="https://www.tamilnadutourism.tn.gov.in/img/logo.webp" alt="Tamilnadu logo" />
        </div>
        <div className="website">
          <h3>State Tourism Website: 
            <a href="https://www.tamilnadutourism.tn.gov.in/">http://www.tamilnadutourism.gov.in/</a>
          </h3>
        </div>
        <div className="map">
          <a href="http://www.andrapradeshtourism.gov.in/" target="_blank" rel="noopener noreferrer">
            <img src="https://static.vecteezy.com/system/resources/previews/000/440/480/original/vector-location-icon.jpg" alt="Chandigarh map" />
          </a>
        </div>
      </div>

      <h1 style={{ textAlign: 'center' }}>Explore Tamilnadu</h1>
      <div className="bigmap">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248756.07885882704!2d80.20901174999999!3d13.04752545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1716212789945!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <div className="content">
        <p>Tamil Nadu, a state in southern India, boasts a rich tapestry of history, culture, and tradition, evident in its classical music, dance, and literature. Renowned for its architectural marvels like the Meenakshi Temple and its contributions to Indian cinema, Tamil Nadu offers a vibrant blend of ancient heritage and modern dynamism.
        </p>
      </div>

      <h1 style={{ textAlign: 'center' }}>Here are Some of the Famous Places of Tamilnadu</h1>

      <div className="cards">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOlTfUpW9F4UOLoQaxvW33E3Xe7PBHmcPOzrpkzUDFbA&s" alt="Kochi" style={{ width: '350px', height: '350px' }} />
            </div>
            <div className="flip-card-back">
              <h1>Chennai</h1>
              <p>Chennai, the capital city of Tamil Nadu, is a vibrant metropolis known for its rich cultural heritage, bustling streets, and dynamic blend of tradition and modernity. Renowned for landmarks like Marina Beach, Kapaleeshwarar Temple, and the San Thome Basilica, Chennai is also a major hub for education, healthcare, and the thriving Tamil film industry, reflecting its significance as a cultural and economic powerhouse in South India.
              </p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNs5ygnMCniEfgnbeg5pmMf6W4ZgU-fRLWAcAR9aXMmQ&s" alt="Munnar" style={{ width: '350px', height: '350px' }} />
            </div>
            <div className="flip-card-back">
              <h1>ooty</h1>
                <p>
                Ooty, nestled in the Nilgiri Hills of Tamil Nadu, is a picturesque hill station renowned for its scenic beauty, tea gardens, and pleasant climate. Popularly known as the "Queen of Hill Stations," it offers a serene escape with attractions like the Ooty Lake, Botanical Gardens, and the Nilgiri Mountain Railway, making it a favorite destination for nature lovers and adventure seekers.
                </p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/71/bf/0e/madurai-meenakshi-temple.jpg?w=1000&h=1000&s=1" alt="Alappuzha" style={{ width: '350px', height: '350px' }} />
            </div>
            <div className="flip-card-back">
              <h1>Madurai</h1>
              <p>Madurai, one of the oldest continuously inhabited cities in the world, is steeped in history, culture, and spirituality. Renowned for the iconic Meenakshi Amman Temple, it is a major pilgrimage center and a hub of Tamil Nadu's art, literature, and cuisine, reflecting a rich cultural legacy that spans over millennia.
                </p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0uMlcFmg6WrVzVxxz5AIMIxEuFuomwPmwz6bKbNrVYw&s" alt="Thiruvanthampuram" style={{ width: '350px', height: '350px' }} />
            </div>
            <div className="flip-card-back">
              <h1>Mahabalipuram</h1>
              <p>Mahabalipuram, a coastal town in Tamil Nadu, is famed for its UNESCO World Heritage Site, the Group of Monuments, showcasing exquisite rock-cut temples and intricately carved sculptures. It's a haven for history buffs and beach lovers alike, offering a unique blend of ancient architecture, serene beaches, and vibrant local culture.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TamilnaduPage;