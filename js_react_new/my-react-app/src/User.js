import React from 'react';

class User extends React.Component{
    constructor(props){
        super(props);
        
        let name = props.name;
        let age = props.age;
        let isNameValid = this.validateName(name);
        let isAgeValid = this.validateAge(age);

        this.state = {
            name: name, 
            age: age,
            nameValid: isNameValid,
            ageValid: isAgeValid
        };

        this.onNameChange = this.onNameChange.bind(this);
        this.onAgeChange = this.onAgeChange.bind(this);
        this.submitHandle = this.submitHandle.bind(this);
    }

    validateName(name){
        return name.length > 2 && name.length <=10;
    }

    validateAge(age){
        return age > 0 && age <= 65;
    }

    onNameChange(e){
        let name = e.target.value;
        let valid = this.validateName(name);
        this.setState({
            name: name,
            nameValid: valid
        });
    }

    onAgeChange(e){
        let age = e.target.value;
        let valid = this.validateAge(age);
        this.setState({
            age: age,
            ageValid: valid
        });
    }

    submitHandle(e){
        e.preventDefault();
        let info = document.getElementById("info");
        if(this.state.nameValid && this.state.ageValid){
            let str = `Name: ${this.state.name}, Age: ${this.state.age}`;
            info.append(document.createTextNode(str));
        }
            
    }

    render(){

        let nameColor = this.state.nameValid === true ? "green" : "red";
        let ageColor = this.state.ageValid === true ? "green" : "red";
        return(
            <div>
                <form onSubmit={this.submitHandle}>
                    <div>
                        <label>Name:</label><br />
                        <input type='text' 
                                value={this.state.name}
                                style={{borderColor: nameColor}}
                                onChange={this.onNameChange}/>
                    </div>
                    <div>
                        <label>Age:</label><br />
                        <input type='number' 
                                value={this.state.age}
                                style={{borderColor: ageColor}}
                                onChange={this.onAgeChange}/>
                    </div>
                    <button type='submit'>Send</button>
                </form>
                <div id="info"></div>
            </div>
            
        );
    }
}

User.defaultProps = {name: "", age: 0};

export default User;