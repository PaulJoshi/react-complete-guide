import { Provider } from "react-redux"
import store from './store/index';
import ReduxCart from "./ReduxCart"

const ReduxCartIndex = () => {
	return (
		<Provider store={store}>
			<ReduxCart />
		</Provider>
	)
}

export default ReduxCartIndex
