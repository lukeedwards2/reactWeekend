const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  // code here
  const id = req.params.id
  pool.query('UPDATE gallery SET likes = likes + 1 WHERE id = $1', [id])
  .then(result => {
    if (result.rowCount > 0) {
      console.log('Updated likes for item id:', [id])
      res.sendStatus(200)
    } else {
      console.log('Id:', [id], 'not found')
      res.sendStatus(404)
    }
  }).catch(error => {
    console.log('ERROR', error)
    res.sendStatus(500)
  })
});

// GET /gallery
router.get('/', (req, res) => {
  // code here
  pool.query('SELECT * FROM gallery')
  .then(result => {
    res.sendStatus(result.rows)
  }).catch(error => {
    console.log('ERROR', error)
    res.sendStatus(500)
  })
});

module.exports = router;