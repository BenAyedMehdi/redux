import './App.css';
import { Provider } from 'react-redux';
import PostForm from './components/postform';
import Posts from './components/posts';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PostForm/>
        <hr/>
        <Posts/>
      </div>
    </Provider>
  );
}

export default App;
