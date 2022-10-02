import modDiary from '../models/diary/diary.js';
import { parseToDate } from '../utils/date.js';

const getGrassByUserId = async (userId) => {
	const diaryDates = await modDiary.findDateByUserId(userId);
	const grass = new Set();

	diaryDates.forEach((diaryDate) => {
		const date = parseToDate(diaryDate.date);
		grass.add(date);
	});

	const grassArray = [...grass];
	const ret = grassArray.reduce((acc, cur) => {
		acc[cur] = 1;
		return acc;
	}, {});

	return ret;
};

export default { getGrassByUserId };
