import Link from 'next/link'
import NavBar from '../components/NavBar'

export default function Index() {
  return (
    <div>
      <NavBar />
      <div>
      <Link href={'/createcontratoForm'}>
        <button className='bg-[#248D22] text-white rounded-2xl py-2 px-3 font-bold hover:bg-black float-right mt-6 mr-8'>Criar novo contrato</button>
        </Link>
      </div>
      <div className="overflow-x-auto relative sm:rounded-xl">
        <h1 className="text-4xl px-4 py-4 font-medium">Meus Contratos</h1>
      <table className="w-[90%] m-auto text-sm text-left text-blue-100 mt-16">
        <thead className="text-xs text-white uppercase bg-[#c2c2c2] border-b dark:text-white">
          <tr>
            <th scope="col" className="py-3 px-6 text-[#248D22]">
              NÚMERO
            </th>
            <th scope="col" className="py-3 px-6 text-[#248D22]">
              PESSOA CONTRATADA
            </th>
            <th scope="col" className="py-3 px-6 text-[#248D22]">
              DATA DE ÍNICIO
            </th>
            <th scope="col" className="py-3 px-6 text-[#248D22]">
              DATA DE TÉRMINO
            </th>
            <th scope="col" className="py-3 px-6 text-[#248D22]">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-[#c2c2c2] border-b hover:bg-[#248D22] text-black">
            <th
              scope="row"
              className="py-4 px-6 font-medium text-black whitespace-nowrap"
            >
              Apple MacBook Pro 17"
            </th>
            <td className="py-4 px-6">NOME DA EMPRESA</td>
            <td className="py-4 px-6">Laptop</td>
            <td className="py-4 px-6">$2999</td>
            <td className="py-4 px-6">
              <a href="#" className="font-medium text-black hover:underline">
                Edit
              </a>
            </td>
          </tr>
          <tr className="bg-[#c2c2c2] border-b hover:bg-[#248D22] text-black">
            <th
              scope="row"
              className="py-4 px-6 font-medium text-black whitespace-nowrap"
            >
              Microsoft Surface Pro
            </th>
            <td className="py-4 px-6">NOME DA EMPRESA</td>
            <td className="py-4 px-6">Laptop PC</td>
            <td className="py-4 px-6">$1999</td>
            <td className="py-4 px-6">
              <a href="#" className="font-medium text-black hover:underline">
                Edit
              </a>
            </td>
          </tr>
          <tr className="bg-[#c2c2c2] border-b hover:bg-[#248D22] text-black">
            <th
              scope="row"
              className="py-4 px-6 font-medium text-black whitespace-nowrap"
            >
              Magic Mouse 2
            </th>
            <td className="py-4 px-6">NOME DA EMPRESA</td>
            <td className="py-4 px-6">Accessories</td>
            <td className="py-4 px-6">$99</td>
            <td className="py-4 px-6">
              <a href="#" className="font-medium text-black hover:underline">
                Edit
              </a>
            </td>
          </tr>
          <tr className="bg-[#c2c2c2] border-b hover:bg-[#248D22] text-black">
            <th
              scope="row"
              className="py-4 px-6 font-medium text-black whitespace-nowrap"
            >
              Google Pixel Phone
            </th>
            <td className="py-4 px-6">NOME DA EMPRESA</td>
            <td className="py-4 px-6">Phone</td>
            <td className="py-4 px-6">$799</td>
            <td className="py-4 px-6">
              <a href="#" className="font-medium text-black hover:underline">
                Edit
              </a>
            </td>
          </tr>
          <tr className="bg-[#c2c2c2] hover:bg-[#248D22] text-black">
            <th
              scope="row"
              className="py-4 px-6 font-medium text-black whitespace-nowrap"
            >
              Apple Watch 5
            </th>
            <td className="py-4 px-6">NOME DA EMPRESA</td>
            <td className="py-4 px-6">Wearables</td>
            <td className="py-4 px-6">$999</td>
            <td className="py-4 px-6">
              <a href="#" className="font-medium text-black hover:underline">
                Edit
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
        </div>
  )
}
  