
import './App.css'
import LineChart from './components/LineChart/LineChart';
import Navbar from './components/Navbar/Navbar'
import PriceOptions from './components/PriceOptions/PriceOptions'
import MyBarChart from './components/MyBarChart/MyBarChart';
import Phones from './components/Phones/Phones';
// import DaisyNav from './components/DaisyNav/DaisyNav'

function App() {

  return (
    <>
      <Navbar></Navbar>
      {/* <DaisyNav></DaisyNav> */}
      {/* <h1 className='bg-rose-600'>Vite + React</h1> */}
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <MyBarChart></MyBarChart>
      <Phones></Phones>

    </>
  )
}

export default App
