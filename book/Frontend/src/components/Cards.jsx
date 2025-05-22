import React from 'react';

const Cards = ({ item }) => {

  return (
    <>
      <div className='mt-4 my-3 p-3'>
        <div className="card bg-base-100 w-90 shadow-xl">
          <figure>
            <img
              src={item.image}
              alt="Shoes"
              style={{ width: '100vh', height: '45vh' }} // Inline styles for width and height
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge" style={{ backgroundColor: 'rgb(241,81,172)',color:'white' }}>{item.category}</div>

            </h2>
            <p>{item.title}</p>
            <div className="card-actions flex justify-between">
              <div className="badge badge-outline1" style={{border:"1px solid grey"}}>${item.price}</div>
              <div className="badge badge-outline"  style={{border:"1px solid grey"}}>Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
