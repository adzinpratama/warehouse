// assets
import { IconBuildingWarehouse } from '@tabler/icons';

// constant
const icons = { IconBuildingWarehouse };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const warehouse = {
    id: 'warehouse',
    title: 'Warehouse',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Warehouse',
            type: 'item',
            url: '/warehouse',
            icon: icons.IconBuildingWarehouse,
            breadcrumbs: false
        }
    ]
};

export default warehouse;
