import { identifierName } from '@angular/compiler';
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
  {
    id: 9,
    name: 'Traeffik',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/traefikproxy/traefikproxy-original.svg',
  },
  {
    id: 10,
    name: 'Expo',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/expo/expo-original.svg',
  },
  {
    id: 11,
    name: 'Symfony',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/symfony/symfony-original.svg',
  },
];

export const PROJECT_DATA: Project[] = [
  {
    id: 1,
    titre: "DistRaid",
    description: "Distraid est un outil de gestion de loot pour les guildes de raid dans WoW (ou tout MMO similaire). Le problème qu'il résout : dans un raid de 20+ joueurs, quand un boss meurt et drop un loot, comment décider qui le reçoit de manière juste ? Sans système, c'est le bordel — favoritisme, frustrations, drama. Distraid automatise ça avec le système DKP : Côté joueur — tu parcours la liste des boss, tu vois les loots disponibles, et tu ajoutes ceux que tu veux à ta wishlist. Tu accumules des points en participant régulièrement aux raids. Côté admin (raid lead) — tu vois en un coup d'œil qui veut quoi, avec combien de points. Quand un loot drop, tu cliques dessus, tu vois les candidats triés par points, et tu l'attribues au joueur le plus méritant. Les points sont déduits automatiquement. Le principe d'équité : celui qui vient le plus souvent sans rien recevoir monte en points et devient prioritaire",
    technos: TECHNOS.filter((technos) => [5, 4, 2, 1, 9].includes(technos.id)),
    github: 'https://github.com/PierreAND/DistRaid',
    url: 'https://www.distraid.fr',
    imageUrl: ''

  },
  {
    id: 2,
    titre: 'RandoTrack',
    description:
      'RandoTrack est une application web dédiée aux randonneurs souhaitant planifier et suivre leurs aventures. Elle permet de pré-tracer des itinéraires, d’ajouter des points d’intérêt et de visualiser les courbes de dénivelé. Grâce au suivi GPS, les utilisateurs bénéficient d’un positionnement en temps réel lors de leurs sorties. Les parcours réalisés sont accessibles publiquement avec des statistiques clés telles que la difficulté, la durée, la distance parcourue et le dénivelé total',
    technos: TECHNOS.filter((technos) => [5, 3, 1].includes(technos.id)),
    github: 'https://github.com/O-clock-Elfe/projet-6-rando-track',
    url: 'https://randotrack.vercel.app',
    imageUrl: 'https://drive.google.com/file/d/101fyDxFwNCMNCen6i7o9r_bKnxyOETlw/preview',
  },
  {
    id: 3,
    titre: "Treat",
    description: "Treat est une application mobile qui permet d’organiser des événements entre amis. L’utilisateur crée un événement lié à une activité (week-end, sport, sortie, soirée), invite ses amis qui reçoivent une notification et confirment leur participation. À la fin de l’événement, un vote sous forme de QCM permet d’attribuer des points bonus/malus à chaque membre (ex: MVP, fairplay, anti-jeu, rabat-joie, flemmard...). Un algorithme établit ensuite un classement et répartit équitablement une éventuelle dépense de groupe (comme un coup à boire ou une note à partager)",
    technos: TECHNOS.filter((technos) => [10, 11, 8, 5].includes(technos.id)),
    github: 'https://github.com/PierreAND/Treat',
    url: '',
    imageUrl: ''

  },
  {
    id: 3,
    titre: 'Wowpti',
    description:
      "Mise en place pour le jeu World of Warcraft, d'un logiciel open-source qui permet d'avoir une optimisation idéale de ses personnages. (Angular/NestJS) Hébergée sur un NAS domestique via conteneurs Docker. Nginx sert de reverse proxy ,avec redirection vers le conteneur frontend. Un nom de domaine personnalisé (OVH) pointe via DNS (enregistrement A) vers l'IP publique du routeur. Dynhost met à jour automatiquement l'IP. Traefik gère les certificats SSL automatiquement",
    technos: TECHNOS.filter((technos) => [5, 4, 2, 1].includes(technos.id)),
    github: 'https://github.com/PierreAND/ProjectPersoWow',
    url: 'https://www.wowpti.fr',
    imageUrl: 'https://drive.google.com/file/d/1ekvkWOT4FrfDEgiwFZaW4w-u0qsExwvt/preview',
    discord: 'https://discord.gg/tKmTR73B',
  },
  {
    id: 4,
    titre: 'NAS Synology',
    description:
      "Administration d’un serveur NAS dédié à l’hébergement d’applications et services personnels, incluant la gestion centralisée des conteneurs Docker via Portainer, l’intégration d’un reverse proxy Traefik et la gestion des certificats SSL. Déploiement et maintenance d’applications dans un environnement isolé, sécurisé et optimisé pour la haute disponibilité, sur une infrastructure équipée de deux slots SO-DIMM et d’un processeur Intel Celeron J4125."    technos: TECHNOS.filter((technos) => [5, 4, 2, 1].includes(technos.id)),
    github: '',
    url: 'https://www.synology.com/fr-fr',
    imageUrl: '',
    discord: '',
  },

];
