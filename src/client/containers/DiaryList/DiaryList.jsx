import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

import DiaryListComponent from '@/components/DiaryList';

const fetchDiarys = () =>
	axios.get('https://grassary-server.run.goorm.io/diarys');

const DiaryList = () => {
	const { isLoading, isError, error, data } = useQuery(['diarys'], fetchDiarys);
	const { data: list = [] } = data || {};

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (isError) {
		return <div>Error occurred: {error.message}</div>;
	}

	return <DiaryListComponent list={list} />;
};

export default DiaryList;
