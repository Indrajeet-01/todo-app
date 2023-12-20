// pages/api/todos/[id].js
import { dbConnect } from '../../../utils/dbConnect';
import Todo from '../../../models/Todo';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'DELETE') {
    const { id } = req.query;
    await Todo.findByIdAndDelete(id);
    res.status(204).end();
  }
}
