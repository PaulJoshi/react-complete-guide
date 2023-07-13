import ReduxCounter from './ReduxCounter';
import { Provider } from 'react-redux'

import store from './store/index';

const ReduxCounterIndex = () => (
	<Provider store={store}>
		<ReduxCounter />
	</Provider>
)

export default ReduxCounterIndex
