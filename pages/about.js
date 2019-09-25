import Link from 'next/link';

const About = () => (
  <main>
    <nav>
      <ul>
        <li><Link href="/"><a>Home</a></Link></li>
        <li><Link href="/about"><a>About</a></Link></li>
      </ul>
    </nav>
    <h1>Welcome to About page.</h1>
  </main>
)

export default About;