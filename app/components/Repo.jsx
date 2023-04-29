import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

const getRepo = async (name) => {
  const response = await fetch(
    `https://api.github.com/repos/coderMicah/${name}`
  );
  const repo = await response.json();
  return repo;
};

const Repo = async ({ name }) => {
  const repo = await getRepo(name);
  return (
    <>
      <h3 className="text-2xl font-semibold capitalize">{repo.name}</h3>
      <p className="py-2">{repo.description}</p>
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
    </>
  );
};

export default Repo;
