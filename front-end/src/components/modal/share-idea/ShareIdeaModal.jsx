import Modal from '../Modal';

import './ShareIdeaModal.css';

/**
 * @description Function component used for the create idea
 * modal
 * @param {Object} props
 * @returns {Object}
 */
export default function ShareIdeaModal(props) {
  return (
    <Modal
      closeModal={props.closeModal}
      isOpen={props.isOpen}
    >
      <form>
        <div className="share-idea-modal-row">
          <label htmlFor="share-idea-modal-control-title" className="share-idea-modal-label">Title</label>
          <input name="share-idea-modal-control-title" className="share-idea-modal-control share-idea-modal-input" id="share-idea-modal-control-title"/>
        </div>
        <div className="share-idea-modal-row">
          <label htmlFor="share-idea-modal-control-description" className="share-idea-modal-label">What dApp would you like to see built?</label>
          <textarea name="share-idea-modal-control-description" className="share-idea-modal-control share-idea-modal-textarea" id="share-idea-modal-control-description"></textarea>
        </div>
        <div className="share-idea-modal-row">
          <label htmlFor="share-idea-modal-control-context" className="share-idea-modal-label">Why?</label>
          <textarea name="share-idea-modal-control-context" className="share-idea-modal-control share-idea-modal-textarea" id="share-idea-modal-control-context"></textarea>
        </div>
        <div className="share-idea-modal-row">
          <label htmlFor="share-idea-modal-control-email" className="share-idea-modal-label">Email</label>
          <input name="share-idea-modal-control-email" className="share-idea-modal-control share-idea-modal-input" id="share-idea-modal-control-email"/>
        </div>
        <div className="share-idea-modal-row-button">
          <button className="share-idea-modal-submit-button">Submit</button>
        </div>
      </form>
    </Modal>
  );
}