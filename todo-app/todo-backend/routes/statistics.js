const express = require('express');
const redis = require('../redis')
const router = express.Router();

router.get('/', async (_req, res, next) => {
  try {
    const value = await redis.get('added_todos');
    res.json({ added_todos: Number(value ?? 0) });
  } catch (err) {
    next(err);
  }
});

module.exports = router;