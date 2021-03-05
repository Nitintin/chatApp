import React from 'react'

const ChatList = ({updateSelectedUser,toggleModal,docList}) => {

    return (
        <div className="chatList">
            <div className="newChatDiv">
                <button className="chatBtn" onClick={toggleModal}>Start New Chat</button>
            </div>
            <ul>
                {
                docList.map(item => {
                    return(<li key={item.id} value ={item.id} onClick={(e)=>updateSelectedUser(e.target.value)}>
                        Dr. {item.name} ({item.qualification})
                    </li>);
                })
                }              
            </ul>
        </div>
    )
}

export default ChatList
