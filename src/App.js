import './assets/styles/App.css'

export default function App(){

    let name="Bruno"
     function getCountry(){
        return "CONGO"
     }
     function clc(num1,num2){
        return num1+num2
     }

    return(
        <div>
            <h1 className={"title"}>Main app</h1>
            <p>Hi ! brother {name} from {getCountry()}</p>
            <p>Some of 2 + 6 = {clc(2,6)}</p>
        </div>
    )
}

