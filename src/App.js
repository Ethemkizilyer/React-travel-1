import data from "./helper/data";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <div className="header">
        <ul>
          <li>
            <a href="ABOUT US">ABOUT US</a>
          </li>
          <li>
            <a href="FOR YOU">FOR YOU</a>
          </li>
          <li>
            <a href="SERVICES">SERVICES</a>
          </li>
          <li>
            <a href="BLOG">BLOG</a>
          </li>
          <li>
            <a href="VLOG">VLOG</a>
          </li>
          <li>
            <a href="CONTACT">CONTACT</a>
          </li>
        </ul>
      </div>
      <h1 className="orta">POPULAR TOUR PLACES</h1>
      <div className="kapsa">
        {data.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
