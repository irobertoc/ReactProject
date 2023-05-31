export const Usuario = ({nombre, edad, curso, rol}) => {
    //const { nombre, edad, curso, rol} = props
   // console.log(props)
   //export const Usuario = () => {

    return (

        <div>
            <h3>{nombre}</h3>
            <p>{edad}</p>
            <p>{curso}</p>
            <p>{rol}</p>
            <hr/>
        </div>
    )
}