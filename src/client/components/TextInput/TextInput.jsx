import { useRef, useContext } from 'react';
import Avatar from 'react-avatar';
import { Input, Button } from 'reactstrap';
import PropTypes from 'prop-types';

import AuthContext from '@/contexts/AuthContext';

import ChevronRightIcon from '@/assets/chevron-right.svg';
import styles from './TextInput.module.scss';

const TextInput = ({ postDiary, isLoading, ...props }) => {
	const ref = useRef();
	const { id, name, picture } = useContext(AuthContext);

	const onInput = (e) => {
		e.target.style.height = '2rem';
		e.target.style.height = `${e.target.scrollHeight}px`;
	};

	const onSubmit = () => {
		postDiary({ userId: id, content: ref.current.value.trim() });
		ref.current.value = '';
	};

	return (
		<div className={styles.TextInput}>
			<Avatar
				className={styles.TextInput__avatar}
				name={name}
				src={picture}
				size="56"
				textSizeRatio={2}
				color="#343a40"
				round
			/>
			<Input
				type="textarea"
				className={styles.TextInput__input}
				onInput={onInput}
				innerRef={ref}
				{...props}
			/>
			<Button
				className={styles.TextInput__submit}
				color="link"
				onClick={onSubmit}
				disabled={isLoading}
			>
				<img src={ChevronRightIcon} alt="submit" />
			</Button>
		</div>
	);
};

TextInput.propTypes = {
	postDiary: PropTypes.func.isRequired,
	isLoading: PropTypes.bool,
};

TextInput.defaultProps = {
	isLoading: false,
};

export default TextInput;
