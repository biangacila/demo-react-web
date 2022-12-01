import React from "react";
import Title from "../common/Title";

export default ({data})=>{

    return(
        <div>
            <Title title={"List personnel"} />

            <table border={1}>
                <tr>
                    <th>Code</th>
                    <th>Name</th>
                    <th>Role</th>
                    <th>EMail</th>
                    <th>Phone</th>
                    <th>Date</th>
                    <th>Edit</th>
                    <th>#</th>
                </tr>
                {data.map(record => {
                    return (
                        <tr>
                            <td>{record.code}</td>
                            <td>{record.name}</td>
                            <td>{record.role}</td>
                            <td>{record.email}</td>
                            <td>{record.phone}</td>
                            <td>{record.date}</td>
                            <td>{record.date}</td>
                            <td><a className={"onClickLink"} onClick={()=>this.onDelete(record)}>Delete</a></td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}