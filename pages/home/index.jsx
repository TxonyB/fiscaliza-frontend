import Link from "next/link"

export default function Home() {
  return (
  <div className="flex flex-col text-center mt-52">
    <h1 className="text-6xl text-center w-[949px] font-medium m-auto top-80">Esteja atento (a) aos <span className="text-[#248d22]">prazos dos contratos</span> e torne o seu trabalho <span className="text-[#248d22]">mais produtivo</span>.</h1>

    <div>
      <Link href="/">
        <button className="bg-[#248D22] text-white rounded-2xl py-2 px-3 font-bold hover:bg-black mt-8">ENTRAR</button>
      </Link>
  </div>  
  </div>
  )
}
