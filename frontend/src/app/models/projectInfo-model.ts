export interface Project {
    id: number,
    titre: string,
    description: string,
    technos: Techno[],
    github: string,
    imageUrl: string
}


export interface Techno {
    id: number,
    name: string,
    logo: string
}