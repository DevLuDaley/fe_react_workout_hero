import React from 'react';
import { Switch, Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


//! local imports
import ModalNewRoutineForm from '../forms/ModalNewRoutineForm'
import StyledSubmitBtns from '../forms/StyledSubmitBtns'

// const useStyles = makeStyles({
//   root: {
//     backgroundColor:"#a27ec6e4",
//     color: "blue",
//     '&:hover': {
//       background: "#f00",
//     },
//   })

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});


const Navbar = (props) => {
    const classes = useStyles();
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
          <ModalNewRoutineForm className={classes.root}/>
          </div>
        </div>
        </>
      );
}
export default Navbar;