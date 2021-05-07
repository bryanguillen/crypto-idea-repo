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
      <p className="modal-content-body-text">To help serve as a repository for dApps.  A repository that will help give developers in the ecosystem on what to build to further facilitate the mass adoption of crypto.  Thus, making everyone richer.</p>
      <div className="header-3-bold">How It Works</div>
      <ul>
        <li>Viewing Ideas: Checkout ideas submitted by other community members.  You could also upvote those that you like, which helps validate which projects should be worked on.</li>
        <li>Submitting Ideas: Share a project you think would be cool to invest in and can add value to the space.</li>
        <li>Win Crypto: Submit ideas and share the link generated after you share an idea to enter (more below).</li>
      </ul>
      <div className="header-3-bold">Prizes</div>
      <ol>
        <li>100$</li>
        <li>40$</li>
        <li>25$</li>
      </ol>
      <div className="header-3-bold">How To Win Prizes</div>
      <ul>
        <li>Get Started: Submit an idea</li>
        <li>Start Earning Points: Share the link generated, once idea is submitted, with your friends on social media.  For every person who visits with that link, you earn a point.</li>
        <li>Rules: The top 3 community members with the most points win.</li>
      </ul>
    </Modal>
  );
}