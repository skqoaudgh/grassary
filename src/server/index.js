import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import modUser from './models/user/user.js';

import { validateGoogleIdToken } from './utils/validate.js';

dotenv.config();

const app = express();
const corsOptions = {
	origin: 'https://grassary.run.goorm.io',
	credentials: true,
};

mongoose.connect('mongodb://0.0.0.0/grassary').then(() => {
	console.log('Success to connect MongoDB');
});

app.listen(process.env.PORT, () => {
	console.log(`nodejs listening ${process.env.PORT} port`);
});

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/login', async (req, res, next) => {
	const { idToken } = req.body; // jwt token
	let userInfo = null;
	try {
		userInfo = await validateGoogleIdToken(idToken);
	} catch {
		userInfo = null;
	}

	if (userInfo) {
		const isExist = await modUser.isExist(userInfo.id);
		if (isExist) {
			// 로그인 처리
		} else {
			// 생성 후 로그인 처리
			await modUser.create(userInfo);
		}
	} else {
		// 인증 실패
	}
});
