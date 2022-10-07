export interface TaskProps{
    text: string,
    concluded: boolean,
    onRemove: () => void;
}

export interface TaskObj{
    id: number,
    text: string,
    concluded: boolean,
}