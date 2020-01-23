import React from 'react'

const Home = ({ logout }) => { 

const handleSubmit = () => {
  logout()
}
  return (
    <div className="home-screen">
     

      <div className="hamburger"></div>
      <div className="hamburger"></div>
      <div className="hamburger"></div>

      <button className='logout' onClick={handleSubmit}>Log Out</button>
    </div>
    
  )
}

export default Home;