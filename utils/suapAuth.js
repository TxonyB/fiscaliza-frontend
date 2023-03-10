import jwt from 'jsonwebtoken';
import axios from 'axios';

export async function getToken(code) {
  try {
    const response = await axios.post(
      'https://suap.ifrn.edu.br/o/token/',
      {
        grant_type: 'authorization_code',
        code: code,
        client_id: process.env.SUAP_CLIENT_ID,
      }
    );

    const token = jwt.sign(response.data, process.env.JWT_SECRET);
    return token;
  } catch (error) {
    console.error(error);
    throw new Error('Erro ao obter token do SUAP');
  }
}

export function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
  } catch (error) {
    console.error(error);
    throw new Error('Token inválido');
  }
}
