import React from 'react'

const Home = () => {
  return (
    <div className='home'>
      <div className="card">
        <div className="img">
          <img src='https://images.squarespace-cdn.com/content/v1/5972489ff7e0ab52f5a63107/1584001616265-906OPLNYWFUPJSTCP7PB/finished+2.jpg?format=750w' alt='home pic' />
        </div>
        <div className="text">
          <div className="title">
            <h1>Title</h1>
          </div>
          <div className="description">Description</div>
        </div>
      </div>
      <div className="subscribe">
        <form type="email" />
        <button type="sumbit">
          Subscribe to mailing list
        </button>
      </div>
    </div>
  )
}

export default Home
