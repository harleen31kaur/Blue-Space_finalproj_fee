
import React from 'react';
import { Link } from 'react-router-dom'; 
import "../assets/css/Experience.css"

const App = () => {
  return (
    <><div className="experiences-image ">
      {/* <img src='https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L2ZsMzYyNjkxODE2NDItcHVibGljLWltYWdlLWtvbnFxczZlLmpwZw.jpg'></img> */}

    </div>
    <div className="custom-box">

        <figure className="custom-figure">
        <Link to="/heritage" className="custom-link-heritage">

          <img src="Heritage.1.jpg" alt="Heritage" className="custom-image" />


          <figcaption className="custom-figcaption">
            <h2>Heritage</h2>
          </figcaption>
          </Link>
        </figure>



        <figure className="custom-figure">
        <Link to="/spiritual" className="custom-link-spirital">
            <img src="Spiritual.1.jpg" alt="Spiritual" className="custom-image" />
          
          <figcaption className="custom-figcaption">
            <h2>Spiritual</h2>
          </figcaption>
          </Link>
        </figure>

        <figure className="custom-figure">
          <Link to="/adventure" className="custom-link-adventure">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaCY7f9MUO5JrinxgtxBQEwPjrtOV1dCx9dlJg0K7Hyw&s" alt="Adventure" className="custom-image" />
          
          <figcaption className="custom-figcaption">
            <h2>Adventure</h2>
          </figcaption>
          </Link>
        </figure>

        <figure className="custom-figure">
        <Link to="/nature" className="custom-link-nature">
          
            <img src="Nature and wildlife.1.jpg" alt="Nature and wildlife" className="custom-image" />
         
          <figcaption className="custom-figcaption">
            <h2>Nature and Wildlife</h2>
          </figcaption>
          </Link>
        </figure>



        <figure className="custom-figure">
          <Link to="/art" className="custom-link-art">

            <img src="Art.1.jpg" alt="Art" className="custom-image" />

            <figcaption className="custom-figcaption">
              <h2>Art</h2>
            </figcaption>
          </Link>
        </figure>




        <figure className="custom-figure">
        <Link to="/crafted" className="custom-link-crafted">
            <img src="crafted in india.1.jpg" alt="Crafted in india" className="custom-image" />
          
          <figcaption className="custom-figcaption">
            <h2>Crafted in India</h2>
          </figcaption>
          </Link>
        </figure>

        <figure className="custom-figure">
        <Link to="/food" className="custom-link-food">
            <img src="Food and cusine.1.jpg" alt="Food and Cuisine" className="custom-image" />
          
          <figcaption className="custom-figcaption">
            <h2>Food and Cuisine</h2>
          </figcaption>
          </Link>
        </figure>

        <figure className="custom-figure">
        <Link to="/luxury" className="custom-link-luxury">
            <img src="Luxury.1.jpg" alt="Luxury" className="custom-image" />
         
          <figcaption className="custom-figcaption">
            <h2>Luxury</h2>
          </figcaption>
          </Link>
        </figure>

        <figure className="custom-figure">
        <Link to="/museum" className="custom-link-museum">
            <img src="museum.jpg" alt="Museum" className="custom-image" />
          
          <figcaption className="custom-figcaption">
            <h2>Museum</h2>
          </figcaption>
          </Link>
        </figure>

        <figure className="custom-figure">
        <Link to="/shopping" className="custom-link-shopping">
            <img src="Shopping.1.jpg" alt="Shopping" className="custom-image" />
          
          <figcaption className="custom-figcaption">
            <h2>Shopping</h2>
          </figcaption>
          </Link>
        </figure>

        <figure className="custom-figure">
        <Link to="/unesco" className="custom-link-unesco">
            <img src="UNESCO world heritage site.1.jpg" alt="UNESCO world heritage" className="custom-image" />
          
          <figcaption className="custom-figcaption">
            <h2>UNESCO World Heritage</h2>
          </figcaption>
          </Link>
        </figure>

        <figure className="custom-figure">
        <Link to="/yoga" className="custom-link-yoga">
            <img src="Yoga and wellness.1.jpg" alt="Yoga and wellness" className="custom-image" />
          
          <figcaption className="custom-figcaption">
            <h2>Yoga and Wellness</h2>
          </figcaption>
          </Link>
        </figure>
      </div></>
  );
};

export default App;
