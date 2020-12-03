import React from "react";
import videoService from "../services/videoService.jsx";

class AddVideo extends React.Component{
    constructor(){
        super();
        this.state = {
            link: "",
            watch: "",
            image: "",
            title: "",
            description: "",
            category: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        const videoDetails = {
            link: this.state.link,
            watch: this.state.watch,
            image: this.state.image,
            title: this.state.title,
            description: this.state.description,
            category: this.state.category
        }
        videoService.addVideo(videoDetails)
            .then(response => {
                console.log("Submitted form data", response.data);
                window.location = "/landing";
            })
        
    }

    handleChange(event){
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    render(){
        const styles={backgroundColor: 'darkgrey', color: 'white'}
        return (
            <div class="box">
                <h2>Upload Your Videos Here</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="inner">
                        <input 
                            type="text"
                            placeholder="Video Link"
                            name="link"
                            onChange={this.handleChange}
                            value={this.state.link}
                        />
                        <input 
                            type="text"
                            placeholder="Enter your youtube link here"
                            name="watch"
                            onChange={this.handleChange}
                            value={this.state.watch}
                        />
                        <input 
                            type="text"
                            placeholder="Enter Image here"
                            name="image"
                            onChange={this.handleChange}
                            value={this.state.image}
                        />
                        <input 
                            type="text"
                            placeholder="Enter title of the video"
                            name="title"
                            onChange={this.handleChange}
                            value={this.state.title}
                        />
                        <textarea 
                            placeholder="Enter video description"
                            onChange={this.handleChange}
                            name="description"
                            value={this.state.description}
                        />
                        <select 
                            name="category"
                            onChange={this.handleChange}
                            value={this.state.category} 
                        >
                            <option style={styles} default>Select Video category</option>
                            <option style={styles} value="vue">Vue</option>
                            <option style={styles} value="react">React</option>
                            <option style={styles} value="angular">Angular</option>
                            <option style={styles} value="java">Java</option>
                            <option style={styles} value="mysql">MySql</option>
                        </select>
                        <button class="button style2 fit">Add Video</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddVideo;