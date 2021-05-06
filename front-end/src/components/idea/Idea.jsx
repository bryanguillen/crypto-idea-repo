import './Idea.css';

export default function Idea({
  context,
  description,
  title
}) {
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
    </div>
  );
}