import React,{useState} from 'react'

const Modal = ({showModal,toggleModal,docList,setDocList}) => {
    const [name, setname] = useState('');
    const [qualification, setqualification] = useState('');
    const [experience, setexperience] = useState(0);

    const addNewMember=()=>{
        if(experience>0 && name!=="" && qualification !==""){
            const newId=docList[docList.length-1].id+1;
            const finalEntry={
                "id":newId,
                "name":name,
                "qualification":qualification,
                "experience":experience
            }
            setDocList((prevState)=>(
                [
                    ...prevState,
                    finalEntry
                ]
            ));
            resetModal();
        }
    }

    const resetModal = () =>{
        setexperience(0);
        setname('');
        setqualification('');
        document.getElementById("docName").value="";
        document.getElementById("docQualification").value="";
        document.getElementById("docExp").value="";
        toggleModal();
    }

    if(!showModal){
        return(<></>)
    }else{
        return (
            <div className="modal">
                <div className="modalInner">
                    <h1>Enter Your Details !</h1>
                    <hr/>
                    <input 
                        type="text" 
                        placeholder="Enter your Name" 
                        onChange={(e)=>setname(e.target.value)}
                        id="docName"
                        required
                    />
                    <br/>
                    <input 
                        type="text" 
                        placeholder="Enter your qualification" 
                        onChange={(e)=>setqualification(e.target.value)}
                        id="docQualification"
                        required
                    />
                    <br/>
                    <input 
                        type="number" 
                        placeholder="Enter your experience" 
                        min="0" 
                        max="20" 
                        onChange={(e)=>setexperience(e.target.value)}
                        id="docExp"
                        required
                    />
                    <br/>
                    <div className="ctaBtns">
                        <button className="submitModal" onClick={addNewMember}>Submit</button>
                        <button className="cancelModal" onClick={toggleModal}>Cancel</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal
