const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    deleteUser,
    addThought,
    removeThought,
} = require('../../controllers/userControllers');

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUser).delete(deleteUser);

router.route('/:userId/thoughts').post(addThought);

router.route('/:userId/thoughts/:thoughtId').delete(removeThought);

module.exports = router;
