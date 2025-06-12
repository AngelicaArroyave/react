import { TurnedInNot } from '@mui/icons-material'
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'

export const Sidebar = ({ drawerWidth = 240 }) => {
    return (
        <Box sx={{ width: drawerWidth, flexShrink: { sm: 0} }}>
            <Drawer variant="permanent" open sx={{ display: { xs: 'block' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth } }}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">Angie Arias</Typography>
                </Toolbar>

                <Divider />

                <List>
                    {
                        ['January', 'February', 'March', 'April', 'May'].map(text => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot />
                                    </ListItemIcon>

                                    <Grid container>
                                        <ListItemText primary={text} />
                                        <ListItemText secondary={'Sit exercitation dolor qui consequat amet aliqua consectetur ex.'} />
                                    </Grid>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
            </Drawer>
        </Box>
    )
}
