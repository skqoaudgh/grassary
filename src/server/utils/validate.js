import axios from 'axios';

const parseTokenInfo = (idToken) =>
	axios
		.get('https://oauth2.googleapis.com/tokeninfo', {
			params: { id_token: idToken },
		})
		.then((res) => res.data || {});

const getCerts = () =>
	axios
		.get('https://www.googleapis.com/oauth2/v1/certs')
		.then((res) => (res.data ? Object.keys(res.data) : []));

const validateGoogleIdToken = async (idToken) => {
	const [jwt, certs] = await Promise.all([parseTokenInfo(idToken), getCerts()]);

	if (!jwt || !certs) {
		return false;
	}

	const { exp, iss, aud, kid, email_verified: emailVerified } = jwt;

	if (exp < Date.now() / 1000) {
		return false;
	}

	if (!certs.includes(kid)) {
		return false;
	}

	if (!iss.includes('accounts.google.com')) {
		return false;
	}

	if (aud !== process.env.CLIENT_ID) {
		return false;
	}

	if (!emailVerified) {
		return false;
	}

	const { sub: id, email, name, picture } = jwt;
	return { id, email, name, picture };
};

export { validateGoogleIdToken };
