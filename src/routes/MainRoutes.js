import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
// const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));
const Warehouse = Loadable(lazy(() => import('views/warehouse')));
const WarehouseDetail = Loadable(lazy(() => import('views/warehouse/Detail')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <Warehouse />
        },
        {
            path: '/warehouse',
            element: <Warehouse />
        },
        {
            path: '/warehouse/:id',
            element: <WarehouseDetail />
        }
    ]
};

export default MainRoutes;
