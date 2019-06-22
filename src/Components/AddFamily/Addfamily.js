import React from 'react';
import './Addfamily.css';

class Addform extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            jobtitle: '',
            linkedin: '',
            image: '',
        }
    }

    onNameChange = (event) => {
        this.setState({ name: event.target.value })
    }


    onEmailChange = (event) => {
        this.setState({ email: event.target.value })
    }

    onJobtitleChange = (event) => {
        this.setState({ jobtitle: event.target.value })
    }

    onLinkedinChange = (event) => {
        this.setState({ linkedin: event.target.value })
    }

    onimageChange = (event) => {
        this.setState({ image: event.target.value })
    }

    onsubmitChange = (event) => {
        console.log(this.state);
        if (this.validate()) {
            fetch('https://arcane-brook-61004.herokuapp.com/addfamily', {
                method: 'POST',
                body: JSON.stringify({
                    email: this.state.email,
                    name: this.state.name,
                    jobtitle: this.state.jobtitle,
                    linkedin: this.state.linkedin,
                    image: this.state.image
                }),
                headers: { 'Content-Type': 'application/json' }
            }).then(res => res.json())
                .catch(err => console.log("Error !!!!!", err))
            this.props.onfamilyclick('about');
        }
        else {
            console.log("validation failed");
        }
    }

    validate = () => {
        if (this.state.name === ""
            && this.state.email === ""
            && this.state.jobtitle === "") {
            var validate = false;
        }
        else {
            validate = true;
        }
        return validate;
    }
    render() {
        return (
            <div className="addform">
                <table className="table" cellPadding="5px" cellSpacing="10px">
                    <tbody><tr>
                        <td width="40%">Name : </td>
                        <td width="60%"><input onChange={this.onNameChange} className="textfields" type="text" placeholder="Enter Your Name" name="name" maxLength='30' width="100px" required /></td>
                    </tr>
                        <tr>
                            <td>Email : </td>
                            <td><input onChange={this.onEmailChange} className="textfields" type="email" placeholder="Enter your Email" name="email" required /></td>
                        </tr>
                        <tr>
                            <td>Job Title : </td>
                            <td><input onChange={this.onJobtitleChange} className="textfields" type="text" placeholder="Enter Your Job Title (Student/Dev/etc)" name="linkedin" defaultValue="" required /></td>
                        </tr>
                        <tr>
                            <td>Linked-in URL : </td>
                            <td><input onChange={this.onLinkedinChange} className="textfields" type="url" placeholder="Enter your URl" name="linkedin" /></td>
                        </tr>
                        <tr>
                            <td>Image : </td>
                            <td><input onChange={this.onimageChange} className="textfields" type="url" placeholder="Enter URL For your Image" name="image" defaultValue="" /></td>
                        </tr>
                        <tr align="center">
                            <td colSpan="2"><input onClick={this.onsubmitChange} type="Submit" className="submitbutton" defaultValue="Submit" /></td>
                        </tr>
                    </tbody>
                </table>
            </div >
        );
    }
}

export default Addform;