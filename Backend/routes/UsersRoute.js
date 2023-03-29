const express =require('express')
const router = express.Router()

router.get('/', (req, res) => { 
    res.status(200).json({
        Users: " get users "
    })
})

router.post('/', (req, res) => {
    res.status(200).json({
        Users: " add users"
    })
})

router.put('/:id', (req, res) => {
    res.status(200).json({
        Users: `Update user ${ req.params.id}`
    })
})

router.delete('/:id', (req, res) => {
    res.status(200).json({
        Users: `Delete user ${ req.params.id} `
    })

})




module.exports = router