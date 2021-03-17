import React from 'react';
import ModalNewRoutineForm from '../forms/ModalNewRoutineForm'
const Header = () => {
    return (
        <>
        <div className="header">
          <a href="/" className="logo">Workout Hero App</a>
          <div className="header-right">
            {/* <a class="active" href="#home">Home</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a> */}
          <ModalNewRoutineForm/>
          </div>
        </div>
        </>
      );
}
export default Header;