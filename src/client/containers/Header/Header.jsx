import Logo from '@/components/Logo';
import styles from './Header.module.scss';

const Header = () => (
	<header className={styles.Header}>
		<Logo showLabel />
	</header>
);

export default Header;
