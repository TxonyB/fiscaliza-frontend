import axios from "axios";
import jwt from "jsonwebtoken";

export async function getToken(username, password) {
  const suapApiUrl = "https://suap.ifrn.edu.br/api/v2/token/";
  const payload = {
    grant_type: "password",
    username,
    password,
  };
  const response = await axios.post(suapApiUrl, payload);

  if (response.status !== 200) {
    throw new Error("Erro ao obter token do SUAP");
  }

  const token = response.data.access_token;
  const decodedToken = jwt.decode(token);

  return decodedToken;
}

export async function getUserData(token) {
  const suapApiUrl = "https://suap.ifrn.edu.br/api/v2/minhas-informacoes/meus-dados/";
  const response = await axios.get(suapApiUrl, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.status !== 200) {
    throw new Error("Erro ao obter dados do usuário");
  }

  const userData = response.data;

  return userData;
}
