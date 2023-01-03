import { useContext} from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import {Container,Row,Col} from 'reactstrap'
import CardComponent from './Card'
import Context from './Context'


export default function Allpeople()
{
    const context=useContext(Context)
    const navigate=useNavigate()
    return(
        <>
      
       <Button color='success' onClick={()=>navigate('/action')}>CREATE</Button>
       <Container className="container">
        
            {context.people.map((data,index)=>{
                return(
                    <Col key={data.id}>
                  <CardComponent
                   
                    data={data}
                    key={data.id}
                  />
                </Col>
                )
            })}
          
            </Container>    
            </>
    )
}
