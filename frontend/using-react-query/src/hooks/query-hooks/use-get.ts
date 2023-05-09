import { useQuery } from '@tanstack/react-query'
import { getData } from '../../petitions/getData'
import { queryConfig } from './queryConfig'

export function useData(dataId: number): ReturnType<typeof useQuery> {
  return useQuery({
    ...queryConfig,
    queryKey: [`useData/${dataId}`],
    queryFn: async () => getData(dataId),
  })
}
