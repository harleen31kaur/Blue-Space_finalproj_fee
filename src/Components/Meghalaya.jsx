

import React from 'react';
import './n_chandigarh.css';

const MeghalayaPage = () => {
  return (
    <div>
        {/* <div className="background-image-chd">
            <img src='https://images.unsplash.com/photo-1528460033278-a6ba57020470?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D'></img>
            
        </div> */}

      <div className="background-chd">
        <img src="https://static.toiimg.com/thumb/msid-91492917,width-748,height-499,resizemode=4,imgsize-217752/.jpg" alt="Chandigarh background" />
        <div className="chandigarh">
          <h1>Meghalaya</h1>
        </div>
      </div>
      <div className="content">
        <p>
        Meghalaya, a northeastern state in India, is renowned for its breathtaking natural beauty and vibrant cultural heritage. Known as the "Abode of Clouds," Meghalaya is home to some of the world's wettest places, including Cherrapunji and Mawsynram, where lush green landscapes and numerous waterfalls create a stunning visual spectacle. The state is characterized by its rolling hills, dense forests, and rich biodiversity, making it a haven for nature lovers and adventure enthusiasts. The living root bridges of Meghalaya, ingeniously crafted by the indigenous Khasi and Jaintia tribes, stand as a testament to the harmonious relationship between the local communities and their environment.


        </p>
      </div>

      <div className="container-chd">
        <div className="logo">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDudiF-TCGoThzsbMwhIIfLqzmt05_66sCF4i7bb66lQ&s" alt="Chandigarh logo" />
        </div>
        <div className="website">
          <h3>State Tourism Website: 
            <a href="https://meghalaya.gov.in/">https://meghalaya.gov.in/</a>
          </h3>
        </div>
        <div className="map">
          <a href="https://meghalaya.gov.in/" target="_blank" rel="noopener noreferrer">
            <img src="https://static.vecteezy.com/system/resources/previews/000/440/480/original/vector-location-icon.jpg" alt="Chandigarh map" />
          </a>
        </div>
      </div>

      <h1 style={{ textAlign: 'center' }}>Explore Meghalaya</h1>
      <div className="bigmap">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28864.089838928285!2d91.71168878104764!3d25.27020767046705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37508cd1f80d5647%3A0x1db9015577abfe88!2sCherrapunji%2C%20Meghalaya%20793108!5e0!3m2!1sen!2sin!4v1716225596457!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <div className="content">
        <p>
        Culturally, Meghalaya is a mosaic of traditions and festivals that reflect the diverse ethnic groups inhabiting the region. The Khasi, Garo, and Jaintia tribes form the major population, each with their unique languages, customs, and traditional attire. Festivals such as Wangala, Shad Suk Mynsiem, and Nongkrem Dance are celebrated with great fervor, showcasing traditional music, dance, and rituals. Meghalaya's capital, Shillong, often referred to as the "Scotland of the East," is a vibrant city that blends colonial charm with modern amenities, serving as a gateway to exploring the state's natural and cultural treasures.
        </p>
      </div>

      <h1 style={{ textAlign: 'center' }}>Here are Some of the Famous Places of meghalaya</h1>

      <div className="cards">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="https://cdn.britannica.com/16/173816-050-C1A68488/Seven-Sisters-Falls-Cherrapunji-India.jpg" alt="Sukhna Lake" style={{ width: '350px', height: '350px' }} />
            </div>
            <div className="flip-card-back">
              <h1>Cheerapunji</h1>
              <p>Known as one of the wettest places on Earth, Cherrapunji is famous for its dramatic weather and stunning natural landscapes. Visitors can explore numerous waterfalls such as Nohkalikai Falls, the tallest plunge waterfall in India, and the mesmerizing Mawsmai Cave. Cherrapunji is also home to the living root bridges, unique structures made from the aerial roots of rubber fig trees, showcasing the ingenuity of the local Khasi tribes.</p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="https://cdn.britannica.com/94/173794-004-B174A7DD/Shillong-Meghalaya-India.jpg" alt="Rock Garden" style={{ width: '350px', height: '350px' }} />
            </div>
            <div className="flip-card-back">
              <h1>Shillong</h1>
              <p>The capital city of Meghalaya, Shillong, is often referred to as the "Scotland of the East" due to its rolling hills, pleasant climate, and colonial-era architecture. Key attractions include Ward's Lake, Lady Hydari Park, and the Don Bosco Centre for Indigenous Cultures, a museum that offers insight into the region's diverse tribal heritage. Shillong Peak provides a panoramic view of the city and surrounding countryside, while the Elephant Falls are a popular spot for nature lovers.

</p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2023/12/19/ad850532a481cb0321a8d50598f7e15c_1000x1000.jpg" alt="Rose Garden" style={{ width: '350px', height: '350px' }} />
            </div>
            <div className="flip-card-back">
              <h1>Mawlynnong</h1>
              <p>Touted as the cleanest village in Asia, Mawlynnong is a model of community-driven eco-tourism. This picturesque village offers visitors an opportunity to experience the serene lifestyle of the Khasi people, surrounded by immaculate gardens, bamboo walkways, and well-maintained pathways. The Sky Walk, a bamboo bridge atop a tree, provides breathtaking views of the lush greenery and distant plains of Bangladesh. Mawlynnong is also close to the fascinating living root bridges and the stunning natural wonder of the Mawlynnong Waterfall.</p>
            </div>
          </div>
        </div>

        
        

      </div>
    </div>
  );
}

export default MeghalayaPage;
