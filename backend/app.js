const express = require('express');

const app = express();

app.use('/api/posts',(req, res, next) => {
  const posts =[
    {
      id: 'huhuy',
      title:'first server-side post',
      content:'this is coming for the server'
    },
    {
      id: 'jgft',
      title:'second server-side post',
      content:'again coming for the server'
    }
  ];
  res.status(200).json({
    message: 'Posts fetched successfully!',
    posts: posts
  });
});

module.exports = app;
