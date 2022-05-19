import HomePage from "./pages/HomePage";
import Subjects from "./pages/Subjects";
import Navbar from "./pages/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ClassRoom from "./pages/ClassRoom";
import Conference from "./pages/Conference";
import Students from "./pages/Students";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sub" element={<Subjects />} />
          <Route path="/class" element={<ClassRoom />} />
          <Route path="/conf" element={<Conference />} />
          <Route path="/try" element={<Students />} />
        </Routes>
      </Router>
      {/* <HomePage/> */}
      {/* <Subjects /> */}
    </div>
  );
}

export default App;
