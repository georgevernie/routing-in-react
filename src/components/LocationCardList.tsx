import React from "react"
import {Link} from "react-router-dom";

interface LocationCardProps{
    locationName:string;
    locationClimate:string;
    locationWaterTemp:string;
    locationTerrain:string;
    locationArr: any;
}
interface ItemProps{
    name:string;
    climate:string;
    surface_water:string;
    terrain:string;
    id:string;
}

const LocationCard = (props: LocationCardProps) => {
    return (
        props.locationArr.map((item: ItemProps) => {
            return (
                <div key={item.id.toString()} className="text-center mb-5">
                    <div className="card shadow text-center color-acc-white"
                        style={{ display: "inline-block", height: "40rem", width: "40rem" }}>
                        <div className="card-body">
                            <ul className="list-group font-lg list-group-flush">
                                <h5 className="list-group-item">{props.locationName}</h5>
                                <li className="list-group-item">{item.name}</li>
                                <h5 className="list-group-item">{props.locationClimate}</h5>
                                <li className="list-group-item">{item.climate}</li>
                                <h5 className="list-group-item">{props.locationWaterTemp}</h5>
                                <li className="list-group-item">{item.surface_water}</li>
                                <h5 className="list-group-item">{props.locationTerrain}</h5>
                                <li className="list-group-item">{item.terrain}</li>
                                <Link className="btn-lg color-acc-amber" to={`/locations/${item.id}`}>See More Film Info</Link>
                            </ul>
                        </div>
                    </div>
                </div>
            );
        })

    );
}

export default LocationCard;