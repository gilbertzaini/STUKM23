import express from "express";
const router = express.Router();

// router.get('/...', controllerFunction);
router.get("/api", (req, res) => {
    res.json({ "message": "test"})
})

export default router;