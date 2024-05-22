
import React, { useState } from 'react';
import "../assets/css/BookNow.css";

const Testimonials = () => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [reviews, setReviews] = useState([]);

  const handleStarClick = (value) => {
    setRating(value);
  };

  const handleSubmit = () => {
    if (!rating || !review) {
      alert('Please select a rating and provide a review before submitting.');
      return;
    }

    const newReview = {
      rating,
      review,
    };

    setReviews([...reviews, newReview]);
    setRating(0);
    setReview('');
  };

  const getStarColorClass = (value) => {
    switch (value) {
      case 1:
        return 'one';
      case 2:
        return 'two';
      case 3:
        return 'three';
      case 4:
        return 'four';
      case 5:
        return 'five';
      default:
        return '';
    }
  };

  return (
    <div>
      <section id="testimonials">
        <div className="testimonial-heading">
          <h1>Comments</h1>
          <h4>What our Clients Says?</h4>
        </div>
        <div className="testimonial-box-container">
          <div className="testimonial-box">
            <div className="box-top">
              <div className="profile">
                <div className="profile-img">
                  <img src="https://images.creativemarket.com/0.1.0/ps/9870131/3640/2410/m1/fpnw/wm1/p208-0532-.jpg?1612939047&s=39a3df96d34c74e295a192f6f58e83ba" alt="Liam Mendes" />
                </div>
                <div className="name-user">
                  <strong>Liam Mendes</strong>
                  <span>@liammendes</span>
                </div>
              </div>
              <div className="reviews">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
            </div>
            <div className="client-comment">
              <p>Excellent service and knowledgeable staff. The whole process was seamless and I will definitely look at Travel Online the next time I intent to travel.</p>
            </div>
          </div>
          <div className="testimonial-box">
            <div className="box-top">
              <div className="profile">
                <div className="profile-img">
                  <img src="https://img.freepik.com/free-photo/smiling-young-male-professional-standing-with-arms-crossed-while-making-eye-contact-against-isolated-background_662251-838.jpg" alt="Noah Wood" />
                </div>
                <div className="name-user">
                  <strong>Noah Wood</strong>
                  <span>@noahwood</span>
                </div>
              </div>
              <div className="reviews">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
            <div className="client-comment">
              <p>Had the best holiday, organised by Travel online. Have absolute confidence of recommending them and rebooking another holiday.</p>
            </div>
          </div>
          <div className="testimonial-box">
            <div className="box-top">
              <div className="profile">
                <div className="profile-img">
                  <img src="https://www.shutterstock.com/shutterstock/photos/1617540484/display_1500/stock-photo-closeup-photo-of-amazing-short-hairdo-lady-looking-up-empty-space-deep-thinking-creative-person-arm-1617540484.jpg" alt="Oliver Queen" />
                </div>
                <div className="name-user">
                  <strong>Oliver Queen</strong>
                  <span>@oliverqueen</span>
                </div>
              </div>
              <div className="reviews">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
            </div>
            <div className="client-comment">
              <p>Everything worked perfectly, we had no hiccups on our holiday. My reason for using Travelonline, was because I could select and price instantly all the holiday variations available online and see a true cost.</p>
            </div>
          </div>
          <div className="testimonial-box">
            <div className="box-top">
              <div className="profile">
                <div className="profile-img">
                  <img src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png" alt="Barry Allen" />
                </div>
                <div className="name-user">
                  <strong>Barry Allen</strong>
                  <span>@barryallen</span>
                </div>
              </div>
              <div className="reviews">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
            </div>
            <div className="client-comment">
              <p>Could not complain in any way about your service and arrangement of our holiday. Everything went to clockwork and the resort we stayed in was fantastic. Thank you and we look to booking our next holiday with Travel On Lin</p>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <h1>RATE OUR WEBSITE</h1>
        <div className="rating">
          <span id="rating">{rating}</span>/5
        </div>
        <div className="stars" id="stars">
          {[1, 2, 3, 4, 5].map((value) => (
            <span
              key={value}
              className={`star ${rating >= value ? getStarColorClass(value) : ''}`}
              data-value={value}
              onClick={() => handleStarClick(value)}
            >
              ★
            </span>
          ))}
        </div>
        <p>Share your review:</p>
        <textarea
          id="review"
          placeholder="Write your review here"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
        <button id="submit" onClick={handleSubmit}>Submit</button>
        <div className="reviews" id="reviews">
          {reviews.map((rev, index) => (
            <div key={index} className="review">
              <p><strong>Rating: {rev.rating}/5</strong></p>
              <p>{rev.review}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
