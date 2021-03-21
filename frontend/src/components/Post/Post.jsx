import React, { useState } from 'react';
import ButtonM from '../ButtonM/ButtonM';

function Post({ res }) {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="post">
      <h3>{res.title}</h3>
      <p>{res.author}</p>

      { isShow
        ? <p>{res.description}</p>
        : <ButtonM text="Mutass többet" click={() => setIsShow(true)} />}
    </div>
  )
}

export default Post
