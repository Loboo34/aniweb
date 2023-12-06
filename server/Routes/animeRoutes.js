const express = require('express');
const router = express.Router();

router.route('/').get((req, res) => {
    res.status(200).json({messageg : 'get all anime' })
})



module.exports = router;