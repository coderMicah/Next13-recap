import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

export const metadata = {
  title: "Repos",
  description: "Micah's repos",
};

async function getRepos() {
  const response = await fetch("https://api.github.com/users/coderMicah/repos");
  const data = await response.json();

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return data;
}

const RepoPage = async () => {
  const repos = await getRepos();
  return (
    <div>
      <h2 className="text-3xl">Repositories</h2>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <Link href={`code/repos/${repo.name}`}>
              <div className=" bg-gray-900 p-4 my-4 transition ease-in-out hover:-translate-y-1 hover:bg-gray-800 duration-150">
                <h3 className="text-2xl font-semibold">{repo.name}</h3>
                <p>{repo.description}</p>
                <div className="flex pt-2 gap-4">
                  <span className="flex items-center gap-1">
                    <FaStar />
                    {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaCodeBranch />
                    {repo.forks_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaEye />
                    {repo.watchers_count}
                  </span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepoPage;
