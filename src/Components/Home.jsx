import React from "react";
import Para from "./Para";
import Video from "./Video";
import Fest from "./Fest";
import Popular from "./Popular";
import Footer from "./Footer";


const Home = () => {
    return(
        <div className="main-home">
            <Video/>
            <Para/>
            <Fest/>
            <Popular/>
            <Footer/>
        </div>
    )
}

export default Home;