import React from 'react';
import './n_chandigarh.css';

const AndmanPage = () => {
  return (
    <div>
        {/* <div className="background-image-chd">
            <img src='https://images.unsplash.com/photo-1528460033278-a6ba57020470?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D'></img>
            
        </div> */}

      <div className="background-chd">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT87nUHvnB_MyV0Yas1QjeKFlnX5SVSi-cPzCzWgPvHUA&s" alt="Andman and Nicobar background" />
        <div className="chandigarh">
          <h1>Andman and Nicobar</h1>
        </div>
      </div>
      <div className="content">
        <p>
The Andaman and Nicobar Islands, a picturesque archipelago in the Bay of Bengal, are known for their pristine beaches, crystal-clear waters, and vibrant marine life. This tropical paradise offers diverse attractions, from the historic Cellular Jail in Port Blair to the coral reefs of Havelock Island, making it a sought-after destination for nature lovers and adventure enthusiasts.
        </p>
      </div>

      <div className="container-chd">
        <div className="logo">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs-_Bjr0xDz-wOZ6N_OAP_x_PWYl8dW1ZTybx7vATyoQ&s" alt="Andman and Nicobar logo" />
        </div>
        <div className="website">
          <h3>State Tourism Website: 
            <a href="https://www.andamantourism.gov.in/">http://www.Andman and Nicobartourism.gov.in/</a>
          </h3>
        </div>
        <div className="map">
          <a href="http://www.andrapradeshtourism.gov.in/" target="_blank" rel="noopener noreferrer">
            <img src="https://static.vecteezy.com/system/resources/previews/000/440/480/original/vector-location-icon.jpg" alt="Chandigarh map" />
          </a>
        </div>
      </div>

      <h1 style={{ textAlign: 'center' }}>Explore Andman and Nicobar</h1>
      <div className="bigmap">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4020949.762326498!2d90.58954051616621!3d10.204290209485352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3064a00f2b650ff3%3A0xce80055648fccb2c!2sAndaman%20and%20Nicobar%20Islands!5e0!3m2!1sen!2sin!4v1716220837262!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <div className="content">
        <p>
The Andaman and Nicobar Islands are an idyllic tropical paradise, boasting lush rainforests, azure waters, and secluded beaches. Home to indigenous tribes, rich biodiversity, and historical landmarks like Cellular Jail, it offers a unique blend of natural beauty, cultural heritage, and adventure opportunities, making it a captivating destination for travelers seeking an off-the-beaten-path experience.
        </p>
      </div>

      <h1 style={{ textAlign: 'center' }}>Here are Some of the Famous Places of Andman and Nicobar</h1>

      <div className="cards">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Front_View_of_Cellular_Jail%2C_Port_Blair.JPG/640px-Front_View_of_Cellular_Jail%2C_Port_Blair.JPG" alt="Mysore palace" style={{ width: '350px', height: '350px' }} />
            </div>
            <div className="flip-card-back">
              <h1>Cellular Jail</h1>
              <p>
              The Cellular Jail, located in Port Blair on the Andaman and Nicobar Islands, is a historic colonial prison where Indian freedom fighters were incarcerated during the struggle for independence. Known for its solitary confinement cells, the jail stands as a poignant reminder of the sacrifices made for India's freedom and now serves as a national memorial and museum.
              </p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="https://www.trawell.in/images/itinerary/sm/Andaman1_sm.jpg" alt="ISKON" style={{ width: '350px', height: '350px' }} />
            </div>
            <div className="flip-card-back">
              <h1>Bharatpur Beach, Neil Island</h1>
              <p>
Bharatpur Beach on Neil Island is renowned for its pristine white sands and crystal-clear turquoise waters, making it a perfect spot for swimming and snorkeling. The beach is also known for its stunning coral reefs and vibrant marine life, offering a serene and picturesque getaway in the Andaman Islands.</p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="https://static.toiimg.com/thumb/100919242/Chidiya-Tapu-in-Andaman-and-Nicobar-Islands.jpg?width=1200&height=900" alt="jog falls" style={{ width: '350px', height: '350px' }} />
            </div>
            <div className="flip-card-back">
              <h1>Chidiya Tapu Beach</h1>
              <p>Chidiya Tapu Beach, located in the Andaman Islands, is famous for its mesmerizing sunsets and lush green surroundings. Often called the "Bird Island," it is a haven for bird watchers and nature enthusiasts, offering serene landscapes and rich biodiversity.</p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="data:image/jpeg;base64,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" alt="Bengaluru" style={{ width: '350px', height: '350px' }} />
            </div>
            <div className="flip-card-back">
              <h1>Elephant Beach</h1>
              <p>
Elephant Beach on Havelock Island is celebrated for its vibrant coral reefs and clear blue waters, making it a popular destination for snorkeling and water sports. The beach offers a tranquil atmosphere, surrounded by lush greenery and pristine sandy shores.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AndmanPage;