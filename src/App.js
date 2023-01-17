import "./App.css";
import { Routes, Route } from "react-router-dom";
import EditPhoto from "./routes/EditPhoto";
import Home from "./routes/Home";
import Photos from "./routes/Photos";
import AddPhoto from "./routes/AddPhoto";
import NotFound from "./routes/NotFound";
import Navbar from "./routes/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photos">
          <Route index element={<Photos />} />
          <Route path=":id" element={<EditPhoto />} />
        </Route>
        <Route path="/add" element={<AddPhoto />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
