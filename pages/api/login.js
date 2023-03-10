import { getToken } from '../../utils/suapAuth';

export default async function handler(req, res) {
  try {
    const { code } = req.query;
    const token = await getToken(code);
    res.cookie('token', token, {
      maxAge: 86400,
      httpOnly: true,
    });
    res.redirect('/home');
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao fazer login' });
  }
}
