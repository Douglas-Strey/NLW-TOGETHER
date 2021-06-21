type ButtonProps = {
    children?: string; // o ponto de interrogação deixa a variável opcional
}

export function Button(props: ButtonProps) { // named export
    return (
        <button>{props.children || 'Default'}</button>
    )
}