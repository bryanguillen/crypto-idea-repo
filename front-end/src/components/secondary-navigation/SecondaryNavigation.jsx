import { IconContext } from 'react-icons';
import { IoPencil, IoHelpOutline } from 'react-icons/io5';

import './SecondaryNavigation.css';

/**
 * @description Component for secondary navigation, which is on the bottom right
 * side of the screen
 * @param {Object} props
 * @returns {Object}
 */
export default function SecondaryNavigation(props) {
  return (
    <div className="secondary-navigation">
      <button className="secondary-navigation-button secondary-navigation-button-help">
        <IconContext.Provider value={{ size: '2rem', color: '#1DA1F2' }}>
          <IoHelpOutline onClick={props.openIntroModal}/>
        </IconContext.Provider>
      </button>
      <button className="secondary-navigation-button secondary-navigation-button-create-idea">
        <IconContext.Provider value={{ size: '2rem', color: '#ffffff' }}>
          <IoPencil onClick={props.openCreateModal}/>
        </IconContext.Provider>
      </button>
    </div>
  );
}