import db from './db.js';

const create = async ({ userId, content }) => {
	const ret = await db.create({ userId, content });

	return ret.toJSON();
};

const findByUserId = async (userId) => {
	const ret = await db.aggregate([
		{
			$match: { userId },
		},
		{
			$lookup: {
				from: 'users',
				localField: 'id',
				foreignField: 'userId',
				as: 'users',
			},
		},
		{
			$unwind: '$users',
		},
		{
			$project: {
				_id: 0,
				id: '$_id',
				content: 1,
				date: 1,
				userId: '$users.id',
				email: '$users.email',
				name: '$users.name',
				picture: '$users.picture',
			},
		},
	]);

	return ret;
};

const findAll = async () => {
	const ret = await db.aggregate([
		{
			$lookup: {
				from: 'users',
				localField: 'userId',
				foreignField: 'id',
				as: 'users',
			},
		},
		{
			$unwind: '$users',
		},
		{
			$project: {
				_id: 0,
				id: '$_id',
				content: 1,
				date: 1,
				userId: '$users.id',
				email: '$users.email',
				name: '$users.name',
				picture: '$users.picture',
			},
		},
	]);

	return ret;
};

const findDateByUserId = async (userId) => {
	const ret = await db.find({ userId }).select({ date: 1 });

	return ret;
};

export default {
	create,
	findByUserId,
	findAll,
	findDateByUserId,
};
