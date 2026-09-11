export interface Technology {
    id: string,
    name: string,
    category: string
    description: string,
    icon: string,
    rating: number,
    color: string,
    difficulty: string,
    badge: string
}

export interface TechStackProps {
    technologiesPromise: Promise<Technology[]>
}

export interface TechProps {
    technology: Technology
}