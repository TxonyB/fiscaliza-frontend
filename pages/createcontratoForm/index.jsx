import axios from 'axios';


export default function Form() {

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const form = event.target;
    const formData = new FormData(form);
  
    const { data } = await axios.post('/api/contratos', formData);
  
    console.log(data);
  };
  
  return (
  <>
  <h1 className="text-4xl font-bold text-center text-gray-900 py-8">CRIAR CONTRATO</h1>
  <form onSubmit={handleSubmit}>
     <div className="overflow-hidden shadow sm:rounded-md">
        <div className="bg-white px-4 py-5 sm:p-6">
           <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                 <label htmlFor="nome" className="block text-sm font-medium leading-6 text-gray-900">
                 Nome
                 </label>
                 <input
                    type="text"
                    name="nome"
                    id="nome"
                    autoComplete="address-level2"
                    className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                 <label htmlFor="objeto" className="block text-sm font-medium leading-6 text-gray-900">
                 Objeto
                 </label>
                 <input
                    type="text"
                    name="objeto"
                    id="objeto"
                    autoComplete="address-level1"
                    className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                 <label htmlFor="valor" className="block text-sm font-medium leading-6 text-gray-900">
                 Valor
                 </label>
                 <input
                    type="number"
                    name="valor"
                    id="valor"
                    autoComplete="postal-code"
                    className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                 <label htmlFor="dataInicio" className="block text-sm font-medium leading-6 text-gray-900">
                 Data de Início
                 </label>
                 <input
                    type="date"
                    name="dataInicio"
                    id="dataInicio"
                    autoComplete="postal-code"
                    className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                 <label htmlFor="dataFim" className="block text-sm font-medium leading-6 text-gray-900">
                 Data de término
                 </label>
                 <input
                    type="date"
                    name="dataFim"
                    id="dataFim"
                    autoComplete="postal-code"
                    className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                 <label htmlFor="nomeEmpresa" className="block text-sm font-medium leading-6 text-gray-900">
                 Nome da empresa
                 </label>
                 <input
                    type="text"
                    name="nomeEmpresa"
                    id="nomeEmpresa"
                    autoComplete="postal-code"
                    className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                 <label htmlFor="CNPJ" className="block text-sm font-medium leading-6 text-gray-900">
                 CNPJ
                 </label>
                 <input
                    type="text"
                    name="CNPJ"
                    id="CNPJ"
                    autoComplete="postal-code"
                    className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                 <label htmlFor="numProcesso" className="block text-sm font-medium leading-6 text-gray-900">
                 Número do Processo
                 </label>
                 <input
                    type="text"
                    name="numProcesso"
                    id="numProcesso"
                    autoComplete="postal-code"
                    className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                 <label htmlFor="numContrato" className="block text-sm font-medium leading-6 text-gray-900">
                 Número do Contrato
                 </label>
                 <input
                    type="text"
                    name="numContrato"
                    id="numContrato"
                    autoComplete="postal-code"
                    className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
              </div>
           </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
           <button
              type="submit"
              className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
           Save
           </button>
        </div>
     </div>
  </form>
  </>
  )
  }