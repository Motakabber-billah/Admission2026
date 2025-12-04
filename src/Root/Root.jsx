import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            <div className='md:max-w-5xl mx-4 md:mx-auto  font-tiro'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;