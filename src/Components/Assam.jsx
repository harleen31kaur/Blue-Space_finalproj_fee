

import React from 'react';
import './n_chandigarh.css';

const AssamPage = () => {
  return (
    <div>
        

      <div className="background-chd">
        <img src="https://ashextourism.com/hotelsresorts/assam/images/brahmaputra_jungle_resort/jungle_resort.gif" alt="Chandigarh background" />
        <div className="chandigarh">
          <h1>Assam</h1>
        </div>
      </div>
      <div className="content">
        <p>
          
Assam, a picturesque state in northeastern India, is renowned for its lush landscapes, rich cultural heritage, and vibrant biodiversity. Nestled along the Brahmaputra River, Assam is blessed with fertile plains, rolling hills, and dense forests. The state is famous for its tea gardens, producing some of the finest tea in the world, particularly Assam tea. Guwahati, the largest city, serves as the cultural and economic hub, while the ancient Kamakhya Temple draws pilgrims from across the country.
        </p>
      </div>

      <div className="container-chd">
        <div className="logo">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyu7UI3vs6JMHRp6glP1hgz9Gu0RhG4BIhgG4YQyeFVw&s" alt="Chandigarh logo" />
        </div>
        <div className="website">
          <h3>State Tourism Website: 
            <a href="https://tourism.gov.in/assam">https://tourism.gov.in/assam</a>
          </h3>
        </div>
        <div className="map">
          <a href="https://tourism.gov.in/assam" target="_blank" rel="noopener noreferrer">
            <img src="https://static.vecteezy.com/system/resources/previews/000/440/480/original/vector-location-icon.jpg" alt="Chandigarh map" />
          </a>
        </div>
      </div>

      <h1 style={{ textAlign: 'center' }}>Explore Assam</h1>
      <div className="bigmap">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d151100.0831132681!2d91.58299930205585!3d26.150719824763062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5b04b0f06ef1%3A0xaaad40304c7d3d1d!2sMaa%20Kamakhya%20Temple!5e0!3m2!1sen!2sin!4v1716200178590!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <div className="content">
        <p>
        The state's handloom industry is also noteworthy, with exquisite silk products such as Muga and Eri silk. Assam's cuisine, rich and flavorful, features dishes made from rice, fish, and bamboo shoots, reflecting the state's agrarian lifestyle. With its natural beauty and cultural richness, Assam offers a captivating experience for visitors and a deep sense of pride for its residents.
        </p>
      </div>

      <h1 style={{ textAlign: 'center' }}>Here are Some of the Famous Places of Assam</h1>

      <div className="cards">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="https://static.toiimg.com/photo/64012913.cms" alt="Sukhna Lake" style={{ width: '350px', height: '350px' }} />
            </div>
            <div className="flip-card-back">
              <h1>Majuli Island</h1>
              <p>Majuli is the world's largest river island, situated on the Brahmaputra River. This serene and culturally vibrant island is known for its unique Vaishnavite monasteries called Satras, which are centers of art, music, dance, and spirituality. Majuli's lush green landscapes, traditional Mishing stilt houses, and annual Rasleela festival make it a captivating destination for those seeking cultural immersion and natural beauty.</p>
            </div>
          </div>
        </div>

        
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Beauty_of_Kaziranga_National_Park.jpg" alt="Rose Garden" style={{ width: '350px', height: '350px' }} />
            </div>
            <div className="flip-card-back">
              <h1>Kaziranga National Park</h1>
              <p>Kaziranga National Park is famed for its significant population of the endangered one-horned rhinoceros. The park, spread across 430 square kilometers, is also home to tigers, elephants, wild water buffalo, and a rich variety of bird species. Its diverse ecosystem includes grasslands, forests, and wetlands, making it a haven for wildlife enthusiasts and nature lovers.</p>
            </div>
          </div>
        </div>

        

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/MG_2907-1_Guwahati_Club.jpg" alt="Elante Mall" style={{ width: '350px', height: '350px' }} />
            </div>
            <div className="flip-card-back">
              <h1>Guwahati</h1>
              <p>The largest city in Assam, Guwahati is a bustling urban center and the gateway to the northeastern states of India. It is home to the ancient Kamakhya Temple, a significant pilgrimage site for Hindus. The city offers a blend of modernity and tradition, with attractions such as the Assam State Museum, Umananda Island Temple, and vibrant markets. Guwahati's riverside setting along the Brahmaputra provides picturesque views and a relaxing ambiance.</p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="https://sivasagar.assam.gov.in/sites/default/files/inline-images/Sivasagar1.jpg" alt="Shastri Market" style={{ width: '350px', height: '350px' }} />
            </div>
            <div className="flip-card-back">
              <h1>Sivasagar</h1>
              <p> Sivasagar, historically known as Rangpur, is a town steeped in the rich heritage of the Ahom dynasty. The town is dotted with architectural marvels such as the Rang Ghar, an ancient amphitheater, and Talatal Ghar, a royal palace with underground tunnels. The large man-made reservoirs like Sivasagar Tank (Borpukhuri) add to the town's scenic beauty. Sivasagar is a testament to Assam's glorious past and its enduring cultural legacy.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssamPage;
