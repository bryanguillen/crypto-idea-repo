import { IconContext } from 'react-icons';
import { IoArrowUpCircleOutline } from 'react-icons/io5';

import './Idea.css';

export default function Idea({
  context,
  description,
  title,
  upvoteIdea,
  downvoteIdea,
  numUpvotes,
  upvoted
}) {
  /**
   * @description Function used to handle the click for upvote;
   * it is used to wrap the prop function passed in the changing of color
   */
  function handleUpvoteClick() {
    if (!upvoted) {
      upvoteIdea();
    } else {
      downvoteIdea();
    }
  }

  return (
    <div className="idea">
      <div className="header-2-bold">{title}</div>
      <div className="idea-section">
        <div className="idea-section-header">What dApp do you wish existed?</div>
        <div className="idea-section-text">{description}</div>
      </div>
      <div className="idea-section">
        <div className="idea-section-header">Why?</div>
        <div className="idea-section-text">{context}</div>
      </div>
      <div className="idea-upvote-button-container">
        <IconContext.Provider value={{ color: upvoted ? '#1DA1F2' : '#ffffff', size: '3rem' }}>
          <IoArrowUpCircleOutline
            className="idea-upvote-button"
            onClick={handleUpvoteClick}
          />
        </IconContext.Provider>
        <span className="idea-upvote-count">{numUpvotes}</span>
      </div>
    </div>
  );
}