import reactImg from './assets/react-core-concepts.png';
import componentsImg from './assets/components.png';
const reactDescription = ['Fundamental','Crucial','Core'];

function genRandomInt(max){
  return (Math.floor() * (max + 1));
}

function Header() {
const description = reactDescription[genRandomInt(2)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        Fundamental React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CoreCocept(props) {
  return (
    <li>
      <img src={props.imgage} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <section id="core-concepts">
        <h2>Core Concept</h2>
        <ul>
          <CoreCocept title="Components" 
          description="The core ui building block"
          imgage={componentsImg} />
          <CoreCocept />
          <CoreCocept />
          <CoreCocept />
        </ul>
      </section>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
