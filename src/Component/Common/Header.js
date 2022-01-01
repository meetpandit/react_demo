import React from 'react'
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import { useHistory } from 'react-router-dom'

const Header = (props) => {
    const history = useHistory()
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography style={{cursor : 'pointer'}} variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={() => history.push('/')}>
                        Kwitter
                    </Typography>
                    <Button color="inherit" onClick={() => history.push('/allpost')}>All Post</Button>
                    <Button color="inherit" onClick={() => history.push('/post/add')}>New</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header