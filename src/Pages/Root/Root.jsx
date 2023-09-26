import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';

const Root = () => {
    return (
        <div className='max-w-screen-xl mx-auto px-6 md:px-16 mb-28'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;