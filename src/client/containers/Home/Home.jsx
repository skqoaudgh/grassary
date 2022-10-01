import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const Home = () => (
	<GoogleLogin
		onSuccess={({ credential }) => {
			axios
				.post('https://grassary-server.run.goorm.io/login', {
					idToken: credential,
				})
				.then((res) => {
					console.log(res);
				});
		}}
		onError={() => {
			console.log('Login Failed');
		}}
		useOneTap
	/>
);

Home.propTypes = {};

export default Home;
