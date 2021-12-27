import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MovieDetails from "./pages/MovieDetails";
import LandingPage from "./pages/LandingPage";
import AppStyles from "./App.module.css";

function App() {
  return (
    <Router>
      <header>
        <Link to="/">
          <h1 className={AppStyles.title__style}>¡Películas para todos!</h1>
        </Link>
      </header>

      <main>
        <Switch>
          <Route path="/movies/:movieId">
            <MovieDetails />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
