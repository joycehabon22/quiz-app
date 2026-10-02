import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Review from "./pages/Review";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/quiz"
          element={<Quiz />}
        />

        <Route
          path="/result"
          element={<Result />}
        />

        <Route
          path="/review"
          element={<Review />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;