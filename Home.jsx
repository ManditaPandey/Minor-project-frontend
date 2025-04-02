import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1 >Welcome to Comic World</h1>
      <nav>
        <Link to="/library">Go to Library</Link> |  
        <Link to="/upload"> Upload Your Comic</Link>
      </nav>
    </div>
  );
}
