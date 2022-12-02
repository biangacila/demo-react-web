
import '../../assets/styles/App.css'

export default ({setMenu})=>{
    let arrayMenus=[
        {key:"Personnel",label:"Personnel"},
        {key:"Vendor",label:"Vendor"},
    ]
    return(
        <div>
            <table border={1}>
                <tr>
                    {arrayMenus.map(row=>{
                        return(
                            <th className={""}>
                                <a className={"menuTh"} onClick={()=>setMenu(row.key)}>
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