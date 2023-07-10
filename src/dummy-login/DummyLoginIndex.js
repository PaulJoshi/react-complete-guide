import DummyLogin from './DummyLogin';
import { AuthContextProvider } from './store/auth-context';

const DummyLoginIndex = () => (
	<AuthContextProvider>
		<DummyLogin />
	</AuthContextProvider>
)

export default DummyLoginIndex
