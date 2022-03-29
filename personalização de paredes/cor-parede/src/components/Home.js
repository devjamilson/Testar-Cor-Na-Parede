import React,{useState} from "react";
import Parede from './img/parede.png'
import './Home.css'

export default function Home(){

    const [cor, setCor] = useState(0)
    const color = {backgroundColor:'#f3f3f3'}
    const color1 = {backgroundColor:'#FFBFC5'}
    const color2 = {backgroundColor:'#EC9D7B'}
    const color3 = {backgroundColor:'#CB4C1C'}
    const color4 = {backgroundColor:'#A00A13'}
    const color5 = {backgroundColor:'#A0B0CF'}
    const color6 = {backgroundColor:'#5F6366'}
    const color7 = {backgroundColor:'#1B656B'}
    const color8 = {backgroundColor:'#201912'}
    const color9 = {backgroundColor:'#80C32F'}
    const color10 = {backgroundColor:'#588F5F'}
    const color11 = {backgroundColor:'#369933'}
    const color12 = {backgroundColor:'#ECB45B'}
    const color13 = {backgroundColor:'#EBB45B'}
    const color14 = {backgroundColor:'#FFD0A7'}
    const color15 = {backgroundColor:'#DBBD97'}
    const color16 = {backgroundColor:'#C69C6B'}
    
    const retCor = (c) =>{
        if(c==0){
            return color
        }if(c==1){
            return color1
        }else if(c==2){
            return color2
        }else if(c==3){
            return color3
        }else if(c==4){
            return color4
        }else if(c==5){
            return color5
        }else if(c==6){
            return color6
        }else if(c==7){
            return color7
        }else if(c==8){
            return color8
        }else if(c==9){
            return color9
        }else if(c==10){
            return color10
        }else if(c==11){
            return color11
        }else if(c==12){
            return color12
        }else if(c==13){
            return color13
        }else if(c==14){
            return color14
        }else if(c==15){
            return color15
        }else if(c==16){
            return color16
        }
    }

    const mudarCor1=()=>{
        setCor(1)
    }
    const mudarCor2=()=>{
        setCor(2)
    }
    const mudarCor3=()=>{
        setCor(3)
    }
    const mudarCor4=()=>{
        setCor(4)
    }
    const mudarCor5=()=>{
        setCor(5)
    }
    const mudarCor6=()=>{
        setCor(6)
    }
    const mudarCor7=()=>{
        setCor(7)
    }
    const mudarCor8=()=>{
        setCor(8)
    }
    const mudarCor9=()=>{
        setCor(9)
    }
    const mudarCor10=()=>{
        setCor(10)
    }
    const mudarCor11=()=>{
        setCor(11)
    }
    const mudarCor12=()=>{
        setCor(12)
    }
    const mudarCor13=()=>{
        setCor(13)
    }
    const mudarCor14=()=>{
        setCor(14)
    }
    const mudarCor15=()=>{
        setCor(15)
    }
    const mudarCor16=()=>{
        setCor(16)
    }
      

    return(
        <section className="container">
           <section className="container-parede" style={retCor(cor)}>
                <img src={Parede}/>
           </section>
           <section className="container-tintas">
                <h1>Color <span>Terk</span></h1>
                <h2>Escolha a cor da tinta:</h2>
                <div className="container-tintas-buttons">
                    <button className="color1" id="color1" onClick={()=>mudarCor1()}></button>
                    <button className="color2" id="color2" onClick={()=>mudarCor2()}></button>
                    <button className="color3" id="color3" onClick={()=>mudarCor3()}></button>
                    <button className="color4" id="color4" onClick={()=>mudarCor4()}></button>
                    <button className="color5" id="color5" onClick={()=>mudarCor5()}></button>
                    <button className="color6" id="color6" onClick={()=>mudarCor6()}></button>
                    <button className="color7" id="color7" onClick={()=>mudarCor7()}></button>
                    <button className="color8" id="color8" onClick={()=>mudarCor8()}></button>
                    <button className="color9" id="color9" onClick={()=>mudarCor9()}></button>
                    <button className="color10" id="color10" onClick={()=>mudarCor10()}></button>
                    <button className="color11" id="color11" onClick={()=>mudarCor11()}></button>
                    <button className="color12" id="color12" onClick={()=>mudarCor12()}></button>
                    <button className="color13" id="color13" onClick={()=>mudarCor13()}></button>
                    <button className="color14" id="color14" onClick={()=>mudarCor14()}></button>
                    <button className="color15" id="color15" onClick={()=>mudarCor15()}></button>
                    <button className="color16" id="color16" onClick={()=>mudarCor16()}></button>
                </div>
           </section>
        </section>
    )

}