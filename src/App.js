import React from "react";
import './assets/styles/App.css'
import {PostToHPro} from "./api/post";
import EntryForm from "./components/Personnel/EntryForm";
import EntryList from "./components/Personnel/EntryList";
import Title from "./components/common/Title";
import PersonnelPage from "./pages/PersonnelPage";
import VendorPage from "./pages/VendorPage";
import TopMenu from "./components/common/TopMenu";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Personnel: [],
            Countries: [],
            User: "",
            page: "Personnel",
            Vendor: [],
        }

    }

    componentDidMount = async () => {
        await this.listData("Personnel", "Personnel")
        await this.listData("Vendor", "Vendor")
    }
    listData = async (entity, statekey) => {
        let data = {};
        let endpoint = `/common/entity/${entity}/list`;
        await PostToHPro(data, endpoint, (dataOut) => {
            console.log(entity + "--->>>", dataOut)
            this.setState({
                [statekey]: dataOut.RESULT,
            })
        })
    }

    onDelete = async (record) => {
        let data = {
            Params: [
                {key: "org", val: record.org, type: "string"},
                {key: "code", val: record.code, type: "string"},
            ]
        };
        /* TO BE REVIEWED */
        let entity = this.state.page
        /* ------------------------ */
        let endpoint = `/common/entity/${entity}/delete`;
        await PostToHPro(data, endpoint, async (dataOut) => {
            console.log("--->>>", dataOut)
            await this.listData()
            alert("thank u, record deleted!")
        })
    }

    setMenu = (menu) => {
        this.setState({page: menu})
    }

    switchPage = () => {
        let page = this.state.page;
        if (page === "Personnel") {
            return (
                <PersonnelPage
                    Personnel={this.state.Personnel}
                    listData={this.listData}
                    onDelete={this.onDelete}
                />
            )
        } else if (page === "Vendor") {
            return (
                <div>
                    <Title title={"Vendor Page"}/>
                    <VendorPage
                        Vendor={this.state.Vendor}
                        listData={this.listData}
                        onDelete={this.onDelete}
                    />
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                <TopMenu setMenu={this.setMenu}/>
                {this.switchPage()}
            </div>
        )


    }

}

