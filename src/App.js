import {useState} from 'react';
import SearchBar from './components/SearchBar';
import ShowEmployees from './components/ShowEmployees/ShowEmployees';
import AddEmployees from './components/AddEmployees';
import './App.css';


function App() {

  
  const [employees, setEmployee] = useState([]);

  const fecthData=async()=>{
    const response= await fetch('http://dummy.restapiexample.com/api/v1/employees');
    const data = await response.json();
    setEmployee(data.data);
    console.log(employees);
  }

  const fecthDataById=async(id)=>{
    const response= await fetch(`http://dummy.restapiexample.com/api/v1/employee/${id}`);
    const data= await response.json();
    console.log(data.data);
    if(data.data!=null){
      setEmployee([data.data]);
    }
    
  }

  const deleteEmployee= async(id)=>{
  const response= await fetch(`http://dummy.restapiexample.com/api/v1/delete/${id}`,{
      method: 'DELETE'

    });
    fecthData();
  }


  return (
    <div className="App">
     <SearchBar getall={fecthData} getEmployee={fecthDataById} deleteEmployee={deleteEmployee}  />
     <AddEmployees/>
     <ShowEmployees employees={employees}/>
    </div>
  );
}

export default App;
