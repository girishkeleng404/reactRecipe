  
import './App.css'
import axios from 'axios' 
import Layout from './Layout'
import { Routes, Route } from 'react-router-dom'
import IndexPage from './components/IndexPage';
import RecipeList from './components/RecipeList';
import DetailsPage from './components/DetailsPage';
import Search from './components/Search';
import FAQ from './components/Footers/FAQ';
import TnP from './components/Footers/T&P';

function App() {

  //  axios.defaults.baseURL = 'http://localhost:4000/'
   axios.defaults.withCredentials = true
   

  return (
  <Routes>
    <Route path="/" element={<Layout/>} />
    <Route index element={<IndexPage/>} />
    <Route path='/recipeList' element={<RecipeList/>} />
    <Route path='/details/:id' element={<DetailsPage/>} />
    <Route path='/search' element={<Search/>} />
    <Route path='/faq' element={<FAQ/>} />
    <Route path='/t&p' element={<TnP/>}/>
  </Routes>
  )
}

export default App
