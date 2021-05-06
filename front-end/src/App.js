import { useEffect, useState } from 'react';
import axios from 'axios';

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
    <div>Hello world</div>
  );
}

/**********************************************
 * HELPERS
 **********************************************/

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

export default App;
