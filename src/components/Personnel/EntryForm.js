
import {PostToHPro} from "../../api/post";
import React, {useState} from "react";
import '../../assets/styles/entry-form.css'
import Title from "../common/Title";
export default ({reloadMe})=> {
    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
    const handleSubmit = (event) => {
        let endpoint = "/common/entity/Personnel/insert";
        let strData = {"Data": inputs};
        let dataPost = JSON.stringify(strData);
        PostToHPro(strData, endpoint, (outData)=>{
            console.log("Returned>>>>", outData);
            reloadMe()
            //window.location.reload();
        });
        event.preventDefault();
        console.log(dataPost);
        /* alert(JSON.stringify(inputs));*/
    }
    return (

        <form onSubmit={handleSubmit} >
            <div className={"App"}>
                <Title title={"Capture Personnel"} />

                <table>
                    <tr>
                        <td>Org Code</td>
                        <td><input type='text' name='Org' value={inputs.Org} onChange={handleChange}/></td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td><input type='text' name='Name' value={inputs.Name || ""}
                                   onChange={handleChange}/></td>
                    </tr>
                    <tr>
                        <td>Role</td>
                        <td><input type='text' name='Role' value={inputs.Role || ""}
                                   onChange={handleChange}/></td>
                    </tr>
                    <tr>
                        <td>Email address</td>
                        <td><input type='text' name='Email' value={inputs.Email || ""}
                                   onChange={handleChange}/></td>
                    </tr>
                    <tr>
                        <td>Phone</td>
                        <td><input type='text' name='Phone' value={inputs.Phone || ""}
                                   onChange={handleChange}/></td>
                    </tr>

                </table>
                <br/>
                <span className={'App-divSubmit'}>
                    <input className={'App-btnSubmit'} type='submit'/>
                </span>
            </div>
        </form>

    );
}
