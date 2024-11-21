import React, { useState, useEffect } from "react";

import './accueil.css';

import PokemonData from '../../data/data.json';

import Navbar from "../component/navbar/navbar";

const Accueil = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [nbByBooster, setNbByBooster] = useState({
        "nbMewtwo": 0,
        "nbPickachu": 0,
        "nbCharizard": 0,
    });

    const [myNumberPokemonByBooster, setMyNumberPokemonByBooster] = useState({
        "nbMewtwo": 0,
        "nbPickachu": 0,
        "nbCharizard": 0,
    });

    const loadData = () => {
        const savedData = localStorage.getItem("pokemonList");
        if (savedData && savedData !== "[]") {
            setPokemonList(JSON.parse(savedData));
        } else {
            setPokemonList(PokemonData);
        }
    };

    const saveData = (data) => {
        localStorage.setItem("pokemonList", JSON.stringify(data));
    };

    useEffect(() => {
        loadData();
    }, []);

    useEffect(() => {
        if (pokemonList.length > 0) {
            saveData(pokemonList);
            countMaxPokemonForEachBooster(pokemonList);
            countCheckForEachBooster(pokemonList);
        }
    }, [pokemonList]);

    const checkCard = (index) => {
        let newPokemonList = pokemonList.map((pokemon, i) => {
            if (i === index) {
                pokemon.check = !pokemon.check;
            }
            return pokemon;
        });

        setPokemonList(newPokemonList);
    };

    const countMaxPokemonForEachBooster = (pokemonList) => {
        let nbMewtwo = 0;
        let nbPickachu = 0;
        let nbCharizard = 0;
    
        pokemonList.forEach((pokemon) => {    
            if (pokemon.booster.includes("Mewtwo")) {
                nbMewtwo++;
            }
            if (pokemon.booster.includes("Pikachu")) {
                nbPickachu++;
            }
            if (pokemon.booster.includes("Charizard")) {
                nbCharizard++;
            }
        });
        
        setNbByBooster({
            "nbMewtwo": nbMewtwo,
            "nbPickachu": nbPickachu,
            "nbCharizard": nbCharizard,
        });
    };

    const countCheckForEachBooster = (pokemonList) => {
        let nbMewtwo = 0;
        let nbPickachu = 0;
        let nbCharizard = 0;

        pokemonList.forEach((pokemon) => {
            if (pokemon.check && pokemon.booster.includes("Mewtwo")) {
                nbMewtwo++;
            }
            if (pokemon.check && pokemon.booster.includes("Pikachu")) {
                nbPickachu++;
            }
            if (pokemon.check && pokemon.booster.includes("Charizard")) {
                nbCharizard++;
            }
        });

        setMyNumberPokemonByBooster({
            "nbMewtwo": nbMewtwo,
            "nbPickachu": nbPickachu,
            "nbCharizard": nbCharizard,
        });
    };
    
    return (
        <div>
            <Navbar nbByBooster={nbByBooster} myNumberPokemonByBooster={myNumberPokemonByBooster} />
            <div className="pokemon-list">
                {pokemonList.map((pokemon, index) => {
                    return (
                        <div key={index} className={`pokemon-item ${pokemon.check ? 'grayed-out' : ''}`}>
                            {pokemon.check && <div className="check"></div>}
                            <img src={pokemon.link} alt={pokemon.name} onClick={() => checkCard(index)} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Accueil;
