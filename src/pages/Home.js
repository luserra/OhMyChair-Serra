import MainSection from '../components/mainsection/MainSection';
import ItemListContainer from '../components/items/ItemListContainer';
import AboutUs from '../components/about/AboutUs';

const HomePage = () => {
    return (
        <>
            <MainSection />
            <ItemListContainer firstTitle={'Productos'}/>
        </>
    )
};

export default HomePage