import TextInput from '@/components/TextInput';
import DiaryList from '@/components/DiaryList';
import styles from './Body.module.scss';

const Body = () => {
	const list = [
		{ id: 1, name: 'mac', date: new Date(), content: 'ttqweqwewqe' },
		{ id: 2, name: 'mac', date: new Date(), content: 'sadasdsadasd' },
	];
	return (
		<section className={styles.Body}>
			<TextInput bsSize="md" />
			<DiaryList list={list} />
		</section>
	);
};

export default Body;
