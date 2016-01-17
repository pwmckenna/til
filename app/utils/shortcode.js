import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

const vimeo = text => (
  text.replace(/\[vimeo (\d+)\]/gm, (match, video) => (
    renderToStaticMarkup(
      <iframe
        className="vimeo"
        allowFullScreen
        frameBorder="0"
        height="500vh"
        src={`https://player.vimeo.com/video/${video}`}
        width="100%"
      />
    )
  ))
);

export default text => vimeo(text);
