import TxlForma3D from '../assets/TxlForma3D.png';
import TxlFormaACCEUIL from '../assets/TxlFormaACCEUIL.png';
import TxlFormaContacter from '../assets/TxlFormaContacter.png';
import TxlFormaDashboard from '../assets/TxlFormaDashboard.png';
import TxlFormaDevenirFormateur from '../assets/TxlFormaDevenirFormateur.png';
import TxlFormaFormateur from '../assets/TxlFormaFormateur.png';
import TxlFormaFormations from '../assets/TxlFormaFormations.png';
import TxlFormaFormationsPG from '../assets/TxlFormaFormationsPG.png';
import TxlFormaGestionFormations from '../assets/TxlFormaGestionFormations.png';

import AvionPage from '../assets/AvionPage.png';
import PresentationAeroclub from '../assets/Presentation_AEROCLUB.png';
import ReservationsAeroclub from '../assets/Réservations Aéroclub.png';
import AccueilSeed from '../assets/Acceuildataseed.png';
import VueGeneralSeed from '../assets/Vuegnéraldataseed.png';
import DetailGraphSeed from '../assets/détailgraphdataseed.png';
import RechercheSeed from '../assets/recherchedataseed.png';
import MyPrintImg from '../assets/Myprint.png';
import ParcoursUtilisation from "../assets/Parcours d'utilisation.png";
import ParcoursInscription from "../assets/Parcours d'inscription.png";
import MontWudangAcceuil from '../assets/MontwudangAcceuil.png';
import MontWudang3D from '../assets/Montwudang3D.png';
import MontWudangDescription from '../assets/MontwudangDescription.png';
import SushiFast1 from '../assets/sushifast1.png';
import SushiFast2 from '../assets/sushifast2.png';
import SushiFast3 from '../assets/sushifast3.png';
import SushiFast4 from '../assets/sushifast4.png';
import SushiFast5 from '../assets/sushifast5.png';

