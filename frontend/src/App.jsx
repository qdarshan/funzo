import './App.css'
import axios from 'axios'
import Logo from './components/Logo'
import { useQuery } from '@tanstack/react-query'

function App() {
  return (
    <div>
      <Logo />

    </div>
  )
}

// function Hello() {

//   const query = useQuery({
//     queryKey: ['todos'], queryFn: () => {
//       return axios.get('http://localhost:8080')
//     }
//   })
//   console.log(query.data);

//   return (
//     <div>
//       {query.data && <p>{query.data.data}</p>}
//     </div>
//   )
// }

export default App
