import Vote from "../models/Vote.js";

export const getVote = async (req, res) => {
  try {
    const response = await Vote.findAll();
    res.status(200).json(response);
    console.log(`Response: ${response}`);
  } catch (e) {
    console.log(e.message);
  }
};

export const postVote = async (req, res) => {
    try {
      await Vote.create(req.body);
      res.status(201).json(`User Created: ${req.body}`);
      console.log(`User Created: ${req.body}`);
    } catch (e) {
      console.log(e.message);
    }
  };
