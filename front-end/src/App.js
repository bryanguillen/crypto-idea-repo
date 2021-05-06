import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [ideas, setIdeas] = useState([]);
  const [lastIdeaSeen, setLastIdeaSeen] = useState('null');

  /**
   * @description Effect for loading data
   */
  useEffect(() => {
    axios
      .get(`/ideas?lid=${lastIdeaSeen}`)
      .then(response => {
        const { results } = response.data;
        setIdeas(results);
      })
      .catch(error => {
        /**
         * @TODO (Urgent) Do something with the error for production
         */
        console.log(error);
      });
  }, []);

  return (
    <div>Hello world</div>
  );
}

export default App;
