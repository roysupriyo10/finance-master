import express from "express";
import { Statistic } from "../models/Statistics.js";

const router = express.Router();

router.get("/statistics", async (req, res) => {
  try {
    const statistics = await Statistic.find({})
    if (statistics) {
      res.status(200).json(statistics)
    }
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
});

export default router;
