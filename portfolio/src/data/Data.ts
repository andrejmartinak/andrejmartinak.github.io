export type Project ={
    name: string
    color: string
    status: string
    role: string
    description: string
    imageUrl: string
    imageSide: 'left' | 'right',
    url: string
    urlText?: string,
    techStack: string[]
}

const KOTLIN = 'Kotlin'
const KOTLIN_MULTIPLATFORM = 'Kotlin Multiplatform'
const JAVA = 'Java'
const REACT_NATIVE = 'React Native'
const EXPO = 'Expo'
const FIREBASE = 'Firebase'
const UX = 'UX'
const BLOCKCHAIN = 'Blockchain'

export const createProjects = () => {
    const projects: Project[] = [
        {
            name: 'MoonPos',
            color: '#FF9F00',
            description: 'Mobile cryptocurrency Point-of-Sale app. n the auto layout properties (right sidebar), adjust the padding to control how much space is between the text and the background edges. This will ensure that the background resizes based on the text length plus the padding.',
            imageUrl: require("../asset/face.png"),
            status: 'Released',
            role: 'Founder',
            imageSide: 'left',
            url: 'https://moonposapp.com',
            techStack: [KOTLIN, KOTLIN_MULTIPLATFORM, FIREBASE, BLOCKCHAIN, UX, EXPO]
        },
        {
            name: 'ČSOB Smart',
            color: '#1392CC',
            description: 'Mobile cryptocurrency Point-of-Sale app. n the auto layout properties (right sidebar), adjust the padding to control how much space is between the text and the background edges. This will ensure that the background resizes based on the text length plus the padding.',
            imageUrl: require("../asset/face.png"),
            status: 'Released',
            role: 'Senior Android Developer',
            imageSide: 'right',
            url: 'https://play.google.com/store/apps/details?id=cz.csob.smart',
            urlText: 'Google Play',
            techStack: [KOTLIN, KOTLIN_MULTIPLATFORM, FIREBASE, BLOCKCHAIN, UX, EXPO]
        },
    ];
    return projects;
}