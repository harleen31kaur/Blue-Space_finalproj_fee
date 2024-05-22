import React, { useState } from 'react';
import Heritage from '/heritage.webp'
import Spiritual from '/spiritual.jpg'
import Adventure from '/advanture.jpg'
import Wildlife from '/wildlife.jpg'
import Art from '/art.jpg'
import Craft from '/craft.jpg'
import Food from '/food.jpg'
import Luxury from '/luxury.jpg'

const card_data = [
  {
    key: 1,
    location: 'Heritage',
    img1: Heritage,
    description: "A Tapestry Woven Through Time: Exploring India's Rich Heritage",
    details: "India's heritage is rich and diverse, encompassing thousands of years of history, culture, art, and tradition. From the ancient Indus Valley Civilization to the Mughal Empire, India has been a center of trade, learning, and innovation. Its rich tapestry includes  architectural wonders like the Taj Mahal, spiritual traditions like Hinduism and Buddhism, and a vibrant cultural heritage expressed through music, dance, and literature.",
  },
  {
    key: 2,
    location: 'Spiritual',
    img1: Spiritual,
    description: "Explore the Spiritual Heart and knowledge of India",
    details: "India's soul is steeped in spirituality. From ancient yoga practices for mindfulness and well-being to the meditative chants of Hinduism, every corner whispers of the divine. Immerse yourself in the serenity of ashrams, marvel at architectural wonders like temples, and discover the path to inner peace.",
  },
  {
    key: 3,
    location: 'Adventure',
    img1: Adventure,
    description: "Unleash Your Inner Explorer: Adventures in India",
    details: "India beckons the thrill-seeker! Trek through the majestic Himalayas, raft down rushing rivers, or cycle through vibrant landscapes. Scuba dive in crystal-clear waters, paraglide over breathtaking valleys, or embark on a wildlife safari. From mountain peaks to tropical beaches, India offers an unforgettable adventure for every spirit.",
  },
  {
    key: 4,
    location: 'Nature and Wildlife',
    img1: Wildlife,
    description: "Embrace the Majesty of Nature in India",
    details: "India's natural beauty is as diverse as its culture. Witness the snow-capped peaks of the Himalayas, wander through lush jungles teeming with wildlife, or relax on pristine beaches. Explore the mystical deserts of Rajasthan, sail the tranquil backwaters of Kerala, or navigate the mighty Ganges River. From breathtaking landscapes to unique ecosystems, India's nature awaits your exploration.",
  },
  {
    key: 5,
    location: 'Art',
    img1: Art,
    description: "A Journey Through India's Artistic Heritage",
    details: "India's artistic legacy is a vibrant tapestry spanning millennia. From the intricate details of Mughal miniature paintings to the bold colors of Warli art, each region boasts unique styles and traditions. Explore the majestic temples adorned with sculptures, marvel at the colorful textiles woven with intricate patterns, or lose yourself in the captivating world of classical Indian dance. Every corner of India reveals a masterpiece waiting to be discovered.",
  },
  {
    key: 6,
    location: 'Crafted in India',
    img1: Craft,
    description: "The Exquisite Handcrafted Treasures of India",
    details: "India's soul is woven into its crafts. Skilled artisans, for generations, have passed down the knowledge to create breathtaking objects. Explore the intricate zari embroidery on silk sarees, the delicate inlay work on marble Taj Mahals in miniature, or the vibrant hand-painted pottery. From intricate metalwork to woven baskets, each piece tells a story and embodies the artistic heritage of India. These handcrafted treasures are not just souvenirs, but windows into the cultural legacy of the nation.",
  },
  {
    key: 7,
    location: 'Food and Cusine',
    img1: Food,
    description: "A Culinary Adventure: Exploring the Flavors of India",
    details: "Embark on a delicious journey through India's diverse culinary landscape. Every region boasts unique flavors and dishes, influenced by spices, local ingredients, and traditions. Savor the creamy curries of the south, indulge in the rich kebabs of the north, or delight in the light and fluffy dosas of the east. From street food stalls bursting with vibrant flavors to opulent feasts fit for royalty, India's food scene is a treat for all senses. Prepare to be tantalized by the aromatic spices, delighted by the explosion of textures, and captivated by the sheer variety of Indian cuisine.",
  },
  {
    key: 8,
    location: 'Luxury',
    img1: Luxury,
    description: "Indulge in Unparalleled Luxury: The Opulent Side of India",
    details: "India redefines luxury with experiences that cater to the discerning traveler. Stay in opulent palaces transformed into heritage hotels, adorned with intricate carvings and rich fabrics. Shop for exquisite handcrafted jewelry adorned with precious stones. Embark on a private wildlife safari in a luxurious jeep, spotting tigers and rare animals in their natural habitat. Savor gourmet meals prepared by renowned chefs, using the finest local ingredients. From bespoke shopping sprees to rejuvenating spa treatments, India offers a luxurious escape unlike any other.",
  },
];


const Card = () => {
  const [showPopups, setShowPopups] = useState(Array(card_data.length).fill(false));

  const handlePopupClick = (index) => {
    const newPopups = [...showPopups];
    newPopups[index] = !newPopups[index];
    setShowPopups(newPopups);
  };

  const handleClosePopup = (index) => {
    const newPopups = [...showPopups];
    newPopups[index] = false;
    setShowPopups(newPopups);
  };

  return (
    <>
    <div className='Title'>
        <h1>Experinces</h1>
    </div>
    <div className='card'>
      {card_data.map((item, index) => (
        <div key={item.key} className="card-item">
          <img src={item.img1} alt="image" />
          <h2>{item.location}</h2>
          <p>{item.description}</p>
          <button onClick={() => handlePopupClick(index)}>Know More</button>

          {showPopups[index] && (
            <div className="popup-overlay" tabIndex={showPopups[index] ? 0 : -1}>
              <div className="popup">
                {item && (
                  <img src={item.img1} alt="Additional image" aria-label="Additional image for the item" />
                )}
                <p>{item?.details}</p>
                <button onClick={() => handleClosePopup(index)}>Close</button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
    </>
  );
};

export default Card;