export const projects = [
  {
    id: 6,
    title: "TXL Forma",
    year: "2025",
    img: TxlFormaACCEUIL,
    desc: "Plateforme de gestion de formations avec dashboard 3D interactif.",
    fullDesc: "TXLFORMA est un projet de BUT3 qui a pour but de créer un site web dynamique de Formations fournissant aux futurs clients, toutes les informations nécessaires concernant les formations proposées, l’organisation des sessions, les tarifs des formations, les lieux de formations, les moyens mis à disposition, …",
    missions: [
      "Inscription et connexion",
      "Paiement de la formation",
      "Suivi des absences et émargement numérique",
      "Suivi des intervenants",
      "Edition et analyse des résultats",
      "Visualisation d'une salle de formation en 3D"
    ],
    stack: {
      dev: ["React 19", "Vite", "Bootstrap 5", "React-Bootstrap"],
      backend: ["Java 21", "Spring Boot", "MySQL", "Hibernate"],
      design: ["CSS3 Custom Properties", "FontAwesome"],
      tools: ["Vercel", "Railway", "Stripe", "jsPDF"]
    },
    link: "https://txl-forma.vercel.app/",
    figmaLink: "https://www.figma.com/design/brMxnpRyxYbKdUEg7ScYlm/SAE_501?node-id=0-1&t=CM4n0kZpCSau2jxD-1",
    gallery: [
      { img: TxlFormaFormations, desc: "Catégories des formations" },
      { img: TxlFormaFormationsPG, desc: "Liste des formations" },
      { img: TxlFormaDashboard, desc: "Tableau de bord" },
      { img: TxlFormaGestionFormations, desc: "Gestion des formations" },
      { img: TxlFormaDevenirFormateur, desc: "Page devenir formateur" },
      { img: TxlForma3D, desc: "Visualisation 3D" }
    ]
  },
  {
    id: 5,
    title: "Site de sushi",
    year: "2025",
    img: SushiFast1,
    desc: "Application développée avec React et Vite permettant de présenter les menus de sushi du restaurant SushiFast.",
    fullDesc: "Application développée avec React et Vite permettant de présenter les menus de sushi du restaurant SushiFast, L'application affiche les différents menus avec leurs ingrédients, quantités, prix et saveurs.",
    missions: [
      "Développement Frontend avec React et Vite",
      "Mise en place du routing avec React Router",
      "Intégration du design avec Tailwind CSS",
      "Gestion des données via JSON"
    ],
    stack: {
      dev: ["React (Vite)", "React Router", "Tailwind CSS", "JSON"],
      tools: ["git"]
    },
    link: "https://yoh4nyo.github.io/sushiFast_TP/#/",
    gallery: [
      { img: SushiFast1, desc: "Accueil SushiFast" },
      { img: SushiFast2, desc: "Menu" },
      { img: SushiFast3, desc: "Palette de saveurs" },
      { img: SushiFast4, desc: "menu filtre" },
      { img: SushiFast5, desc: "Commande" }
    ]
  },
  {
    id: 1,
    title: "Refonte d'un site d'aviation",
    year: "2024",
    img: AvionPage,
    desc: "Modernisation complète de l'identité numérique d'un aéro-club.",
    fullDesc: "Ce projet consistait à repenser intégralement l'expérience utilisateur du site web de l'Aéro-Club. L'objectif principal était de moderniser l'interface pour la rendre plus attractive et intuitive, tout en mettant en valeur la flotte d'avions et les offres de formation. La refonte a permis d'améliorer significativement la navigation et l'accessibilité des informations pour les futurs pilotes et passionnés d'aviation.",
    missions: [
      "Audit ergonomique et technique de l'existant",
      "Conception UX/UI et prototypage haute fidélité",
      "Intégration responsive avec une approche mobile-first",
      "Optimisation des performances et du référencement (SEO)",
      "Collaboration agile et gestion de versionning"
    ],
    stack: {
      dev: ["HTML5", "CSS3", "JavaScript", "Tailwind"],
      accessibility: ["WCAG 2.1", "Navigation clavier", "Contraste optimisé"]
    },
    problems: [
      {
        issue: "Parcours utilisateur fragmenté",
        context: "L'accès aux informations cruciales (tarifs, réservation) nécessitait trop de clics, décourageant les nouveaux visiteurs.",
        fix: "Restructuration de l'architecture de l'information pour un accès direct aux services clés depuis la page d'accueil."
      },
      {
        issue: "Performance mobile dégradée",
        context: "Le site initial n'était pas adapté aux smartphones, avec des temps de chargement longs dus à des médias non optimisés.",
        fix: "Mise en place d'images responsives (WebP) et refonte totale du layout pour une fluidité optimale sur mobile."
      },
      {
        issue: "Manque de lisibilité des plannings",
        context: "L'outil de visualisation des disponibilités des avions était complexe et peu lisible sur petit écran.",
        fix: "Création d'une interface de calendrier simplifiée et adaptative, facilitant la lecture rapide des créneaux libres."
      }
    ],
    link: "https://acf-2-l.vercel.app/",
    gallery: [
      { img: AvionPage, desc: "Aperçu de la page d'accueil" },
      { img: PresentationAeroclub, desc: "Nouvelle interface de présentation" },
      { img: ReservationsAeroclub, desc: "Système de réservation simplifié" }
    ]
  },
  {
    id: 2,
    title: "Visualisation de Données Agricoles",
    year: "2024",
    img: AccueilSeed,
    desc: "Dashboard de visualisation de données agricoles avec graphiques interactifs.",
    fullDesc: "Projet d'analyse et de visualisation de données agricoles réalisé en équipe. L'objectif était de mettre en place une base de données robuste, d'analyser les données pertinentes et de créer une plateforme web interactive permettant de visualiser ces informations via des graphiques dynamiques.",
    missions: [
      "Analyser et nettoyer les données agricoles brutes",
      "Structurer et implémenter la base de données",
      "Sélectionner les types de graphiques les plus pertinents pour chaque métrique",
      "Créer les maquettes des dashboards (UI/UX)",
      "Intégrer les visualisations interactives sur le site",
      "Assurer la responsivité et l'ergonomie de l'interface"
    ],
    stack: {
      dev: ["HTML5", "CSS3", "JavaScript", "Chart.js / Recharts"],
      backend: ["Node.js", "PostgreSQL"],
      tools: ["Trello", "Figma", "Git"]
    },
    link: "https://sae-301.vercel.app/",
    figmaLink: "https://www.figma.com/design/k3xfUUfVro6gsmduZBhFQv/SAE301?node-id=0-1&t=Jdi9AqtyJXWMr5h4-1",
    gallery: [
      { img: AccueilSeed, desc: "Accueil" },
      { img: VueGeneralSeed, desc: "Tous les projets" },
      { img: RechercheSeed, desc: "Système de recherche" },
      { img: DetailGraphSeed, desc: "Vue détaillée du graphique" }
    ]
  },
  {
    id: 3,
    title: "My Print",
    year: "2024",
    img: ParcoursUtilisation,
    desc: "Prototype d'application mobile de suivi d'empreinte carbone.",
    fullDesc: "Conception d'un prototype cliquable pour une application mobile permettant aux utilisateurs de suivre leurs émissions de CO2 en se basant sur leurs données bancaires. Le projet a suivi une démarche centrée utilisateur et itérative, de la recherche initiale jusqu'au prototypage haute fidélité.",
    missions: [
      "Réalisation de la charte graphique et de l'identité visuelle",
      "Création des maquettes et du parcours utilisateur (User Flow)",
      "Prototypage interactif haute fidélité sur Figma",
      "Tests utilisateurs et itérations sur le design"
    ],
    stack: {
      design: ["Figma", "Prototypage", "UI/UX Design", "User Flow"]
    },
    figmaLink: "https://www.figma.com/design/RZ7GIYcr4W1pRx9Nj1iyRx/PROJET_FIGMA_CO2?t=Q7g2JpPplaiulZZU-1",
    gallery: [
      { img: MyPrintImg, desc: "Aperçu de l'application" },
      { img: ParcoursUtilisation, desc: "Parcours d'utilisation" },
      { img: ParcoursInscription, desc: "Parcours d'inscription" }
    ]
  },
  {
    id: 4,
    title: "Visualisation 3D Interactive",
    year: "2024",
    img: MontWudangAcceuil,
    desc: "Expérience interactive combinant SVG et visualisation 3D d'un temple historique.",
    fullDesc: "Réalisation d'un site web immersif combinant une carte SVG interactive de la Chine avec une visualisation 3D détaillée du temple Zixiao. Ce projet technique a nécessité la modélisation complète du temple et son intégration optimisée pour le web.",
    missions: [
      "Modélisation 3D architecturale et texturing du temple Zixiao (Blender)",
      "Conception et développement de la carte interactive SVG",
      "Intégration et optimisation du modèle 3D pour le web (Three.js / Model Viewer)",
      "Déploiement et optimisation des performances (Netlify)"
    ],
    stack: {
      dev: ["HTML5", "CSS3", "JavaScript", "SVG Interactif"],
      backend: ["Blender", "Three.js", "Google Model Viewer", "glTF/GLTF"],
      tools: ["Netlify", "GitHub"]
    },
    link: "https://lambent-blini-7009a9.netlify.app/",
    gallery: [
      { img: MontWudangAcceuil, desc: "Accueil du site" },
      { img: MontWudang3D, desc: "Visualisation 3D" },
      { img: MontWudangDescription, desc: "Description du temple" }
    ]
  }
];
