import React, { Component } from "react";
import Header from "./Header";
import FilmCardList from "./FilmCardList";
import "isomorphic-fetch";
import "es6-promise";

interface FilmListProps {
    filmTitle: string;
    filmDescription: string;
    filmProducer: string;
    filmReleaseDate: string;
    films: any;
    match?: any;
}

interface FilmState {
    filmTitle: string;
    filmDescription: string;
    filmProducer: string;
    filmReleaseDate: string;
    films: any;
}


class FilmList extends Component <FilmListProps, FilmState> {
    constructor(props: FilmListProps) {
        super(props);
        this.state = {
            films: [],
            filmTitle: "Film Title: ",
            filmDescription: "Film Description: ",
            filmProducer: "Film Producer: ",
            filmReleaseDate: "Film Release Date: ",
        }
    }   
    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res => res.json())
            .then(objLit => {
                this.setState({ films: objLit })
            }).catch(e => console.log(e));
            
    }     
    render(){
        const { films, filmDescription, filmTitle, filmReleaseDate, filmProducer } = this.state; 
        return (

            <div className="text-center">
                <Header listHeader={"Studio Ghibli Film List"}></Header>
                <FilmCardList
                    filmTitle={filmTitle}
                    filmDescription={filmDescription}
                    filmProducer={filmProducer}
                    filmReleaseDate={filmReleaseDate}
                    filmArr={films}></FilmCardList>
            </div>
        );
    }
}

export default FilmList;
