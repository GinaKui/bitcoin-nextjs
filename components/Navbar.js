import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link href="/"><a>Home</a></Link></li>
        <li><Link href="/about"><a>About</a></Link></li>
      </ul>
      <style jsx>{`
        ul {
          background: #333;
          list-style: none;
          display: flex;
        }
        ul li {
          margin-right: 20px;
          font-size: 18px;
        }

        a {
          color: white;
          text-decoration: none;
        }
      `
      }</style>
    </nav>
  );
};

export default Navbar;