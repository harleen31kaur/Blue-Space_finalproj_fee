import React from 'react';
import './n_chandigarh.css';

const JammuPage = () => {
  return (
    <div>
        {/* <div className="background-image-chd">
            <img src='https://images.unsplash.com/photo-1528460033278-a6ba57020470?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D'></img>
            
        </div> */}

      <div className="background-chd">
        <img src="https://kashmiriat.com/wp-content/uploads/2020/07/Bungus-Valley-traveling-time-1.jpg" alt="Chandigarh background" />
        <div className="chandigarh">
          <h1>Jammu & Kashmir</h1>
        </div>
      </div>
      <div className="content">
        <p>
        Jammu and Kashmir, formerly one of the largest princely states of India, is bounded to the east by the Indian union territory of Ladakh, to the south by the Indian states of Himachal Pradesh and Punjab, to the southwest by Pakistan, and to the northwest by the Pakistani-administered portion of Kashmir. 
        </p>
      </div>

      <div className="container-chd">
        <div className="logo">
          <img src="https://gumlet.assettype.com/greaterkashmir/import/2019/04/JK-Tourism-2.jpg?w=1200&auto=format%2Ccompress&ogImage=true&enlarge=true" alt="Chandigarh logo" />
        </div>
        <div className="website">
          <h3>State Tourism Website: 
            <a href="https://tourism.jk.gov.in/#/landing">https://tourism.jk.gov.in/#/landing</a>
          </h3>
        </div>
        <div className="map">
          <a href="https://tourism.jk.gov.in/#/landing" target="_blank" rel="noopener noreferrer">
            <img src="https://static.vecteezy.com/system/resources/previews/000/440/480/original/vector-location-icon.jpg" alt="Chandigarh map" />
          </a>
        </div>
      </div>

      <h1 style={{ textAlign: 'center' }}>Explore Jammu & Kashmir</h1>
      <div className="bigmap">
   
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26409.633899329066!2d74.71103110560118!3d34.16669555218149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e19c9df380e085%3A0x8b2ea75cd2122ba3!2sVale%20of%20Kashmir!5e0!3m2!1sen!2sin!4v1716219047923!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <div className="content">
        <p>
        The vast majority of the union territory is mountainous, and the physiography is divided into five zones that are closely associated with the structural components of the western Himalayas. From west to east those zones consist of the plains, the foothills, the Pir Panjal Range, the Vale of Kashmir, and the Great Himalayas zone. 

        </p>
      </div>

      <h1 style={{ textAlign: 'center' }}>Here are Some of the Famous Places of Jammu and Kashmir</h1>

      <div className="cards">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="https://static.toiimg.com/thumb/msid-79549873,width-748,height-499,resizemode=4,imgsize-1296676/A-magical-called-Pangong-Lake.jpg" alt="Sukhna Lake" style={{ width: '350px', height: '350px' }} />
            </div>
            <div className="flip-card-back">
              <h1>Pangong Lake</h1>
              <p>
              The Pangong Lake or the Pangong Tso is one of the highest altitude lakes in the world and is famed for its colour changing water, from blue to red and green. From camping to lakeside bonfire, a wide variety of activities can be enjoyed here. During the winter months, the lake can be seen completely frozen, which is a delightful sight in itself.
             </p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="https://gomissing.in/wp-content/uploads/2016/12/925642504s-e1482910326186.jpg" alt="Rock Garden" style={{ width: '350px', height: '350px' }} />
            </div>
            <div className="flip-card-back">
              <h1>Gulmarg</h1>
              <p>
              If one is to make a list of the most visited hill stations of our country, then I am sure the name Gulmarg will be among the top ones. Quite rightly termed as the meadow of flowers, it is indeed a heavenly place to tread in that offers mesmerizing landscapes and an enthralling possibility of various adventure activitie
             </p>

            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="https://voiceofguides.com/wp-content/uploads/2021/05/Srinagar-raisa-nastukova-unsplash-1024x683.jpg" alt="Rose Garden" style={{ width: '350px', height: '350px' }} />
            </div>
            <div className="flip-card-back">
              <h1>Srinagar</h1>
              <p>Famously known as 'Heaven on Earth, Srinagar is located in the union territory of Jammu & Kashmir, on the banks of river Jhelum. Srinagar is known for the stationary houseboats and gondola-type rowboats- Shikaras on Dal Lake. Adorned with tranquil Dal Lake & Nigeen Lake, Srinagar is the dream destination for honeymoon and family holidays.</p>
             
      
            </div>
          </div>
        </div>





        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="https://www.adotrip.com/public/images/city/master_images/5e3ba02fca7da-Ladakh_Package_Tour.jpg" alt="Shastri Market" style={{ width: '350px', height: '350px' }} />
            </div>
            <div className="flip-card-back">
              <h1>Leh</h1>
              <p>Leh, the capital of Ladakh, has been an important junction on the famous Silk Route of the olden times. It is also the second largest district of the country spreading in an area of 45,110 sq km.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JammuPage;