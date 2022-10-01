import Avatar from 'react-avatar';
import { Input } from 'reactstrap';

import styles from './TextInput.module.scss';

const TextInput = (props) => {
	return (
		<div className={styles.TextInput}>
			<Avatar name="Mac" size="56" textSizeRatio="2" color="#343a40" round />
			<Input type="textarea" className={styles.TextInput__input} {...props} />
		</div>
	);
};

TextInput.propTypes = {};

export default TextInput;
