import React from "react";

class UserCard extends React.Component {

    /*
    // This is optional we can have this variable inside the render method and from that this we can 
    // have access to props. However, if you want to have access to this in the constructor then we 
    // must call the super(props) method
    constructor(props){
        super(props)
        console.log(this.props)
    }
    */

    constructor(props){
        super(props)
        this.state = {
            count : 0
        }
    }

    render(){
        const {name} = this.props
        const {count} = this.state

        const handleClick = () => {
            this.setState({
                count : this.state.count + 1
            })
        }

        return (
            <div>
                <h1>Name : {name}</h1>
                <h2>Location : London</h2>
                <h3>Post Code : CR4 RGD</h3>
                <h2>Score : {count}</h2>
                <button onClick={handleClick}>+</button>
            </div>
        )
    }
}

export default UserCard;