const express = require('express')
const router = express.Router()

router.get('/postagens', (req, res) => {
    res.json({
        title: 'First Post',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        author: 'Eduardo Duarte'
    })
})

module.exports = router