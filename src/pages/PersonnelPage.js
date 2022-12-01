import Title from "../components/common/Title";
import EntryForm from "../components/Personnel/EntryForm";
import EntryList from "../components/Personnel/EntryList";
import React from "react";


export default ({listData,Personnel})=>{
    return(
        <div>
            <Title title={"HPro Personnel"} />
            <EntryForm  reloadMe={listData}/>
            <EntryList data={Personnel}/>
        </div>
    )
}