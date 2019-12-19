import React, { Component, Fragment } from 'react';
import Header from './components/Header';

class App extends Component {

  state = {
    noticias: []
  }

  //aca se realiza el llamado a las apis 
  //en el metodo de ciclo de vida componentDidMount()
  componentDidMount() {
    this.consultarNoticias();

  }

  consultarNoticias = async () => {
    const url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=3a71880af2cd409cbc4e3d4fec8a39f2`;

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

        <div className="container white contenedor-noticias"></div>
      </Fragment>

    );
  }
}

export default App;