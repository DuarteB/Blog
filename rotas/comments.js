const express = require('express')
const router = express.Router()

router.get('/comments/:postid', (req, res) => {
    res.json({
        content: 'Nice, post',
        author: 'Unknown'
    })
})

module.exports = router