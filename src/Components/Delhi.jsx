import React from 'react';
import './Delhi.css';

const DelhiPage = () => {
  return (
    <div>
        {/* <div className="background-image-chd">
            <img src='https://images.unsplash.com/photo-1528460033278-a6ba57020470?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D'></img>
            
        </div> */}

      <div className="background-chd">
        <img src="https://i.makeagif.com/media/2-07-2017/JTG6s-.gif" alt="Chandigarh background" />
        <div className="chandigarh">
          <h1>Delhi</h1>
        </div>
      </div>
      <div className="content">
        <p>
        Delhi, city and national capital, and union territory, north-central India. The city of Delhi actually consists of two components: Old Delhi, in the north, the historic city; and New Delhi, in the south, since 1947 the capital of India, built in the first part of the 20th century as the capital of British India.
        </p>
      </div>

      <div className="container-chd">
        <div className="logo">
          <img src="https://play-lh.googleusercontent.com/vU8HaItT3T2rV3iBgeZ8ZYNd01aP7PUqAmG0g0iwU6bpp7agWuUSq9Onn6NV5L5GZyo" alt="Chandigarh logo" />
        </div>
        <div className="website">
          <h3>State Tourism Website: 
            <a href="https://www.delhitourism.gov.in/delhitourism/index.jsp">https://www.delhitourism.gov.in/delhitourism/index.jsp</a>
          </h3>
        </div>
        <div className="map">
          <a href="https://www.delhitourism.gov.in/delhitourism/index.jsp" target="_blank" rel="noopener noreferrer">
            <img src="https://static.vecteezy.com/system/resources/previews/000/440/480/original/vector-location-icon.jpg" alt="Chandigarh map" />
          </a>
        </div>
      </div>

      <h1 style={{ textAlign: 'center' }}>Explore Delhi</h1>
      <div className="bigmap">
   
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d23436.88315058185!2d76.65564107213564!3d30.514851010185414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1716188270053!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <div className="content">
        <p>
        Delhi is a city where ancient and modern blend seamlessly together. It is a place that not only touches your pulse but even fastens it to a frenetic speed. Home to millions of dreams, the city takes on unprecedented responsibilities o realizing dreams bringing people closer and inspiring their throughts
        </p>
      </div>

      <h1 style={{ textAlign: 'center' }}>Here are Some of the Famous Places of Delhi</h1>

      <div className="cards">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="https://foundtheworld.com/wp-content/uploads/2015/11/Lotus-Temple-9-1920x1272.jpg" alt="Sukhna Lake" style={{ width: '350px', height: '350px' }} />
            </div>
            <div className="flip-card-back">
              <h1>Lotus Temple</h1>
              <p>

The Baha'i House of Worship, popularly known as the Lotus Temple is not only a symbol of excellence in modern Indian architecture but also one of the most visited religious buildings in the world. The Temple located on a 9.7-hectare site near Nehru Place in South Delhi, is a place of worship open to all races, religions and castes.</p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="https://wallpapercave.com/wp/wp3326960.jpg" alt="Rock Garden" style={{ width: '350px', height: '350px' }} />
            </div>
            <div className="flip-card-back">
              <h1>India Gate</h1>
              <p>India Gate is one of many British monuments built by order of the Imperial War Graves Commission (later renamed Commonwealth War Graves Commission). The architect was Sir Edwin Lutyens, an Englishman who designed numerous other war memorials and was also the principal planner of New Delhi. The cornerstone was laid in 1921 by the duke of Connaught, third son of Queen Victoria. Construction of the All-India War Memorial, as it was originally known, continued until 1931, the year of the formal dedication of New Delhi as the capital of India.</p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="https://www.agrashivtourandtravels.com/wp-content/uploads/2020/07/red-fort.jpg" alt="Rose Garden" style={{ width: '350px', height: '350px' }} />
            </div>
            <div className="flip-card-back">
              <h1>Rod Fort</h1>
              <p>The Red Fort, which is also known as the Lal Qila, was constructed by one of the most famous Mughal emperors, Shah Jahan. Built on the banks of river Yamuna, the fortress-palace was designed by architect Ustad Ahmad Lahauri. It took 8 years and 10 months to build the magnificent fort. The fort served as the royal residence of the Mughal emperors from 1648 to 1857.</p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="http://images.mapsofworld.com/allwonders/2015/01/Akshardham.png" alt="Bird Century" style={{ width: '350px', height: '350px' }} />
            </div>
            <div className="flip-card-back">
              <h1>Akshardham Temple</h1>
              <p>
'Akshardham' means the divine abode of God. It is hailed as an eternal place of devotion, purity and peace. Swaminarayan Akshardham at New Delhi is a Mandir – an abode of God, a Hindu house of worship, and a spiritual and cultural campus dedicated to devotion, learning and harmony. </p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="http://1.bp.blogspot.com/-_A_hPMf6UXA/UPlIaFedKJI/AAAAAAAAALc/1ot1wZWv1Tg/s1600/Qutub+Minar.jpg" alt="Elante Mall" style={{ width: '350px', height: '350px' }} />
            </div>
            <div className="flip-card-back">
              <h1>Qutub Minar</h1>
              <p>The Qutub Minar has been illuminated for special occasions involving international relations. In September 2023, the monument was lit up in the colors of the Mexican flag to celebrate Mexico's 213th Independence Day, an event that was acknowledged and appreciated by the Embassy of Mexico in India</p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="https://image3.mouthshut.com/images/Restaurant/Photo/-52570_46862.jpg" alt="Shastri Market" style={{ width: '350px', height: '350px' }} />
            </div>
            <div className="flip-card-back">
              <h1>Bangla Sahib</h1>
              <p>Gurudwara Bangla Sahib is located on Baba Kharak Singh Marg near Connaught Place and it is one of the prominent structures in the capital for architectural and religious significance. Formerly known as Jaisinghpura Palace, the gurudwara was once a bungalow owned by Raja Jai Singh and was later opened as a gurudwara.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DelhiPage;