import React from 'react';

const Noticia = ({ noticia }) => {

      //extraer los datos
      const { urlToImage, url, title, description, source } = noticia;
      return (
            <div className="col s12 m6 l4">
                  <div className="card">
                        <div className="card-image">
                              <img src={urlToImage} alt={title} />
                        </div>

                        <div className="card-content">
                              <h4 className="">{title}</h4>
                              <p>{description}</p>
                        </div>
                        <div className="card-action">
                              {/* abre en otra pestania y no presenta vulnerabilidades con el rel */}
                              <a href={url} target="_blank" rel="noopener noreferrer" className="waves-effect waves-light btn">Ver Noticia</a>
                        </div>
                  </div>
            </div>
      );
};

export default Noticia;