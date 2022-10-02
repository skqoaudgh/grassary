import { GoogleOAuthProvider } from '@react-oauth/google';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import AuthContext, { AuthContextProvider } from '@/contexts/AuthContext';

import Home from '@/containers/Home';
import Header from '@/containers/Header';
import Body from '@/containers/Body';

import OAUTH from '@/constants/oauth';

import './App.css';

const queryClient = new QueryClient();

const App = () => (
	<GoogleOAuthProvider clientId={OAUTH.CLIENT_ID}>
		<div className="App">
			<AuthContextProvider>
				<Header />
				<AuthContext.Consumer>
					{({ id, setUserInfo }) =>
						id ? (
							<QueryClientProvider client={queryClient}>
								<Body />
							</QueryClientProvider>
						) : (
							<Home setUserInfo={setUserInfo} />
						)
					}
				</AuthContext.Consumer>
			</AuthContextProvider>
		</div>
	</GoogleOAuthProvider>
);

export default App;
