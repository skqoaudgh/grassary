import { Button } from 'reactstrap';
import Logo from '@/components/Logo';
import styles from './Header.module.scss';

const Header = () => (
	<header className={styles.Header}>
		<Logo showLabel />
		<Button color="secondary">Get Started</Button>
	</header>
);

export default Header;
