import Home from "./components/Home";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import NewArticle from "./components/NewArticle";
import ReadArticle from "./components/ReadArticle";
import Error404 from "./components/Error404";

function App() {
  return (
    <div className="App">
        <Router>
            {/* <h1 className="text-3xl font-bold underline">My React Blog</h1>   */}
            <Navbar />   
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/create" element={<NewArticle />}></Route>
                <Route path="/article/:id" element={<ReadArticle />}></Route>
                <Route path="*" element={<Error404 />}></Route>
            </Routes>
            
        </Router>
    </div>
  );
}

export default App;
