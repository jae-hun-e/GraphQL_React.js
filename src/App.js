import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "./routes/Movies";
import Movie from "./routes/Movie";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Movies />}></Route>
                    <Route path="/movies/:id" element={<Movie />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
