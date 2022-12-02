import {PostToHPro} from "../../api/post";
import React, {useState} from "react";
import '../../assets/styles/entry-form.css'
import Title from "../common/Title";

export default ({reloadMe}) => {
    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
    const handleSubmit = (event) => {
        let endpoint = "/common/entity/Vendor/insert";
        let strData = {"Data": inputs};
        let dataPost = JSON.stringify(strData);
  //      alert(dataPost);
        PostToHPro(strData, endpoint, (outData) => {
            console.log("Returned>>>>", outData);
            reloadMe()

        });
        event.preventDefault();
        console.log(dataPost);

    }
    return (

        <form onSubmit={handleSubmit}>
            <div className={"App"}>
                <Title title={"Capture Vendor"}/>
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
                        <td>Address</td>
                        <td><input type='text' name='Address' value={inputs.Address || ""}
                                   onChange={handleChange}/></td>
                    </tr>
                    <tr>
                        <td>Province</td>
                        <td><input type='text' name='Province' value={inputs.Province || ""}
                                   onChange={handleChange}/></td>
                    </tr>
                    <tr>
                        <td>City</td>
                        <td><input type='text' name='City' value={inputs.City || ""}
                                   onChange={handleChange}/></td>
                    </tr>
                    <tr>
                        <td>Suburb</td>
                        <td><input type='text' name='Suburb' value={inputs.Suburb || ""}
                                   onChange={handleChange}/></td>
                    </tr>
                    <tr>
                        <td>PostalCode</td>
                        <td><input type='text' name='PostalCode' value={inputs.PostalCode || ""}
                                   onChange={handleChange}/></td>
                    </tr>
                    <tr>
                        <td>Phone</td>
                        <td><input type='text' name='Phone' value={inputs.Phone || ""}
                                   onChange={handleChange}/></td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td><input type='text' name='Email' value={inputs.Email || ""}
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
