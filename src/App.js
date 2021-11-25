import React, { Component } from 'react'
import './App.css';
import { Button } from 'react-bootstrap'
import Comp from './component/component.js'


export default class App extends Component {
  state = {
      Person : {
          fullName: "Achref Gasri",
          Profession: "Full Stack Developer",
  
          imgSrc: "/images/ProfilePhoto.jpg",
          Bio: {
              diploma: ["bachelor's degree in economics and management", "/Applied Bachelor of Computer Science"],
              skills: ["HTML5/", "CSS3/", "JS/", "PHP", "/SQL", "/ReactJS", "/Monogodb", "/Symfony 5", "/XML", "/Oracle", "/JAVA", "/Github"],
              lang: { Arabic: "excellent", English: "middle", French: "good" }
          }
      },

    show: false,
  }
  handleShow = () => {
    this.setState({
      show: !this.state.show,
    })
  }
  render() {
    return (
      <div>
        <Button  variant="danger" onClick={this.handleShow} style={{ marginBottom: "10%" }}>{this.state.show ? "Hide" : "Show"}</Button>
        {this.state.show &&
          <Comp Person={this.state.Person} />
        }
      </div>

    )
  }
}

