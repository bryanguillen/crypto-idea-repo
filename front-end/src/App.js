import { useEffect, useState } from 'react';
import axios from 'axios';
import ReactModal from 'react-modal'

import Idea from './components/idea/Idea';
import Modal from './components/modal/Modal';
import WelcomeContainer from './components/welcome-container/WelcomeContainer';

import './App.css';

function App() {
  const [ideas, setIdeas] = useState([]);
  const [introModalVisible, setIntroModalVisible] = useState(false);
  const [lastIdeaSeen, setLastIdeaSeen] = useState('null');
  const [loading, setLoading] = useState(true);

  // Set App Element For All Modals
  ReactModal.setAppElement('#root');

  /**
   * @description Effect for loading ideas from the server
   */
  useEffect(() => {
    getIdeas(lastIdeaSeen)
      .then(results => {
        setIdeas(results);
        if (loading) {
          setLoading(false);
        }
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  /**
   * @description Effect for incrementing referral count on load
   */
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const ref = queryParams.get('ref');

    if (ref) {
      incrementReferralCount(ref)
        .catch(error => console.log(error));
    }
  }, []);

  return (
    !loading ?
      <div className="app">
        <IntroModal
          closeModal={() => setIntroModalVisible(false)}
          isOpen={introModalVisible}
        />
        <WelcomeContainer
          openIntroModal={() => setIntroModalVisible(true)}
        />
        <Ideas
          ideas={ideas}
        />
      </div> :
      <div>loading...</div>
  );
}

/**********************************************
 * HELPERS
 **********************************************/


/**
 * @description Wrapper function used for down voting idea
 * @param {Number} ideaId
 */
async function downvoteIdea(ideaId) {
  try {
    await axios.put(`/ideas/${ideaId}/downvote`);
  } catch (error) {
    /**
     * @TODO (Urgent) Do something with the error for production
     */
    throw error;
  }
}

/**
 * @description Function used to encapsulate the code required to load ideas
 * @param {Number} lastIdeaSeen
 */
async function getIdeas(lastIdeaSeen) {
  try {
    const response = await axios.get(`/ideas?lid=${lastIdeaSeen}`);
    const { results } = response.data;
    return results;
  } catch (error) {
    /**
     * @TODO (Urgent) Do something with the error for production
     */
    throw error;
  }
}

/**
 * @description Function used to increment referral count
 * @param {String} userIdHash
 */
async function incrementReferralCount(userIdHash) {
  try {
    await axios.put('/users', { ref: userIdHash });
  } catch (error) {
    /**
     * @TODO (Urgent) Do something with the error for production
     */
    throw error;
  }
}

/**
 * @description Wrapper function used for upvoting an idea
 * @param {Number} ideaId
 */
async function upvoteIdea(ideaId) {
  try {
    await axios.put(`/ideas/${ideaId}/upvote`);
  } catch (error) {
    /**
     * @TODO (Urgent) Do something with the error for production
     */
    throw error;
  }
}

/******************************
 * WRAPPER COMPONENTS
 ******************************/

/**
 * @description Component used to keep main component clean
 * @param {Object} props
 * @returns {Object}
 */
function Ideas(props) {
  return (
    <div className="ideas">
      {props.ideas.map(idea => (
        <Idea
          context={idea.context}
          description={idea.description}
          downvoteIdea={() => downvoteIdea(idea.id)}
          title={idea.title}
          key={idea.id}
          upvoteIdea={() => upvoteIdea(idea.id)}
          numUpvotes={idea.upvotes}
        />
      ))}
    </div>
  );
}

/**
 * @description Function component for intro modal
 * @param {Object} props
 * @returns {Object}
 */
function IntroModal(props) {
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

export default App;
