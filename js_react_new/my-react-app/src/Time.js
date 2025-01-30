import React from "react";

class Time extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            app: "Time", 
            time: new Date()
        };
        this.unmount = this.unmount.bind(this);
    }

    componentDidMount(){
        this.timer = setInterval(
            () => this.tick(),
            1000
        );
        console.log("componentDidMount");
    }

    componentWillUnmount(){
        clearInterval(this.timer);
        console.log("componentWillUnmount");
    }

    tick(){
        this.setState({
            time: new Date()
        });
    }

    unmount(){
        this.props.rootLink.unmount();
    }

    render(){
        return (
            <div>
                <h2>{this.state.app} {this.state.time.toLocaleTimeString()}</h2>
                <button onClick={this.unmount}>Unmount</button>
            </div>
        )
    }
}

export default Time;