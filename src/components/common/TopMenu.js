
import '../../assets/styles/App.css'

export default ({setMenu})=>{
    let arrayMenus=[
        {key:"personnel",label:"Personnel"},
        {key:"vendor",label:"Vendor"},
    ]
    return(
        <div>
            <table border={1}>
                <tr>
                    {arrayMenus.map(row=>{
                        return(
                            <th className={"menuTh"}>
                                <a className={"onClickLink"} onClick={()=>setMenu(row.key)}>
                                    {row.label}
                                </a>
                            </th>
                        )
                    })}
                </tr>
            </table>

        </div>
    )
}