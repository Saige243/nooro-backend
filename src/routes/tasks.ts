import express from "express"
import prisma from "../prisma"

const router = express.Router()

router.get("/", async (req, res) => {
  const tasks = await prisma.task.findMany()
  res.json(tasks)
})

export default router
