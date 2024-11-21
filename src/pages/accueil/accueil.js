import React, { useState, useEffect } from "react";

import './accueil.css';

import PokemonData from '../../data/data.json';

const Accueil = () => {
    const [pokemonList, setPokemonList] = useState([]);

    // Fonction pour charger les données
    const loadData = () => {
        const savedData = localStorage.getItem("pokemonList");

        console.log("savedData", savedData);

        // Vérification si des données existent et sont valides
        if (savedData && savedData !== "[]") {
            console.log("on load depuis le localStorage");
            setPokemonList(JSON.parse(savedData)); // Charger depuis le localStorage
        } else {
            console.log("on load depuis le fichier");
            setPokemonList(PokemonData); // Charger les données par défaut
        }
    };

    // Fonction pour sauvegarder les données
    const saveData = (data) => {
        console.log("on sauvegarde dans le localStorage");
        localStorage.setItem("pokemonList", JSON.stringify(data)); // Sauvegarder dans le localStorage
    };

    // Charger les données au premier rendu
    useEffect(() => {
        loadData();
    }, []);

    // Sauvegarder dans le localStorage chaque fois que pokemonList change
    useEffect(() => {
        if (pokemonList.length > 0) {
            saveData(pokemonList);
        }
    }, [pokemonList]);

    // Fonction pour changer l'état 'check' d'une carte
    const checkCard = (index) => {
        let newPokemonList = pokemonList.map((pokemon, i) => {
            if (i === index) {
                pokemon.check = !pokemon.check;
            }
            return pokemon;
        });

        setPokemonList(newPokemonList); // Mettre à jour pokemonList
    };

    return (
        <div>
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
