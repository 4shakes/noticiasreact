import React from 'react';
import Noticia from './Noticia';

const ListaNoticias = ({ noticias }) => {
      return (
            <div className="row">
                  {noticias.map(noticia => (
                        <Noticia
                              key={noticia.url}
                              noticia={noticia.title} />
                  ))}
            </div>
      );
};

export default ListaNoticias;