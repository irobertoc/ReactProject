



const SelectColor = ({setColor}) => {

    
    const handleSelect = (e) => {
        setColor(e.target.value)

    }

    return(
        <select onChange={handleSelect}>
            <option value="Negro">Negro</option>
            <option value="Blanco">Blancco</option>
            <option value="Rojo">Rojo</option>
        </select>

    )

}

export default SelectColor