import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);
import React, { Component } from "react";
import Storage from "@aws-amplify/storage";
import Button from "@material-ui/core/Button";


import AddIcon from '@material-ui/icons/Add';
import "semantic-ui-css/semantic.min.css";
import 'react-datepicker/dist/react-datepicker.css';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import {  FormGroup} from "@material-ui/core";

class App extends Component {

state = {
    imageName: "",
    imageFile: "",
    response: ""
  };

   
uploadImage = () => {
Storage.put(`userimages/${this.upload.files[0].name}`,
                this.upload.files[0],
                { contentType: this.upload.files[0].type })
      .then(result => {
        this.upload = null;
        this.setState({ response: "Success uploading file!" });
      })
      .catch(err => {
        this.setState({ response: `Cannot uploading file: ${err}` });
      });
};


    render() {

        return (
          
        <div className-="App">
            <h1> VeterHealth Medical Timeline
            </h1>
       <FormGroup/>
<Button variant="contained" color="primary">
    Login
  </Button>
   <Button variant="contained" color="primary">
   Upload
 </Button> 
 <Button variant="contained" color="primary">
   Add
 </Button>   
 <Button variant="contained" color="primary">
   Generate
 </Button>
       <h3>
              Insightful Medical Analytics Generated with Natural Language Processing
            </h3>
<ButtonGroup
      orientation="vertical"
      color="primary"
      aria-label="vertical contained primary button group"
      variant="contained"
    >
      <Button><AddIcon/>Add Event</Button>
      <Button><AddIcon/>Medical Conditions</Button>
      <Button><AddIcon/>Labs</Button>
      <Button><AddIcon/>Visits</Button>
      <Button><AddIcon/>Procedures</Button>
    </ButtonGroup>
            <h3>
              Securely Upload Your Documents!
            </h3>
        <input
          type="file"
          style={{ display: "none" }}
          ref={ref => (this.upload = ref)}
          onChange={e =>
            this.setState({
              imageFile: this.upload.files[0],
              imageName: this.upload.files[0].name
            })
          }
        />
        <input value={this.state.imageName} placeholder="Select file" />
        <button
          onClick={e => {
            this.upload.value = null;
            this.upload.click();
          }}
          loading={this.state.uploading}
        >
          Browse
        </button>

        <button onClick={this.uploadImage}> Upload File </button>

        {!!this.state.response && <div>{this.state.response}</div>}

      </div>
    );
  }
}

export default withAuthenticator(App,true);


