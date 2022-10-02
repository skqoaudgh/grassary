import db from './db.js';

const isExist = (id) => db.exists({ id });

const create = async ({ id, email, name, picture, date }) => {
	const ret = await db.create({ id, email, name, picture, date });

	return ret.toJSON();
};

const findById = async (id) => {
	const ret = await db.findOne({ id });

	return ret;
};

export default {
	isExist,
	create,
	findById,
};
