import { GoogleOAuthProvider } from '@react-oauth/google';

import AuthContext, { AuthContextProvider } from '@/contexts/AuthContext';

import Home from '@/containers/Home';
import Header from '@/containers/Header';
import Body from '@/containers/Body';

import OAUTH from '@/constants/oauth';

import './App.css';

const App = () => (
	<GoogleOAuthProvider clientId={OAUTH.CLIENT_ID}>
		<div className="App">
			<AuthContextProvider>
				<Header />
				<AuthContext.Consumer>
					{({ id }) => (id ? <Body /> : <Home />)}
				</AuthContext.Consumer>
			</AuthContextProvider>
		</div>
	</GoogleOAuthProvider>
);

export default App;
