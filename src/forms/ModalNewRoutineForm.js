import React from 'react';
import Popup from 'reactjs-popup';
import { connect } from 'react-redux'
import { TextField, MenuItem, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'redux';

import StyledSubmitBtns from './StyledSubmitBtns'


import NewRoutineForm from './NewRoutineForm'
 
const ModalNewRoutineForm = (props) => (
    // const {classes} = props

  <Popup className="modal-container"
    trigger={
        <Button 
            // className={classes.root}
            > 
            Create a New Routine 
        </Button>
        }
    modal
    nested
  >
    {close => (
      <div className="modal">
      <NewRoutineForm/>
        {/* <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"> Modal Title </div>
        <div className="content">
          {' '}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
          Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
          delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
          commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
          explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
        </div> */}
        <div className="actions">
          {/* <Popup
            trigger={<button className="button"> Trigger </button>}
            position="top center"
            nested
          >
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              magni omnis delectus nemo, maxime molestiae dolorem numquam
              mollitia, voluptate ea, accusamus excepturi deleniti ratione
              sapiente! Laudantium, aperiam doloribus. Odit, aut.
            </span>
          </Popup> */}
          <button
            className="button"
            onClick={() => {
            //   console.log('modal closed ');
              close();
            }}
          >
            close
          </button>
        </div>
      </div>
    )}
  </Popup>
)

// export default ModalNewRoutineForm;
export default compose(connect(), withStyles(StyledSubmitBtns),)(ModalNewRoutineForm);