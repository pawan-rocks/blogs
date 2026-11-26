export interface Project {
  name: string;
  company: string;
  duration: string;
  role: string;
  team: string;
  technologies: string;
  overview: string;
  highlights: string[];
}

export const profileSummary = [
  "Over 11 years of experience in frontend development and enterprise web application engineering, specialising in JavaScript, TypeScript, Angular, React.js, Next.js, and responsive UI development across business-critical applications.",
  "Driving frontend architecture, legacy application modernisation, and microfrontend implementation with a focus on scalable application structures, reusable components, maintainable codebases, and consistent engineering standards.",
  "Leading end-to-end frontend module ownership, requirements analysis, technical planning, UI development, REST API integration, code reviews, testing, release support, and production issue resolution.",
  "Delivering enterprise-grade logistics and transport applications, including operational dashboards, fleet management interfaces, transport workflows, dock utilisation, geospatial visualisations, and user management systems.",
  "Strengthening engineering delivery through frontend architecture governance, component reuse strategies, and standardised development practices to improve maintainability and accelerate feature delivery, subject to validation.",
  "Advancing frontend engineering maturity through design-system adoption, performance measurement, accessibility standards, and engineering productivity improvements aligned with product scalability, subject to validation.",
];

export const experience = [
  {
    period: "July 2018 — Present",
    company: "DELHIVERY LIMITED",
    location: "Gurugram, Haryana",
    roles: ["Senior Frontend Developer"],
    highlights: [
      "Designing, developing, and maintaining scalable, high-performance enterprise web applications using JavaScript, TypeScript, React.js, Angular, and Next.js, aligned with business and architectural requirements.",
      "Leading frontend module ownership across requirement analysis, solution design, development, code reviews, testing, deployment coordination, and production support.",
      "Driving legacy Angular-to-React.js modernisation and microfrontend development, strengthening application modularity, component reusability, maintainability, and scalability.",
      "Developing reusable UI components, shared utilities, React and Angular libraries, and design-token solutions through the Tarmac Design System to standardise interfaces and reduce duplicated development effort.",
      "Designing and maintaining reusable authentication libraries using Keycloak SSO, OAuth 2.0, and OIDC, covering login/logout workflows, token management, silent renewal, session monitoring, and authentication recovery.",
      "Developing business-critical logistics applications, including HubEye, Transport One (TMS), UMS, Facility as a Service (FAAS), Fleet Management Service (FMS), and Flare, supporting transport, fleet, facility, and user management operations.",
      "Building interactive operational dashboards, KPI visualisations, data tables, alerts, and geospatial interfaces for dock utilisation, vehicle tracking, waybill monitoring, serviceability mapping, and logistics planning.",
      "Integrating REST APIs and asynchronous workflows while optimising rendering, application responsiveness, error handling, and frontend performance to enhance reliability and maintainability.",
      "Establishing frontend coding standards, architecture guidelines, component design patterns, performance benchmarks, accessibility practices, cross-browser validation, and standardised testing approaches to strengthen engineering quality.",
      "Collaborating with product, backend, QA, design, and business teams to deliver frontend solutions while mentoring developers, reviewing implementations, estimating development effort, coordinating releases, and promoting continuous engineering improvement.",
    ],
  },
  {
    period: "August 2017 — June 2018",
    company: "DELHIVERY LIMITED",
    location: "Gurugram, Haryana",
    roles: ["Frontend Developer"],
    highlights: [
      "Developing and maintaining responsive frontend modules using JavaScript, TypeScript, Angular, and React.js in alignment with business and architectural requirements.",
      "Supporting frontend module ownership across requirement analysis, solution design, development, code reviews, testing, deployment coordination, and production support.",
      "Developing reusable UI components, shared utilities, and frontend patterns to improve component reuse, maintainability, and scalability.",
      "Building logistics dashboards, data tables, operational workflows, and API-integrated interfaces for transport, fleet, facility, and user-management operations.",
      "Collaborating with product, backend, QA, design, and business teams to deliver frontend solutions and resolve production issues.",
    ],
  },
  {
    period: "June 2015 — July 2017",
    company: "CAN TECHLABS PVT. LTD.",
    location: "",
    roles: ["Frontend Developer"],
    highlights: [
      "Developed and maintained responsive web applications using AngularJS, JavaScript, jQuery, HTML5, and CSS3.",
      "Built dynamic user interfaces, reusable UI elements, data-binding features, and interactive web components using AngularJS.",
      "Implemented responsive layouts to support consistent user experiences across desktops, tablets, and mobile devices.",
      "Ensured cross-browser compatibility by identifying and resolving rendering and UI issues across major browsers.",
      "Integrated frontend components with backend services and APIs to support application functionality and data exchange.",
      "Developed interactive features using jQuery, JavaScript, DOM manipulation, and event-handling techniques.",
      "Applied HTML5, CSS3, Bootstrap, and responsive design principles to create user-friendly and maintainable interfaces.",
      "Identified, debugged, and resolved frontend defects to improve application stability, usability, and performance.",
      "Collaborated with senior developers, designers, and backend teams to implement business requirements and deliver project features.",
      "Applied AngularJS concepts, including MVC/MVVM, directives, controllers, services, dependency injection, and two-way data binding.",
      "Followed coding standards and reusable development practices to improve code readability and maintainability.",
      "Supported application testing, bug fixing, enhancements, and cross-browser validation throughout the development lifecycle.",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "HubEye — Logistics Operations Platform",
    company: "Delhivery Limited",
    duration: "2025 — Present",
    role: "Senior Frontend Developer",
    team: "8 (2 Frontend, 6 Backend)",
    technologies: "React.js, TypeScript, Angular, Ant Design, Tailwind CSS, Highcharts, REST APIs, JavaScript",
    overview: "Enterprise logistics operations platform providing visibility into hub-level operations, fleet activities, dock utilisation, operational alerts, and transport workflows.",
    highlights: [
      "Led the migration of business-critical modules from Angular to React.js using reusable components and maintainable frontend architecture.",
      "Developed Overview Dashboard, Operations Dock, Fleet Operations, KPI cards, alert tables, interactive tables, filters, dropdown actions, and workflow-based modals.",
      "Implemented dock utilisation, dock throughput, dock history, and operational monitoring interfaces.",
      "Migrated legacy Angular/NVD3 charts to React/Highcharts to modernise dashboard visualisation and improve maintainability.",
      "Implemented URL-based tab and filter synchronisation to preserve application state during navigation.",
      "Collaborated with backend developers, QA engineers, product teams, and business stakeholders to deliver requirements and resolve issues.",
    ],
  },
  {
    name: "Tarmac Design System — AI-Based Design and Component Library",
    company: "Delhivery Limited",
    duration: "2025 — Present",
    role: "Senior Frontend Developer",
    team: "2 (Frontend)",
    technologies: "React.js, Angular, TypeScript, Design Tokens, Reusable UI Components, AI-Based Design Workflows",
    overview: "A shared design system and component ecosystem designed to support consistent UI development across React and Angular applications.",
    highlights: [
      "Contributed to the adoption and implementation of AI-based design workflows supporting frontend development across React and Angular applications.",
      "Standardised visual properties including typography, spacing, and other UI styling values through design tokens.",
      "Supported shared design token and reusable component integration across applications to improve UI consistency.",
      "Developed reusable components and common design patterns for maintainable frontend projects.",
      "Collaborated with frontend developers to support future feature implementation.",
    ],
  },
  {
    name: "Keycloak SSO React Library — Centralized Authentication",
    company: "Delhivery Limited",
    duration: "2025 — Present",
    role: "Senior Frontend Developer / Library Owner",
    team: "Independently developed",
    technologies: "React.js 16+, TypeScript, Keycloak, OpenID Connect (OIDC), OAuth 2.0",
    overview: "Reusable React authentication library providing standardised silent SSO sign-in integration across applications.",
    highlights: [
      "Designed and developed a reusable authentication library with configurable integration APIs.",
      "Implemented login/logout flows, access-token management, refresh-token handling, and authentication state management.",
      "Implemented silent token renewal and token-expiration handling for authenticated sessions.",
      "Developed session monitoring, authentication callbacks, redirect handling, and post-authentication navigation.",
      "Designed the library to support React 16+ applications and standardised authentication behaviour.",
    ],
  },
  {
    name: "Transport One (TMS) — Transport Management System",
    company: "Delhivery Limited",
    duration: "2023 — 2025",
    role: "Senior Frontend Developer",
    team: "12 (4 Frontend, 8 Backend)",
    technologies: "React, TypeScript, Ant Design, Yup, JSON-Based Configuration, JavaScript, Frontend Web Technologies, REST APIs",
    overview: "Transport management system supporting shipment and transport workflows, vehicle assignment, and transport-related operational visibility.",
    highlights: [
      "Led frontend development for transport management features and translated business requirements into interactive web interfaces.",
      "Developed and enhanced configuration-driven forms, dynamic workflows, contract management, vehicle assignment, and transport operations.",
      "Implemented a configuration-driven UI rendering framework to dynamically generate forms and interface elements from JSON-based schemas.",
      "Designed dynamic form validation using JSON-defined validation rules and Yup, supporting configurable field-level validations, conditional requirements, and business-specific scenarios.",
      "Developed contract-management workflows and interfaces supporting inbound and outbound vehicle tracking.",
      "Integrated REST APIs to retrieve and display transport information and support frontend-backend interactions.",
    ],
  },
  {
    name: "Flare — Map Visualization and Logistics Serviceability",
    company: "Delhivery Limited",
    duration: "2022 — 2023",
    role: "Senior Frontend Developer",
    team: "6",
    technologies: "Angular, TypeScript, JavaScript, Web Mapping Technologies, Geospatial Visualization, REST APIs",
    overview: "Map-based logistics visualisation application for waybill, geographical, operational, and field-executive data.",
    highlights: [
      "Developed interactive map-based interfaces to visualise waybills and geographical information relevant to logistics operations.",
      "Implemented geographical views to support field-executive assignment based on defined areas and operational requirements.",
      "Integrated frontend components with backend APIs to retrieve and display waybill and location-related data.",
      "Improved geographical information workflows through map elements and location-focused workflows.",
    ],
  },
  {
    name: "Facility as a Service (FAAS)",
    company: "Delhivery Limited",
    duration: "2019 — 2022",
    role: "Senior Frontend Developer",
    team: "4",
    technologies: "Angular, JavaScript, TypeScript, REST APIs, Microfrontend Architecture",
    overview: "Enterprise web application supporting facility-related operational workflows, data management, and business processes.",
    highlights: [
      "Developed and maintained Angular-based frontend modules for facility-related business requirements.",
      "Built reusable UI components, forms, and data-driven interfaces.",
      "Integrated REST APIs to retrieve and update facility-related data.",
      "Implemented client-side validations, error handling, and interactive UI functionality.",
      "Worked within a microfrontend architecture to support modular development and shared functionality.",
    ],
  },
  {
    name: "Fleet Management System (FMS)",
    company: "Delhivery Limited",
    duration: "2019 — 2022",
    role: "Senior Frontend Developer",
    team: "4",
    technologies: "Angular, JavaScript, TypeScript, REST APIs, Microfrontend Architecture",
    overview: "Fleet management application supporting vehicle-related operational information and workflows.",
    highlights: [
      "Developed and enhanced Angular-based frontend modules for fleet management workflows.",
      "Created interactive UI components and data-driven screens for fleet information.",
      "Integrated REST APIs to display and update fleet data.",
      "Implemented reusable components, frontend validations, and error-handling mechanisms.",
    ],
  },
  {
    name: "User Management System (UMS)",
    company: "Delhivery Limited",
    duration: "2019 — 2022",
    role: "Senior Frontend Developer",
    team: "4",
    technologies: "Angular, JavaScript, REST APIs, Microfrontend Architecture",
    overview: "Enterprise application supporting user management, user information, and access-related workflows.",
    highlights: [
      "Developed Angular-based frontend modules for user management workflows.",
      "Built interactive interfaces, reusable components, forms, and data-driven screens using Angular and JavaScript.",
      "Integrated REST APIs to retrieve, display, and update user-related information.",
      "Implemented frontend validations, error handling, and consistent UI behaviour.",
    ],
  },
  {
    name: "UMS Login Library — Reusable Angular Application Authentication",
    company: "Delhivery Limited",
    duration: "2019 — 2022",
    role: "Senior Frontend Developer",
    team: "2",
    technologies: "Angular, Authentication Integration, Reusable Libraries",
    overview: "Reusable Angular login library providing consistent authentication functionality across supported applications.",
    highlights: [
      "Developed a reusable Angular login and authentication library with consistent integration patterns and APIs.",
      "Structured shared authentication functionality into reusable library components.",
      "Implemented login integration workflows required by supported Angular applications.",
      "Reduced duplicated login-related implementation through shared authentication functionality.",
    ],
  },
  {
    name: "WMS — Warehouse Management System",
    company: "Delhivery Limited",
    duration: "2017 — 2018",
    role: "Frontend Developer",
    team: "6",
    technologies: "AngularJS, JavaScript, HTML5, CSS3, jQuery",
    overview: "Warehouse management application supporting inventory, warehouse operations, and data-driven workflows.",
    highlights: [
      "Developed AngularJS modules and responsive interfaces for warehouse management workflows.",
      "Built reusable UI components, forms, data tables, and interactive operational screens.",
      "Integrated frontend data flows and validations to support maintainable warehouse operations.",
    ],
  },
  {
    name: "DAS - Offroll FE-User Management System",
    company: "Delhivery Limited",
    duration: "2017 — 2018",
    role: "Frontend Developer",
    team: "3",
    technologies: "AngularJS, JavaScript, HTML5, CSS3, jQuery",
    overview: "AngularJS user-management application supporting user information, access workflows, and operational administration.",
    highlights: [
      "Developed AngularJS screens and reusable components for user-management workflows.",
      "Implemented forms, data binding, validations, and responsive interfaces for user administration.",
      "Collaborated with the team to resolve frontend issues and deliver maintainable application enhancements.",
    ],
  },
];

export interface ProjectGroup { period: string; projects: Project[] }

export const projectGroups = projects.reduce<ProjectGroup[]>((groups, project) => {
  const group = groups.find((item) => item.period === project.duration);
  if (group) group.projects.push(project);
  else groups.push({ period: project.duration, projects: [project] });
  return groups;
}, []);


export interface PersonalProject {
  title: string;
  description: string;
  href: string;
  linkLabel: string;
}

export const personalProjects: PersonalProject[] = [
  {
    title: "React Component Library",
    description: "Reusable React components supporting standardised UI implementation and component reuse.",
    href: "https://www.npmjs.com/package/@tantuui/react",
    linkLabel: "NPM ↗",
  },
  {
    title: "Design Token Library",
    description: "Shared design-token values supporting consistent styling and design implementation across applications.",
    href: "https://www.npmjs.com/package/@tantuui/tokens",
    linkLabel: "NPM ↗",
  },
  {
    title: "Storybook",
    description: "Reusable components, tokens, and implementation patterns documented for frontend teams.",
    href: "https://tantuui.com/storybook/?path=/docs/introduction--docs",
    linkLabel: "Storybook ↗",
  },
];
