import Userlogdetails from '../Context/Context'
import './Hst.css'
import { useState,useE} from 'react'
import { CiSearch } from "react-icons/ci";
import { MdOutlineClear } from "react-icons/md";
function Home(){
    const [data,datare]=useState('')
    const [categoryl,filterdata]=useState('')
    const [pricef,changeran]=useState('')
    const [filterdata1,datafil]=useState('')
    

  
   let search=''
    

    const Items=()=>{
        console.log(pricef,categoryl,search)
let fd=[]
        if(data!==''){
         fd=data.filter((each)=>{
            const s=search.toLowerCase()
           return each.title.toLowerCase().includes(s)
           if(pricef!==''){
        fd=data.filter(each=>each.price<pricef)}
        })
        console.log(pricef)
    datafil(fd)
    }}
    const Rendersucess= ()=>{
        let s=[]
        if(data===''){
        fetch('https://fakestoreapi.com/products').then(resp=>resp.json()).then(da=>datare(da))}
       
        return <div className='homestyle'>
            <div className='filtersec'>
            <Filter/>
                </div>
                <div>
                    <RenderItem/>
                </div>
            </div>
    }
    const Rendernotlogin=()=>{
        
        return <h1>please Login to access </h1>
    }
    const RenderItem=()=>{
        if(data!==''){
        let set=filterdata1.length===0&&categoryl===''&&pricef===''&&search===''?data:filterdata1
        console.log(set)
        return <div className='items'>
            {data.length!==''?
           set.map((each)=><div className='singlecomp'>
                <img src={each.image} className='itemimg'/>
                </div>):''}
        </div>}
    }
    return <Userlogdetails.Consumer>
        {
        
            value=>{
                const {islogin}=value
                console.log('page rendered')
                console.log(filterdata1)
            return <div>{islogin?<Rendersucess/>:
            <Rendernotlogin/>}</div>
        }}

        </Userlogdetails.Consumer>
}

export default Home