import "bootstrap/dist/css/bootstrap.min.css";
import { MyNewsFeed } from "../src/view/MyNewsFeed";
import { AppProvide } from "./context/AppContext";
const App = () => {
  return (
    <AppProvide>
        <MyNewsFeed />
    </AppProvide>
  )
};

export default App;