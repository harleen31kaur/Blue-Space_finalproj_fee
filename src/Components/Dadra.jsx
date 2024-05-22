import React from 'react';
import './n_chandigarh.css';

const DadraPage = () => {
  return (
    <div>
        {/* <div className="background-image-chd">
            <img src='https://images.unsplash.com/photo-1528460033278-a6ba57020470?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D'></img>
            
        </div> */}

      <div className="background-chd">
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/01/Dadra_and_Nagar_Haveli_Silvassa.jpg" alt="Chandigarh background" />
        <div className="chandigarh">
          <h1>Dadra And Nagar Haveli & Daman and diu</h1>
        </div>
      </div>
      <div className="content">
        <p>
        Dadra and Nagar Haveli, a union territory in western India, is a tranquil region nestled between Gujarat and Maharashtra. Known for its lush greenery, diverse tribal culture, and serene landscapes, the territory offers a peaceful retreat from bustling city life. The region's economy is predominantly driven by agriculture, with rice, wheat, and pulses being the main crops. Additionally, it boasts a rich cultural heritage, with various tribes such as the Warlis, Dhodias, and Kuknas contributing to its vibrant traditions and festivals.


        </p>
      </div>

      <div className="container-chd">
        <div className="logo">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIJ8DTOtiUEGHvq2oeqP0fpU5v9rPlln18Mxoe9Sfc8w&s" alt="Chandigarh logo" />
        </div>
        <div className="website">
          <h3>State Tourism Website: 
            <a href="https://dnh.gov.in/tourist-places/">https://dnh.gov.in/tourist-places/</a>
          </h3>
        </div>
        <div className="map">
          <a href="https://dnh.gov.in/tourist-places/" target="_blank" rel="noopener noreferrer">
            <img src="https://static.vecteezy.com/system/resources/previews/000/440/480/original/vector-location-icon.jpg" alt="Chandigarh map" />
          </a>
        </div>
      </div>

      <h1 style={{ textAlign: 'center' }}>Explore these popular locations</h1>
      <div className="bigmap">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.7141449243577!2d72.9676615753927!3d20.312095912006964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0cc6a85d323af%3A0x6e6e29905d6bba2d!2sVanganga%20Garden!5e0!3m2!1sen!2sin!4v1716227066535!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <div className="content">
        <p>
        
Daman and Diu, a union territory on the western coast of India, is renowned for its sun-kissed beaches, colonial architecture, and vibrant cultural heritage. With its serene coastline dotted with palm-fringed shores, it offers a tranquil escape for beach lovers and leisure seekers. The territory's rich history is reflected in its well-preserved forts, churches, and museums, providing visitors with a glimpse into its Portuguese colonial past. Daman and Diu's warm hospitality, coupled with its picturesque landscapes and cultural diversity, make it a charming destination for travelers seeking relaxation and exploration alike.
        </p>
      </div>

      <h1 style={{ textAlign: 'center' }}>Here are Some of the Famous Places of dadra and nagar haveli & daman and diu</h1>

      <div className="cards">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="https://www.seawatersports.com/img/newimage/places/silvassa-tribal-museum.png" alt="Sukhna Lake" style={{ width: '350px', height: '350px' }} />
            </div>
            <div className="flip-card-back">
              <h1>Tribal Cultural Museum</h1>
              <p>The Tribal Cultural Museum in Silvassa offers visitors a fascinating glimpse into the rich heritage and diverse cultures of the region's indigenous tribes. The museum showcases an extensive collection of artifacts, handicrafts, traditional costumes, and musical instruments, providing insight into the lifestyle, customs, and traditions of the Warlis, Dhodias, Koknas, and other tribal communities.</p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="https://www.seawatersports.com/img/newimage/places/vanganga-lake-garden.png" alt="Rock Garden" style={{ width: '350px', height: '350px' }} />
            </div>
            <div className="flip-card-back">
              <h1>Vanganga Lake Garden:
             </h1>
              <p>Vanganga Lake Garden is a serene oasis located in the heart of Silvassa, the capital city of Dadra and Nagar Haveli. The picturesque garden features lush green lawns, vibrant flower beds, and a tranquil lake with boating facilities. Visitors can enjoy leisurely strolls along the winding pathways, relax in the shade of swaying trees, or indulge in boat rides amidst the peaceful surroundings.</p>
            </div>
          </div>
        </div>

        


       
      </div>
    </div>
  );
}

export default DadraPage;
