import React, { useState, useEffect } from 'react';
import Loader from '../Loader/Loader';
import Post from '../Post/Post';
import ButtonM from '../ButtonM/ButtonM';
import { v4 as uuidv4 } from 'uuid';
import '../../style/style.css';

function Homepage() {
  const [potato, setPotato] = useState([]);
  const [isShow, setIsShow] = useState(true);
  const [formShow, setFormShow] = useState(true)
  const [email, setEmail] = useState("");
  const [res, setRes] = useState(false);

  //behívom az adatokat
  useEffect(() => {
    setIsShow(false)

    fetch('./data/data.json')
      .then(response => response.json())
      .then(data => setPotato(data))
      .catch(error => setPotato(null))
      .finally(() => setIsShow(true))
  }, [])

  function submit() {
    console.log("lécciműködj")
    /*
    //POST request-et küldök az adatokkal
    fetch('./data/data.json', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email })
    }).then(response => setRes(true))
      .catch(err => setRes(false))
      .finally(() => setTimeout(setFormShow(false), 10000))
      */
  }

  return (
    <div className="homepage">
      <h1>Ez a címünk</h1>

      {
        !isShow
          ? <Loader />
          : potato
            ? potato.map(res => <Post key={uuidv4()} res={res} />)
            : <p>Bocsimá', nem vagyok jó</p>
      }

      {
        isShow && formShow &&
        <form>
          <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
          <ButtonM text="Iratkozz fel!" dis={!(email.includes("@") && email.includes("."))} click={() => submit()} />
        </form>
      }

    </div>
  )
}

export default Homepage
