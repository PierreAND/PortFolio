export interface Project {
    id: number,
    titre: string,
    description: string,
    technos: Techno[],
    github: string,
    url: string,
    imageUrl: string,
    discord?: string 
}




export interface Techno {
    id: number,
    name: string,
    logo: string
}