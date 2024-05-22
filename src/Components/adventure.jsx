

import React from 'react';
import './adventure.css';

const AdventurePage = () => {
  return (
    <div>
      <div className="background-adventure">
        <img src="https://imgcld.yatra.com/ytimages/image/upload/t_ann_seo_banner_tab/v1530015312/AdvNation/ANN_TRP156/adventure-trips-in-india_1440486703_aNbqdJ.jpg" alt="Adventure Background" />
        <div className="adventure">
          <h1>Adventure</h1>
        </div>
      </div>
      <section className="adventure-section">
        <h2>Adventurous</h2>
        <p>
          Spirit of Adventure/ Allure of AdventureScale the heights of thrill, or plummet to the depths
          of excitement or if you're truly daring, survey gorgeous lands and waters, while suspended in
          the sky. All this and more awaits you as you explore land, water and sky adventures in the
          country. From trekking, mountain biking and mountaineering in the secluded snow-capped
          Himalayas to surfing, rafting, scuba diving and snorkelling, there are a multitude of
          options for thrill seekers.
          <br /><br />
          India’s diverse terrain ensures optimum adrenaline-pumping for those looking to tread on the exhilarating
          side of a holiday. The north beckons adventure seekers with the gregarious spirit of the Himalayas that
          offer visitors thrilling experiences in destinations like Manali, Dharamsala, Ladakh, Srinagar, and Kedarnath.
          In south, you can visit Ootacamund and Yercaud, while Goa, in the western part of the country, is a delight
          for water-sport enthusiasts. In the east and northeast, you can head to Kurseong (West Bengal),
          Tawang (Arunachal Pradesh), Sikkim, Dirang (Arunachal Pradesh), and Bhalukpong (Arunachal Pradesh)
          for a tryst with adrenaline.
          <br /><br />
          Rest assured that trained professionals make sure everything on your
          adventure-filled itinerary follows the strictest standards of safety. All you have to do is sign
          up and enjoy all the activities on offer!
        </p>
        <h2>Peak Of Thrill</h2>
        <p>
          Land, water, sky, all play host to a stimulating travel experience.
        </p>
      </section>
      <section className="adventure-gallery">
        <figure className="adventure-figure">
          <a href="#">
            <img src="Adventure on land.jpg" alt="Adventure on Land" className="adventure-image" />
          </a>
          <figcaption className="adventure-caption">
            <h2>Adventure on Land</h2>
          </figcaption>
        </figure>
        
        <figure className="adventure-figure">
          <a href="#">
            <img src="Adventure in Sky.jpg" alt="Adventure in Sky" className="adventure-image" />
          </a>
          <figcaption className="adventure-caption">
            <h2>Adventure in Sky</h2>
          </figcaption>
        </figure>
        <figure className="adventure-figure">
          <a href="#">
            <img src="Adventure in Water.jpg" alt="Adventure in Water" className="adventure-image" />
          </a>
          <figcaption className="adventure-caption">
            <h2>Adventure in Water</h2>
          </figcaption>
        </figure>
      </section>
    </div>
  );
};

export default AdventurePage;
