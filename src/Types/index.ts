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

export interface InputTextProps {
    inputText: string,
    setText: (string) => void,
    handleAddTask: () => void,
}