import { MagnifyingGlassCircleIcon } from '@heroicons/react/24/solid'

export default function Search() {
    return(
      <div className='my-2 w-full'>
          <label className="flex items-center justify-center relative block">
              <span className="sr-only">Search</span>
              <input className="placeholder:italic placeholder:text-slate-400 text-gray-900 block bg-white w-1/2 border border-slate-300 rounded-full py-5 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Buscar por contenidos..." type="text" name="search"/>
              <span className="inset-y-0 left-0 flex items-center pl-2">
                  <MagnifyingGlassCircleIcon className="h-14 w-14 text-gray-300 hover:text-slate-400 cursor-pointer"/>
              </span>
          </label>
      </div>
    )
}