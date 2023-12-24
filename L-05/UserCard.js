import React from "react";
import { Link } from "react-router-dom";

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
            count : 0,
            profileData : "",
        }
    }

    async componentDidMount(){
        const jsonData = await fetch('https://api.github.com/users/preetamvarun');
        const data = await jsonData.json()
        this.setState({
            profileData : data
        })
        this.timer = setInterval(() => {
         console.log("Bug")   
        }, 700)

        console.log(this.timer)
    }


    // Running component didUpdate everytime after the score has been updated
    componentDidUpdate(prevProps, prevState){
        if(prevState.count !== this.state.count){
            console.log("Score has been changed")
        }
        console.log("Component has been updated")
    }

    componentWillUnmount(){
        console.log("usercard component has been unmounted")
        clearInterval(this.timer)
    }

    render(){
        const {name} = this.props

        const {count, profileData} = this.state

        const handleClick = () => {
            this.setState({
                count : this.state.count + 1
            })
        }

        const {avatar_url, login, followers, following, location } = profileData;

        return (
            
            <div>
                <Link to = "/about">
                    <img src={avatar_url} alt="no-img"/>
                </Link>
                <h1>Name : {login}</h1>
                <h2>Location : {location}</h2>
                <h3>Followers : {followers}</h3>
                <h2>Following : {following}</h2>
                <h3>Count : {count}</h3>
                <button onClick={handleClick}>+</button>
            </div>
        )
    }
}

export default UserCard;