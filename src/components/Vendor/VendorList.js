import React from "react";
import Title from "../common/Title";

export default ({data, onDelete})=>{

    return(
        <div>
            <Title title={"List Vendor"} />

            <table border={1}>
                <tr>
                    <th>Code</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Province</th>
                    <th>City</th>
                    <th>Suburb</th>
                    <th>PostalCode</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>#</th>
                </tr>

                {data.map(record => {
  /*                  let entity = "Vendor"
                    let statekey = "Vendor"*/
                    return (
                        <tr>
                            <td>{record.code}</td>
                            <td>{record.name}</td>
                            <td>{record.address}</td>
                            <td>{record.province}</td>
                            <td>{record.city}</td>
                            <td>{record.suburb}</td>
                            <td>{record.postalcode}</td>
                            <td>{record.phone}</td>
                            <td>{record.email}</td>
                            <td><a className={"onClickLink"} onClick={()=>onDelete(record)}>Delete</a></td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}