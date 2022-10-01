import Logo from '@/components/Logo';
import styles from './Body.module.scss';

const Body = () => {
	return (
		<div className={styles.Body}>
			<span>Home</span>
			<Logo />
		</div>
	);
};

export default Body;
