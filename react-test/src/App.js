
import Navbar from './navbar';
import Home from './home';

function App() {
  const title = 'Welcome to the New Blog';
  const likes = 50;
  const person = { name: 'trevor', age: 30}
  const link = "http://www.google.com";

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        <p>Liked: { likes } {person.name }</p>
        <a href={ link }> Google</a>
      </div>
    </div>
  );
}

export default App;
