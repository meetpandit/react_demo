import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import CardCopmp from '../Component/Card/PostView'
import axios from 'axios'
import { API_BASE } from '../utils/constant'
const View = (props) => {
    const [post, setPost] = useState(null)

    useEffect(() => {
        axios.get(`${API_BASE}post/${props?.match.params.id}`)
            .then(res => {
                setPost(res.data.post)
            })
    }, [props?.match.params.id])

    return (
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: "translate(-50%, -50%)" }}>
            <CardCopmp post={post} />
        </div>
    )
}

export default View
