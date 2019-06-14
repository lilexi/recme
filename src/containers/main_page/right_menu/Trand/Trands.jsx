import React, {Component} from 'react';
import "./trands.modules.css"
import TrandItem from "../../../../components/r_menucomp/trand_item_comp";

import video_logo from "../../../../assets/video_logo.png";
import article_logo from "../../../../assets/text_logo.png"
import link_logo from "../../../../assets/ling_logo.png"
import axios from "axios";


class Trands extends Component {
    componentDidMount() {
        this.getTrands()
    }


    state = {
        trands: []
    };

    setTrands = () => {

    };

    getTrands = () => {
        axios.get('http://localhost:3001/trands', {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        })
            .then(res => {
                const trands = res.data.trands;
                this.setState({trands});
            })
    };

    rTrand() {
        let p = null;
        p = this.state.trands.map(trand => {
            let cat = null;
            if (trand.cat_info === 'video') {
                cat = video_logo;
            }
            if (trand.cat_info === 'article') {
                cat = article_logo;
            }
            if (trand.cat_info === 'link') {
                cat = link_logo;
            }

            return <TrandItem
                trandID = {trand.id}
                category_logo_trand = {cat}
                title_trand = {trand.Title}
                count_like_trand = {trand.like}
            />
        });
        return p
    }

    render() {
        return (
            <div className="trand-block">
                <p>ТРЕНДЫ </p>
                {this.rTrand()}
            </div>
        );
    }
}

export default Trands;