import { createStore} from 'redux';
import rootReducer from '../reducers/RootReducer';

const finalStore = createStore(rootReducer);
export default finalStore;