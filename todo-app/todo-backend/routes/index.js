const express = require('express');
const router = express.Router();

const configs = require('../util/config')
const redis = require('../redis')

/* GET index data. */
router.get('/', async (req, res) => {

  let visits = await redis.get("added_todos");

  visits++

  await redis.set("added_todos", visits)

  res.send({
    ...configs,
    visits
  });
});

module.exports = router;
