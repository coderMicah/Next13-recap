import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-slate-900 py-8">
      <div className="mx-[4%] flex justify-between items-center">
      <h1 className="text-3xl"> <Link href="/">Github Repos</Link></h1>
      <nav >
        <ul className="md:flex gap-8 text-lg">
        <li><Link href='/about'>About</Link></li>
        <li><Link href='/about/team'>Our Team</Link></li>
        <li><Link href='/code/repos'>Code</Link></li>
        </ul>
      </nav>
      </div>
    </header>
  );
};

export default Header;
