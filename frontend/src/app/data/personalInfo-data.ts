import { PersonalInfo } from "../models/personalInfo-model";
import { Diplome } from "../models/personalInfo-model";
import { Certification } from "../models/personalInfo-model";

export const CERTIFICATION: Certification[] = [
    {
        id: 1,
        name: "XK0-005 - CompTIA Linux+ Certification Exam",
        link: "https://www.credly.com/badges/7907e5e2-a6c8-4605-b9d2-6d51126a55db/linked_in_profile",
        description: "Tests qualité logiciels (QA), la gestion d'infrastructures (serveurs, cloud) et l'administration de services réseaux. Compréhension du cycle de vie des systèmes d'information : de la conception à l'exploitation quotidienne",
        date: "11/11/2025"
    },
    {
        id: 2,
        name: "AWS Certified Cloud Practitioner",
        link: "https://www.credly.com/badges/50a83057-bbd1-44e5-87d3-2ef5cdbd76cf/linked_in_profile",
        description: "Maîtrise des fondamentaux du cloud AWS : concepts globaux, services clés (calcul, stockage, bases de données).Compréhension des modèles de tarification, facturation et support technique AWS",
        date: "28/05/2025"
    }
]

export const DIPLOME: Diplome = {
    name: "Concepteur Développeur d’Applications",
    ecole: "O'clock",
    description: "Développer une application sécurisée, Concevoir et développer une application sécurisée organisée en couches, Préparer le déploiement d'une application sécurisée ",
    levels: "RNCP niveau 6 (BAC +4)",
    liens: "https://www.francecompetences.fr/recherche/rncp/37873/",
    dossier: "https://drive.google.com/file/d/1rxkdHX41CsHOf4MYS2xNlTEL9bGLwWgg/view?usp=sharing",
}

export const PERSONAL_INFO: PersonalInfo = {
    prenom: "Pierre",
    nom: "Andrieu",
    age: 30,
    diplome: DIPLOME,
    certification: CERTIFICATION ,   

    
}
