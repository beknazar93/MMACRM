import sass from "./App.scss"; // не трогать
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sports from "./Components/Main/Cotegory/Sports";
import Wrestling from "./Components/Main/Cotegory/Wrestling/Wrestling";
import Mma from "./Components/Main/Cotegory/Mma/Mma";
import Boxing from "./Components/Main/Cotegory/Boxing/Boxing";
import Taekwondo from "./Components/Main/Cotegory/Taekwondo/Taekwondo";
import Sambo from "./Components/Main/Cotegory/Sambo/Sambo";
import Judo from "./Components/Main/Cotegory/Judo/Judo";
import Greco from "./Components/Main/Cotegory/Greco-roman/Greco";
import New from "./Components/Main/New/New";
import Admin from "./Components/Admin/Admin";




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <hr />
        
        <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/admin/*" element={<Admin />} />
          <Route path="/Виды спорта" element={<Sports />} />
          <Route path="/Борьба" element={<Wrestling />} />
          <Route path="/ММА" element={<Mma />} />
          <Route path="/Бокс" element={<Boxing />} />
          <Route path="Таэквандо" element={<Taekwondo />} />
          <Route path="/Самбо" element={<Sambo />} />
          <Route path="Дзюдо" element={<Judo />} />
          <Route path="/Греко-Римская-Борьба" element={<Greco />} />
          <Route path="/Новости" element={<New />} />
        </Routes>

        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
