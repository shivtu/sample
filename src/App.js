import UserForm from './pages/UserForm';
import reducer from './redux/reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <UserForm />
    </Provider>
  );
}

export default App;
