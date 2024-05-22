import React from 'react';
import './Food.css';


const FoodPage= () => {
  return (
    <div>


      <div className="background-food">
        <img src="Food and cusine background.webp" alt="Art Background" />
        <div className="Food">
          <h1>Food</h1>
        </div>
      </div>
      <section className="food-section">
        <h2>Food and Cuisine</h2>
        <p>
        Known for its diversity that varies with every region, state, community, culture and even religion, food in India is a vibrant assortment of uncountable dishes. It is distinctly characterised by the subtle and sophisticated use of spices, grains, fruits and vegetables that are all grown in the country. Home to people of many religions who come from a plethora of cultural backgrounds, the food culture of the country has been influenced by all of them, including foreigners.
        On his way back to England from India, it is said that legendary British chef, William Harold, made a note in his diary that read: “Of all the food cultures I have had the fantastic opportunity to savour, Hindoostani remains one of the most enigmatic, enchanting and extremely addictive. It is both ancient in practice and modern in approach, and in the years to come will be the one system that would turn cuisine in the world.”
        As per legends, the year was of the war, and chef Harold, on the behest of an officer, had made a rather 'strenuous' journey to figure out the recipe of the omnipresent bhel – a common snack that had made home in the British palate memory, way before chicken tikka ruled their world.
        Curiously, while Harold failed to master the recipe of bhel despite many visits to different vendors across north and western India, he did take a shine to many things Indian – the grill, pit cooking and one-pot cooking.
        Chef Harold, however, wasn’t the first person to be smitten by the vastness of the Indian cuisine. Even in ancient times, Indian food culture, which is defined as a delicious melange of culinary techniques developed by nearly 10,000 tribes and communities, even managed to stun travellers like Ibn Battuta. The Moroccan scholar, in fact, dedicated a major part of his journal to exploring the fascinating world of cuisine across the Silk Route kingdom. An interesting chapter in his journal expounded upon the food street of India, including the rich Vijaynagaram, which he called the 'capital of a healthy surpluses'.
        Moreover, what makes Indian cuisine more appealing in today's world is the fact that it was developed on the science of wellness and a system of thali, which allowed the body to take the right amount of nutrients required as per one’s occupation. However, its sustainability and taste endeared it to one and many.
        While food culture in India drew heavy influences from different dynasties, trading routes and foreign rulers, it expanded in two versions: the common man’s and the elite's.
          <br /><br />
          Take Assam for example. The food culture easily dates back easily to 1 AD, and was developed primarily by the Ahom kings, who ruled upper Assam, and farmers, who stayed in lower Assam. This eclectic and ancient cuisine, thus, taught the world the value of introducing 'khar' (alkali) and 'tenga' (sourness) into food. Even today, they have two streams of food, one inspired by the flavours of royalty and the other a culmination of traditional tribal recipes. The local cuisine was further improved upon when the Bengali community and the Muslim soldiers settled in this tea-rich region and added a new dimension to it.
        Bengali cuisine too developed in a likewise manner. Before the famous Calcutta modern cuisine was created, the food in the region was slowly created by farming communities and dynasties that ruled Bengal, like the Gupta kings and the Chola empire. Later, the cuisine was evolved by Odia temple chefs and Bangladeshi cooks, who made an array of interesting mutton curries, chops, the famous daab chingri (prawns cooked in coconut milk) and the chorchori (mixed vegetables). This gave a common link among the cuisines of Bengal, Odisha, Bihar and parts of Andhra Pradesh.
        Furthermore, many communities made these regions their home. It is said that the famous Anglo-Indian cuisine was created by the Armenians, who settled in Bengal way before the Dutch and the British. The food of Gujarat and Maharashtra was influenced by the Parsis, who took the indigenous cuisine and paired it with their own culinary techniques to create a food culture that is a delicious blend of Gujarati and Iranian flavours.
        The versatility of Indian cuisine made Babur (founder of the Mughal dynasty in India) work towards developing the Mughlai cuisine. The evolution in the design of Indian food also came according to a 10,000-year-old science that made our culinary ecosystem not only about the taste but also about wellness. This defined many of the techniques that led to the creation of a plethora of interesting dishes like rasam (consommé), kanjis (gruels that help develop the gut), bhapa (steam) and kashayam (ancient kaada, which became the base for many medicines), and even the rich beverage culture.
        An excellent example of Indian culinary evolution is the sweets. Treats such as ladoos (sphere-shaped sweets), chenna podo (touted as the first cheesecake of South Asia), jalebi (deep-fried sweet pretzel), ghevar (disc-shaped sweet cake) and rosogolla (syrupy dessert), have all been a benchmark of how basic techniques like baking, roasting, frying (deep and shallow) and steaming were perfected to create classics.
        Other culinary highlights are the kebabs, raans (roasted lamb leg) and bhartas that not only redefined the art of roasting – pit, grilling and tandoor (a type of clay oven), but also the art of cooking food by keeping nutrition intact. However, what held the attention of the world were the curries and flatbreads. India, since medieval times, has boasted a range of flatbreads that were made using a flat griddle called tawa, and tandoor. Surprisingly, wheat or corn were a late entry, the common preference were those made with millets, rice and roasted gram flour called sattu.
        No wonder, Indian cuisine was the focal point of many cultures.
          <br /><br />
          No wonder, Indian cuisine was the focal point of many cultures. So where does one really begin to understand a cuisine that is ancient and yet has constantly evolved to stay relevant to the present time? An easy primer into Indian food starts with understanding the five prominent regions of the
           country and how the cuisine developed in these parts – essentially the north, east, south, northeast and west of India.
        </p>
        <h2>Scrumptious Delights</h2>
        <p>
        Sample the diverse flavours from different regions of the country.
        </p>
      </section>
      <section className="food-gallery">
        <figure className="food-figure">
          <a href="#">
            <img src="north.jpg" alt="North" className="food-image" />
          </a>
          <figcaption className="food-caption">
            <h2>North</h2>
          </figcaption>
        </figure>
        <figure className="food-figure">
          <a href="#">
            <img src="West.jpg" alt="West" className="food-image" />
          </a>
          <figcaption className="food-caption">
            <h2>West</h2>
          </figcaption>
        </figure>
        <figure className="food-figure">
          <a href="#">
            <img src="south.jpg" alt="South" className="food-image" />
          </a>
          <figcaption className="food-caption">
            <h2>South</h2>
          </figcaption>
        </figure>
        <figure className="food-figure">
          <a href="#">
            <img src="East.jpg" alt="East" className="food-image" />
          </a>
          <figcaption className="food-caption">
            <h2>East</h2>
          </figcaption>
        </figure>
        <figure className="food-figure">
          <a href="#">
            <img src="northeast.jpg" alt="Northeast" className="food-image" />
          </a>
          <figcaption className="food-caption">
            <h2>Northeast</h2>
          </figcaption>
        </figure>
      </section>
    </div>
  );
};

export default FoodPage;