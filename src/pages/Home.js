import MainSection from '../components/mainsection/MainSection';
import ItemListContainer from '../components/products/ItemListContainer';
import ItemDetailContainer from '../components/products/ItemDetailContainer'

const HomePage = () => {
    return (
        <>
            <MainSection />
            <ItemListContainer firstTitle={'Productos'}/>
        </>
    )
};

export default HomePage