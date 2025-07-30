import express from "express"
import prisma from "../prisma"

const router = express.Router()

router.get("/", async (req, res) => {
  try {
    const tasks = await prisma.task.findMany()
    res.json(tasks)
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch tasks" })
  }
})

router.get("/:id", async (req, res) => {
  const { id } = req.params

  try {
    const task = await prisma.task.findUnique({
      where: { id: Number(id) },
    })

    if (!task) return res.status(404).json({ message: "Task not found" })

    res.json(task)
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" })
  }
})

router.post("/", async (req, res) => {
  const { title, color, completed } = req.body
  try {
    const task = await prisma.task.create({
      data: {
        title,
        color,
        completed,
      },
    })
    res.status(201).json(task)
  } catch (error) {
    res.status(500).json({ error: "Failed to create task" })
  }
})

router.put("/:id", async (req, res) => {
  const { id } = req.params
  const { title, color, completed } = req.body
  try {
    const updatedTask = await prisma.task.update({
      where: { id: Number(id) },
      data: { title, color, completed },
    })
    res.json(updatedTask)
  } catch (error) {
    res.status(500).json({ error: "Failed to update task" })
  }
})

router.delete("/:id", async (req, res) => {
  const { id } = req.params
  try {
    await prisma.task.delete({
      where: { id: Number(id) },
    })
    res.status(204).end()
  } catch (error) {
    res.status(500).json({ error: "Failed to delete task" })
  }
})

export default router
