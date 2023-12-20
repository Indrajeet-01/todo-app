// pages/api/todos/index.js
import { dbConnect } from '../../../utils/dbConnect';
import Todo from '../../../models/Todo';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    const todos = await Todo.find();
    res.status(200).json(todos);
  }

  if (req.method === 'POST') {
    const { text } = req.body;
    const newTodo = new Todo({ text });
    await newTodo.save();
    res.status(201).json(newTodo);
  }
}
