import React, { Component } from "react";
import Header from "./Header";
import LocationCard from "./LocationCardList";
import "isomorphic-fetch";
import "es6-promise";

interface LocationListProps {
    locations: [],
    locationName: "Location Name: ";
    locationClimate: "Location Climate: ";
    locationWaterTemp: "Location Water Temperature: ";
    locationTerrain: "Location Terrain: ";
    match?:any;
}

interface LocationState {
    locations: [],
    locationName: "Location Name: ",
    locationClimate: "Location Climate: ",
    locationWaterTemp: "Location Water Temperature: ",
    locationTerrain: "Location Terrain: ",
}


class FilmList extends Component <LocationListProps, LocationState> {
    constructor(props: LocationListProps) {
        super(props);
        this.state = {
            locations: [],
            locationName: "Location Name: ",
            locationClimate: "Location Climate: ",
            locationWaterTemp: "Location Water Temperature: ",
            locationTerrain: "Location Terrain: ",
        }
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/locations")
            .then(res => res.json())
            .then(objLit => {
                this.setState({ locations: objLit })
            }).catch(e => console.log(e));
    }
 
    render() {
        const { locationClimate, locationName, locationTerrain, locationWaterTemp, locations } = this.state; 
        return (

            <div className="text-center">
                <Header listHeader={"Studio Ghibli Location List"}></Header>
                <LocationCard
                    locationName={locationName}
                    locationClimate={locationClimate}
                    locationWaterTemp={locationWaterTemp}
                    locationTerrain={locationTerrain}
                    locationArr={locations}></LocationCard>
            </div>
        );
    }
}

export default FilmList;
