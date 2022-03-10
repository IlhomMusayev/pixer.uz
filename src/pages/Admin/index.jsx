import Login from "../../components/login";
import axios from 'axios'
import { useAuth  } from "../../contexts/AuthContext";
import { useState, useEffect } from "react";
import { client } from '../../utils/api-client'
import CategoryService from "../../services/CategoryService";
import ProjectService from "../../services/ProjectService";
import { Oval } from  'react-loader-spinner'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss'
import { Button, Modal, InputGroup, FormControl, Table, FloatingLabel, Form, Control  } from 'react-bootstrap';
import { Item } from "semantic-ui-react";
import constants from '../../config/constants'


function CategoryModal(props) {
  const [message, setMessage] = useState('')
  const submit = async (e) => {
    try {
      e.preventDefault();
      const category_name = e.target[0].value

      if (category_name === undefined){
        setMessage("Please enter a category name");
        return;
      };

      let res = await CategoryService.CreateCategory(category_name)

      setMessage(res.message)
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create category
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <form onSubmit={submit}>
            <p>{message}</p>
            <label>Categroy name:</label>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Category name"
                  aria-label="Category name"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>

              <Button type="submit" variant="outline-primary">Create</Button>  
              
          </form>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-dark" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function ProjectsModal(props) {
  const [message, setMessage] = useState('')
  const [data, setData] = useState([])


  const submit = async (e) => {
    try {
      e.preventDefault();
      const category_id = e.target[0].value
      const project_name = e.target[1].value
      const file = e.target[2].files[0]
      const project_description = e.target[3].value

      console.log(file);
      if (category_id === undefined && project_name === undefined && file === undefined && project_description === undefined){
        setMessage("Please enter a category name");
        return;
      };

      let res = await ProjectService.CreateProject(category_id, project_name, file, project_description)

      setMessage(res.message)
    } catch (error) {
      console.log(error);
    }
  }

  const getCategorys = async (e) => {
    const categorys = await CategoryService.AllCategorys()
    setData(categorys?.data?.category)
  }

  useEffect(() => {
    getCategorys()

    return () => {};
  }, []);
  
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create Project
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <form onSubmit={submit}>
            <p>{message}</p>

            <label>Select category:</label>
            <select className="w-100 border p-1 mb-3">
              <option selected disabled>Select ategory</option>
              {data.map((item, key) => {
                  return(
                    <option key={key} value={item.category_id}>{item.category_name}</option>
                  )
              })}
            </select>


            <label>Project name:</label>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Project name"
                aria-label="Project name"
                aria-describedby="basic-addon1"
              />
            </InputGroup>

            <div className="mb-3">
              <label for="formFile" className="form-label">Select photo this project:</label>
              <input className="form-control" type="file" id="formFile"/>
            </div>

            <label>Project image:</label>
            <FloatingLabel controlId="floatingTextarea2" label="Comments">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: '100px' }}
              />
            </FloatingLabel>

            <Button type="submit" className="float-end px-4 py-2" variant="outline-primary">Create</Button>  
              
          </form>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-dark" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function Admins(){
    const [token] = useAuth();
    const [data, setData] = useState([])
    const [dataProjects, setDataProjects] = useState([])
    const [loader, setLoader] = useState(false)
    const [modalCategoryShow, setCategoryModalShow] = useState(false);
    const [modalProjectShow, setProjectModalShow] = useState(false);

    
    const getCategorys = async (e) => {
      const categorys = await CategoryService.AllCategorys()
      setData(categorys?.data?.category)
    }

    useEffect(() => {
      getCategorys()

      return () => {};
    }, []);
    

        
    const getProjects = async (e) => {
      const projects = await ProjectService.AllPorjects()
      setDataProjects(projects?.data?.projects)
    }

    useEffect(() => {
      getProjects()

      return () => {};
    }, []);

    console.log(dataProjects);
      
    return (
        <div className="container my-5">
            <h2 className='fs-2 mb-3'>Admin page</h2>
            {loader? 
            <Oval height="50"
                  width="50"
                  color='black'
                  ariaLabel='loading'/>
                 :
                    ""}

            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3 className="fs-4">Add Category</h3>
              <Button variant="outline-dark" onClick={() => setCategoryModalShow(true)}>
                Create category
              </Button>
            </div>

            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Category name</th>
                  <th>Edit/Delete</th>
                </tr>
              </thead>
              <tbody>
                {data.length && data.map((item, key) => {
                    return(
                      <tr key={item.category_id}>
                          <td>{key+1}</td>
                          <td>{item.category_name}</td>
                          <td></td>
                      </tr> 
                    )
                })} 
              </tbody>
            </Table>

            <CategoryModal
              show={modalCategoryShow}
              onHide={() => setCategoryModalShow(false)}
            />



            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3 className="fs-4">Add Projects</h3>
              <Button variant="outline-dark" onClick={() => setProjectModalShow(true)}>
                Create category
              </Button>
            </div>

            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Project name</th>
                  <th>Project image</th>
                  <th>Edit/Delete</th>
                </tr>
              </thead>
              <tbody>
                {dataProjects.length && dataProjects.map((item, key) => {
                    return(
                      <tr key={item.project_id}>
                          <td>{key+1}</td>
                          <td>{item.project_name}</td>
                          <td><img src={constants.API_URL + "/files/"+item.project_image} alt="image" className="rounded-circle" style={{width: '80px', height: '80px', objectFit: "cover"}}/></td>
                          <td></td>
                      </tr> 
                    )
                })} 
              </tbody>
            </Table>

            <ProjectsModal
              show={modalProjectShow}
              onHide={() => setProjectModalShow(false)}
            />
        </div>
    )
}
    