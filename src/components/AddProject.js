import React, { Component } from 'react';
//import axios from 'axios';

class AddProject extends Component {

    state = {
        title: '',
        description: '',
        place: '',
        year: '',
        category: '',
        image: '',
        tasks: []
    }

    handleFormSubmit = e => {
        e.preventDefault();
        const title = this.state.title;
        const description = this.state.description;
        const place = this.state.place;
        const year = this.state.year;
        const category = this.state.category;
        const image = this.state.image;
        const tasks = this.state.task;
        const data = {
            title: title,
            description: description,
            place: place,
            year:year,
            category: category,
            image: image,
            tasks: tasks
        };

        const options = {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(data)
        };

        fetch("http://localhost:3001/api/projects" , options)

        
        .then( ()=> {
            this.getData();
            this.setState({
                title: '',
                description: '',
                place: '',
                year: '',
                category: '',
                image: '',
                tasks: []
            });
        })
        .catch( err => console.log(err))
    }


    




    handleChange = e => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>

                    <label>Title:</label>
                    <input type="text" name="title" value={this.state.title} onChange={ e => this.handleChange(e)}/>

                    <label>Description:</label>
                    <input type="text" name="description" value={this.state.description} onChange={ e => this.handleChange(e)} />

                    <label>place:</label>
                    <input type="text" name="place" value={this.state.place} onChange={ e => this.handleChange(e)} />

                    <label>year:</label>
                    <input type="text" name="year" value={this.state.year} onChange={ e => this.handleChange(e)} />

                    <label>category:</label>
                    <input type="text" name="category" value={this.state.category} onChange={ e => this.handleChange(e)} />

                    <label for="imagen">Add an image:</label>
                    <input type="file" name="photo" value={this.state.image} onChange={ e => this.handleChange(e)} />

                    
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default AddProject;



  

