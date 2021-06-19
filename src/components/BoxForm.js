import React from 'react';

function BoxForm(props) {
  return (
    <div className="container contact ">
      <form onClick={props.clickFN}>
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
                    type="text"
                    className="form-control"
                    id="fname"
                    placeholder="Ingrese su nombre"
                    name="fname"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="lname">
                  Apellido:
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="lname"
                    placeholder="Ingrese su apellido"
                    name="lname"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="email">
                  Email:
                </label>
                <div className="col-sm-10">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Ingrese su email"
                    name="email"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="comment">
                  Mensaje:
                </label>
                <div className="col-sm-10">
                  <textarea
                    className="form-control"
                    rows="5"
                    id="comment"
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
