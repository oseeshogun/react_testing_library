import { useState } from "react";

const Header = () => {

    const [title, setTitle] = useState('Kinshasa Digital')

    const addAcademy = () => {
        setTitle('Kinshasa Digital Academy')
    }

  return (
    <>
      <h1>Site de {title}</h1>
      <button onClick={addAcademy}>Add academy</button>
    </>
  );
};

export default Header;
