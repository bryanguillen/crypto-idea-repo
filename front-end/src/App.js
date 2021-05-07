import { useEffect, useState } from 'react';
import axios from 'axios';

import Idea from './components/idea/Idea';
import WelcomeContainer from './components/welcome-container/WelcomeContainer';

import './App.css';

function App() {
  const [ideas, setIdeas] = useState([]);
  const [lastIdeaSeen, setLastIdeaSeen] = useState('null');
  const [loading, setLoading] = useState(true);

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
        <WelcomeContainer/>
        <Ideas ideas={ideas}/>
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

export default App;
