const express = require('express');
const router = express.Router();

let users = [
    {
        id: 1,
        name: 'biccon'
    },
    {
        id: 2,
        name: 'robin'
    },
    {
        id: 3,
        name: 'eric'
    }
];
router.get('/', (req, res) => res.json(users));
router.post('/:name', (req, res) => {
    const { name } = req.params;
    users = [...users, { id: users[users.length - 1].id + 1, name }]
    return res.json(users);
})
module.exports = router;