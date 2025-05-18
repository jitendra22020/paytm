import { useEffect, useState } from "react"
import {Appbar} from "../aomponenets/Appbar"
import {Balance} from "../aomponenets/Balance"
import {Users} from "../aomponenets/Users"
import axios from "axios";
export default function Dashboard(){
    const [balance,setBalance]=useState(0);
    useEffect(()=>{
        axios.get()
    },[])
    return(
        <div>
            <Appbar/>
            <div>
                <Balance value={"10000"}/>
                <Users/>
            </div>
        </div>
    )
}