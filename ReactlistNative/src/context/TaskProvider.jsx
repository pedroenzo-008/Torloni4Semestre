import { useEffect, useState } from "react";
import { TaskContext } from "./TaskContext";
import axios from "axios";
import api from "../../service";
export const TaskProvider = ({ children }) => {
  const [listagemTarefas, setListagemTarefas] = useState([]);
  const [idEdit, setIdEdit] = useState(null);
  const [Editar, setEditar] = useState(false);
  const [taskValue, setTaskValue] = useState("");
  const cleanForm = () => {
    setTaskValue("");
    setEditar(false);
    setIdEdit(null);
  };
  const getTasks = async () => {
    try {
      const ApiReturn = await api.get("/taskPoint");
      const dados = ApiReturn.data;
      setListagemTarefas(dados);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };
  const objCad = {
    descricao: taskValue,
  };
  const cadTask = async () => {
    try {
      const ApiReturn = await api.post(
        "/taskPoint",
        objCad,
      );
      getTasks();
      cleanForm();
    } catch (error) {
      console.log(error);
    }
  };
  const delTask = async (id) => {
    try {
      const ApiReturn = await api.delete(
        `/taskPoint/${id}`,
      );
      getTasks();
      cleanForm();
    } catch (error) {
      console.log(error);
    }
  };
  const preEdit = (task) => {
    setIdEdit(task.id);
    setEditar(true);
    setTaskValue(task.descricao);
  };
  const Edit = async(idEdit) => {
    try {
      const ApiReturn = await api.put(
        `/taskPoint/${idEdit}`,
        objCad,
      );
      getTasks();
      cleanForm();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <TaskContext.Provider
      value={{
        listagemTarefas,
        setListagemTarefas,
        getTasks,
        cadTask,
        taskValue,
        setTaskValue,
        delTask,
        preEdit,
        Edit,
        idEdit,
        setIdEdit,
        Editar,
        setEditar,
        cleanForm
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
