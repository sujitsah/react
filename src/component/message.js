import React,{ Component } from 'react'

class Message extends Component{
    constructor(){
        super()
            this.state ={
                message : 'welcome visitor',
                buttonmessage : 'subscribe'
            }
        
    }

    changeMessage(){
        this.setState({
            message : 'subscribed',
            buttonmessage : 'subscribed'
        })
    }
render(){
    return <div> <h1>{this.state.message}</h1>
    <button onClick={()=>this.changeMessage()}>{this.state.buttonmessage}</button>
    </div> 
}
}
export default Message