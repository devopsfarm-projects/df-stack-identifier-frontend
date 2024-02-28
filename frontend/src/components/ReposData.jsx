import { useEffect , useState } from 'react'
import { getAllRepos } from '../utils/apiUtils'
function ReposData() {
    const [reposData , setReposData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchReposData = async () => {
            try {
                const reposData = await getAllRepos();
                console.log("Reposdata", reposData);
                setReposData(reposData);
                setLoading(false)
            } catch (error) {
                // Handle errors
                console.error("Error fetching repos data:", error);
                setError(error.message || "Error fetching repos data");
                setLoading(false);
            }
        };
        fetchReposData()
    } ,[])
  return (
    <div>
      <h2>List of Repositories</h2>
      <ul>
        {reposData.map(repo => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default ReposData