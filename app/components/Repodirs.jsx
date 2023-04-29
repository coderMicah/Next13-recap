import Link from "next/link";

const fetchRepoContents = async (name) => {
  const response = await fetch(
    `https://api.github.com/repos/coderMicah/${name}/contents`
  );
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const contents = await response.json();
  return contents;
};

const Repodirs = async ({ name }) => {
  const contents = await fetchRepoContents(name);
  const dirs = contents.filter((content) => content.type === "dir");
  return (
    <div>
      <h3 className="text-xl pt-8 pb-2 text-gray-300 font-semibold list-inside">Directories</h3>
      <ul className="flex flex-col gap-2 pl-4 list-disc list-inside">
        {dirs.map((dir) => (
          <li key={dir.path} className="text-blue-600">
            <Link href={`code/repos/${name}/${dir.path}`}>{dir.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Repodirs;
