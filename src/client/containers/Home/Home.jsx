import PropTypes from 'prop-types';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';

import styles from './Home.module.scss';

const Home = ({ setUserInfo }) => (
	<div className={styles.Home}>
		<GoogleLogin
			onSuccess={({ credential }) => {
				axios
					.post('https://grassary-server.run.goorm.io/login', {
						idToken: credential,
					})
					.then(({ data }) => {
						if (data?.id) {
							setUserInfo(data);
						} else {
							console.log('Login Failed 1');
						}
					});
			}}
			onError={() => {
				console.log('Login Failed 2');
			}}
			useOneTap
		/>
	</div>
);

Home.propTypes = {
	setUserInfo: PropTypes.func.isRequired,
};

export default Home;
