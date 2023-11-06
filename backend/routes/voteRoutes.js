import express from "express";
import { getVote, postVote } from "../controllers/voteController.js";

const voteRouter = express.Router();

voteRouter.get('/vote', getVote);
voteRouter.post('/vote', postVote);

export default voteRouter;