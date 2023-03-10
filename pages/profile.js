import jwt from 'jsonwebtoken';
import initJwt from '../../lib/jwt';
import { parse } from 'cookie';

initJwt();

export default function Profile({ user }) {
    return (
        <div>
            {user ? (
                <>
                    <p>Nome: {user.nome}</p>
                    <p>Email: {user.email}</p>
                    <p>Matrícula: {user.matricula}</p>
                </>
            ) : (
                <p>Você não está autenticado</p>
            )}
        </div>
    );
}

export const getServerSideProps = async (context) => {
    const { req } = context;
    const { token } = parse(req.headers.cookie || '');
    const decoded = jwt(token);
    const user = decoded ? JSON.parse(parse(req.headers.cookie || '').user) : null;
    return { props: { user } };
};
