import useSWR from 'swr'

function fetcher(url: string) {
  return window.fetch(url).then((res) => res.json())
}

export function useCategorias() {
  const { data, error } = useSWR(`/api/get-categorias`, fetcher)

  return {
    categorias: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export function useCapitulos(id: any) {
  const { data, error } = useSWR([`/api/get-capitulos?id=`+id], fetcher)
  return {
    capitulos: data,
    isLoading: !error && !data,
    isError: error,
  }
}