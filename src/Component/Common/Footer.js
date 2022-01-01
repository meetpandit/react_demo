import React from 'react'
import { AppBar, Box, Toolbar, Typography } from '@mui/material'


const Footer = () => {
    return (
        <Box style={{ position: 'fixed', bottom: '0' , width :'90%' }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" style={{ display: 'flex', justifyContent: 'center' }} sx={{ flexGrow: 1 }}>
                        Copyright@2021
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Footer
