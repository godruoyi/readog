export interface Tweet {
    id?: string
    author?: string

    url: string
    element: HTMLElement
}

export interface Link {
    source_url: string
    url: string
    title: string
    description: string
}
