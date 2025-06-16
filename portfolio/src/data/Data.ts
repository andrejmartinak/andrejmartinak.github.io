export type Project ={
    name: string
    color: string
    status: string
    role: string
    description: string
    imageUrl: string
    logoUrl?: string,
    url?: string
    urlText?: string,
    techStack: string[]
}

const KOTLIN = 'Kotlin'
const KOTLIN_MULTIPLATFORM = 'Kotlin Multiplatform'
const COROUTINES = 'Coroutines'
const JETPACK_COMPOSE = 'Jetpack Compose'
const JAVA = 'Java'
const REACT_NATIVE = 'React Native'
const EXPO = 'Expo'
const FIREBASE = 'Firebase'
const UX = 'UX'
const BLOCKCHAIN = 'Blockchain'
const DESIGN = 'Design'
const CLEAN_ARCHITECTURE = 'Clean Architecture'
const REST = 'REST'
const GRAPH_QL = 'GraphQL'
const TDD = 'Test Driven Development'
const JENKINS = 'Jenkins'
const ANDROID = 'Android'
const SWIFT = 'Swift'
const IOS = 'iOS'

export const createPersonalProjects = () => {
    return [
        {
            name: 'MoonPos',
            color: '#FF9F00',
            description: 'Mobile cryptocurrency Point-of-Sale app. I have created the concept, designed UI and created the app as well as the website and Google Play Store promo materials. Prepared marketing and business strategy and got accepted to Google for Startups Academy. Successfully launched MVP and verified the concept by having up to 100 monthly users worldwide.',
            imageUrl: require("../asset/moonpos.png"),
            logoUrl: require("../asset/moonpos-icon.png"),
            status: 'Released',
            role: 'Founder',
            url: 'https://moonposapp.com',
            urlText: 'Check it out at moonposapp.com',
            techStack: [KOTLIN, KOTLIN_MULTIPLATFORM, COROUTINES, FIREBASE, BLOCKCHAIN, UX, DESIGN, CLEAN_ARCHITECTURE, REST]
        },
        {
            name: 'HomeBerry',
            color: '#FF4081',
            description: 'HomeBerry is a simple Android app that allows you to control your Raspberry PI through a REST API. It allows users to import/export their settings and launch the requests via App shortcuts in the launcher. The app was featured in Tom\'s Hardware website.',
            imageUrl: require("../asset/homeberry.png"),
            logoUrl: require("../asset/homeberry-icon.png"),
            status: 'Released',
            role: 'Creator',
            url: 'https://github.com/AmkSk/homeberry',
            urlText: 'View on GitHub',
            techStack: [KOTLIN, DESIGN, REST]
        },
        {
            name: 'WIP',
            color: '#42B047',
            description: 'A beautiful-looking gamified habit tracker. Based on scientific research, it is designed to make learning new habits easier and overcoming bad ones more intuitive. Currently under development, I am working on an MVP.',
            imageUrl: require("../asset/game-of-life.png"),
            logoUrl: require("../asset/game-of-life-icon.png"),
            status: 'Work in Progress',
            role: 'Creator',
            techStack: [REACT_NATIVE, EXPO, DESIGN, UX]
        },
    ]
}

export const createProjects = () => {
    const projects: Project[] = [
        {
            name: 'Notino',
            color: '#DC0069',
            description: 'Architected and led the multiplatform transformation of Notino, one of Europe\'s largest e-commerce platforms. Designed the complete KMP integration strategy, roadmap, and architecture for both Android and iOS teams. Modernized the iOS infrastructure by migrating from CocoaPods to SPM, rebuilt CI/CD pipelines for multiplatform deployment, and mentored teams on KMP adoption while continuing to deliver business-critical features.',
            imageUrl: require("../asset/notino.png"),
            logoUrl: require("../asset/notino-icon.png"),
            status: 'In Progress',
            role: 'Senior Mobile Developer, Technical Lead',
            techStack: [KOTLIN, ANDROID, SWIFT, IOS, KOTLIN_MULTIPLATFORM, CLEAN_ARCHITECTURE]
        },
        {
            name: 'HAVE Bank',
            color: '#2B1E31',
            description: 'A neo-banking FinTech app for a German startup. Joining the team, I have enforced and implemented Single Activity Pattern, Jetpack Navigation, testing, and led the transition from XML Views to Compose. The business logic was implemented in Kotlin Multiplatform. I was also conducting comprehensive research on optimal mobile UX, proposing key UI updates to improve user-friendliness across various screens. I helped facilitating effective communication with the design team and product owners to align on project goals and execution, and helped streamlining development processes through initiating monthly retrospective and feedback sessions and kick-off meetings.',
            imageUrl: require("../asset/have.png"),
            logoUrl: require("../asset/have-icon.png"),
            status: 'Discontinued',
            role: 'Senior Android Developer, UX Research',
            techStack: [KOTLIN, KOTLIN_MULTIPLATFORM, COROUTINES, JETPACK_COMPOSE, GRAPH_QL, JENKINS, UX ]
        },
        {
            name: 'ČSOB Smart',
            color: '#1392CC',
            description: 'Smartbaking app for the Czech branch of the KBC bank. My responsibility was architectural design, implementation and maintenance of multiple large app features - Login, Transaction Authorization, App Settings, Logout and 2FA. The team has utilized the CLEAN Architecture. My other responsibilities were code reviews for other team members (5 SCRUM teams), mentoring of new project members.',
            imageUrl: require("../asset/csob.png"),
            logoUrl: require("../asset/csob-icon.png"),
            status: 'Released',
            role: 'Senior Android Developer',
            url: 'https://play.google.com/store/apps/details?id=cz.csob.smart',
            urlText: 'View on Google Play',
            techStack: [KOTLIN, CLEAN_ARCHITECTURE, COROUTINES, REST]
        },
        {
            name: 'Škoda Connect',
            color: '#4BA82E',
            description: 'Mobile app for controlling Škoda vehicles and their infotainment tablets. Starting the project, I have converted legacy Java code to CLEAN Architecture in Kotlin, resulting in better maintainability, code readability and faster feature development. The development followed TDD. I have also maintained an UI SDK used by 5 other teams and an open-source Android UI component library.',
            imageUrl: require("../asset/skoda.png"),
            logoUrl: require("../asset/skoda-icon.png"),
            status: 'Legacy',
            role: 'Android Developer',
            url: 'https://play.google.com/store/apps/details?id=cz.skodaauto.myskoda',
            urlText: 'View on Google Play',
            techStack: [KOTLIN, JAVA, CLEAN_ARCHITECTURE, COROUTINES, REST, TDD, JENKINS]
        },
    ];
    return projects;
}