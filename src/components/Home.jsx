import React from 'react'
import './components.css'
import portrait from '../assets/image/image-portrait.png';

const Home = () => {
  return (
    <>
        <div>Home</div>
        <div className='title-group'>
            <h2>PORTOFOLIO EXAMPLE 1</h2>
        </div>
        <div className='image-1'>
            <img src={portrait} alt="" className='image-portrait' />
            <label htmlFor="img" className="name-portrait">Lorem, ipsum dolor.</label>
            <label htmlFor="img" className="job-portrait">Art Painter</label>
        </div>
        <div className='desc-group'>
            <h1>Lorem, ipsum.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt placeat labore dolores, natus repudiandae voluptatum eveniet, quis ratione, debitis nam commodi excepturi velit. Aut natus nihil exercitationem sapiente quia laudantium labore nemo ab facilis, quisquam asperiores nulla quaerat omnis illum! Suscipit ea explicabo illum porro laudantium, sit excepturi deleniti consequuntur saepe labore itaque voluptatibus animi eaque nam eum commodi inventore error quo officia maiores natus molestias fugit iste? Nulla praesentium sunt amet, dolorum dolor magnam ullam, quaerat voluptatem officiis neque earum aperiam porro quam eius enim possimus sequi saepe modi architecto velit qui ex debitis hic? Molestias accusantium libero exercitationem.</p>
        </div>
        <div className="button-group">
            <button>TAKE TOUR</button>
        </div>
    </>
  )
}

export default Home