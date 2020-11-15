import React, { Component } from "react"
import Header from "./Header";
import { ObjectLiteralElement } from "typescript";
import "isomorphic-fetch";
import "es6-promise";

interface LocationCardProps {
    locationArr: Array<ObjectLiteralElement>;
    match?: any;
}

interface LocationCardState {
    locationArr: any;
}

class FilmCard extends Component<LocationCardProps, LocationCardState>{
   constructor(props:LocationCardProps){
       super(props);
       this.state ={
            locationArr:[],
       }
   }
   
    componentDidMount(){
        fetch(`https://ghibliapi.herokuapp.com/locations/${this.props.match.params.id}`)
            .then((response) =>{
                return(response.json())
            }).then (obj => this.setState({
                locationArr: obj,
            }));
    }

    render() {
        const {locationArr} = this.state;
        console.log(locationArr);
        return (
            <div>
                <Header listHeader={"Studio Ghibli Wiki"}></Header>
                <div className="d-flex justify-content-center mt-5 mb-5">
                    <div className="card shadow text-center color-acc-white"
                        style={{ display: "inline-block", height: "auto", width: "40rem" }}>
                        <div className="card-body">
                            <ul className="list-group font-lg list-group-flush">
                                <h5 className="list-group-item">Location Name:</h5>
                                <li className="list-group-item">{locationArr.name}</li>
                                <h5 className="list-group-item">Location Climate:</h5>
                                <li className="list-group-item">{locationArr.climate}</li>
                                <h5 className="list-group-item">Location Water Temperature:</h5>
                                <li className="list-group-item">{locationArr.surface_water}</li>
                                <h5 className="list-group-item">Location Terrain:</h5>
                                <li className="list-group-item">{locationArr.terrain}</li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FilmCard;