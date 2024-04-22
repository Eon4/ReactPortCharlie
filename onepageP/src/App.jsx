 //App file 
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/MainLayout";
import { Frontpage } from "./pages/FrontPage/FrontPage";
import { AboutPage } from "./pages/About/AboutPage";
import { Projects } from "./pages/Projects/Projects";
import { Contact } from "./pages/Contact/Contact";
// import { NotFoundPage } from "./pages/NotFoundPage";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout/>}>
            <Route index element={<Frontpage/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/contact" element={<Contact/>}/>
            {/* <Route path="*" element={<NotFoundPage/>}/> */}
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;