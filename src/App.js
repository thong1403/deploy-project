import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePages from "./pages/homePages/homePages";
import Headers from "./components/header/Header";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="App">
      <Headers />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<HomePages />}></Route>
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default App;
