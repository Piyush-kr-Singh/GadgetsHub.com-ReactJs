import React from 'react';

const MenuCard = ({ menuData }) => {
  return (
    <>

      {/* //Destructuring */}
      <div className='container'>
        <div className='row my-5'>
          {menuData.map((currEle) => {
            const { id, thumbnail, title, price, rating, brand, description } = currEle;
            // console.log(title);
            return (
              <>
                <div className="col-md-4" key={id}>
                  <div className='card my-4' >
                    <img src={thumbnail} alt={title} style={{ height: '30vh'}} className='px-3 py-3' />
                    <div className="card-body" >
                      <h4 className="card-title" align='center' style={{fontFamily : 'Times new roman'}}>{title}</h4>
                      <div className="d-flex justify-content-around pt-3">
                        <p><span style={{ fontWeight: '900' }}>Price:</span> <br /> ${price}</p>
                        <p><span style={{ fontWeight: '900' }}>Rating:</span> <br /> {rating}</p>
                        <p><span style={{ fontWeight: '900' }}>Brand:</span> <br /> {brand}</p>
                      </div>
                      <p className="card-text">{description}</p>
                      <div className="d-flex justify-content-around pt-4">
                        <a href="#" className="btn btn-primary">Buy Item</a>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>

    </>
  )
};

export default MenuCard;
