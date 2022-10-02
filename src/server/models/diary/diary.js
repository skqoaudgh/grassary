import db from './db.js';

const create = async ({ userId, content }) => {
	const ret = await db.create({ userId, content });

	return ret.toJSON();
};

const findByUserId = async (userId) => {
	const ret = await db.find({ userId });

	return ret;
};

const findAll = async () => {
	const ret = await db.find({});

	return ret;
};

export default {
	create,
	findByUserId,
	findAll,
};
