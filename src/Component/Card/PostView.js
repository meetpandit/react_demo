import { CardContent, Typography, CardActions, Button, Card, CardHeader } from '@mui/material'
import React from 'react'
import { useHistory } from 'react-router-dom'

const CardCopmp = ({ post }) => {
    const history = useHistory()
    return (
        <Card style={{ width: '400px', margin: "10px" }}>
            <CardHeader
                title={post?.title}
            />
            <CardContent>
                <Typography color="text.secondary" gutterBottom>
                    {post?.content}
                </Typography>

            </CardContent>
            <CardActions>
                <Button size="small">Like</Button>
                {post?.list ?
                    <Button size="small" onClick={() => history.push(`/post/${post._id}`)}>View</Button>
                    :
                    <Button size="small" onClick={() => history.push(`/post/edit/${post._id}`)}>Edit</Button>
                }
            </CardActions>
        </Card>
    )
}

export default CardCopmp
