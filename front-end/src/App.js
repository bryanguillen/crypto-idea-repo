import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import ReactModal from 'react-modal'

import Idea from './components/idea/Idea';
import IntroModal from './components/modal/intro-modal/IntroModal';
import ShareIdeaModal from './components/modal/share-idea/ShareIdeaModal';
import WelcomeContainer from './components/welcome-container/WelcomeContainer';

import './App.css';

function App() {
  const [ideas, setIdeas] = useState([]);
  const [infiniteScrollCounter, setInfiniteScrollCounter] = useState(0);
  const [introModalVisible, setIntroModalVisible] = useState(false);
  const [lastIdeaSeen, setLastIdeaSeen] = useState('null');
  const [loading, setLoading] = useState(true);
  const [olderIdeasExist, setOlderIdeasExist] = useState(true);
  const [shareIdeaModalVisible, setShareIdeaModalVisible] = useState(false);
  const [shareLink, setShareLink] = useState('');
  
  // Used for infinite scroll
  const bottomBoundary = useRef(null);
  
  // Set App Element For All Modals
  ReactModal.setAppElement('#root');

  /**
   * @description Effect for loading ideas from the server
   */
  useEffect(() => {
    axios.get(`/ideas?lid=${lastIdeaSeen}`)
      .then(response => {
        const { results } = response.data;
        setIdeas(previousState => [...previousState, ...results]);
        setLastIdeaSeen(results[results.length - 1].id);
        setOlderIdeasExist(results.length === 10);
        if (loading) {
          setLoading(false);
        }
      })
      .catch(() => {
        setLoading(false);
      });
  }, [infiniteScrollCounter]);

  /**
   * @description Effect for incrementing referral count on load
   */
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const ref = queryParams.get('ref');

    if (ref) {
      axios.put('/users', { ref })
        .catch(error => console.log(error));
    }
  }, []);

  /**
   * @description Scroll observer
   * @param {Object} node
   * @returns {}
   */
  function handleIntersection(node) {
    new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setInfiniteScrollCounter(previousState => previousState + 1);
        }
      });
    }).observe(node)
  }

  /**
   * @description Handler for clicking upvote button
   * @param {Number} ideaId
   * @param {Boolean} upvote
   */
  async function handleUpvoteClick(ideaId, upvote) {
    try {
      const copyOfIdeas = [...ideas];
      const ideaIndex = copyOfIdeas.findIndex(idea => idea.id === ideaId);
      const ideaPreviousUpvotes = copyOfIdeas[ideaIndex].upvotes; 

      copyOfIdeas[ideaIndex].upvoted = upvote;
      copyOfIdeas[ideaIndex].upvotes = upvote ? ideaPreviousUpvotes + 1 : ideaPreviousUpvotes - 1;

      if (upvote) {
        await axios.put(`/ideas/${ideaId}/upvote`);
      } else {
        await axios.put(`/ideas/${ideaId}/downvote`);
      }

      setIdeas(copyOfIdeas);
    } catch (error) {
      /**
       * @TODO (Urgent) Do something with the error for production
       */
      throw error;
    }
  }

  /**
   * @description Wrapper for submitting new idea
   * @param {Object} values
   * @param {Object} otherFormState
   */
  async function submitIdea(values, { setSubmitting }) {
    try {
      setSubmitting(true);
      const { data } = await axios.post('/ideas', values);
      setSubmitting(false);
      setShareLink(`https://prequalie.com?ref=${data.results.user.idHash}`);
      setIdeas(previousState => [data.results.idea, ...previousState]);
    } catch (error) {
      setSubmitting(false);
      /**
       * @TODO (Urgent) Do something with the error for production
       */
      throw error;
    }
  }

  return (
    !loading ?
      <div className="app">
        <IntroModal
          closeModal={() => setIntroModalVisible(false)}
          isOpen={introModalVisible}
        />
        <ShareIdeaModal
          closeModal={() => {
            setShareIdeaModalVisible(false);
            setShareLink(''); // once the modal closes, this will let the user resubmit form
          }}
          formSubmitted={shareLink !== ''}
          isOpen={shareIdeaModalVisible}
          link={shareLink}
          onSubmit={submitIdea}
        />
        <WelcomeContainer
          openIntroModal={() => setIntroModalVisible(true)}
          openShareIdeaModal={() => setShareIdeaModalVisible(true)}
        />
        <Ideas
          handleUpvoteClick={handleUpvoteClick}
          ideas={ideas}
        />
        {
          olderIdeasExist ?
            <div ref={element => {
              if (element !== null && bottomBoundary.current === null) {
                bottomBoundary.current = element;
                handleIntersection(element);
              }
            }}></div> :
            null
        }
      </div> :
      <div>loading...</div>
  );
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
          downvoteIdea={() => props.handleUpvoteClick(idea.id, false)}
          title={idea.title}
          key={idea.id}
          upvoteIdea={() => props.handleUpvoteClick(idea.id, true)}
          numUpvotes={idea.upvotes}
          upvoted={idea.upvoted}
        />
      ))}
    </div>
  );
}

export default App;
