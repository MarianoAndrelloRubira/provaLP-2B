import Menu from "./menu";

export default function pagina(props) {
    return (
        <>
            <Menu />
            <div>
                {
                    // filhos da página
                }
                {props.children} 
            </div>
        </>
    )
}
