import React from 'react';
import './n_chandigarh.css';

const BiharPage = () => {
  return (
    <div>
        {/* <div className="background-image-chd">
            <img src='https://images.unsplash.com/photo-1528460033278-a6ba57020470?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D'></img>
            
        </div> */}

      <div className="background-chd">
        <img src="https://www.shutterstock.com/image-photo/shyama-mai-temple-shiv-darbhanga-600nw-2016330500.jpg" alt="Bihar background" />
        <div className="chandigarh">
          <h1>Bihar</h1>
        </div>
      </div>
      <div className="content">
        <p>
Bihar, located in eastern India, is steeped in historical and cultural significance, being the birthplace of Buddhism and Jainism. The state is home to ancient sites like Nalanda University and Bodh Gaya, where Lord Buddha attained enlightenment. Known for its rich heritage and vibrant festivals, Bihar continues to play a pivotal role in India's cultural landscape.
        </p>
      </div>

      <div className="container-chd">
        <div className="logo">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjan6VQodl3Gv3kY09ANXK3B6gGXGdzCidXyl_fECEGg&s" alt="Bihar logo" />
        </div>
        <div className="website">
          <h3>State Tourism Website: 
            <a href="https://tourism.bihar.gov.in/">http://www.Bihartourism.gov.in/</a>
          </h3>
        </div>
        <div className="map">
          <a href="http://www.andrapradeshtourism.gov.in/" target="_blank" rel="noopener noreferrer">
            <img src="https://static.vecteezy.com/system/resources/previews/000/440/480/original/vector-location-icon.jpg" alt="Chandigarh map" />
          </a>
        </div>
      </div>

      <h1 style={{ textAlign: 'center' }}>Explore Bihar</h1>
      <div className="bigmap">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1837543.8741812191!2d85.80700585!3d25.9039195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5844f0bb6903%3A0x57ad3fed1bbae325!2sBihar!5e0!3m2!1sen!2sin!4v1716219728946!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <div className="content">
        <p>
Bihar, rich in historical legacy, is the site of ancient cities like Patna and Vaishali, and renowned for educational institutions such as the ancient Nalanda University. The state is a spiritual hub, attracting pilgrims to Bodh Gaya and the Mahabodhi Temple, a UNESCO World Heritage Site. Bihar's vibrant culture, traditional crafts, and significant agricultural economy add to its diverse and dynamic character.
        </p>
      </div>

      <h1 style={{ textAlign: 'center' }}>Here are Some of the Famous Places of Bihar</h1>

      <div className="cards">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="https://www.holidify.com/images/bgImages/BODH-GAYA.jpg" alt="Mysore palace" style={{ width: '350px', height: '350px' }} />
            </div>
            <div className="flip-card-back">
              <h1>Bodh Gaya</h1>
              <p>
              Bodh Gaya, located in Bihar, is one of the most important pilgrimage sites for Buddhists worldwide. It is where Siddhartha Gautama, the Buddha, attained enlightenment under the sacred Bodhi Tree. The Mahabodhi Temple, a UNESCO World Heritage Site, stands as a symbol of this profound spiritual heritage, attracting devotees and tourists from around the globe.
              </p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="https://www.holidify.com/images/bgImages/PATNA.jpg" alt="ISKON" style={{ width: '350px', height: '350px' }} />
            </div>
            <div className="flip-card-back">
              <h1>Patna</h1>
              <p>
Patna, the capital of Bihar, is one of the oldest continuously inhabited cities in the world, rich in historical and cultural significance. Located on the banks of the Ganges River, it boasts landmarks like the Mahavir Mandir, Patna Sahib Gurudwara, and the ancient ruins of Pataliputra. The city is a vibrant blend of tradition and modernity, serving as a major center for education and commerce in eastern India.</p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="https://www.holidify.com/images/bgImages/VAISHALI.jpg" alt="jog falls" style={{ width: '350px', height: '350px' }} />
            </div>
            <div className="flip-card-back">
              <h1>Vaishali</h1>
              <p>
Vaishali, located in Bihar, is an ancient city of great historical and religious significance, known as the birthplace of Lord Mahavira, the 24th Jain Tirthankara. It is also a prominent Buddhist pilgrimage site, where the Buddha delivered his last sermon. Vaishali's rich heritage is marked by numerous stupas, pillars, and archaeological sites.</p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="https://www.holidify.com/images/bgImages/NALANDA.jpg" alt="Bengaluru" style={{ width: '350px', height: '350px' }} />
            </div>
            <div className="flip-card-back">
              <h1>Nalanda</h1>
              <p>Nalanda, located in Bihar, is renowned for the ruins of Nalanda University, an ancient center of learning and one of the world's first residential universities. Established in the 5th century, it attracted scholars from across Asia until its decline in the 12th century. The site remains a symbol of India's rich educational heritage and is a UNESCO World Heritage Site.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BiharPage;