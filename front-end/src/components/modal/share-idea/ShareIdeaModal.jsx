import { useRef } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { IoLogoTwitter, IoCopySharp } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import { TwitterShareButton } from 'react-share';

import Modal from '../Modal';
import TextInput from '../../text-input/TextInput';

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
      {props.formSubmitted ? <ShareIdeaPostSubmit link={props.link} /> : <ShareIdeaModalForm onSubmit={props.onSubmit}/>}
    </Modal>
  );
}

/**
 * @description Function component for the form
 * @param {Object} props
 * @returns {Object}
 */
function ShareIdeaModalForm(props) {
  return (
    <Formik
      initialValues={{
        title: '',
        description: '',
        context: '',
        email: ''
      }}
      validationSchema={Yup.object({
        title: Yup.string()
          .max(60, 'Can be no more than 60 characters')
          .required('Required'),
        description: Yup.string()
          .max(250, 'Can be no more than 250 characters')
          .required('Required'),
        context: Yup.string()
          .max(250, 'Can be no more than 250 characters')
          .required('Required'),
        email: Yup.string()
          .email('Invalid email address')
          .required('Required'),
      })}
      onSubmit={props.onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <TextInput
            caption={'(name for idea; don\'t put too much thought into it, have fun)'}
            label={'Title'}
            name={'title'}
            placeholder={'Moneycake Swap'}
          />
          <TextInput
            label={'What dApp would you like to see built and invest in?'}
            name={'description'}
            placeholder={'Example: App that processes crypto payments'}
            useTextArea={true}
            useCharacterCount={true}
            maxCount={250}
          />
          <TextInput
            name={'context'}
            label={'Why?  What problem would it solve for you?'}
            placeholder={'Example: It would allow me to use ETH tokens'}
            useTextArea={true}
            useCharacterCount={true}
            maxCount={250}
          />
          <TextInput
            caption={'(to send you crypto if you win giveaway)'}
            label="Email"
            name="email"
            placeholder="hodler@hodler.com"
          />
          <div className="share-idea-modal-row-button">
            <button className="share-idea-modal-submit-button">{isSubmitting ? 'Submitting...' : 'Submit'}</button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

/**
 * @description Function used render content post submit
 * @param {Object} props
 * @returns {Object}
 */
function ShareIdeaPostSubmit(props) {
  const inputRef = useRef(null);

  /**
   * @description Helper function for encapsulating the code that
   * copies link to clipboard
   */
  function copyLinkToClipboard() {
    inputRef.current.focus();
    inputRef.current.select();
    document.execCommand('copy');
  }

  return (
    <div className="share-idea-post-submit-content">
      <div className="header-2-bold modal-header">Thanks!</div>
      <p className="modal-content-body-text">Thanks for helping build the future of crypto!</p>
      <div className="header-3-bold modal-sub-header">Link</div>
      <p className="modal-content-body-text">Now that you've shared an idea, here is the link you can share to earn you points and put you in the running to earn some crypto:</p>
      <input className="share-link-text-input" readOnly ref={inputRef} value={props.link}/>
      <div className="header-3-bold modal-sub-header">Copy And Share The Link</div>
      <div className="share-link-buttons-container">
        <IconContext.Provider value={{ size: '3rem', color: '#1DA1F2' }}>
          <TwitterShareButton
            className="share-link-button"
            title="PreQualie - Share dApp Ideas"
            url={props.link}
          >
            <span className="share-link-button-icon">
              <IoLogoTwitter/>
            </span>
            <span className="share-link-button-text">Twitter</span>
          </TwitterShareButton>
          <button className="share-link-button share-link-button-second" onClick={() => copyLinkToClipboard()}>
            <span className="share-link-button-icon">
              <IoCopySharp/>
            </span>
            <span className="share-link-button-text">Copy Link</span>
          </button>
        </IconContext.Provider>
      </div>
    </div>
  );
}