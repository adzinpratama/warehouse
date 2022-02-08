import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { gridSpacing } from 'store/constant';
import axiosClient from '../../axios';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import MainCard from 'ui-component/cards/MainCard';
import dateFormat from 'dateformat';

const Warehouse = () => {
    const [warehouse, setWarehouse] = useState([]);
    const getWareHouse = async (allowed) => {
        await axiosClient
            .get('/WarehouseReps')
            .then((res) => JSON.parse(JSON.stringify(res.data)))
            .then((res) => setWarehouse(res.filter((data) => allowed.includes(data.WarehouseID))));
    };
    useEffect(() => {
        getWareHouse(['RETAIL', 'VA-RETAIL']);
    }, []);
    const RouteTo = (link, text) => (
        <Link to={link} target="_self">
            {text}
        </Link>
    );

    function getDate(params) {
        return dateFormat(params.row.LastSync, 'dd-mm-yyyy');
    }

    const columns = [
        {
            field: 'WarehouseID',
            renderCell: (params) => RouteTo(`/warehouse/${params.row.WarehouseID}`, params.row.WarehouseID),
            headerName: 'WarehouseID',
            flex: 0.2,
            minWidth: 150
        },
        { field: 'Branch', headerName: 'Branch', minWidth: 150 },
        { field: 'Description', headerName: 'Description', minWidth: 150, flex: 0.4 },
        { field: 'LastSync', headerName: 'LastSync', minWidth: 150, flex: 0.3, valueGetter: getDate }
    ];

    const cardStyle = {
        height: '40vh',
        width: '100%'
    };

    const tableStyle = {
        boxShadow: 10,
        backgroundColor: 'white',
        borderRadius: 10
    };

    return (
        <MainCard title="Data WareHouse">
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                    <Grid container spacing={gridSpacing}>
                        <Grid item lg={12} md={12} sm={12} xs={12}>
                            <div style={cardStyle}>
                                <DataGrid getRowId={(row) => row.WarehouseID} columns={columns} rows={warehouse} style={tableStyle} />
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default Warehouse;
