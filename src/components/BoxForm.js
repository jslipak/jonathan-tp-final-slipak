import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './BoxForm.css';
import { sendMail } from '../sendgrid';
import { useAlert } from 'react-alert';

function BoxForm(props) {
  const [msg, setMsg] = useState({});
  const history = useHistory();

  const Alert = useAlert();
  const makeMsg = (event, type) => {
    event.preventDefault();
    let temp = { ...msg };
    switch (type) {
      case 'name':
        temp.name = event.target.value;
        break;
      case 'email':
        temp.email = event.target.value;
        break;
      case 'familyName':
        temp.familyName = event.target.value;
        break;
      case 'body':
        temp.body = event.target.value;
        break;
      default:
        break;
    }
    setMsg(temp);
  };
  const sendMailtoSD = (event) => {
    event.preventDefault();
    Alert.show('Gracias por Escribirnos');
    const data = msg;
    sendMail(data);
    history.push('/');
  };

  return (
    <div className="container contact ">
      <form onSubmit={sendMailtoSD}>
        <div className="row">
          <div className="col-md-3 shadow-lg p-3 mb-5  rounded">
            <div className="contact-info">
              <img
                src="https://image.ibb.co/kUASdV/contact-image.png"
                alt="envelope"
              />
              <h2>{props.header}</h2>
              <h4>{props.msn}</h4>
            </div>
          </div>
          <div className="col-md-9 shadow-lg p-3 mb-5  rounded">
            <div className="contact-form">
              <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="fname">
                  Nombre:
                </label>
                <div className="col-sm-10">
                  <input
                    onChange={(e) => makeMsg(e, 'name')}
                    type="text"
                    className="form-control"
                    id="fname"
                    placeholder="Ingrese su nombre"
                    name="fname"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="lname">
                  Apellido:
                </label>
                <div className="col-sm-10">
                  <input
                    onChange={(e) => makeMsg(e, 'familyName')}
                    type="text"
                    className="form-control"
                    id="lname"
                    placeholder="Ingrese su apellido"
                    name="lname"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="email">
                  Email:
                </label>
                <div className="col-sm-10">
                  <input
                    onChange={(e) => makeMsg(e, 'email')}
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Ingrese su email"
                    name="email"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="comment">
                  Mensaje:
                </label>
                <div className="col-sm-10">
                  <textarea
                    onChange={(e) => makeMsg(e, 'body')}
                    className="form-control"
                    rows="5"
                    id="comment"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <button type="submit" className="btn btn-default">
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default BoxForm;
