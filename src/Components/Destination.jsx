import React from "react";
import { Link } from 'react-router-dom'; // Import Link component
import "../assets/css/Destination.css";

const Dest = () => {
    return (
        <>
        <div className="animated_heading">
    <h1>
        Which region of India do you want to Explore?
    </h1>
 </div>
    <div className="background-container"></div>
    <div className="container123">

        <figure>
            <img src="north1.jpg"/>
            <figuration>
                <h1>NORTH</h1>
                <p>
                {/* <a href="destination_page.html">Chandigarh</a>  */}
                <Link to="/chandigarh">Chandigarh</Link>
                <Link to="/delhi">Delhi</Link> 
                <Link to="/Haryana">Haryana</Link> 
                <Link to="/Himachal">Himachal</Link>  
                <Link to="/JK">Jammu and Kashmir</Link>
               
                <a href="destination_page.html">Punjab</a>    
                <a href="destination_page.html">Rajasthan </a>   
                <a href="destination_page.html">Uttarakhand</a>  
                <a href="destination_page.html">Uttar Pradesh</a>
                </p>
            </figuration>
        </figure>
        <figure>
            <img src="northeastindia1.jpg"/>
            <figuration>
                <h1>NORTH EAST</h1>
                <p>
                    <Link to="/N_AruPradesh">Arunachal Pradesh</Link> 
                    <Link to="/Assam">Assam  </Link>
                    <Link to="/Manipur">Manipur  </Link>
                    <Link to="/Meghalaya">Meghalaya  </Link>
                     
                    <a href="destination_page.html">Mizoram</a> 
                    <a href="destination_page.html"></a> Nagaland 
                    <a href="destination_page.html">Sikkim</a> 
                    <a href="destination_page.html">Tripura</a> 
                </p>
             
            </figuration>
        </figure>

    
       
    
        <figure>
            <img src="south1.jpg" />
            <figuration>
                <h1>SOUTH</h1>
                <p> <Link to="/AndhraPradesh">Andhra Pradesh  </Link> 
                    <Link to="/Karnataka">Karnataka</Link> 
                    <Link to="/Kerala">Kerala  </Link> 
                    <Link to="/Lakshadweep">Lakshadweep </Link>  
                    <Link to="/Puducherry">Puducherry </Link>  
                    <Link to="/TamilNadu">Tamil Nadu  </Link> 
                    <Link to="/Telangana">Telangana </Link>
                    </p>
                
            </figuration>
        </figure>
    
        <figure>
            <img src="western1.jpg"/>
            <figuration>
                <h1>WEST</h1>
                <p>
                <Link to="/Dadra">Dadra and Nagar Haveli & Daman and diu </Link>
              
     
                    <a href="destination_page.html">Goa</a> 
                    <a href="destination_page.html">Gujarat</a>  
                    <a href="destination_page.html">Maharashtra</a> 
                </p>
            
            </figuration>
        </figure>
   <figure>
            <img src="central1.jpg"/>
            <figuration>
                <h1>CENTRAL</h1>
                <p> 
                <Link to="/Chattisgarh">Chattisgarh </Link>
                <Link to="/MP">Madhya Pradesh </Link>
                    
                     </p>
               
            </figuration>
        </figure>

  
        <figure>
            <img src="eastindia1.jpg"/>
            <figuration>
                <h1>EAST</h1>
                <p>
                    
                <Link to="/Andaman">Andaman and Nicobar islands </Link>

                <Link to="/Bihar">Bihar</Link>
                    <a href="destination_page.html">Jharkhand</a> 
                    <a href="destination_page.html">Odisha</a>  
                    <a href="destination_page.html">West Bengal</a> </p>
              
            </figuration>
        </figure>
    </div>  
    </>
    )
}


export default Dest;