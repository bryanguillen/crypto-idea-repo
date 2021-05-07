import './WelcomeContainer.css';

export default function WelcomeContainer(props) {
  return (
    <div className="welcome-container">
      <div className="header-2-bold">Hodlers, Help Build the Future of Crypto.</div>
      <div className="welcome-container-buttons-container">
        <button className="welcome-container-button welcome-container-button-start" onClick={() => props.openIntroModal()}>New? Start Here</button>
        <button className="welcome-container-button welcome-container-button-share">Share Idea</button>
      </div>
    </div>
  );
}