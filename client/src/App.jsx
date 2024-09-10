// import { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Signup from "./Signup";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./Login";
// import Home from "./Home";

// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/register" element={<Signup />}></Route>
//           <Route path="/login" element={<Login />}></Route>
//           <Route path="/" element={<Home />}></Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import Welcome from "./Welcome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/welcome" element={<Welcome />} /> {/* Add this route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
