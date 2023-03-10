import { verifyToken } from '../../utils/suapAuth';

export default async function handler(req, res) {
  try {
    const token = req.cookies.token;
    const user = verifyToken(token);
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'Usuário não autenticado' });
  }
}
