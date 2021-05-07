import Modal from '../Modal';

/**
 * @description Function component for intro modal
 * @param {Object} props
 * @returns {Object}
 */
export default function IntroModal(props) {
  return (
    <Modal
      closeModal={props.closeModal}
      isOpen={props.isOpen}
    >
      <div className="modal-header header-2-bold">Welcome</div>
      <div className="header-3-bold">Site Mission</div>
      <p className="modal-content-body-text">To help serve as a repository for dApps.  A repository that will help give developers, in the ecosystem, clues on what to build to further facilitate the mass adoption of crypto.  Through this, investors and developers could greatly benefit.</p>
      <div className="header-3-bold">How It Works</div>
      <ul>
        <li>Viewing Ideas: Checkout ideas submitted by other community members.  You could also upvote those that you like, which helps validate which projects should be worked on.  Note: There is no login functionality, so what this means is that if you like an idea and refresh the page, you will notice that you can upvote it again.  Currently, we do not want to support accounts.</li>
        <li>Submitting Ideas: Share a project you think would be cool to invest in and can add value to the space.</li>
        <li>Win Crypto: Submit an idea and share the link generated on crypto twitter or wherever you would like.</li>
      </ul>
      <div className="header-3-bold">Prizes</div>
      <div className="modal-content-body-text">I like to give out BTC, ADA, or whatever else seems like a good bet.  Checkout the giveaway board on the home page to see what will be given away (hint: you can choose between two or more).</div>
      <div className="header-3-bold">How To Win Prizes</div>
      <ul>
        <li>Get Started: Submit an idea</li>
        <li>Start Earning Points: Share the link generated, once idea is submitted, with your friends on social media.  For every person who visits with that link, you earn a point.</li>
      </ul>
      <div className="header-3-bold">Contact</div>
      <p className="modal-content-body-text">Send an email to: admin@prequalie.com if you have any questions</p>
    </Modal>
  );
}