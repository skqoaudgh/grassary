import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import modUser from './models/user/user.js';
import modDiary from './models/diary/diary.js';

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

app.post('/login', async (req, res) => {
	const { idToken } = req.body; // jwt token
	let userInfoFromToken = null;
	try {
		userInfoFromToken = await validateGoogleIdToken(idToken);
	} catch {
		userInfoFromToken = null;
	}

	if (userInfoFromToken) {
		const isExist = await modUser.isExist(userInfoFromToken.id);
		if (!isExist) {
			await modUser.create(userInfoFromToken);
		}

		const userInfo = await modUser.findById(userInfoFromToken.id);

		res.json(userInfo);
	} else {
		res.json(false);
	}
});

app.get('/diarys', async (req, res) => {
	const { user_id: userId } = req.query;

	let result = [];
	if (userId) {
		result = await modDiary.findById(userId);
	} else {
		result = await modDiary.findAll();
	}

	res.json(result);
});

app.post('/diarys', async (req, res) => {
	const { userId, content } = req.body;

	const createdDiaryInfo = await modDiary.create({
		userId,
		content: content.trim(),
	});

	res.json(createdDiaryInfo);
});
