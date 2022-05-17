import { Outlet } from 'react-router-dom';
import Menu from './menu/Menu';

function Layout() {
    return (
        <>
            <Menu/>
            <main className='page'>
                <div className='inline'>
                    <Outlet />
                </div>
            </main>
        </>

    );

}
export default Layout;