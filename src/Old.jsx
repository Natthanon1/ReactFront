import Hello from './Hello';
import Contact from './Contact';
import Counter from './Counter';
function App(){
  const helloData = [
    {name: 'Natthanon', message: 'Hi there'},
    {name: 'Paint', message: 'Hello...'}
  ];

  return (
    <>
    < Counter />
    {helloData.map((data, index) => (
      <Hello key={index} name={data.name} message={data.message} />
    ))}


    <Contact email="Natthanon@gmail.com" phone="0924217567"/>
    </>
  );
 
}
export default App;