import { Formik, Form } from 'formik';
import * as Yup from 'yup';

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
        onSubmit={(values, { setSubmitting }) => {}}
      >
        {({ isSubmitting }) => (
          <Form>
            <TextInput
              label={'Title'}
              name={'title'}
              placeholder={'Moneycake Swap'}
            />
            <TextInput
              label={'What dApp would you like to see built and invest in?'}
              name={'description'}
              placeholder={'Example: App that processes crypto payments'}
              useTextArea={true}
            />
            <TextInput
              name={'context'}
              label={'Why?  What problem would it solve for you?'}
              placeholder={'Example: It would allow me to use ETH tokens'}
              useTextArea={true}
            />
            <TextInput
              label="Email"
              name="email"
              placeholder="hodler@hodler.com"
            />
            <div className="share-idea-modal-row-button">
              <button className="share-idea-modal-submit-button">Submit</button>
            </div>
          </Form>
        )}
      </Formik>
    </Modal>
  );
}