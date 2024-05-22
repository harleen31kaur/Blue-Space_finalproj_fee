import React from 'react'
import { Link } from 'react-router-dom';

const Fest = () => {
  return (
    <div id="imagelink">
        <Link to="/festival" className='inside-image'><img src="festivallink.jpg" alt="festival" className="animatedimage" /></Link>
    </div>
  )
}

export default Fest



