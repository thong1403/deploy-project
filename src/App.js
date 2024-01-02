import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePages from "./pages/homePages/homePages";
import Headers from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Introduce from "./pages/introduce/Introduce";
import SideBar from "./components/sideBar/SideBar";
import Media from "./pages/promotional-media/Media";
import PublicArt from "./pages/public-art/PublicArt";
function App() {
  return (
    <div className="App">
      <Headers />
      <div className="container">
        <div className="row">
          <div className="col-9">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<HomePages />}></Route>
                <Route path="/introduce" element={<Introduce />}></Route>
                <Route path="/promotional-media" element={<Media />}></Route>
                <Route path="/public-art" element={<PublicArt />}></Route>
              </Routes>
            </BrowserRouter>
          </div>
          <div className="col-3">
            <SideBar/>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default App;
