import './App.css';
import Header from './components/Header';  // referencing the components 
import Paragraph from './components/Paragraph'; 
import Square from './components/Square'; 
import People from './components/People'; 

function App() {
  return (
    <>
      <Header />    
      <Paragraph />
      <Square />
      <People />
 
    </>
  );
}

export default App;


// we need to only add the varaible in the App function. 
