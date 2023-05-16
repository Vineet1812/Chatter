import {PrettyChatWindow} from 'react-chat-engine-pretty'

const ChatsPage= (props) => {

    console.log("hello");
    return(
    
     <div style={{ height: '100vh'}}>
        <PrettyChatWindow
        projectId='14344d29-da35-4830-b520-36b3812093d1'
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: '100vh'}} 
        />
    </div>
    )
}

export default ChatsPage