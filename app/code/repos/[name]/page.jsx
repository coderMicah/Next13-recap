import Loader from "@/app/components/Loader";
import Repo from "@/app/components/Repo";
import Repodirs from "@/app/components/Repodirs";
import Link from "next/link";
import { Suspense } from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";

const RepoPage = ({ params }) => {
  const { name } = params;
  return (
    <div>
      <span className="text-blue-500 flex gap-1 items-center pb-6">
        <HiArrowNarrowLeft />
        <Link href="/code/repos" className="no-underline hover:underline ">
          Back To Repositories
        </Link>
      </span>
      <Suspense fallback={<Loader text="Loading Repo..." />}>
        <Repo name={name} />
      </Suspense>

      <Suspense fallback={<Loader text="Loading Directories..." />}>
        <Repodirs name={name} />
      </Suspense>
    </div>
  );
};

export default RepoPage;
