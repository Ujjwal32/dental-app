import React, { useState, useEffect } from 'react';
import MobileMenu from '../MobileMenu';
import Navigation from '../Navigation';


function NavResponsive() {

    const [mobStatus, setMobStatus] = useState(false)

    useEffect(() => {
        if(window.innerWidth <= 770){
            setMobStatus(true)
        }
        window.addEventListener('resize', () => {
            if(window.innerWidth <= 770){
                setMobStatus(true)
            } else{
                setMobStatus(false)
            }
        })

        return () => {
            window.removeEventListener('resize', null)
        }
    },[])

  return (
      <>
        {
            mobStatus ? <MobileMenu /> : <Navigation />
        }
      </>
  );
}

export default NavResponsive;
