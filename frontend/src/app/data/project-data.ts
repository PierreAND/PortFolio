import { Project, Techno } from '../models/projectInfo-model';

export const TECHNOS: Techno[] = [
  {
    id: 1,
    name: 'Angular',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg',
  },
  {
    id: 2,
    name: 'NestJs',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg',
  },
  {
    id: 3,
    name: 'AdonisJs',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/adonisjs/adonisjs-original.svg',
  },
  {
    id: 4,
    name: 'Prisma',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg',
  },
  {
    id: 5,
    name: 'Docker',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
  },
  {
    id: 6,
    name: 'Traefik',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/traefikproxy/traefikproxy-original.svg',
  },
  {
    id: 7,
    name: 'Nginx',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg',
  },
  {
    id: 8,
    name: 'React',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  },
];

export const PROJECT_DATA: Project[] = [
  {
    id: 1,
    titre: 'Wowpti',
    description:
      "Mise en place pour le jeu World of Warcraft, d'un logiciel open-source qui permet d'avoir une optimisation idéale de ses personnages. (Angular/NestJS) Hébergée sur un NAS domestique via conteneurs Docker. Nginx sert de reverse proxy ,avec redirection vers le conteneur frontend. Un nom de domaine personnalisé (OVH) pointe via DNS (enregistrement A) vers l'IP publique du routeur. Dynhost met à jour automatiquement l'IP. Traefik gère les certificats SSL automatiquement",
    technos: TECHNOS.filter((technos) => [5, 4, 2, 1].includes(technos.id)),
    github: 'https://github.com/PierreAND/ProjectPersoWow',
    url: 'https://www.wowpti.fr',
    imageUrl: 'https://drive.google.com/file/d/1ekvkWOT4FrfDEgiwFZaW4w-u0qsExwvt/preview',
    discord: 'https://discord.gg/tKmTR73B'
    
  },
  {
    id: 2,
    titre: 'RandoTrack',
    description:
      'RandoTrack est une application web dédiée aux randonneurs souhaitant planifier et suivre leurs aventures. Elle permet de pré-tracer des itinéraires, d’ajouter des points d’intérêt et de visualiser les courbes de dénivelé. Grâce au suivi GPS, les utilisateurs bénéficient d’un positionnement en temps réel lors de leurs sorties. Les parcours réalisés sont accessibles publiquement avec des statistiques clés telles que la difficulté, la durée, la distance parcourue et le dénivelé total',
    technos: TECHNOS.filter((technos) => [5, 3, , 1].includes(technos.id)),
    github: 'https://github.com/O-clock-Elfe/projet-6-rando-track',
    url: 'https://randotrack.vercel.app',
    imageUrl: 'https://drive.google.com/file/d/101fyDxFwNCMNCen6i7o9r_bKnxyOETlw/preview',
    

  },

];
