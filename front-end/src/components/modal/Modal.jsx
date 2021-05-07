import React from 'react';
import ReactModal from 'react-modal';
import { IconContext } from 'react-icons';
import { IoClose } from 'react-icons/io5';

import './Modal.css';

/**
 * @description Component used as wrapper for react-modal;
 * it adds the close button and also would help easily swap
 * out libraries if needed
 * @param {Object} props
 * @returns {Object}
 */
export default function Modal(props) {
  return (
    <ReactModal
      className={props.className ? props.className : ''}
      isOpen={props.isOpen}
      onRequestClose={props.closeModal}
      style={{ content: {background: '#000000 none repeat scroll 0% 0%'} }}
    >
      <div className="close-modal-button-container">
        <IconContext.Provider value={{ size: '5rem' }}>
          <IoClose className="close-modal-button" onClick={props.closeModal}/>
        </IconContext.Provider>
      </div>
      <div className="modal-content-container">
        {props.children}
      </div>
    </ReactModal>
  );
}