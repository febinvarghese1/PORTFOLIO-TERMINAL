import FileExplorer from "../assets/file-explorer.png";
import Notepad from "../assets/notepad.png";
import Terminal from "../assets/terminal.png";
import Settings from "../assets/settings.png";

export const ACTIONS = {
  OPEN_FOLDER: "OPEN_FOLDER",
  OPEN_NOTEPAD: "OPEN_NOTEPAD",
  OPEN_TERMINAL: "OPEN_TERMINAL",
  OPEN_SETTINGS: "OPEN_SETTINGS"
};

export const homeLeftSidebar = [
  {
    id: 1,
    icon: FileExplorer,
    action: ACTIONS.OPEN_FOLDER,
    text: "File Explorer"
  },
  {
    id: 2,
    icon: Notepad,
    action: ACTIONS.OPEN_NOTEPAD,
    text: "Notepad"
  },
  {
    id: 3,
    icon: Terminal,
    action: ACTIONS.OPEN_TERMINAL,
    text: "Terminal"
  },
  {
    id: 4,
    icon: Settings,
    action: ACTIONS.OPEN_SETTINGS,
    text: "Settings"
  }
];

export const aboutText = `👋 Hi! I'm Febin Varghese, a front-end developer passionate about crafting awesome websites and solutions. I love turning ideas into visually stunning and user-friendly digital experiences using the Latest tech.

🚀 I enjoy challenges like building responsive designs and optimizing performance. Staying updated with the latest tech keeps my work fresh and future-proof.

💻 My focus is on creating user-friendly designs. I believe great websites should be intuitive and captivating.

🔧 Outside coding, I like to play musical instruments and I like experimenting with new tools and contributing to open-source projects. Always eager to learn and grow!
`;

export const TERMINAL = {
  WELCOME_SCREEN: `
<pre>
*******************************************************************************************

_______________   ____
\_   _____/\   \ /   /
 |    __)   \   Y   / 
 |     \     \     /  
 \___  /      \___/   
     \/               


*******************************************************************************************
</pre>
<br />                                                                                            
<span id="terminal"> Welcome to my interactive Terminal. Type <strong>help</strong> to view all available commands.
</span>
`,
  HELP: `
<br />

<pre id="terminal">
colors: Change the color scheme of the terminal. For example, type "red".
Available colors:
    - Red
    - Blue
    - Green
    - Yellow

about: Provides a brief overview of the current user.

timeline: Displays the timeline or work experience of the current user.

stats: Shows statistics related to the current user.

projects: Lists the projects associated with the current user.

socials: Provides social media information for the current user. For instance, <br/> type "github" to display GitHub information.
Available commands:
    - GitHub
    - LinkedIn

clear: Clears the terminal screen.

</pre>
`,

  FALLBACK: `<br /><span id="terminal">Unknown command(s). Please utilize the available commands to explore further. Type <strong>help</strong> for assistance</span> <br/>`,
  ABOUT: `
<br/>

<pre id="terminal">

_______________   ____
\_   _____/\   \ /   /
 |    __)   \   Y   / 
 |     \     \     /  
 \___  /      \___/   
     \/               

</pre>

<pre id="terminal" style="width: 100%; word-break: break-all; text-wrap: pretty">${aboutText}</pre>

<br/>

`,
  TIMELINE: `
  <br/>
  <pre id="terminal">
    |
    |
    |
    • Front end developer at Survey Sparrow ( MAY 2023 - present )
    |
    |
    |
    |
    |
    • Front end developer Intern at Survey Sparrow ( JAN 2023 - MAY 2023 )
    |
    |
    |
    |
    • Software development intern at panTech ( AUG 2022 - AUG 2023 )
    |
    |
    |
  </pre>
  `,
  STATS: `
  <br/>
  <div id="terminal">
  <p>---- STATS ----</p>
  <br />
  <span>React -> ( React, Redux, Redux Toolkit ,tanstackquery, framer motion )</span>
    <br />

  <span>Typescript</span>
    <br />

  <span>Next JS</span>
    <br />
  <span>Node JS</span>
  <br />
  <span>Express JS</span>
  <br />
  <span>Postgres</span>
  <br />
  <span>Mongo DB</span>
    <br />
  <span>Python</span>
    <br />
  <span>JAVA</span>
  
  </div>
  `,
  PROJECTS: `
  <span>----- Projects -----</span>
<div id="terminal">
<div id="projects">
<strong>Fitness Blog Application</strong>
<span>Full stack fitness blog app done using react js , mongo db , node js and express, this site can allows fitness enthusiast to follow fitness post on this page</span>
<a style="text-decoration: underline" href="https://github.com/febinvarghese1/Fitness-blog-app" target="_blank">Github</a>
</div>
<br />
<div id="projects">
<strong>Google Search Clone</strong>
<span>Google search clone done using react js , tailwind css, and rapid api to fetch data , this application is a clone of the google search engine which fetch data using api</span>
<a style="text-decoration: underline" href="https://github.com/febinvarghese1/Fitness-blog-app" target="_blank">Github</a>
</div>
<br/>
<div id="projects">
<strong>Google Search Clone</strong>
<span>Google search clone done using react js , tailwind css, and rapid api to fetch data , this application is a clone of the google search engine which fetch data using api</span>
<a style="text-decoration: underline" href="https://github.com/febinvarghese1/Google-Search-Clone" target="_blank">Github</a>
</div>
<br/>
<div id="projects">
<strong>Crypto Price Tracker app</strong>
<span>This is a crypto price tracker application done using react js and basic css, this application fetch real time crypto currency prices , this is done using the help of the api</span>
<a style="text-decoration: underline" href="https://github.com/febinvarghese1/CryptoCurrency-price-tracker-app" target="_blank">Github</a>
</div>
<br/>
<p>For Further More Projects checkout my Github profile: <a style="text-decoration: underline" href="https://github.com/febinvarghese1" target="_blank">Github</a></p>
</div>

  `
};

export const SOCIAL_LIST = [
  {
    id: 1,
    text: 'Github',
    action: "https://github.com/febinvarghese1"
  },
  {
    id: 2,
    text: 'Linkedln',
    action: "https://www.linkedin.com/in/febin-varghese-0530191b8"
  }
]

export const HEADER_LIST  = [
  {
    id: 1,
    text: 'Terminal',
    action: ACTIONS.OPEN_TERMINAL
  },
  {
    id: 2,
    text: 'File Explorer',
    action: ACTIONS.OPEN_FOLDER
  },
  {
    id: 3,
    text: 'Notepad',
    action: ACTIONS.OPEN_NOTEPAD
  },
  {
    id: 4,
    text: 'Settings',
    action: ACTIONS.OPEN_SETTINGS
  }
]


export const WALLPAPER = [
  {
    id: 1,
    link: "https://images.unsplash.com/photo-1485470733090-0aae1788d5af?q=80&w=2434&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    link: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 3,
    link: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 4,
    link: "https://images.unsplash.com/photo-1562176566-e9afd27531d4?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 5,
    link: "https://images.unsplash.com/photo-1583156340160-7867f31285d5?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 6,
    link: "https://images.unsplash.com/photo-1557264322-b44d383a2906?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
]