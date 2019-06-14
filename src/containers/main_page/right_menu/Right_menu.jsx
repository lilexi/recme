import React, {Component} from 'react';
import "./right_menu.modules.css"
import Create_post from "../../../components/r_menucomp/createpost_comp"
import Randomizer from "../../../components/r_menucomp/randomizer_comp"
import Trands from "./Trand/Trands"

class R_menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show_register: false,
            show_login: false
        };
    }

    render() {
        return (
            <div className="r-menu">
                <Create_post/>
                <Randomizer/>
                <Trands/>
                {/*<Sitemap/>*/}
            </div>
        )
    }
}


export default R_menu;
