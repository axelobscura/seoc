import useSWR from 'swr'

function fetcher(url: string) {
  return window.fetch(url).then((res) => res.json())
}

export function useCategorias() {
  const { data, error } = useSWR(`/api/get-categorias`, fetcher)

  return {
    categorias: data,
    isLoadingCategorias: !error && !data,
    isError: error,
  }
}

export function useComites() {
  const { data, error } = useSWR(`/api/get-comites`, fetcher)

  return {
    comites: data,
    isLoadingComites: !error && !data,
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

export function useCapitulosAstm(id: any) {
  const { data, error } = useSWR([`/api/get-capitulos-astm?id=`+id], fetcher)
  return {
    capitulosAstm: data,
    isLoadingAstm: !error && !data,
    isError: error,
  }
}

export function useCapitulosCfe(id: any) {
  const { data, error } = useSWR([`/api/get-capitulos-cfe?id=`+id], fetcher)
  return {
    capitulosCfe: data,
    isLoadingCfe: !error && !data,
    isError: error,
  }
}

export function useCapitulosNtc(id: any) {
  const { data, error } = useSWR([`/api/get-capitulos-ntc?id=`+id], fetcher)
  return {
    capitulosNtc: data,
    isLoadingNtc: !error && !data,
    isError: error,
  }
}

export function useCapitulosNmx(id: any) {
  const { data, error } = useSWR([`/api/get-capitulos-nmx?id=`+id], fetcher)
  return {
    capitulosNmx: data,
    isLoadingNmx: !error && !data,
    isError: error,
  }
}

export function useCapitulosPca(id: any) {
  const { data, error } = useSWR([`/api/get-capitulos-pca?id=`+id], fetcher)
  return {
    capitulosPca: data,
    isLoadingPca: !error && !data,
    isError: error,
  }
}

export function useComiteCatego(id: any) {
  const { data, error } = useSWR([`/api/get-comitecatego?id=`+id], fetcher)
  return {
    capitulos: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export function useCategoria(idCategoria: any) {
  const { data, error } = useSWR([`/api/get-categoria?idcategoria=`+idCategoria], fetcher)
  return {
    categoria: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export function useComite(norma: any, id: any) {
  const { data, error } = useSWR([`/api/get-comite?norma=`+norma+`&id=`+id], fetcher)
  return {
    comite: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export function useContenido(norma: any, id: any) {
  const { data, error } = useSWR([`/api/get-contenido?norma=`+norma+`&id=`+id], fetcher)
  return {
    contenido: data,
    isLoadingContenido: !error && !data,
    isError: error,
  }
}

export function useUsuario(email: any, password: any) {
  const { data, error } = useSWR([`/api/get-usuario?email=`+email+`&password=`+password], fetcher)
  return {
    usuario: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export function useContenidos(id: any) {
  const { data, error } = useSWR([`/api/get-contenidos?id=`+id], fetcher)
  return {
    contenidos: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export function usePerfil(perfil: any) {
  const { data, error } = useSWR([`/api/get-perfil?perfil=`+perfil], fetcher)
  return {
    contenidos: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export function useMatrix(id: any) {
  const { data, error } = useSWR([`/api/get-matrix?id=`+id], fetcher)
  return {
    matrix: data,
    isLoading: !error && !data,
    isError: error,
  }
}