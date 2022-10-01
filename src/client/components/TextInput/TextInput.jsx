import Avatar from 'react-avatar';
import { Input, Button } from 'reactstrap';

import ChevronRightIcon from '@/assets/chevron-right.svg';
import styles from './TextInput.module.scss';

const TextInput = (props) => {
	const onInput = (e) => {
		e.target.style.height = '2rem';
		e.target.style.height = `${e.target.scrollHeight}px`;
	};

	return (
		<div className={styles.TextInput}>
			<Avatar
				className={styles.TextInput__avatar}
				name="Mac"
				size="56"
				textSizeRatio="2"
				color="#343a40"
				round
			/>
			<Input
				type="textarea"
				n
				className={styles.TextInput__input}
				onInput={onInput}
				{...props}
			/>
			<Button className={styles.TextInput__submit} color="link">
				<img src={ChevronRightIcon} alt="submit" />
			</Button>
		</div>
	);
};

TextInput.propTypes = {};

export default TextInput;
