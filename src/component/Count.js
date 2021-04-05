import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class Count extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // initial state
            txt: false
        }; 
        this.addCount = this.addCount.bind(this);
    }

    addCount() {
        ReactDOM.render(<Count num={this.props.num + 1} />, document.getElementById("countHere"));
    }

    componentDidMount() {
        console.log("component did mount confirmed");
    }

    componentWillReceiveProps(newProps,newContext) {
        console.log("component will recieve new props");
        console.log("newProps", newProps);
        if(newProps.num >= 10) {
            this.setState({
                txt:true
            });
        }
    }

    shouldComponentUpdate(newProps,newState) {
        console.log("component should update or not ?");
        console.log("newProps", newProps);
        console.log("newState", newState);
        return true;
        
    }

    render() {
        console.log("component rendered");
        return(
            <div>
                <h3>Count Component</h3>
                <article>
                    <h1> { this.state.txt ? "Hi welcome to lifecycle hook" : "Need some more count"}</h1>

                    <h4>Count = {this.props.num}</h4>   {/* default props call */}

                    <button onClick={this.addCount}>Add + 1</button>
                </article>
            </div>
        )
    }

    componentDidUpdate(oldProps, oldState) {
        console.log("component did update");
        console.log("oldProps", oldProps);
        console.log("oldState", oldState);
    }

    componentWillUnmount() {
        console.log("component will unmount executed");
    }
}