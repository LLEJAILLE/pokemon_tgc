import React from "react";
import './navbar.css';
import puissance_gen from '../../../assets/puissance_gen.png';

const Navbar = ({ nbByBooster, myNumberPokemonByBooster }) => {
    return (
        <div className="navbar">
            <div className="container">
                <img src={puissance_gen} alt="logo" className="logo" />

                <div className="by-boosters">
                    <div className="boosters">
                        <div className="cate">
                            <img src="https://img.game8.co/3999180/083249170af7215407df57bf9840bc3e.png/show" alt="logo" className="logo" />
                            {myNumberPokemonByBooster.nbMewtwo} / {nbByBooster.nbMewtwo}
                        </div>

                        <div className="cate">
                            <img src="https://img.game8.co/3999192/eb4a00290df0eccf54b42ff80d4983f8.png/show" alt="logo" className="logo" />
                            {myNumberPokemonByBooster.nbPickachu} / {nbByBooster.nbPickachu}
                        </div>

                        <div className="cate">
                            <img src="https://img.game8.co/3999185/6405ea32582539f6e270b2b15529d130.png/show" alt="logo" className="logo" />
                            {myNumberPokemonByBooster.nbCharizard} / {nbByBooster.nbCharizard}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
