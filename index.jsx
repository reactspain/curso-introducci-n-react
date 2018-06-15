'use strict'
// 0.- Nuestro primer componente
class Hola extends React.Component {
    render() {
        return <h1>¡Hola Mundo!</h1>;
    }
}
// 1.- Renderizar nuestra App
ReactDOM.render(
    <Hola />,
    document.getElementById("root")
)