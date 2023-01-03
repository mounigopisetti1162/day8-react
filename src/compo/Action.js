import * as React from 'react';
import { Button} from 'reactstrap';
import { useState,useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { GiTeacher } from 'react-icons/gi';
import {FaStudiovinari} from 'react-icons/fa'
import MenuItem from '@mui/material/MenuItem';
import { toast } from 'react-toastify';
import { useContext } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Context from './Context';
let intial={
   
    avatar:'',
    name:'',
    field:'',
    division:''
    
}
export default function Action() {
    const context=useContext(Context)
    console.log("context.people")

    console.log(context.people)
    const [form,setform]=useState(intial)
    const nav=useNavigate()
    const url="https://63ac054434c46cd7ae74a1f8.mockapi.io/mouni"

    const handlechange=(e)=>{
        setform({...form,[e.target.name]:e.target.value})
        console.log(e.target.value)
        console.log("hello")
    }
    const {id}=useParams()
    const getpeople=()=>{
        fetch(url).then((data)=>data.json()).then((res)=>setform(res))
      
    }

    const submit=()=>{
        if(id){
            console.log("update")
        fetch("https://63ac054434c46cd7ae74a1f8.mockapi.io/mouni/"+id,{
            method:'PUT',
           
            headers:{"Content-Type":"application/json"
        },
            body:JSON.stringify(form)
        }).then((data)=>{
            data.json()
        }).then((res)=>{
            setform(intial);
            
            nav(-1)
            
              toast.success("product updated sucessfully ")})
              
    }
    else{

    fetch("https://63ac054434c46cd7ae74a1f8.mockapi.io/mouni",{
            method:'POST',
           
            headers:{"Content-Type":"application/json"
        },
            body:JSON.stringify(form)
        }).then((data)=>{
            data.json()
        }).then((res)=>{
            getpeople();
            nav(-1)
              toast.success("product added sucessfully ")})
  
        }

    }
    useEffect(()=>{
        if(id)
        {
            fetch("https://63ac054434c46cd7ae74a1f8.mockapi.io/mouni/"+id)
            .then((data)=>data.json()).then((res)=>setform(res))
        
        }
            },[id])


            const divi=[{
                value:'Teacher',
                label:<GiTeacher/>},
                {
                    value:'Student',
                    label:<FaStudiovinari label="hello"/>,
                },{
                    value:'NaN',
                label:'NaN'}

            ]
            
  return (
    <Box
      
      sx={{
        '& > :not(style)': { width: 500,
            maxWidth: '100%' }, height: 20,
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? 'rgba(255, 0, 0, 0.1)'
                : 'rgb(255 132 132 / 25%)',
                display: 'flex',
                flexDirection: 'column',
                '& .MuiTextField-root': { width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    >
    {/* disabled={state.isView==='true'? true:false}       */}
<form>

    <TextField  type="text" color="secondary"  id="outlined-basic" margin="dense" label="Name" variant="outlined" name='name' value={form.name}   onChange={handlechange}  className='mb-3' placeholder="'Enter name"/>

    <TextField  id="outlined-basic" color="secondary"  margin="dense" label="Image" variant="outlined" type="text" name='avatar' value={form.avatar} onChange={handlechange}  className='mb-3'  placeholder="Enter image"/>

    <TextField  id="outlined-basic" color="secondary"  margin="dense" label="Field" variant="outlined" type="text" name='field' value={form.field} onChange={handlechange} className='mb-3'  placeholder="'Enter pricing"/>
    
    <TextField
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue='NaN'
          margin="dense"
          helperText="Please select teacher or student"
          name='division'
          type="text" value={form.division} onChange={handlechange} className='mb-3'
        >
          {divi.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
          </TextField>
          
<Button color='success' onClick={submit}>SUBMIT</Button>
<Button color='danger' onClick={()=>nav(-1)}>CANCLE</Button>

</form>
        </Box>
  );
}