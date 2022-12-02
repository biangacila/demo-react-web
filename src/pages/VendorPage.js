import Title from "../components/common/Title";
import EntryForm from "../components/Vendor/VendorForm";
import EntryList from "../components/Vendor/VendorList";
import React from "react";
import VendorForm from "../components/Vendor/VendorForm";
import VendorList from "../components/Vendor/VendorList";

export default ({listVendorData,Vendor,onDelete})=>{
    return(
        <div>
          {/*  <Title title={"HPro Vendor"} />*/}
            <VendorForm  reloadMe={listVendorData}/>
            <VendorList data={Vendor} onDelete={onDelete}/>
        </div>
    )
}