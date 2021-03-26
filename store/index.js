export const state = () => ({

    chambresData: [
        { 
            id: 1,
            nom: 'Framboise', 
            tarif: '200 euro la nuit', 
            infos: 'Chambre 2 personnes, (1 lit avec 2 places).',
            description: "Très jolie chambre au calme, vous appécierez, sa vue sur le Mont-Saint Michel. La chambre dispose d'une TV",
            image: "framboise.jpg", 
            alt: "Chambre Framboise",
        },
        { 
            id: 2,
            nom: 'Bisquine', 
            tarif: '150 euro la nuit' , 
            description: "Cette chambre dispose d'une jolie vue sur la campagne",
            infos: 'Chambre 2 ou 3 personnes, (1 lit avec 2 places et un lit pour un enfant)',
            image: "bisquine.jpg", 
            alt: "Chambre Bisquine",
        },
        { 
            id: 3,
            nom: 'Coquelicot', 
            tarif: '130 euro la nuit',
            description: "Cette chambre dispose d'une jolie vue sur la campagne",
            infos: 'Chambre 2 personnes, (1 lit avec 2 places)',
            image: "coquelicot.jpg", 
            alt: "Chambre Coquelicot",
        }
    ]

})

export const getters = {

    getProductById: (state) => (id) => {
        return state.chambresData.find(chambresData => chambresData.id == id)
    },

    indexStore(state) {
        return `${state.chambresData.nom}${state.chambresData.info}`
    }
}