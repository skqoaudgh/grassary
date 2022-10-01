import TextInput from '@/components/TextInput';
import styles from './Body.module.scss';

const Body = () => {
	return (
		<section className={styles.Body}>
			<TextInput bsSize="md" />
		</section>
	);
};

export default Body;
