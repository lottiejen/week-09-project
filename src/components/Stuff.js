// Create a component <Stuff> that includes all of the components so far and then use it in your <App> component:


import Header from './components/Header';  // referencing the components 
import Paragraph from './components/Paragraph'; 
import Square from './components/Square'; 
import People from './components/People'; 

const Stuff = () => ( 
    <>
        <Header />
        <Paragraph />
        <Square />
        <People />
    </>
);

export default Stuff; 