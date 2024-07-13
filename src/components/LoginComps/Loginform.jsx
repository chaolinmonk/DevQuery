import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Loginform.css";
import Button from '../GeneralComps/button';
import Input from '../GeneralComps/Input';
import axios from 'axios';

export default function Loginform({ login = true }) {
  const [isLogin, setIsLogin] = useState(login);
  const [role, setRole] = useState(1);
  const [area,setArea] = useState(1);
  const navigate = useNavigate(); // Usar el hook useNavigate

  const handleClickLog = () => {
    setIsLogin(!isLogin);
  };

  const handleChangeSelect = (event) => {
    setRole(event.target.value);
  };
  const handleChangeSelect_AREA = (event) => {
    setArea(event.target.value);
  };
  const logIn = () => {
    let inputs = document.getElementsByClassName("Ginput");
    axios.post('http://127.0.0.1:8000/login/', {
      "username": inputs[0].value,
      "password": inputs[1].value
    })
    .then(response => {
      localStorage.setItem('token', response.data.token);
      navigate('/'); // Redirigir al usuario
    })
    .catch(error => {
      console.error('Error al iniciar sesión:', error);
    });
  };

  const registerClient = () => {
    let inputs = document.getElementsByClassName("Ginput");
    let data = {
      "username": inputs[0].value,
      "email": inputs[1].value,
      "userpfp": "profile.jpg",
      "password": inputs[2].value,
      "roluser": role,
      "is_staff": false
    };

    axios.post('http://127.0.0.1:8000/register/', data)
    .then(response => {
      console.log('Usuario registrado:', response.data);

      // Obtener información del usuario recién registrado
      axios.get('http://127.0.0.1:8000/user/')
        .then(userinfo => {
          console.log(userinfo.data.user)
          const user = userinfo.data.find(user => user.username === inputs[0].value);
          console.log(user)
          if (user) {
            console.log("Nombre de usuario!!!", user.userid)
            let data2 = {
              "userid": user.userid,
              "clientedocid": inputs[6].value,
              "clientenombre": inputs[3].value,
              "clienteappaterno": inputs[4].value,
              "clienteapmaterno": inputs[5].value,
              "clientefecnac": inputs[8].value,
              "clientefono": inputs[7].value,
              "clienteempresa": 2
            };
            axios.post('http://127.0.0.1:8000/cliente/', data2)
              .then(response => {
                console.log('Cliente registrado:', response.data);
              })
              .catch(error => {
                console.error('Error al registrar el cliente:', error);
              });
          }
        })
        .catch(error => {
          console.error('Error al obtener información del usuario:', error);
        });

    })
    .catch(error => {
      console.error('Error al registrar el usuario:', error);
    });
  };
  const registerTec = ()=>{
    let inputs = document.getElementsByClassName("Ginput");
    let data = {
      "username": inputs[0].value,
      "email": inputs[1].value,
      "userpfp": "profile.jpg",
      "password": inputs[2].value,
      "roluser": role,
      "is_staff": false
    };

    axios.post('http://127.0.0.1:8000/register/', data)
    .then(response => {
      console.log('Usuario registrado:', response.data);

      // Obtener información del usuario recién registrado
      axios.get('http://127.0.0.1:8000/user/')
        .then(userinfo => {
          console.log(userinfo.data.user)
          const user = userinfo.data.find(user => user.username === inputs[0].value);
          console.log(user)
          if (user) {
            console.log("Nombre de usuario!!!", user.userid)
            let data2 = {
              "userid": user.userid,
              "tecdocid": inputs[6].value,
              "tecnombre": inputs[3].value,
              "tecappaterno": inputs[4].value,
              "tecapmaterno": inputs[5].value,
              "tecfecnac": inputs[7].value,
              "tecarea": area,
              "tecsupervisor": null
            };
            axios.post('http://127.0.0.1:8000/tecnico/', data2)
              .then(response => {
                alert('Tecnico registrado:', response.data);
              })
              .catch(error => {
                console.error('Error al registrar el cliente:', error);
              });
          }
        })
        .catch(error => {
          console.error('Error al obtener información del usuario:', error);
        });

    })
    .catch(error => {
      console.error('Error al registrar el usuario:', error);
    });
  }
  return (
    <div>
      {isLogin ? (
        <div className='Loginform'>
          <h1 id='title'>Acceder</h1>
          <p>Correo Electrónico</p>
          <Input className="Ginput" Iwidth={'99%'} />
          <p>Contraseña</p>
          <Input className="Ginput" password={true} Iwidth={'99%'} />
          <Button func={logIn} text='Acceder' bgc='#ff0000' />
          <Link onClick={handleClickLog} id='access_error'>
            Registrar cuenta
          </Link>
        </div>
      ) : (
        <div className='Regform'>
          <h1 id='title'>Registrar</h1>
          <p>Nombre Usuario</p>
          <Input className="Ginput" Iwidth={'99%'} /> {/* 0 */}
          <p>Correo Electrónico</p>
          <Input className="Ginput" Iwidth={'99%'} /> {/* 1 */}
          <p>Contraseña</p>
          <Input className="Ginput" password={true} Iwidth={'99%'} /> {/* 2 */}
          <p>Rol</p>
          <select name="role" id="roleSelect" onChange={handleChangeSelect}>
            <option value="1">Cliente</option>
            <option value="2">Técnico</option>
            <option value="3">Sup. Técnico</option>
            <option value="4">Administrador</option>
          </select>
          {role == 1 && (
            <>
              <p>Nombre</p>
              <Input className="Ginput" Iwidth={'99%'} /> {/* 3 */}
              <p>Ap. Paterno</p>
              <Input className="Ginput" Iwidth={'99%'} /> {/* 4 */}
              <p>Ap. Materno</p>
              <Input className="Ginput" Iwidth={'99%'} /> {/* 5 */}
              <p>Rut</p>
              <Input className="Ginput" Iwidth={'99%'} /> {/* 6 */}
              <p>Telefono</p>
              <Input className="Ginput" Iwidth={'99%'} /> {/* 7 */}
              <p>Fecha Nacimiento "AAAA-MM-DD"</p>
              <Input className="Ginput" Iwidth={'99%'} /> {/* 8 */}
              <p>Empresa</p>
              <select name="empresa" id="" >
                <option value="2">Empresa Ficticia SPA</option>
              </select>
              <Button func={registerClient} text='Registrarse' bgc='#ff0000' />
              <Link onClick={handleClickLog} id='access_error'>
                Probar accesos
              </Link>
            </>
          )}
          {role !== 1 &&(
            <>
              <p>Nombre</p>
              <Input className="Ginput" Iwidth={'99%'} /> {/* 3 */}
              <p>Ap. Paterno</p>
              <Input className="Ginput" Iwidth={'99%'} /> {/* 4 */}
              <p>Ap. Materno</p>
              <Input className="Ginput" Iwidth={'99%'} /> {/* 5 */}
              <p>Rut</p>
              <Input className="Ginput" Iwidth={'99%'} /> {/* 6 */}
              <p>Fecha Nacimiento "AAAA-MM-DD"</p>
              <Input className="Ginput" Iwidth={'99%'} /> {/* 7 */}
              <p>Empresa</p>
              <select name="empresa" id="" onChange={handleChangeSelect_AREA}>
                <option value="1">Soporte Hardware</option>
                <option value="1">Soporte Software</option>
                <option value="1">Redes y telecomunicaciones</option>
              </select>
              <Button func={registerTec} text='Registrarse' bgc='#ff0000' />
              <Link onClick={handleClickLog} id='access_error'>
                Probar accesos
              </Link>
            </>
          )}
          
        </div>
      )}
    </div>
  );
}
