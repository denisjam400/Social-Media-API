const {
    createpost,
    deletepost,
    getAllpost,
    getUserposts,
    getpost,
    updatepost } = require("../controllers/post");

const express = require("express");


const router = express.Router();

router.post("/create", createpost);
router.get('/', getAllpost);
router.get('/:id', getpost)
router.put("/:id" , updatepost);
router.delete("/:id" , deletepost);
router.get("/:id/posts", getUserposts)



module.exports = router;
