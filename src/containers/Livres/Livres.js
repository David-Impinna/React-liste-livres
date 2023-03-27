import React, { Component } from 'react';
import Livre from "./Livre/Livre";
import FormulaireAjout from "./FormulaireAjout/FormulaireAjout";

class Livres extends Component {
    state = {
        livres : [
            {id:1, titre:"L'algorithmique selon H2PROG", auteur:"Matthieu GASTON", nbPages:200},
            {id:3, titre:"La France du 19ème", auteur: "Albert PATRICK", nbPages: 500},
            {id:5, titre:"Le monde des animaux", auteur: "Marc MERLIN", nbPages: 250},
            {id:8, titre:"Le Virus d'Asie", auteur: "Tya MILO", nbPages: 120},
        ]
    }

    handleSuppressionLivre = (id) => {
        const livreIndexTab = this.state.livres.findIndex(l => {
            return l.id === id;
        })

        const newLivres = [...this.state.livres];
        newLivres.splice(livreIndexTab,1);

        this.setState({livres:newLivres});
    }

    render() {
        return (
            <>
                <table className="table text-center">
                    <thead>
                        <tr className="table-dark">
                            <th>Titre</th>
                            <th>Auteur</th>
                            <th>Nombre de pages</th>
                            <th colSpan="2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.livres.map(livre => {
                                return (
                                <tr key={livre.id}>
                                        <Livre 
                                            titre={livre.titre}
                                            auteur={livre.auteur}
                                            nbPages={livre.nbPages}
                                            suppression={() => this.handleSuppressionLivre(livre.id)}
                                        />
                                </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
                {this.props.ajoutLivre && <FormulaireAjout />}
            </>
        );
    }
}

export default Livres;