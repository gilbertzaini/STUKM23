import express from "express";
import { getVote, postVote } from "../controllers/voteController.js";
import { loggedInUser } from "../controllers/sessionController.js";

const voteRouter = express.Router();

voteRouter.get('/vote', getVote);
voteRouter.post('/vote', postVote);
voteRouter.get('/logged-in-user', loggedInUser);

export default voteRouter;