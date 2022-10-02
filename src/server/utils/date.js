const parseToDate = (date) => {
	const dateObject = new Date(date);

	const month = dateObject.getMonth() + 1;
	const day = dateObject.getDate();

	return `${dateObject.getFullYear()}-${month < 10 ? `0${month}` : month}-${
		day < 10 ? `0${day}` : day
	}`;
};

export { parseToDate };
