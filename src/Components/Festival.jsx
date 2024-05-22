
import React from 'react';
import { Link } from 'react-router-dom';
import "../assets/css/Festival.css";

const Festival = () => {
  const festivals = [
    { name: 'DIWALI', imgSrc: 'diwalifig.jpg', link: '/diwali', },
    { name: 'HOLI', imgSrc: 'holifig.jpg', link: '/holi' },
    { name: 'DUSSEHRA', imgSrc: 'dussehrafig.jpg', link: '/dussehra' },
    { name: 'NAVRATRI', imgSrc: 'navratri fig.jpg', link: '/navratri' },
    { name: 'GANESH CHATURTHI', imgSrc: 'ganeshfig.jpg', link: '/ganesh' },
    { name: 'EID-UL-FITR', imgSrc: 'eidfig.jpg', link: '/eid' },
    { name: 'GUJARAT KITE FESTIVAL', imgSrc: 'kitefig.jpg', link: '/gujarat' },
    { name: 'PUSHKAR CAMEL FAIR', imgSrc: 'camelfig.jpg', link: '/pushkar' },
    { name: 'LOHRI', imgSrc: 'lohrifig.jpg', link: '/lohri' },
    { name: 'RAKSHA BANDHAN', imgSrc: 'raksha fig.jpg', link: '/raksha' },
    { name: 'GURUPURAB', imgSrc: 'gurpurabfig.jpg', link: '/guru' },
    { name: 'CHRISTMAS', imgSrc: 'christmasfig.jpg', link: '/christmas' },
  ];

  const nationalDays = [
    { name: 'INDEPENDENCE DAY', imgSrc: 'independence fig.jpg', link: '/independence' },
    { name: 'REPUBLIC DAY', imgSrc: 'republicfig.jpg', link: '/republic' },
    { name: 'GANDHI JAYANTI', imgSrc: 'gandhifig.jpg', link: '/gandhi' },
  ];

  return (
    <div className="festival-container">
      <div className="festival-background">
        <img src="festivalbackground.jpeg" alt="background" />
        <div className="festival-text">
          <h1>Let's Explore Festivals Of India</h1>
        </div>
      </div>
      <section className="festival-list">
        {festivals.map((festival, index) => (
          <figure key={index} className="festival-figure">
            <Link to={festival.link}>
              <img src={festival.imgSrc} alt={festival.name} className="festival-img" />
            </Link>
            <figcaption className="festival-caption">
              <h2>{festival.name}</h2>
            </figcaption>
          </figure>
        ))}
      </section>
      <h2 className="festival-header">NATIONAL DAYS OF INDIA</h2>
      <section className="festival-list">
        {nationalDays.map((day, index) => (
          <figure key={index} className="festival-figure">
            <Link to={day.link}>
              <img src={day.imgSrc} alt={day.name} className="festival-img" />
            </Link>
            <figcaption className="festival-caption">
              <h2>{day.name}</h2>
            </figcaption>
          </figure>
        ))}
      </section>
    </div>
  );
};

export default Festival;




// FestivalsOfIndia.jsx

// FestivalsOfIndia.jsx


// FestivalsOfIndia.jsx

// import React from 'react';
// import '../assets/css/Festival.css';

// const Festival = () => {
//   return (
//     <div className="festivals-container">
//       <div className="container-fest">
//         <img src="festivalbackground.jpeg" alt="background" />
//         <div className="para">
//           <h1>Let's Explore Festivals Of India</h1>
//         </div>
//       </div>
//       <section className="fest">
//         <label htmlFor="diwali" className="card">
//           <input type="checkbox" id="diwali" className="toggle" />
//           <figure className="diwali">
//             <img src="diwalifig.jpg" alt="diwali" />
//             <figcaption>
//               <h2>DIWALI</h2>
//             </figcaption>
//             <p className="description">Diwali is the festival of lights celebrated with great joy and enthusiasm across India.</p>
//           </figure>
//         </label>
//         <label htmlFor="holi" className="card">
//           <input type="checkbox" id="holi" className="toggle" />
//           <figure className="holi">
//             <img src="holifig.jpg" alt="holi" />
//             <figcaption>
//               <h2>HOLI</h2>
//             </figcaption>
//             <p className="description">Holi is the festival of colors, marking the arrival of spring and the victory of good over evil.</p>
//           </figure>
//         </label>
//         {/* Add other festival figures similarly */}
//       </section>
//       <h2 id="head">NATIONAL DAYS OF INDIA</h2>
//       <section className="fest">
//         <label htmlFor="independence" className="card">
//           <input type="checkbox" id="independence" className="toggle" />
//           <figure className="independence">
//             <img src="independence fig.jpg" alt="Independence" />
//             <figcaption>
//               <h2>INDEPENDENCE DAY</h2>
//             </figcaption>
//             <p className="description">Independence Day is celebrated on 15th August to commemorate India's freedom from British rule.</p>
//           </figure>
//         </label>
//         <label htmlFor="republic" className="card">
//           <input type="checkbox" id="republic" className="toggle" />
//           <figure className="republic">
//             <img src="republicfig.jpg" alt="Republic" />
//             <figcaption>
//               <h2>REPUBLIC DAY</h2>
//             </figcaption>
//             <p className="description">Republic Day is celebrated on 26th January, marking the adoption of the Indian Constitution.</p>
//           </figure>
//         </label>
//         {/* Add other national day figures similarly */}
//       </section>
//     </div>
//   );
// };

// export default Festival;
