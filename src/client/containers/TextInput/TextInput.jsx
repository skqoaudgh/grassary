import axios from 'axios';
import { useMutation, QueryClient } from '@tanstack/react-query';
import TextInputComponent from '@/components/TextInput';

const postDiary = ({ userId, content }) =>
	axios.post('https://grassary-server.run.goorm.io/diarys', {
		userId,
		content,
	});

const TextInput = (props) => {
	const queryClient = new QueryClient();
	const { isLoading, mutate } = useMutation(postDiary, {
		onSuccess: () => {
			queryClient.invalidateQueries(['diarys']);
		},
		retry: 3,
	});

	return (
		<TextInputComponent postDiary={mutate} isLoading={isLoading} {...props} />
	);
};

export default TextInput;
