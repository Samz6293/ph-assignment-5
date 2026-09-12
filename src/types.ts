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
    technologiesPromise: Promise<Technology[]>,
    selectedStack: Technology[],
    handleSelectedStack: (tech: Technology, isSelected: boolean) => void,
    handleClear: (isClear: boolean) => void
}

export interface TechProps {
    technology: Technology,
    selectedStack: Technology[],
    handleSelectedStack: (tech: Technology, isSelected: boolean) => void
}

export interface ChosenStacksProps {
    selectedStack: Technology[],
    handleSelectedStack: (tech: Technology, isSelected: boolean) => void
    handleClear: (isClear: boolean) => void
}

export interface ChosenStackProps {
    stack:Technology,
    handleSelectedStack: (tech: Technology, isSelected: boolean) => void
}