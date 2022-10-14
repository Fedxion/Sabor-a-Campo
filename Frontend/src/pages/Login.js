import React, {  useState } from "react";
const { saveUser, UserTableData} = require("../services/apiCall");


const HomePage = () => {
  /**
   * Declaración hook de estado estado usado para actualizar la tabla cuando se agrega un nuevo estudiante
   */
  const [refresh, setRefresh] = useState(0);

  /**
   * Declaración hook de estado usado para almacenar los datos provenietes de la BD para llenar la tabla estudiantes
   */
  const [studentTableData, setUserTableData] = useState({ User: [] });

  /**
   * Declaración de hook de estado usado para almacenar los datos de cada input del form
   */
  const [UserFormData, setUserFormData] = useState({
    email: "",
    password: "",
  });
  /**
   * Hook de efecto usado para buscar los datos de la base de datos y se ejecuta cada vez que la variable de estado "refresh" se actualice
   */
//   useEffect(() => {
//     fillTableStudent().then((response) => {
//       setStudentTableData(response.data);
//     });
//   }, [refresh]);

  /**
   * Función que captura el cambio de valor en cada input del form
   * @param {*} event
   */
  const handleInputChange = (event) => {
    setUserFormData({
      ...UserFormData,
      [event.target.name]: event.target.value, ///// ACA VA . EMAIL?????
    });
  };

  /**
   * Función que ejecuta el método POST saveStudent para guardar un estudiante al hacer submit
   * @param {*} event
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    saveUser(UserFormData.email, UserFormData.password).then((response) => {
      //if
    });
  };

  /**
   * El form posee un atributo "onSubmit" el cual ejecuta la función "handleSubmit" al momento de clickear en el botón
   * Cada input tiene asignado un atributo "onChange" el cual ejecuta la función "handleInputChange" cuando
   * se modifica el mismo (input).
   */
  return (
    <>
      <div className="container-sm w-30">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="text"
              placeholder="email"
              className="form-control"
              onChange={handleInputChange}
              name="email"
            ></input>
          </div>
          <div className="row">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="text"
              placeholder="password"
              className="form-control"
              onChange={handleInputChange}
              name="password"
            ></input>
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-dark btn-submit mb-4">
              ENVIAR
            </button>
          </div>
        </form>
      </div>

      <div className="container-sm">
        <table class="table table-dark table-striped">
          <thead>
            <tr>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {/**
             * La función map se ejecuta sobre la variable de estado que contiene los datos traidos de la base de datos
             * y realizamos un "map" para llenar nuestra tabla por cada elemento dentro del array de estudiantes
             */}
            {UserTableData.User.map((User) => (
              <tr>
                <td>{User.email}</td>
                <td>{User.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default HomePage;
