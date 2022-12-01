import React from "react";
import './assets/styles/App.css'
import {PostToHPro} from "./api/post";
import EntryForm from "./components/Personnel/EntryForm";
import EntryList from "./components/Personnel/EntryList";
import Title from "./components/common/Title";
import PersonnelPage from "./pages/PersonnelPage";
import TopMenu from "./components/common/TopMenu";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Personnel: [],
            Countries: [],
            User: "",
            page:"personnel"
        }
    }

    componentDidMount = async () => {
        await this.listData()
    }
    listData = async () => {
        let data = {};
        let endpoint = "/common/entity/Personnel/list";
        await PostToHPro(data, endpoint, (dataOut) => {
            console.log("--->>>", dataOut)
            this.setState({
                Personnel: dataOut.RESULT,
            })
        })
    }
    onDelete=async (record)=>{
        let data = {
            Params:[
                {key:"org",val:record.org,type:"string"},
                {key:"code",val:record.code,type:"string"},
            ]
        };
        let endpoint = "/common/entity/Personnel/delete";
        await PostToHPro(data, endpoint, async (dataOut) => {
            console.log("--->>>", dataOut)
            await this.listData()
            alert("thank u, record deleted!")
        })
    }

    setMenu=(menu)=>{
        this.setState({page:menu})
    }

    switchPage=()=>{
        let page = this.state.page;
        if(page==="personnel"){
            return (
                <PersonnelPage
                    Personnel={this.state.Personnel}
                    listData={this.listData()}
                />
            )
        }else if(page ==="vendor"){
            return(
                <div>
                    <Title title={"Vendor Page"} />
                </div>
            )
        }
    }
    render() {
        return (
            <div>
                <TopMenu setMenu={this.setMenu} />
                {this.switchPage()}
            </div>
        )


    }

}

