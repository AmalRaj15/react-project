// import { useState } from "react";

// import Todos from "./components/Todos";
// import AddTodo from "./components/AddTodo";


// function App() {
//   const [color, setColor] = useState('olive')
// const [counter, setCounter]= useState(8)
//   //let counter = 8;
// const image1= "https://live.staticflickr.com/7587/16153587924_515d5093e7_b.jpg"
// //const image2= "https://wallpapercave.com/wp/wp4805729.jpg"
 
//   const addValue =() => {
//     setCounter(counter + 1 )
//     console.log(counter)
//   }
//   return (
// <>
//     <h1>create react app</h1>
//     <h2>counter:{counter}</h2>
//     <button onClick={addValue}>add value</button>
//     <Card  image ={image1}/>
//     <div className='w-full h-screen duration-200 ' style={{backgroundColor: color}}>
//       <div className='fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2'>
        
//     <button
//           onClick={() => setColor('red')}
//           className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'
//           style={{backgroundColor: 'red'}}
//           >Red</button>

// </div>
//     </div>
//     <AddTodo />

//     <Todos />
//  </>
         
//   );
// }

// export default App;
//import logo from './logo.svg';

import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Card from "./components/Card";

function App() {
  const image1= "https://live.staticflickr.com/7587/16153587924_515d5093e7_b.jpg";
  return (
	<Provider store={store}>
		<div className="App">
			<h1>React Redux ToDo-list Example</h1>
			<AddTodo className="test-center"/>
      <Todos />
      <Card  image ={image1}/>
		</div>
	</Provider>
  );
}

export default App;