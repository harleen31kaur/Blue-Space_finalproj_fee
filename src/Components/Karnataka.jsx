import React from 'react';
import './n_chandigarh.css';

const KarnatakaPage = () => {
  return (
    <div>
        {/* <div className="background-image-chd">
            <img src='https://images.unsplash.com/photo-1528460033278-a6ba57020470?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D'></img>
            
        </div> */}

      <div className="background-chd">
        <img src="https://karnatakatourism.org/wp-content/uploads/2020/06/P10-gallery.jpg" alt="Karnataka background" />
        <div className="chandigarh">
          <h1>Karnataka</h1>
        </div>
      </div>
      <div className="content">
        <p>
        Karnataka, located in southwestern India, is known for its diverse landscapes, ranging from lush Western Ghats to arid plains. It boasts a rich cultural heritage, with historic cities like Mysore and Hampi, and a strong economy driven by industries such as IT in Bengaluru, the state capital.
        </p>
      </div>

      <div className="container-chd">
        <div className="logo">
          <img src="https://www.shutterstock.com/shutterstock/photos/1712937370/display_1500/stock-vector-tourism-logo-initiative-for-karnataka-city-india-not-official-logo-one-state-many-worlds-map-1712937370.jpg" alt="karnataka logo" />
        </div>
        <div className="website">
          <h3>State Tourism Website: 
            <a href="https://karnatakatourism.org/">http://www.karnatakatourism.gov.in/</a>
          </h3>
        </div>
        <div className="map">
          <a href="http://www.karnatakatourism.gov.in/" target="_blank" rel="noopener noreferrer">
            <img src="https://static.vecteezy.com/system/resources/previews/000/440/480/original/vector-location-icon.jpg" alt="Chandigarh map" />
          </a>
        </div>
      </div>

      <h1 style={{ textAlign: 'center' }}>Explore Karnataka</h1>
      <div className="bigmap">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.84916296526!2d77.6309395!3d12.9539974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1716202744033!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>";
      </div>

      <div className="content">
        <p>
        Karnataka, in southwestern India, is celebrated for its diverse geography, encompassing the lush Western Ghats, scenic coastlines, and fertile plains. It has a rich cultural history, with UNESCO World Heritage sites like Hampi and the royal city of Mysore. Bengaluru, the state capital, is a global IT hub, driving much of the state's economic growth. Karnataka also excels in education, with renowned institutions and a vibrant arts and music scene.
        </p>
      </div>

      <h1 style={{ textAlign: 'center' }}>Here are Some of the Famous Places of Karnataka</h1>

      <div className="cards">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7rbew7YCpBhWMmoeAZO1YDhuaBrkw92EeQkWQedaLpA&s" alt="Mysore palace" style={{ width: '350px', height: '350px' }} />
            </div>
            <div className="flip-card-back">
              <h1>Mysore Palace</h1>
              <p>
              The Mysore Palace, located in Mysuru (Mysore), Karnataka, is a stunning example of Indo-Saracenic architecture. Once the royal residence of the Wadiyar dynasty, it is now a major tourist attraction, famed for its grandeur, intricate interiors, and the vibrant Dasara festival illuminations.
              </p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO9LHqWsAf5vBKk_RNd_lmocokeW9BQVFoXINr1quTrw&s" alt="ISKON" style={{ width: '350px', height: '350px' }} />
            </div>
            <div className="flip-card-back">
              <h1>ISKON temple Banglore</h1>
              <p>The ISKCON Temple in Bengaluru, also known as Sri Radha Krishna Temple, is a major spiritual and cultural landmark. It features stunning architecture, combining traditional and modern elements, and serves as a vibrant center for Krishna consciousness, attracting thousands of devotees and tourists annually.</p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlCrJYOC5s1ZKzU8jmXxwFJpBaBZTD6iM5GECIpesH4w&s" alt="jog falls" style={{ width: '350px', height: '350px' }} />
            </div>
            <div className="flip-card-back">
              <h1>Jog falls</h1>
              <p>Jog Falls, located in Karnataka, is one of India's highest waterfalls, plunging from a height of 830 feet. Formed by the Sharavathi River, this spectacular natural wonder is renowned for its breathtaking beauty, especially during the monsoon season when the falls are at their fullest.</p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBL2AAD-lUAdsD0LwI_Dk53RqnOfDpfE1LMID1AvbgVg&s" alt="Bengaluru" style={{ width: '350px', height: '350px' }} />
            </div>
            <div className="flip-card-back">
              <h1>Bengaluru</h1>
              <p>Bengaluru, the capital of Karnataka, is known as India's "Silicon Valley" due to its prominent IT industry. Renowned for its pleasant climate, vibrant culture, and numerous parks, Bengaluru is a dynamic city blending modernity with rich traditions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KarnatakaPage;