import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [ideas, setIdeas] = useState([]);
  const [lastIdeaSeen, setLastIdeaSeen] = useState('null');

  /**
   * @description Effect for interacting with the server
   */
  useEffect(() => {
    const executeEffect = async () => {
      await getIdeas();
    };

    executeEffect();
  }, []);

  /**
   * @description Function used to encapsulate the code required to load ideas
   */
  async function getIdeas() {
    try {
      const response = await axios.get(`/ideas?lid=${lastIdeaSeen}`);
      const { results } = response.data;
      setIdeas(results);
      console.log(results);
    } catch (error) {
      /**
       * @TODO (Urgent) Do something with the error for production
       */
      throw error;
    }
  }

  return (
    <div>Hello world</div>
  );
}

export default App;
