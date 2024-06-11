
import './App.css';
import Layout from './Component/Layout/Layout';
import About from './Pages/About';
import Education from './Pages/Education';
import Project from './Pages/Project';
import TechStack from './Pages/TechStack';
import Work from './Pages/Work';


function App() {
  return (
    <>
    <Layout/>
    <div className='container'>
    <About/>
    <Education/>
    <TechStack/>
    <Project/>
   <Work/>
    </div>
    
    </>
  );
}

export default App;
