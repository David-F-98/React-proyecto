import "./ListaOpciones.css"

const ListaOpciones = (props) =>{
    // .map unicamente se pueden con arreglos
    // Metodo map -> arreglo.map( (equipo, index) => {
    // return <option></option>
    // })
    const equipos = [
        "Programación",
        "Front End",
        "Data Science",
        "Devops",
        "UX y Diseño",
        "Móvil",
        "Innovación y Gestión"
    ]

    const manejarCambio = (e) => {
        console.log ("cambio", e.target.value)
        props.actualizarEquipo(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disable defaultValue="" hidden>Seleccionar Equipo </option>
            { equipos.map((equipos, index) => <option key=  {index} value={equipos}>{equipos}</option>)
            }
        </select>
    </div>
}

export default ListaOpciones