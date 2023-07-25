import React from 'react';
// import products from '../dummy';
// import Menu from './Menu';

const Navbar = ({filterItem, menuList}) => {
  return (
    <>
        <nav className="navbar navbar-expand-lg" style={{backgroundColor : 'black', color : 'white'}}>
          <div className="container-fluid">
            <a className="navbar-brand" href="#" style={{ color : 'white'}}>GadgetsHub.Com</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{color: 'white'}}>
              <span className="navbar-toggler-icon" style={{color: 'white'}}></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#" style={{ color : 'white'}}>Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" style={{ color : 'white'}}>About</a>
                </li>

                <li className="nav-item dropdown" >
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color : 'white'}}>
                    Categories
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{ color : 'white', backgroundColor:'black'}}>
                    
                    {menuList.map((currEle)=>
                    {
                      return (
                        <li><a href="#" className='dropdown-item' onClick={() => filterItem(currEle)} style={{ color : 'white'}}>{currEle}</a></li>
                      );
                    })}  
                    <li><a className="dropdown-item" href="#" onClick={() => filterItem('general')} style={{ color : 'white'}}>General</a></li>
                    
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </>
  )
}

export default Navbar;
