export const state = () => ({

    chambresData: [
        { 
            id: 1,
            nom: 'Framboise', 
            tarif: '@@@ euro la nuit', 
            taxe: 'Une taxe de séjour de @@ est comprise ds le prix',
            paiement: 'Paiment acceptés : Chèque et espèce',
            infos: 'Chambre 2 personnes, (1 lit avec 2 places).',
            condition: 'Les animaux ne sont plus admis et les chambres sont non fumeurs.',
            description: "Très jolie chambre au calme, vous appécierez, sa vue sur le Mont-Saint Michel. La chambre dispose d'une TV",
            image: "framboise.jpg", 
            alt: "Chambre Framboise",
        },
        { 
            id: 2,
            nom: 'Bisquine', 
            tarif: '@@@ euro la nuit' , 
            taxe: 'Une taxe de séjour de @@ est comprise ds le prix',
            paiement: 'Paiment acceptés : Chèque et espèce',
            description: "Cette chambre dispose d'une jolie vue sur la campagne",
            infos: 'Chambre 2 ou 3 personnes, (1 lit avec 2 places et un lit pour un enfant)',
            condition: 'Les animaux ne sont plus admis et les chambres sont non fumeurs.',
            image: "bisquine.jpg", 
            alt: "Chambre Bisquine",
        },
        { 
            id: 3,
            nom: 'Coquelicot', 
            tarif: '@@@ euro la nuit',
            taxe: 'Une taxe de séjour de @@ est comprise ds le prix',
            paiement: 'Paiment acceptés : Chèque et espèce',
            description: "Cette chambre dispose d'une jolie vue sur la campagne",
            infos: 'Chambre 2 personnes, (1 lit avec 2 places)',
            condition: 'Les animaux ne sont plus admis et les chambres sont non fumeurs.',
            image: "coquelicot.jpg", 
            alt: "Chambre Coquelicot",
        }
    ],

    map: [
        {
            id: 1,
            adresse: 'Mr Lumé pascal 15 rue de montitier Huisnes sur mer 50170 PONTORSON',
            tel: '02.33.48.17.97',
            mail: 'lume.pascal@orange.fr',
        },
    ],

})

export const getters = {

    getProductById: (state) => (id) => {
        return state.chambresData.find(chambresData => chambresData.id == id)
    },
}