import {Heading} from "../aomponenets/Heading"
import { Sunheading } from "../aomponenets/Sunheading"
import { Inputbox } from "../aomponenets/Inputbox"
import {Bottomwarning} from "../aomponenets/Bottomwarning"
import { Button } from "../aomponenets/Button"
import { useState } from "react"
import axios from "axios"

export default function Signup(){
    const [firstName,setFirstName]=useState("")
    const [lastName,setLastName]=useState("")
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    return(
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                    <Heading label={"Signup"}/>
                    <Sunheading label={"Enter the information to create account"}/>
                    <Inputbox onChange={e=>{setFirstName(e.target.value)}} placeholder="John" label={"First Name"} />
                    <Inputbox onChange={e=>{setLastName(e.target.value)}} placeholder="Doe" label={"Last Name"} />
                    <Inputbox onChange={e=>{setUsername(e.target.value)}} placeholder="harkirat@gmail.com" label={"Email"} />
                    <Inputbox onChange={e=>{setPassword(e.target.value)}}placeholder="123456" label={"Password"} />
                    <div className="pt-4">
                        <Button  onClick={async()=>{
                            const response=await axios.post("http://localhost:3000/api/v1/user/signup",{
                                username,
                                firstName,
                                lastName,
                                password
                            });
                            localStorage.setItem("token",response.data.token)
                        }}label={"Sign up"} />
                    </div>
                   <Bottomwarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
                </div>

            </div>
        </div>
    )
}