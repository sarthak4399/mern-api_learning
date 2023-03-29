const express =require('express')
const router = express.Router()
const {getUsers}= require('../controller/controller')
router.get('/', getUsers)

router.post('/', getUsers)
router.put('/:id', (req, res) => {
    res.status(200).json({
        Users: ` Update user ${ req.params.id} `
    })
})

router.delete('/:id', (req, res) => {
    res.status(200).json({
        Users: `Delete user ${ req.params.id} `
    })
})




module.exports = router