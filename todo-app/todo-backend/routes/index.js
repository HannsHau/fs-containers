const express = require('express');
const router = express.Router();

const configs = require('../util/config')
const redis = require('../redis')

/* GET index data. */
router.get('/', async (req, res) => {

  let visits = await redis.get("visits");

  visits++

  await redis.set("visits", visits)

  res.send({
    ...configs,
    visits, 
    fun: "yes!!!",
  });
});

module.exports = router;
