import logo from './logo.svg';
import configureStore from "./store/configureStore"
import * as bugActions from "./store/bugs"
import * as projectActions from "./store/projects"
import './App.css';
import { Provider } from 'react-redux';
import BugsList from './components/BugsList';
import * as actions from "./store/api"
import {loadBugs} from "./store/bugs"

const store = configureStore()

store.dispatch(loadBugs())


// store.dispatch(bugActions.bugAdded({description: "bug 1"}))
// store.dispatch(projectActions.projectAdded({name: "Brown"}))

function App() {
  return (
    <Provider store={store}>
      <BugsList/>
    </Provider>
  );
}

export default App;
