import React from 'react'
import { useState } from 'react'
import { CardContent, Button, Card, TextField, CardActions } from '@mui/material'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { useEffect } from 'react'
import { API_BASE } from '../../utils/constant'
const PostForm = (props) => {
    const history = useHistory()
    const [formData, setFormData] = useState({
        title: "",
        content: ''
    })
    console.log({ formData });
    useEffect(() => {
        axios.get(`${API_BASE}post/${props?.match.params.id}`)
            .then(res => {
                setFormData({ title: res.data.post.title, content: res.data.post.content })
            })
    }, [props?.match.params.id])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
    const handleFormSubmit = (e) => {
        e.preventDefault()
        if (!props?.match.params.id) {
            const sendData = { ...formData, createdAt: new Date().getTime() }
            axios.post(`${API_BASE}post`, sendData)
                .then(res => {
                    if (res.status === 200) {
                        history.push('/')
                    }
                })
        } else {
            const sendData = { ...formData, id: props?.match.params.id }
            axios.post(`${API_BASE}post`, sendData)
                .then(res => {
                    if (res.status === 200) {
                        history.push('/')
                    }
                })
        }
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: "translate(-50%, -50%)", }}>
                <Card style={{ width: '400px' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        <CardContent style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginBottom: "10px" }}>
                            <TextField id="outlined-basic" name='title' value={formData?.title} label="Enter title here" onChange={handleChange} variant="outlined" style={{ marginBottom: "10px" }} />
                            <TextField id="outlined-basic" multiline name='content' rows={5} type='textarea' value={formData?.content} label="Enter post content here" onChange={handleChange} variant="outlined" style={{ marginBottom: "10px" }} />
                        </CardContent>
                        <CardActions>
                            <Button type='submit' size="small">Post</Button>
                        </CardActions>
                    </div>
                </Card>
            </div>
        </form>
    )
}

export default PostForm
