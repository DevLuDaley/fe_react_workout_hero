import React from 'react';
import { Switch, Link } from 'react-router-dom'

import ModalNewRoutineForm from '../forms/ModalNewRoutineForm'


const Navbar = () => {
    return (
        <>
        <div className="navbar">
          <a href="/" className=""></a>
          <div className="">
            {/* <a class="active" href="#home">Home</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a> */}
            
             {/* <Switch>
                <Link 
                    to={'/routines'}>
                    <button 
                        className='floating-nav-btns'> Return to Routines 
                    </button>
                </Link>
            </Switch> */}

        <Switch>
            <Link 
                to={'/routines'}>
                <button
                    className='floating-nav-btns'>
                    View Routines 
                </button>
            </Link>
        </Switch>
          <ModalNewRoutineForm/>
          </div>
        </div>
        </>
      );
}
export default Navbar;