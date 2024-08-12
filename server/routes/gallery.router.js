const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.put('/like/:id', (req, res) => {
  const id = req.params.id;
  pool.query('UPDATE gallery SET likes = likes + 1 WHERE id = $1', [id])
  .then(result => {
    if (result.rowCount>0) {
      res.sendStatus(200)
    } else {
      res.sendStatus(404)
    }
  })
    .catch(error => {
      console.log('ERROR', error)
      res.sendStatus(500)
    })
  })
  

router.get('/', (req, res) => {
 pool.query('SELECT * FROM gallery')
 .then(result => {
   res.send(result.rows)
 })
   .catch(error => {
     console.log('ERROR', error)
     res.sendStatus(500)
   })
})

module.exports = router;