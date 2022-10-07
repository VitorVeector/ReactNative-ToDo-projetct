export interface TaskProps{
    text: string,
    onRemove: () => void;
    concluded: boolean,
    toggleConcluded: () => void
}

export interface TaskObj{
    id: number,
    text: string,
    concluded: boolean
}