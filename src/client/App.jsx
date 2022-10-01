import { GoogleOAuthProvider } from '@react-oauth/google';

import './App.css';

import Home from '@/containers/Home';
import Header from '@/containers/Header';
import Body from '@/containers/Body';

import OAUTH from '@/constants/oauth';

const App = () => (
	<GoogleOAuthProvider clientId={OAUTH.CLIENT_ID}>
		<div className="App">
			<Home />
			<Header />
			<Body />
		</div>
	</GoogleOAuthProvider>
);

export default App;
