import { useEffect, useState } from "react"
import Darkpng from "../../assets/website/dark-mode-button.png"
import Lightpng from "../../assets/website/light-mode-button.png"
export default function Darkmode(){
    const [Theme,setTheme]=useState(localStorage.getItem("theme")? localStorage.getItem("theme"):"light")
    useEffect(()=>{
        const element=document.documentElement;
        if(Theme=="dark"){
            element.classList.add("dark");
            localStorage.setItem("theme","dark");
        }
        else{
            element.classList.remove("dark");
            localStorage.setItem("theme","light");
        }
    },[Theme])
    const changetheme=()=>{
        if(Theme=="light"){
            setTheme("dark")
        }else{
            setTheme("light")
        }
    }
    return(
        <>
            <div className="relative">
                <img onClick={changetheme} className={`w-12 absolute right-0 z-10 cursor-pointer 
                 ${Theme!="dark"?" opacity-0":"opacity-100"}`}src={Darkpng}/>
                <img onClick={changetheme} className="w-12 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300" src={Lightpng}/>
            </div>
        </>
    )
}