import './createGroup.scss';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Header from '../../components/header/header';
import axios from 'axios';
import { ContactsOutlined } from '@material-ui/icons';
import { useAppSelector } from '../../../app/hooks';
import { convertCompilerOptionsFromJson, isJsxClosingFragment } from 'typescript';
import { CleaningServices } from '@mui/icons-material';





function CreateGroup(){
    
    const user = useAppSelector(state=> state.user)

    function handelSubmit (ev:any){
        ev.preventDefault();
        // useEffect(()=>{axios.get('http://localhost:3004/group/').then(({data})=>{
       
        //axios.post("")
        const members:string = ev.target.members.value;
        const membersArray = members.split(",").map((str:any) => {
            return {id:str}
        });
        if(membersArray.length < 3){
            alert("need more members");
            return;
        }
        axios.get('http://localhost:3004/users/').then(({data})=>{
            const arr:string[] = [];
           for(let obj of data){
               arr.push(obj.id);
           }
           for(let memberId of membersArray){
               if(arr.findIndex((id:any) => memberId.id===id) === -1){
                alert(`${memberId.id} user doesn't exist`);
                return
            }
           }
           const info={
            id:"99999999",
            groupName: ev.target.groupName.value,
            adminId: user.ID,
            groupMember: membersArray
            }
           
            axios.post('http://localhost:3004/group',info)
            .then((data)=>{
                alert(`${ev.target.groupName.value} added`);
                // check repose if ok
                return data;
            }).catch(err=>{
    
            })

        }).catch(e=>{
            console.log(e)
        })
        
        setGroupDetails([...membersArray])
    
    }

    function handleOnClck(e:any){
        e.preventDefault();
        console.log("aadd clicked")
        // ge text from input
        // validate input: check id and sperator and if exisits
        const t = e.target.value


    }
    const [groupDetails, setGroupDetails] = useState<Array<any>>([]);
    
    return(
        <div>    <Header></Header>
        <div className='warpper'>
         
               <div>
               
              <h1> Create new Group </h1> <br /><br />
                <form onSubmit={handelSubmit}>
                Group Name: <br />
                <input name="groupName" type="text" />
                <br /><br />
                Members :  <br />
                <input name="members" type="text" placeholder='min 3 mumbers' /> 
                 <button onClick={handleOnClck}>add</button>
                <br /><br />
               
                <button type='submit' >Add group</button>
                </form>
                <br />
                <Link to="/Group">cancel</Link>

               </div>
        </div>
        </div>
    )
}


export default CreateGroup;