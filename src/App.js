import logo from './logo.svg';
import './App.css';

const magazines = [
  { id: 1, title: 'Striker', theme: 'architecture', isAvailable: true},
  { id: 2, title: 'Midfielder', theme: 'architecture', isAvailable: true},
  { id: 3, title: 'Goalkeeper', theme: 'design', isAvailable: false},
];

function ZineRack() {
  const listZines = magazines.map(zine =>
    <li
      key={zine.id}
      style={{
        color: zine.isAvailable ? 'green' : 'red' // conditionals
      }}
      >
        {zine.title}
    </li>
    );
    return (
      <ul>{listZines}</ul>
    )
}

// ususally be a connection to some database.
const book = {
  title: "Neymars journey",
  author: "Neymar",
  sport: "Soccer", 
  nationality: "Brazilian",
  image: logo,
  position: "left-winger",
  width: '264',
  height: '378'
};

function BookShelf(){
  return(
    <div>
      <h2>{book.title} ({book.sport})</h2>
      <p>{book.author}- {book.position} - {book.nationality}</p>
      <img
        className='bookCover'
        src={book.image}
        alt={book.title + ' cover'}
        style={{
          width: book.width,
          height: book.height
        }}
      />
    </div>
  );
}

// these are components, has to start with capital letter
function MagicButton() {
  return (
    // if mutiple jsx components, you have to wrap them in a div
    // or jsx fragment tags
    <>
      <h3>This is a beautiful baller</h3>
      <button>Score!</button>
    </>
    
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ZineRack/>
        <BookShelf/> 
        <MagicButton/>
      </header>
    </div>
  );
}

export default App;
