import { useEffect } from 'react';
import { useAppContext } from '../components/provider';

function Repos() {
  const { state, setState } = useAppContext();

  useEffect(() => {
    async function getRepos() {
      const response = await fetch('https://api.github.com/users/Caro20/repos');
      const repos = await response.json();
      setState({ repos });
    }

    getRepos();
  }, [setState]);

  return (
    <div>
      <h2>Repositorys</h2>
      Carous
      <ul>
        {state.repos.map((repo) => (
          <li key={repo.name}>
            <a href={repo.html_url}>{repo.name}</a>
            <p>{repo.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Repos;
