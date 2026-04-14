const express = require('express');
const redis = require('../redis')
const router = express.Router();

router.get('/', async (_, res) => {
  let added_todos = await redis.get("added_todos");
  res.send({added_todos: Number(added_todos)});
});

module.exports = router;