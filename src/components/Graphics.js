
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class Graphics extends Component {
  constructor(){
      super();
      this.state = { listOfProjects: [] };
  }

  getAllProjects = () =>{
    axios.get(`http://localhost:3001/api/graphics`)
    .then(responseFromApi => {
      this.setState({
        listOfProjects: responseFromApi.data
      })
    })
  }

  componentDidMount() {
    this.getAllProjects();
  }

                
            

render(){
  return(
    <div className="example-2 card">
              <div className="wrapper">
                
                <div className="header">
                  <div className="data">

        { this.state.listOfProjects.map((project, index) => {
          return (
  
                    <div className="content" key={project._id}>
                    <Link to={`/projects/${project._id}`}><h3>{project.title}</h3></Link>
                    <p style={{maxWidth: '400px'}} >{project.description} grc</p>
                    
                    </div>

          )})
        }
      </div>
    </div>
    </div>
    </div>
    
  )
}
  
  
}

export default Graphics;

 

 



      