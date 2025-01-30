import React from 'react';
import './App.css';



// function App(props) {
//   return (
//     <div>
//          <h1>Hello world {this.state.name}</h1>
//          <button onClick={this.changeName}>Change name</button>
//     </div>
//   );
// }



class App extends React.Component{
  constructor(props){
    super(props);
    this.state = { name: "Tommy" };
    this.changeName = this.changeName.bind(this);
    console.log("constructor");
  }

  changeName(e){
    this.setState({name: "Jimmy"});
  }

  changeNameLinq = (e) =>{
    console.log(e);
    this.setState({name: "Jimmy"});
  }

  changeNameInput(nameNew){
    this.setState({name: nameNew});
  }


  static getDerivedStateFromProps(props, state){
    console.log("getDerivedStateFromProps");
    
    return null;
  }

  componentDidMount(){
    console.log("componentDidMount");
  }

  componentWillUnmount(){
    console.log("componentWillUnmount");
  }

  getSnapshotBeforeUpdate(oldProps, oldState){
    console.log("getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(){
    console.log("componentDidUpdate");
  }

  render(){
    console.log("render");
    return (
      <div>
        <h1>Hello world {this.state.name}</h1>
        <input type='text' id="name"/>
        <button onClick={() => this.changeNameInput(document.getElementById("name").value)}>Change name</button>
      </div>
    )
  }
}



// let App = (props) =>{
//   let {name} = props;
//   return (
//         <h1>Hello world {name}</h1>
//       );
// }

//App.defaultProps = { name: "Anonim" };

export default App;
