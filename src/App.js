import { useState } from "react";
import ShowEmployees from "./components/ShowEmployees/ShowEmployees";
import AddEmployees from "./components/AddEmployees";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { Link } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  const [employees, setEmployee] = useState([]);

  const [id,SetId] = useState('');

  const handleChange=(event) => {
    SetId(event.target.value);
}

  const fecthData = async () => {
    const response = await fetch(
      "http://dummy.restapiexample.com/api/v1/employees"
    );
    const data = await response.json();
    setEmployee(data.data);
    console.log(employees);
  };

  const fecthDataById = async (id) => {
    const response = await fetch(
      `http://dummy.restapiexample.com/api/v1/employee/${id}`
    );
    const data = await response.json();
    console.log(data.data);
    if (data.data != null) {
      setEmployee([data.data]);
    }
  };

  const deleteEmployee = async (id) => {
    const response = await fetch(
      `http://dummy.restapiexample.com/api/v1/delete/${id}`,
      {
        method: "DELETE",
      }
    );
    fecthData();
  };

  return (
    <BrowserRouter>
    <div className="App">
    <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">Dummy Api Frontend</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavDropdown title="Open it" id="navbarScrollingDropdown">
              <Link to="/All">
                <NavDropdown.Item href="#action4" onClick={fecthData}  >
                  All employees
                </NavDropdown.Item>
              </Link>
              <NavDropdown.Divider />
              <Link to="New">
                <NavDropdown.Item href="#action5">
                  Add new employee
                </NavDropdown.Item>
              </Link>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
              onChange={handleChange}
              id="datainput"
            />
            <Link to="Search">
            <Button onClick={()=>{fecthDataById(id)}} variant="outline-success">Search</Button>
            </Link>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route exact path="/All">
          <ShowEmployees employees={employees} />
        </Route>
        <Route exact path="/New">
          <AddEmployees />
        </Route>
        <Route exact path="/Search">
          <ShowEmployees employees={employees} />
        </Route>
      </Switch>
    </div>  
    </BrowserRouter>
  );
}

export default App;
