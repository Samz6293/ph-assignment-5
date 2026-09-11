export interface Technology {
    id: string,
    name: string,
    category: string
    description: string,
    icon: string,
    rating: number,
    difficulty: string,
    badge: string
}

export interface TechStackProps {
    technologiesPromise: Promise<Technology[]>
}