import React,{useState} from 'react'
import ChatList from "./ChatList";
import ChatHistory from "./ChatHistory";
import Modal from './Modal';

const Main = () => {
    const [selectedUser,setSelectedUser]=useState(0);
    const [showModal, setshowModal] = useState(false);

    const [docList,setDocList] = useState([
        {
            "id":1,
            "name":"Ram",
            "qualification":"MBBS",
            "experience":"5 years"
        },{
            "id":2,
            "name":"Manoj",
            "qualification":"MD",
            "experience":"5 years"
        },{
            "id":3,
            "name":"Vijay",
            "qualification":"BDS",
            "experience":"5 years"
        },{
            "id":4,
            "name":"Sneha",
            "qualification":"MBBS",
            "experience":"5 years"
        },{
            "id":5,
            "name":"Pooja",
            "qualification":"MBBS",
            "experience":"5 years"
        },{
            "id":6,
            "name":"Ashu",
            "qualification":"MBBS",
            "experience":"5 years"
        },{
            "id":7,
            "name":"Niharika",
            "qualification":"MBBS",
            "experience":"5 years"
        },{
            "id":8,
            "name":"Lakshman",
            "qualification":"MBBS",
            "experience":"5 years"
        },{
            "id":9,
            "name":"Vikram",
            "qualification":"MBBS",
            "experience":"5 years"
        },{
            "id":10,
            "name":"Prerna",
            "qualification":"MBBS",
            "experience":"5 years"
        },{
            "id":11,
            "name":"Anuj",
            "qualification":"MBBS",
            "experience":"5 years"
        },{
            "id":12,
            "name":"Naman",
            "qualification":"MBBS",
            "experience":"5 years"
        },
    ]);

    const updateSelectedUser = (uid) =>{
        setSelectedUser(uid);
    }

    const toggleModal =()=>{
        setshowModal(!showModal);
    }

    return (
        <div className="main">
            <Modal
                showModal={showModal}
                toggleModal={toggleModal}
                docList={docList}
                setDocList={setDocList}
            />
            <ChatList 
                updateSelectedUser={updateSelectedUser}
                toggleModal={toggleModal}
                docList={docList}
            />
            <ChatHistory selectedUser={selectedUser}/>
        </div>
    )
}

export default Main
