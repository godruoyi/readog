import type { ILink } from '../types'

export interface IReaderBoxProps extends ILink {
}

export function ReaderBox(props: IReaderBoxProps) {
    return (
        <div>
            <h1>{props.title}</h1>
            <h1>{props.url}</h1>
            <h1>{props.selectionText}</h1>
            <h1>{props.selectionUrl}</h1>
        </div>
    )
}
