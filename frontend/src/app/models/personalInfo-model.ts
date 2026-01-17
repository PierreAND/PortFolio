export interface PersonalInfo {
    prenom: string,
    nom: string,
    age: number,
    diplome: Diplome,
    certification: Certification[],
}


export interface Diplome {
    name: string,
    ecole: string,
    description: string,
    levels: string,
    dossier: string,
    liens: string
}

export interface Certification {
    id: number,
    date: string
    name: string,
    description: string,
    link: string
}