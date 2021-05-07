import { useField } from 'formik';

import './TextInput.css';

/**
 * @description Wrapper to provide reusability and ease of use with for Fomik
 * @param {Object} props
 * @returns {Object}
 */
export default function TextInput({ label, useTextArea, useCharacterCount, maxCount, className, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className={`text-input-container text-input-container-${props.id || props.name}`}>
      <label className="text-input-label" htmlFor={props.id || props.name}>{label}</label>
      {meta.touched && meta.error ? (
        <div className="text-input-error">{meta.error}</div>
      ) : null}
      {useTextArea ?
        <textarea className="form-control text-area" {...field} {...props} /> :
        <input className="form-control text-input" {...field} {...props} />
      }
      {
        useCharacterCount ?
          <div className="form-control-character-count">{-(field.value.length - maxCount)} / {maxCount}</div> :
          null
      }
    </div>
  );
}

TextInput.defaultProps = {
  className: ''
};