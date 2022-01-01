import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import CardCopmp from "../Component/Card/PostView";
import axios from "axios";
import { API_BASE } from "../utils/constant";
import Loader from "../Component/Common/Loader";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${API_BASE}posts`)
      .then((res) => {
        setPosts(res.data.posts);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const renderPost = () => {
    return posts?.slice(-4).map((post, i) => {
      return (
        <Grid key={i} item xs={6}>
          <CardCopmp post={{ ...post, list: true }} />
        </Grid>
      );
    });
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}> LATEST POSTS </h1>
      <Grid container spacing={2} marginBottom={10}>
        {loading ? <Loader /> : renderPost()}
      </Grid>
    </>
  );
};

export default Home;
