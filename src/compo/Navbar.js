import { BsPeopleFill } from "react-icons/bs";
import { TbMoodKid } from "react-icons/tb";
import { GiTeacher } from "react-icons/gi";
import { FaBars } from "react-icons/fa";
import {NavLink} from 'react-router-dom'


export default function Navbar(children)
{
    const slides=[{
        path:'/people',
        icon:<BsPeopleFill/>,
        name:'Allpeople'
    },
    {
        icon:<TbMoodKid/>,
        path:'/student',
        name:'Student' 
    },
    {
        icon:<GiTeacher/>,
        path:'/teacher',
        name:'Teacher' 
    }]
    const cssstyle={marginRight:'0px',marginLeft:'0px',width:'40vh',display:"inline"}
const cssstyle2={TextDecoder:'none'}
    return(
    //    <div className="container" style={cssstyle}>
        <div className="sidebar" style={cssstyle}>
            <div className="top-section">
                <h1 className="logo">SideBar</h1>
                <div className="bars">
                    {/* <FaBars/> */}
                </div>
            </div>
        {
            slides.map((items,index)=>(
                <NavLink to={items.path} key={index} className='link' style={cssstyle2}>
                    <div className="icon">{items.icon}</div>
                    <div className="text">{items.name}</div>
                </NavLink>
            ))
        }
       
        {/* <main>{children}</main> */}
        </div>
        
    )
}