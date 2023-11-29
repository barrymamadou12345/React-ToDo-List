import React, { useEffect, useRef, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import "./Css/style.css";
import "./index.css";
// import { Taches } from './composant/Taches';
// import { AiFillDelete } from "react-icons/ai";

function App() {
  const [task, setTask] = useState([]);
  const [newTask, setnewTask] = useState("");

  /////////// comportement ///////////////

  const Supprimer = (index) => {
    const destructure = [...task];
    destructure.splice(index, 1);
    setTask(destructure);
  };

  const leChangement = (ev) => {
    const nomTache = ev.target.value;
    setnewTask(nomTache);
  };

  const Ajouter = (e) => {
    e.preventDefault();
    if (newTask.trim() === "") {
      // Afficher une alerte
      alert("Veillez Ecrire le Nom de La Tache");
    } else {
    setTask([...task, newTask]);
    setnewTask("");
    }
  };

  return (
    <div className=" grand py-10">
      <div className="W-full flex justify-around items-center ">
        <div className="imgeContent max-lg:hidden">
          <img src="./images/meteo.png" alt="image" />
        </div>

        <div className=" NomApp max-md:w-7/12 max-md:ms-5">
          <div className=" w-full flex items-center">
            <div className="tiret bg-white w-1/12 mx-4 "></div>
            <h1 className="text-white">TO-DO NOW</h1>
            <div className="tiret bg-white w-1/12 mx-4"></div>
          </div>


          <div className=" flex items-center w-full">
            <div className="tiret bg-white w-3/12 "></div>
            <h2 className="text-white text-3xl mx-4">
              <FaRegEdit />
            </h2>
            <div className="tiret bg-white w-3/12"></div>
          </div>
        </div>
      </div>

      <div className=" w-full py-4 mt-8 w-8/12 m-auto flex justify-center">
        <div className="flex w-6/12 max-lg:w-9/12 max-lg:me-24 conta">
          <form action="submit" className=" w-full" onSubmit={Ajouter}>
            <input // Mon Input
              type="text"
              value={newTask}
              onChange={leChangement}
              className=" rounded-2xl outline-none py-2 ps-4 pe-12 leInput"
            />

            <button
              className=" rounded-2xl p-2 text-white font-bold bouton"
              onClick={Ajouter}
            >
              Add Task
            </button>
          </form>
        </div>
      </div>

      <div>
        <div className="W-full flex justify-center mt-6 mb-16">
          <div className="trait"></div>
        </div>
        <ul className="contenu">
          {task.map((elem, index) => (
            <li
              className=" flex justify-between w-full m-auto mb-4 items-center ps-6 listo"
              key={index}
            >
              <p className="NomTache">{elem}</p>
              <button onClick={() => Supprimer(index)} className="supprime">
                <RiDeleteBin6Line className="text-black" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
