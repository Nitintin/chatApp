import React,{useState} from 'react'

const ChatHistory = ({selectedUser}) => {
    const [newMsg,setNewMsg]=useState('');
    const [chatHistory,SetChatHistory] = useState([]);

    if(!localStorage.getItem("chatHistoryLocal")){
        let dummyHistory = [
            {
                "mid":1,
                "uid":1,
                "message":"Hello"
            },
            {
                "mid":2,
                "uid":1,
                "message":"This is msg 2 for user 1"
            },
            {
                "mid":3,
                "uid":1,
                "message":"This is msg 3 for user 1"
            },
            {
                "mid":4,
                "uid":1,
                "message":"This is msg 4 for user 1"
            },
            {
                "mid":5,
                "uid":2,
                "message":"This is msg 1 for user 2"
            },
            {
                "mid":6,
                "uid":2,
                "message":"This is msg 2 for user 2"
            },
            {
                "mid":7,
                "uid":2,
                "message":"This is msg 3 for user 2"
            },
            {
                "mid":8,
                "uid":3,
                "message":"This is msg 1 for user 3"
            },
            {
                "mid":9,
                "uid":3,
                "message":"This is msg 2 for user 3"
            },
            {
                "mid":10,
                "uid":4,
                "message":"This is msg 1 for user 4"
            },
            {
                "mid":11,
                "uid":4,
                "message":"This is msg 2 for user 4"
            },
            {
                "mid":12,
                "uid":5,
                "message":"Wow! how are you"
            },
            {
                "mid":13,
                "uid":5,
                "message":"You need medicine"
            },
            {
                "mid":14,
                "uid":6,
                "message":"Sorry you have cnacer"
            },
            {
                "mid":15,
                "uid":7,
                "message":"You are all fine congrats"
            },
            {
                "mid":16,
                "uid":8,
                "message":"Hello how are you today"
            },
            {
                "mid":17,
                "uid":9,
                "message":"This is msg 1 for user 9"
            },{
                "mid":18,
                "uid":10,
                "message":"This is msg 1 for user 10"
            },
            {
                "mid":19,
                "uid":11,
                "message":"This is just a dummy msg for user 11"
            },
            {
                "mid":20,
                "uid":12,
                "message":"you came all this far to read the messages?"
            }
        ];
        console.log("dummy data fed to local storage");
        localStorage.setItem("chatHistoryLocal",JSON.stringify(dummyHistory));
    }

    if(chatHistory.length<1){
        SetChatHistory(JSON.parse(localStorage.getItem("chatHistoryLocal")));
    }

    const handleMsgSend=()=>{
        if(newMsg!==""){
            const newMid=chatHistory[chatHistory.length-1].mid+1;
            const finalMsg={
                "mid":newMid,
                "uid":selectedUser,
                "message":newMsg
            };
            SetChatHistory((prevState)=>(
                [
                    ...prevState,
                    finalMsg
                ]
            ));
            
            setNewMsg('');
            document.getElementById("messageInput").value="";

            console.log(chatHistory);
            localStorage.setItem("chatHistoryLocal",JSON.stringify(chatHistory));
        }
    }

    if(selectedUser===0){
        return(
            <div className="chatHistory">
                <div className="messages">
                    <div className="welcomeMsg">
                        <h1>Welcome to our app</h1>
                    </div>
                </div>
            </div>
        )

    }else{
        return (
            <div className="chatHistory">
                <div className="messages">
                    {
                        chatHistory.filter(item => item.uid === selectedUser).map(msg => (
                            <li className="msgBlock">{msg.message}</li>
                        ))
                    }
                </div>
                <div className="newMsg">
                    <input type="text" id="messageInput" placeholder="Enter your meassage" onChange={(e)=>setNewMsg(e.target.value)}></input>
                    <button type="button" onClick={handleMsgSend}>Send</button>
                </div>
            </div>
        )
    }
    
}

export default ChatHistory
