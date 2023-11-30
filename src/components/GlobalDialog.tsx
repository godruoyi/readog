import { FormControl } from 'baseui/form-control'
import { Input } from 'baseui/input'

export interface IGlobalDialogProps {
    link: string
    title?: string
}

export function GlobalDialog(props: IGlobalDialogProps) {
    return (
        <div>
            <FormControl>
                <Input
                    value={props.link}
                    placeholder="Controlled Input"
                    clearOnEscape
                />
            </FormControl>
            <FormControl>
                <Input
                    value={props.title}
                    placeholder="Controlled Input"
                    clearOnEscape
                />
            </FormControl>
        </div>
    )
}
