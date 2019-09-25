//index page
import Link from 'next/link';

 const Index = () => (
  <main>
    <nav>
      <ul>
        <li><Link href="/"><a>Home</a></Link></li>
        <li><Link href="/about"><a>About</a></Link></li>
      </ul>
    </nav>
    <h1>Welcome to Index page.</h1>
  </main>
)

export default Index;