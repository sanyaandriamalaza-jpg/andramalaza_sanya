const projects = [
  {
    title: "Portfolio",
    image: "/projects/portfolio-react.png",
    description:
      "Mon premier portfolio développé en Next.js avec Tailwindcss, axé sur la présentation personnelle.",
    stack: ["Next.js", "Tailwindcss", "Responsive"],
    features: [
      "Navigation par sections",
      "Design responsive",
      "Animations CSS",
    ],
    type: "Projet personnel",
  },
  {
    title: "Application de gestion des courriers",
    image: "/projects/app-gestion.png",
    description:
      "Application web permettant la gestion des courriers entrants et sortants pour la Direction Régionale des Budgets Haute Matsiatra.",
    stack: ["React.js", "Node.js", "MySQL"],
    features: [
      "CRUD complet",
      "Envoie de notifications par email",
      "Authentification sécurisée",
      "Tableau de bord administrateur",
      "Upload de fichiers",
    ],
    type: "Projet de Stage",
  },
];

export default projects;