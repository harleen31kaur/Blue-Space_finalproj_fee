

import React from 'react';
import './n_chandigarh.css';

const ChandigarhPage = () => {
  return (
    <div>
        {/* <div className="background-image-chd">
            <img src='https://images.unsplash.com/photo-1528460033278-a6ba57020470?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D'></img>
            
        </div> */}

      <div className="background-chd">
        <img src="https://pixahive.com/wp-content/uploads/2020/08/25_08_2020_17_54_59_7040000.gif" alt="Chandigarh background" />
        <div className="chandigarh">
          <h1>Chandigarh</h1>
        </div>
      </div>
      <div className="content">
        <p>
          Chandigarh, city and union territory of India. Located about 165 miles (265 km) north of New Delhi, the territory is bounded by the state of Haryana on the east and by the state of Punjab on all other sides. It is situated on the Indo-Gangetic Plain a short distance southwest of the Siwalik Range (Shiwalik Range), between two seasonal hill torrents, the Sukhna and Patiali rivers. The land is a flat and fertile tract of alluvial soils, and its rural farmland produces such crops as wheat, corn (maize), and rice. In the summer months (April to June) temperatures may rise above 120 °F (about 50 °C), while in the winter months (November to February) temperatures may dip into the mid-30s F (about 2 °C), with frequent rain showers. The monsoon season (July to September) is hot and humid.
        </p>
      </div>

      <div className="container-chd">
        <div className="logo">
          <img src="https://play-lh.googleusercontent.com/SnXprqqh4XRxlgKnYV4vMpN-k1wREbOEALyxTwQtYoYAdQmkh0WCzt2rKZkSNVoycIE=w416-h235-rw" alt="Chandigarh logo" />
        </div>
        <div className="website">
          <h3>State Tourism Website: 
            <a href="http://www.chandigarhtourism.gov.in/">http://www.chandigarhtourism.gov.in/</a>
          </h3>
        </div>
        <div className="map">
          <a href="http://www.chandigarhtourism.gov.in/" target="_blank" rel="noopener noreferrer">
            <img src="https://static.vecteezy.com/system/resources/previews/000/440/480/original/vector-location-icon.jpg" alt="Chandigarh map" />
          </a>
        </div>
      </div>

      <h1 style={{ textAlign: 'center' }}>Explore Chandigarh</h1>
      <div className="bigmap">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3428.7708470083307!2d76.80247917503834!3d30.752937684656843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed438b8f3297%3A0xc19c80f645fe2db2!2sNek%20Chand%E2%80%99s%20Rock%20Garden%20of%20Chandigarh!5e0!3m2!1sen!2sin!4v1716095663799!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="content">
        <p>
          Chandigarh is the best-planned city in India, with architecture which is world-renowned. As the capital of the states of Punjab and Haryana, and the Union Territory of Chandigarh it is a prestigious city. The face of modern India, this city was planned and executed by famous French Architect, Le Corbusier. Serenity and a city are two diametrically opposite concepts, which however, get belied in the 'City Beautiful'. Chandigarh is a rare epitome of modernization co-existing with nature's preservation. It is here that the trees and plants are as much a part of the construction plans as the buildings and the roads. India’s first planned city, is a rich, prosperous, spic and span, green city rightly called “THE CITY BEAUTIFUL ”.
        </p>
      </div>

      <h1 style={{ textAlign: 'center' }}>Here are Some of the Famous Places of Chandigarh</h1>

      <div className="cards">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSMPBZruDouGIo1ypoifiYeFZUsBVyXLretUH6cXD9FN9Jw_lKjtE-Kl0m5cXEwLsGuqFbUW9_vfZc_zTxB6a3z1yzm4Mm-P_UoE2aqtg" alt="Sukhna Lake" style={{ width: '350px', height: '350px' }} />
            </div>
            <div className="flip-card-back">
              <h1>Sukhna Lake</h1>
              <p>One of the most beautiful man-made lakes in India, Sukhna, located in Chandigarh, is a natural paradise in a cosmopolitan hub. A popular stopover for residents and tourists alike, the lake offers several options for relaxation and entertainment.</p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="https://www.india.com/wp-content/uploads/2018/08/Chandigarh_Chandigarh_Rock-Garden_Rock-Garden_in-Chandigarh_IWPL3-1.jpg" alt="Rock Garden" style={{ width: '350px', height: '350px' }} />
            </div>
            <div className="flip-card-back">
              <h1>Rock Garden</h1>
              <p>A rock garden, also known as a rockery and formerly as a rockwork, is a garden, or more often a part of a garden, with a landscaping framework of rocks, stones, and gravel, with planting appropriate to this setting. Usually these are small Alpine plants that need relatively little soil or water.</p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="https://mydecorative.com/wp-content/uploads/2019/02/roses-garden.jpg" alt="Rose Garden" style={{ width: '350px', height: '350px' }} />
            </div>
            <div className="flip-card-back">
              <h1>Rose Garden</h1>
              <p>Zakir Hussain Rose Garden, is a botanical garden in Chandigarh, India and spread over 30 acres (120,000 m2) of land, with 50,000 rose-bushes of 1600 different species. Named after India's former president, Zakir Husain and created in 1967 under the guidance of Mohinder Singh Randhawa, Chandigarh's first chief commissioner, the garden has the distinction of being Asia's largest.</p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="https://cdn-hmpbl.nitrocdn.com/tsTToYwesGmeqFtRxRtStrrgbiynrrQP/assets/images/optimized/rev-e1a2dce/chandigarhexplore.com/wp-content/uploads/2023/01/Chandigarh-Bird-Park-Gate-1024x536.jpg" alt="Bird Century" style={{ width: '350px', height: '350px' }} />
            </div>
            <div className="flip-card-back">
              <h1>Bird Century</h1>
              <p>Chandigarh Bird Park is a popular attraction in the city of Chandigarh, India. The park covers an area of over 27 acres and is home to a wide variety of birds, including flamingos, pelicans, parakeets, and peacocks. The park also features a lake, a walk-through aviary, and a children’s play area. It is a popular destination for families and nature enthusiasts.</p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/81/80/07/elante-mall.jpg?w=1200&h=-1&s=1" alt="Elante Mall" style={{ width: '350px', height: '350px' }} />
            </div>
            <div className="flip-card-back">
              <h1>Elante Mall</h1>
              <p>Elante Mall is a shopping mall in Chandigarh. With a gross leasable area of 1,000,000 sq ft , it is the 7th largest shopping mall in Northern India and the 10th largest in India. Offices Building of Elante Mall has a retail space area of over 1 million square feet. It has 2 main gates, one is on the big front entry and another one is on the back. It has 3 basement levels, a ground level and three upper levels. In the retail area, Elante Mall hosts retailers of various Indian and international brands, a food court and a courtyard full of cafes. The Mall has an 8-screen Multiplex of PVR Cinemas.</p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="https://preview.redd.it/local-market-of-chandigarh-sector-22-shastri-market-v0-rqur9whn69ma1.jpg?width=640&crop=smart&auto=webp&s=3742d1dc9ac35fbfb5c31d263bd4184e76c16360" alt="Shastri Market" style={{ width: '350px', height: '350px' }} />
            </div>
            <div className="flip-card-back">
              <h1>Shastri Market</h1>
              <p>Shastri market is one of the famous place in Chandigarh for buying clothes. There so many small shops inside this market. Most of them of clothes and shoes. sometimes too much crowd here specially on some festival like Diwali or karwachauth. price is here reasonable and products are also good.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChandigarhPage;
