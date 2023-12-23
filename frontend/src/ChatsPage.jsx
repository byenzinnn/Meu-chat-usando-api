import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
    return (
        <div style={{height: '100vh'}}>
            <PrettyChatWindow
            projectId='6781a6fa-c039-43df-ab74-1ab10b553ea0'
            username={props.user.username}
            secret={props.user.username}
            style={{ height: '100%'}}
            />
        </div>
    )
}

export default ChatsPage