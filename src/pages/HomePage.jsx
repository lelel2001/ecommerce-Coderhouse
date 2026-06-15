import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import ContadorContainer from "../components/ejemplos/Titulo/ContadorContainer/ContadorContainer"

const HomePage = () => {
    return (
    <div>
        <ItemListContainer saludo="Los mejores mates de Argentina" />
        <ContadorContainer />
    </div>
    )
}

export default HomePage