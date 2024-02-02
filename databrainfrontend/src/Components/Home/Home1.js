import { Component } from 'react';
import Userlogdetails from '../Context/Context'
import Renderfail from './renderfail';
import './Hst.css'
import { CiSearch } from "react-icons/ci";
import { MdOutlineClear } from "react-icons/md";

const pricerange=[
    
    {
    vale:100,id:1,
    range:'less than 100'},
    {
        vale:500,id:2,
    range:'less than 500'
    },{
        vale:1000,id:3,
        range:'less than 1000'
    }
   ] 
   const ratelis=[
    {id:1,
    rate:1,
text:'*'},{id:2,
    rate:2,
text:'* *'},
{id:3,
    rate:3,
text:'* * *'}
,
    {id:4,
        rate:4,
    text:'* * * *'}


   ]

export default class Home extends Component{
    state={search:'',rang:'all',category:'all',data:'',filterdata:[],seacrhf:[]}

    rangeupdate=(event)=>{
        console.log('rangeupdate')
this.setState((prev)=>({rang:event.target.value}),this.filterR)
    }

   
    changeC=(event)=>{
    const{category}=this.state
    this.setState(()=>({category:event.target.value}),this.filterR)
    }


    filterR=()=>{

        const {filterdata,rang,data,category}=this.state
        console.log(`category filter ${category}`)
    
        if(rang==='all' && category==='all'){
            console.log('entered all +vecond')
            this.setState({filterdata:data})
        }
         else if(category==='all'&& rang!='all'){
        console.log(`entered rang not null`)
       const k=data.filter((each)=>each.price<rang)
       console.log(k)
       this.setState({filterdata:k})}
       else if(category!=='all' && rang==='all' ){
        console.log('entered cate not null')
        const fd=data.filter((each)=>each.category===category)
        this.setState({filterdata:fd})
       }
 else if(category!=='all' && rang!=='all' ){
    console.log('entered double filter')
const k1=data.filter((each)=>each.price<rang)
const k2=k1.filter((each)=>each.category===category)
this.setState({filterdata:k2})
 }   
    }
    inputchnage=(event)=>{
        this.setState(()=>({search:event.target.value}),this.filters)
            }

            filters=()=>{
                console.log('filters')
                const {filterdata,search}=this.state
                const I=search.toLocaleLowerCase()
                console.log(I)
                const m=filterdata
                const h=m.filter((each)=>each.title.toLocaleLowerCase().includes(I))
                this.setState({seacrhf:h})
            }

    filter=()=>{
        const {data,search,filterdata,category,rang}=this.state
        if(data!==''){
       var lis=data.map(each=>each.category)
       lis=[...new Set(lis)]
       console.log(lis)
       let m=[]
       let c=0
        m=lis.map(each=>{
   c=c+1
           return {
               id:c,value:each
           }
       })
       
       console.log(m)
      
         return <div>
           <div className='searchc'>
           <div>
           <input type='text' className='finp' placeholder='enter item name to filter' onChange={this.inputchnage} value={search}/>
           </div>
           </div>
               <p className='searc'>Seacrh by category</p>
               <select onChange={this.changeC} value={category} defaultValue='all'>
                       <option value='all'>all</option>
   
                   {
                       lis.map((each)=>
                           <option value={each} key={each.id}>{each}</option>)
                   }
               </select>
               <p className='searc'>Sort by price</p>
               <select onChange={this.rangeupdate} value={rang}>
                   <option value='all'>all</option>
                   {pricerange.map((each)=><option value={each.vale} key={each.id}>{each.range}</option>)}
                   </select>
           </div>
        }
       }

    rendersucess=()=>{
        const {data,filterdata,seacrhf,search}=this.state
        let datafs=[]
        if(data===''){
            this.fet()
        }
        if(search===''){
            datafs=filterdata
        }
        else(datafs=seacrhf)
        return <div className='homestyle'>
            <div className='filtersec'>
            {this.filter()}
            </div>
            <div className='items'>
            {data.length!==''?
           datafs.map((each)=><div className='singlecomp'>
                <img src={each.image} className='itemimg'/>
                <p>{each.title}</p>
                <h4>{each.price}</h4>
                </div>):''}
                </div>
        </div>
    }
    fet=async ()=>{
        console.log('fetcalled')
       const da=await fetch('https://fakestoreapi.com/products')
       const dal=await da.json();
       console.log(dal)
       this.setState({data:dal,filterdata:dal})
    }
render(){

    const{rang,category,data,filterdata,search}=this.state
    console.log(rang,category,data,filterdata,search)
    return <Userlogdetails.Consumer>
        {
            value=>{
                const {islogin}=value

                return <div>
                    {islogin?this.rendersucess():<Renderfail/>}
                    </div>
            }
        }
    </Userlogdetails.Consumer>
}

}