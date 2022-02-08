import axiosClient from '../../axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Box, Grid, List, ListItem, ListItemText } from '@mui/material';
import { gridSpacing } from 'store/constant';
import MainCard from 'ui-component/cards/MainCard';
import { Link } from 'react-router-dom';
import { IconArrowBackUp } from '@tabler/icons';
import dateformat from 'dateformat';

const Detail = () => {
    const { id } = useParams();
    const [warehouse, setWarehouse] = useState([]);

    const getWarehouseById = async () => {
        await axiosClient.get(`/WarehouseReps/${id}`).then((res) => setWarehouse(res.data));
    };
    useEffect(() => {
        getWarehouseById();
    });

    return (
        <MainCard
            title={`Detail ${id}`}
            secondary={
                <Link to="/warehouse">
                    <IconArrowBackUp />
                </Link>
            }
        >
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12}>
                            <Box sx={{ width: '100vw', maxWidth: 360, bgcolor: 'background.paper' }}>
                                <nav aria-label="main mailbox folders">
                                    <List>
                                        <ListItem>
                                            <ListItemText primary=" Warehouse ID" secondary={warehouse.WarehouseID} />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText primary="Branch" secondary={warehouse.Branch} />
                                        </ListItem>
                                        {warehouse?.ReplenishmentClass ? (
                                            <ListItem>
                                                <ListItemText primary="Replenishment Class" secondary={warehouse.ReplenishmentClass} />
                                            </ListItem>
                                        ) : (
                                            ''
                                        )}
                                        <ListItem>
                                            <ListItemText primary="Description" secondary={warehouse.Description} />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText primary="Last Syncron" secondary={dateformat(warehouse.LastSync)} />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText primary="Last Modified " secondary={dateformat(warehouse.LastModifiedDateTime)} />
                                        </ListItem>
                                    </List>
                                </nav>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default Detail;
