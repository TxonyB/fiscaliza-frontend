import Link from 'next/link';

export default function Homes() {
  return (
    <div className="flex flex-col text-center mt-52">
      <h1 className="text-4xl md:text-6xl font-medium w-full md:w-[949px] m-auto top-80">
        Esteja atento (a) aos{' '}
        <span className="text-green-500">prazos dos contratos</span> e torne o seu
        trabalho <span className="text-green-500">mais produtivo</span>.
      </h1>

      <div>
        <Link
          href={`https://suap.ifrn.edu.br/o/authorize/?client_id=${process.env.SUAP_CLIENT_ID}&response_type=code`}
        >
          <button className="bg-green-500 text-white rounded-2xl py-2 px-3 font-bold hover:bg-black mt-8">
            ENTRAR
          </button>
        </Link>
      </div>
    </div>
  );
}
