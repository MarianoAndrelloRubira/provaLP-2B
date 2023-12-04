import Menu from "./menu";

export default function pagina(props) {
    return (
        <>
            <Menu />
            <div>
                {
                }
                {props.children} 
            </div>
        </>
    )
}
