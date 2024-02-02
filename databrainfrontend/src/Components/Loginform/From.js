import {useState} from 'react'
import Userlogdetails from '../Context/Context'
import './Login.css'
function Login(props){
    console.log(props)
    const {history}=props
    console.log(history)
    //Error para
const [Nameerr,errch]=useState('')
const [uN,Nch]=useState('')
const [Merr,errmch]=useState('')
const [uM,Mch]=useState('')
const [Eerr,errEch]=useState('')
const[uE,Ech]=useState('')
const [Derr,errDch]=useState('')
const[uD,Dch]=useState('')
const [Herr,errHch]=useState('')
const[uH,Hch]=useState('')
const [Verr,errVch]=useState('')
const [uV,Vch]=useState('')
const [Serr,errSch]=useState('')
const [uS,Sch]=useState('')
const [Maerr,errMach]=useState('')
const[uMa,Mach]=useState('')
const [Perr,errPch]=useState('')
const[upi,pich]=useState('')
const [allc,chal]=useState(false)
    function Ncheck(event){
        console.log(event.target.value)
        if(event.target.value===''){
            errch('*field required')
            Nch(event.target.value)
        }
        else{
            errch('')
            Nch(event.target.value)
        }}
        function Mcheck(event){
            console.log(event.target.value)
            if(event.target.value===''){
                errmch('*field required')
                Mch(event.target.value)
            }
            else{
                errmch('')
                Mch(event.target.value)
            }}
            function Echeck(event){
                console.log(event.target.value)
                if(event.target.value===''){
                    errEch('*field required')
                    Ech(event.target.value)
                }
                else{
                    errEch('')
                    Ech(event.target.value)
                }}
                function Dcheck(event){
                    console.log(event.target.value)
                    if(event.target.value===''){
                        errDch('*field required')
                        Dch(event.target.value)
                    }
                    else{
                        Dch(event.target.value)
                        errDch('')
                    }
                   }
                   function Hcheck(event){
                    console.log(event.target.value)
                    if(event.target.value===''){
                        Hch(event.target.value)
                        errHch('*field required')
                    }
                    else{
                        errHch('')
                        Hch(event.target.value)
                    }}
                    function Vcheck(event){
                        console.log(event.target.value)
                        if(event.target.value===''){
                            Vch(event.target.value)
                            errVch('*field required')
                        }
                        else{
                            Vch(event.target.value)
                            errVch('')

                        }}
                        function Scheck(event){
                            console.log(event.target.value)
                            if(event.target.value===''){
                                Sch(event.target.value)
                                errSch('*field required')
                            }
                            else{
                                errSch('')
                                Sch(event.target.value)
                            }}
                            function Macheck(event){
                                console.log(event.target.value)
                                if(event.target.value===''){
                                    Mach(event.target.value)
                                    errMach('*field required')
                                }
                                else{
                                    Mach(event.target.value)
                                    errMach('')
                                }}

                                function Pcheck(event){
                                    
                                    if(event.target.value===''){
                                        pich(event.target.value)
                                        errPch('*field required')
                                    }
                                    else{
                                        pich(event.target.value)
                                        errPch('')
                                    }}

    

    return     <Userlogdetails.Consumer>
        {value=>{
            const {change}=value
            function formsubmit(event){
                const {history}=props
                event.preventDefault()
                if(uN!=='' && uM!=='' && uE!==''&& uH!==''&& uD!==''&& uV!=='' && uMa!=='' && uS!==''&& upi!==''){
                console.log('requested redirect')
                change()
                history.replace('/home')
                }
                else{
                    if(uN===''){
                        errch('*fieldrequired')
                    }
                     if(uM===''){
                        errmch('*fieldrequired')
                    }
                     if(uE===''){
                        errEch('*fieldrequired')
                    }
                    if(uD===''){
                        errDch('*fieldrequired')
                    }
                    if(uH===''){
                        errHch('*fieldrequired')
                    }
                    if(uV===''){
                        errVch('*fieldrequired')
                    }
                    if(uMa===''){
                        errMach('*field required')
                    }
                    if(uS===''){
                        errSch('*field required')
                    }if(upi===''){ errPch('*field required')
                       
                    }
                }
            }
          return  <div className='formstyle'>
        <form onSubmit={formsubmit}>       
        <h4>****UserInformation****</h4>
        <p>Name</p>
        <input type='text' placeholder='enter your name' onBlur={Ncheck} onChange={Ncheck} value={uN}/>
        {Nameerr!==''?<p className='re'>{Nameerr}</p>:''}
        <p>Email</p>
        <input type='text' placeholder='enter your EmailId' onBlur={Echeck} onChange={Echeck}/>
        {Eerr!==''?<p className='re'>{Eerr}</p>:''}
        <p>Enter mobile number</p>
        <input type='text' placeholder='enter your mobilenumber' onBlur={Mcheck} onChange={Mcheck}/>
        {Merr!==''?<p className='re'>{Merr}</p>:''}
        <p>Enter date of birth</p>
        <input type='date' onBlur={Dcheck} onChange={Dcheck}/>
        {Derr!==''?<p className='re'>{Derr}</p>:''}
        <h4>***Address***</h4>
        <p>House/flat number</p>
        <input type='text' placeholder='enter flat/number' onBlur={Hcheck} onChange={Hcheck}/>
        {Herr!==''?<p className='re'>{Herr}</p>:''}
        <p>village/town</p>
        <input type='text' placeholder='enter your town' onBlur={Vcheck} onChange={Vcheck}/>
        {Verr!==''?<p className='re'>{Verr}</p>:''}
        <p>Mandal</p>
        <input type='text' placeholder='enter your mandal' onBlur={Macheck} onChange={Macheck}/>
        {Maerr!==''?<p className='re'>{Maerr}</p>:''}
        <p>State</p>
        <input type='text' placeholder='enter your state'  onBlur={Scheck} onChange={Scheck}/>
        {Serr!==''?<p className='re'>{Serr}</p>:''}
        <p>Pincode</p>
        <input type='text' placeholder='enter pincode' onBlur={Pcheck} onChange={Pcheck}/><br/>
        {Perr!==''?<p className='re'>{Perr}</p>:''}
        <div className='butcont'>
        <button type='submit' className='submitb' >Submit</button>
        </div>
        </form>
        </div>
        }}
    

        </Userlogdetails.Consumer>
}

export default Login