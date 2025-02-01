import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import './App.css'
import axios from 'axios'

function App() {

  const queryClient = new QueryClient()
  return (

    <QueryClientProvider client={queryClient}>
     <Hello/>
    </QueryClientProvider>
  )
}

function Hello() {

  const query = useQuery({ queryKey: ['todos'], queryFn: () => axios.get('http://localhost:8080') })

  console.log(query.data);

  return (
    <div>
      {query.data && <p>{query.data.data}</p>}
    </div>
  )
}

export default App
