import React from 'react'
import portrait from '../assets/image/image-portrait.png';

const Home = () => {
  return (
    <>
        <div>Home</div>
        <div className='title-group'>
            <h2>PORTOFOLIO EXAMPLE 1</h2>
        </div>
        <div className='image-1'>
            <img src={portrait} alt="" />
            <label htmlFor="img" className="name-portrait">Lorem, ipsum dolor.</label>
            <label htmlFor="img" className="job-portrait">Art Painter</label>
        </div>
        <div className='desc-group'>
            <h1>Lorem, ipsum.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, id assumenda. Iure numquam atque aut dolor architecto tenetur cupiditate qui?</p>
        </div>
        <div className="button-group">
            <button>TAKE TOUR</button>
        </div>
    </>
  )
}

export default Home