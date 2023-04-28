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
      <div>
        <h1 className="text-4xl px-4 py-4 font-medium">Meus Contratos</h1>
        <div class="w-full overflow-x-auto py-10">
  <table class="w-full text-sm bg-white rounded-lg shadow-md">
    <thead class="text-white uppercase bg-[#248D22]">
      <tr>
        <th class="py-3 px-6 text-left">#</th>
        <th class="py-3 px-6 text-left">PESSOA CONTRATADA</th>
        <th class="py-3 px-6 text-left">DATA DE INÍCIO</th>
        <th class="py-3 px-6 text-left">DATA DE TÉRMINO</th>
        <th class="py-3 px-6 text-center">AÇÃO</th>
      </tr>
    </thead>
    <tbody class="text-gray-700">
      <tr class="border-b border-gray-200 hover:bg-gray-100">
        <td class="py-3 px-6 text-left whitespace-nowrap">67/2021</td>
        <td class="py-3 px-6 text-left">Facebook</td>
        <td class="py-3 px-6 text-left">12/12/2023</td>
        <td class="py-3 px-6 text-left">12/12/2024</td>
        <td class="py-3 px-6 text-center">
          <a href="#" class="text-blue-600 hover:text-blue-900">Editar</a>
        </td>
      </tr>
      <tr class="border-b border-gray-200 hover:bg-gray-100">
        <td class="py-3 px-6 text-left whitespace-nowrap">10/2021</td>
        <td class="py-3 px-6 text-left">Maranata</td>
        <td class="py-3 px-6 text-left">11/11/2022</td>
        <td class="py-3 px-6 text-left">12/12/2022</td>
        <td class="py-3 px-6 text-center">
          <a href="#" class="text-blue-600 hover:text-blue-900">Editar</a>
        </td>
      </tr>
    </tbody>
  </table>
</div>

    </div>
        </div>
  )
}
  