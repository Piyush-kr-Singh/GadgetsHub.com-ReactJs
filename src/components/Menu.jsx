import React, { useState } from 'react';
import products from '../dummy';
import MenuCard from './MenuCard';
import Navbar from './Navbar';


const uniqueList=[...new Set(products.map((currElem)=>
    {
        return currElem.category;
    })
    )];
    console.log(uniqueList);

const Menu = () => {


    const [menuData,setMenuData]=useState(products);
    const[menuList,setMenuList]=useState(uniqueList);

    const filterItem=(category)=>
    {
        if(category==='general')
        {
            setMenuData(products);
        }

        else
        {
            const updatedList=products.filter((currElem)=>
            {
                return currElem.category===category;
            })

            setMenuData(updatedList);
        }
    }

  return (
    <>
    <Navbar filterItem={filterItem} menuList={menuList}/>
    <div className='container'>
        <MenuCard menuData={menuData} /> 
    </div>
        
    </>
  );
};

export default Menu;
