import { Row } from "./components/Row";
import { requests } from "./request";

function App() {
  return (
    <div className="App">
      <Row isLargeRow={true} fetchUrl={requests.fetchNetflixOriginals} />
      <Row isLargeRow={false} fetchUrl={requests.fetchNetflixOriginals} />
    </div>
  );
}

export default App;
