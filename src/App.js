import React from "react";
import './assets/styles/App.css'
import {PostToHPro} from "./api/post";

export default class App extends React.Component{
    constructor(props) {
        super(props);
        this.state= {
            Personnel: [],
            Countries: [],
            User: ""
        }
    }
    componentDidMount = async () => {
        await this.listData()
    }
    listData=async ()=>{
        let data = {};
        let endpoint = "/common/entity/Personnel/list";
       await PostToHPro(data,endpoint,(dataOut)=>{
            console.log("--->>>", dataOut)
           this.setState({
               Personnel:dataOut.RESULT,
           })
        })
    }

   /* let name="Bruno"
     function getCountry(){
        return "CONGO"
     }
     function clc(num1,num2){
        return num1+num2
     }
    listData();*/

    render(){
        return(
            <div>
                <h1 className={"title"}>Main app</h1>
                <table>
                    <th>NAME</th><th>E-mail Address</th>
                    <tr><td>Jean-Bruno</td><td>jean.king@gmail.com</td></tr>
                </table>
                <span><input type={"text"} name={'txtname'}/></span>
                <div>
                    <h1>List personnel</h1>
                    <table border={1}>
                        <tr>
                            <th>Code</th>
                            <th>Name</th>
                            <th>EMail</th>
                            <th>Phone</th>
                            <th>Date</th>
                        </tr>
                        {this.state.Personnel.map(record=>{
                            return(
                                <tr>
                                    <td>{record.code}</td>
                                    <td>{record.name}</td>
                                    <td>{record.email}</td>
                                    <td>{record.phone}</td>
                                    <td>{record.date}</td>
                                </tr>
                            )
                        })}
                    </table>
                </div>
            </div>
        )
    }

}

