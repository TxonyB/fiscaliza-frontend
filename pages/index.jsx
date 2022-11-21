import NavBar from './components/NavBar'

export default function Index() {
  return (
    <div>
      <NavBar />
      <div className="overflow-x-auto relative sm:rounded-xl">
        <h1 className="text-4xl px-4 py-4 font-medium">Meus Contratos</h1>
      <table className="w-[80%] m-auto text-sm text-left text-blue-100 dark:text-blue-100">
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
              className="py-4 px-6 font-medium text-black whitespace-nowrap dark:text-blue-100"
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
              className="py-4 px-6 font-medium text-black whitespace-nowrap dark:text-blue-100"
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
              className="py-4 px-6 font-medium text-black whitespace-nowrap dark:text-blue-100"
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
              className="py-4 px-6 font-medium text-black whitespace-nowrap dark:text-blue-100"
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
              className="py-4 px-6 font-medium text-black whitespace-nowrap dark:text-blue-100"
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
