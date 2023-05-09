import { useData } from './hooks/query-hooks/ use-get'

function App(): JSX.Element {
  // useQuery is for gets
  // useMutation is for anything else (post, patch...)

  const { data, isLoading, isError } = useData(9)
  if (isError) return <>Error!</>
  else if (isLoading) return <>Loading...</>
  else if (data === undefined) return <>No data found!</>
  return (
    <>
      <h1> {JSON.stringify(data)} </h1>
    </>
  )
}

export default App
