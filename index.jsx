'use strict'
// 0.- Nuestro primer componente
class Hola extends React.Component {
    // 5.- Añadimos la propiedad state
    state = {
        emoticono: '😎'
    }
    // 6.- Método donde utilizamos la funcion `setState`
    cambiarEmoticono() {
        let emoticono = '🤩'
        if (emoticono === this.state.emoticono){
            emoticono = '😎'
        }
        this.setState({emoticono})
    }
    render() {
        // 2.- mostrar la propiedad `quien`
        return <h1>¡Hola {this.props.quien} {this.state.emoticono}!</h1>;
    }
}
// 4.- Definimos un componente que renderiza otro componente
class App extends React.Component {
    render() {
        return <Hola quien="Universo React" />;
    }
}
// 1.- Renderizar nuestra App
ReactDOM.render(
    // 3.- Pasar un mensaje en la propiedad `quien`
    <App />,
    document.getElementById("root")
)