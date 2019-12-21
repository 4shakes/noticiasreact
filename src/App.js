import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import ListaNoticias from './components/ListaNoticias';
import Formulario from './components/Formulario';


class App extends Component {

  state = {
    noticias: []
  }

  //aca se realiza el llamado a las apis 
  //en el metodo de ciclo de vida componentDidMount()
  componentDidMount() {
    this.consultarNoticias();

  }

  consultarNoticias = async (categoria = 'general') => {
    const url = `
    https://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=3a71880af2cd409cbc4e3d4fec8a39f2`;

    const respuesta = await fetch(url);
    const noticias = await respuesta.json();

    this.setState({
      noticias: noticias.articles
    })


  }

  render() {
    return (
      <Fragment>
        <Header titulo="Noticias React API" />

        <div className="container white contenedor-noticias">
          <Formulario consultarNoticias={this.consultarNoticias} />
          <ListaNoticias noticias={this.state.noticias} />
        </div>
      </Fragment>

    );
  }
}

export default App;