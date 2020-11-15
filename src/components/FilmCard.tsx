import React, { Component } from "react";
import Header from "./Header";
import { ObjectLiteralElement } from "typescript";
import "isomorphic-fetch";
import "es6-promise";

interface FilmCardProps {
    filmArr: Array<ObjectLiteralElement>;
    match?: any;
}

interface FilmCardState {
    filmArr: any;
}


class FilmCard extends Component<FilmCardProps, FilmCardState>{
    constructor(props: FilmCardProps) {
        super(props);
        this.state = {
            filmArr: [],
        }
    }

    componentDidMount() {
        fetch(`https://ghibliapi.herokuapp.com/films/${this.props.match.params.id}`)
            .then((response) => {
                return (response.json())
            }).then(obj => this.setState({
                filmArr: obj,
            }));
    }
    render() {
        const { filmArr } = this.state;
        console.log(filmArr);
        return (
            <div>
                <Header listHeader={"Studio Ghibli Wiki"}></Header>
                <div className="d-flex justify-content-center mt-5 mb-5">
                    <div className="card shadow text-center color-acc-white"
                        style={{ display: "inline-block", height: "auto", width: "40rem" }}>
                        <div className="card-body">
                            <ul className="list-group font-lg list-group-flush">
                                <h5 className="list-group-item">Film Title:</h5>
                                <li className="list-group-item">{filmArr.title}</li>
                                <h5 className="list-group-item">Film Director:</h5>
                                <li className="list-group-item">{filmArr.director}</li>
                                <h5 className="list-group-item">Film Rating:</h5>
                                <li className="list-group-item">{filmArr.rt_score}</li>
                                <h5 className="list-group-item">Film Description:</h5>
                                <li className="list-group-item">{filmArr.description}</li>
                                <h5 className="list-group-item">Film Producer:</h5>
                                <li className="list-group-item">{filmArr.producer}</li>
                                <h5 className="list-group-item">Film Release Date:</h5>
                                <li className="list-group-item">{filmArr.release_date}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FilmCard;