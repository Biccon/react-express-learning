import express from 'express'; 
const router = express.Router();


router.get('/list', (req,res)=>{ 
    res.send(users);
})

router.get('/:id', (req, res) => {
    const filtered = users.filter((item) => {
        console.log(item);
        console.log(item.id, req.params.id);
        return item.id === parseInt(req.params.id);
    })
    res.send(filtered);
});

router.get('/add/:name', (req, res) => {
    //register
    const name = req.params.name;
    add(name);
    res.send(users);
})

module.exports = router;