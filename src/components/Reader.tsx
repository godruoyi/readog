export interface IGlobalDialogProps {
    link: string
    title?: string
}

export function Reader(props: IGlobalDialogProps) {
    return (
        <div>
            <h1>{props.title}</h1>
            <h1>{props.link}</h1>
        </div>
    )
}
