import { useContext } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

import AuthContext from '@/contexts/AuthContext';

import Spinner from '@/components/Spinner';
import GrassComponent from '@/components/Grass';

const Grass = () => {
	const { id } = useContext(AuthContext);

	const fetchGrasses = () =>
		axios.get(
			`https://grassary-server.run.goorm.io/diarys?select=date&user_id=${id}`,
		);

	const { isLoading, isError, error, data } = useQuery(
		['grasses'],
		fetchGrasses,
	);
	const { data: list = [] } = data || {};

	if (isLoading) {
		return <Spinner />;
	}

	if (isError) {
		return <div>Error occurred: {error.message}</div>;
	}

	return <GrassComponent list={list} />;
};

export default Grass;
