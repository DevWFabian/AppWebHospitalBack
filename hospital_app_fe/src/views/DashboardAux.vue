<template>
  <div class="about">
    <div class="container-fluid text-center color-bg">
      <div class="row">
        <div class="col ">
          <div class="container my-5 ">
            <div class="row ">
              <div class="col align-self-center">
                <div class="card text-center">
                  <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                      <button class="nav-link text-dark active" id="paciente-tab" data-bs-toggle="tab"
                        data-bs-target="#paciente-tab-pane" type="button" role="tab" aria-controls="paciente-tab-pane"
                        aria-selected="true">Paciente</button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button class="nav-link text-dark" id="familiar-tab" data-bs-toggle="tab"
                        data-bs-target="#familiar-tab-pane" type="button" role="tab" aria-controls="familiar-tab-pane"
                        aria-selected="false">Familiar</button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button class="nav-link text-dark" id="Medico-tab" data-bs-toggle="tab"
                        data-bs-target="#Medico-tab-pane" type="button" role="tab" aria-controls="Medico-tab-pane"
                        aria-selected="false">Medico</button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button class="nav-link text-dark" id="Enfermero-tab" data-bs-toggle="tab"
                        data-bs-target="#Enfermero-tab-pane" type="button" role="tab" aria-controls="Enfermero-tab-pane"
                        aria-selected="false">Enfermero</button>
                    </li>

                  </ul>
                  <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="paciente-tab-pane" role="tabpanel"
                      aria-labelledby="paciente-tab" tabindex="0">
                      <div class="card m-3">
                        <div class="card-header text-center">
                          <h2 class="card-title ">Formulario Paciente</h2>
                        </div>
                        <form class="needs-validation" v-on:submit.prevent="prosessPaciente">
                          <div class="card-body">
                            <div class="row justify-content-center">
                              <div class="col-md-5 my-1">
                                <div class="form-floating is-invalid" >
                                  <input v-model="user.username"  required type="text" class="form-control"
                                  v-bind:class="{'is-invalid': errorUsername}"  placeholder="Nombre Usuario">
                                  <label class="text-secondary opacity-75">Nombre Usuario</label>
                                </div>
                              </div>
                              <div class="col-md-5 my-1">
                                <div class="form-floating">
                                  <input v-model="user.password" required type="password" class="form-control"
                                  v-bind:class="{'is-invalid': errorPassword}" placeholder="Contraseña">
                                  <label class="text-secondary opacity-75">Contraseña</label>
                                </div>
                              </div>
                              <div class="col-md-5 my-1">
                                <div class="form-floating">
                                  <input v-model="user.account.Nombre" required type="text" class="form-control"
                                  v-bind:class="{'is-invalid': errorNombre}"  placeholder="Nombre">
                                  <label class="text-secondary opacity-75">Nombres</label>
                                </div>
                              </div>
                              <div class="col-md-5 my-1">
                                <div class="form-floating">
                                  <input v-model="user.account.Apellido" required type="text" class="form-control"
                                  v-bind:class="{'is-invalid': errorApellido}"  placeholder="Apellidos">
                                  <label class="text-secondary opacity-75">Apellidos</label>
                                </div>
                              </div>
                              <div class="col-md-5 my-1">
                                <div class="form-floating">
                                  <select v-model="user.account.Genero" class="form-select"
                                    v-bind:class="{'is-invalid': errorGenero}" aria-label="Floating label select example">
                                    <option value="Femenino">Femenino</option>
                                    <option value="Masculino">Masculino</option>
                                  </select>
                                  <label class="text-secondary opacity-75">Genero</label>
                                </div>
                              </div>
                              <div class="col-md-5 my-1">
                                <div class="form-floating">
                                  <input v-model="user.account.Telefono" required type="tel" class="form-control"
                                  v-bind:class="{'is-invalid': errorTelefono}"  placeholder="Telefono">
                                  <label class="text-secondary opacity-75">Telefono</label>
                                </div>
                              </div>
                              <div class="col-md-5 my-1">
                                <div class="form-floating">
                                  <select v-model="user.account.TipoDocumento" class="form-select"
                                    v-bind:class="{'is-invalid': errorTipoDocumento}" aria-label="Floating label select example">
                                    <option value="Cedula">Cedula</option>
                                    <option value="Cedula extranjera">Cedula extranjera</option>
                                    <option value="Tarjeta de identidad">Tarjeta de identidad</option>
                                  </select>
                                  <label class="text-secondary opacity-75">Tipo de documento</label>
                                </div>
                              </div>
                              <div class="col-md-5 my-1">
                                <div class="form-floating">
                                  <input v-model="user.account.NumeroDocumento" required type="text" class="form-control"
                                  v-bind:class="{'is-invalid': errorNumeroDocumento}"  placeholder="Numero de documento">
                                  <label class="text-secondary opacity-75">Numero de documento</label>
                                </div>
                              </div>
                              <div class="col-md-5 my-1">
                                <div class="form-floating">
                                  <input v-model="user.account.Ciudad" required type="text" class="form-control"
                                  v-bind:class="{'is-invalid': errorCiudad}"  placeholder="Ciudad">
                                  <label class="text-secondary opacity-75">Ciudad</label>
                                </div>
                              </div>
                              <div class="col-md-5 my-1">
                                <div class="form-floating">
                                  <input v-model="user.account.FechaNacimiento" required type="date" class="form-control"
                                  v-bind:class="{'is-invalid': errorFechaNacimiento}"  placeholder="Fecha nacimiento">
                                  <label class="text-secondary opacity-75">Fecha nacimiento</label>
                                </div>
                              </div>
                              <div class="col-md-5 my-1">
                                <div class="form-floating">
                                  <input v-model="user.account.Correo" required type="email" class="form-control"
                                  v-bind:class="{'is-invalid': errorCorreo}"  placeholder="Email">
                                  <label class="text-secondary opacity-75">Email</label>
                                </div>
                              </div>
                              <div class="col-md-5 my-1">
                                <div class="form-floating">
                                  <input v-model="user.account.Direccion" required type="text" class="form-control"
                                  v-bind:class="{'is-invalid': errorDireccion}"  placeholder="Direccion">
                                  <label class="text-secondary opacity-75">Direccion</label>
                                </div>
                              </div>
                              
                            </div>

                          </div>
                          <div class="card-footer text-center">
                            <button class="btn btn-outline-success my-2" v-on:click="validaciones" type="submit">Guardar</button>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="familiar-tab-pane" role="tabpanel" aria-labelledby="familiar-tab"
                      tabindex="0">
                       <div class="card m-3">
                        <div class="card-header text-center">
                          <h2 class="card-title ">Formulario Familiar</h2>
                        </div>
                        <form class="needs-validation" v-on:submit.prevent="prosessFamiliar">
                          <div class="card-body">
                            <div class="row justify-content-center">
                              <div class="col-md-5 my-1">
                                <div class="form-floating is-invalid" >
                                  <input v-model="user.username"  required type="text" class="form-control"
                                  v-bind:class="{'is-invalid': errorUsername}"  placeholder="Nombre Usuario">
                                  <label class="text-secondary opacity-75">Nombre Usuario</label>
                                </div>
                              </div>
                              <div class="col-md-5 my-1">
                                <div class="form-floating">
                                  <input v-model="user.password" required type="password" class="form-control"
                                  v-bind:class="{'is-invalid': errorPassword}" placeholder="Contraseña">
                                  <label class="text-secondary opacity-75">Contraseña</label>
                                </div>
                              </div>
                              <div class="col-md-5 my-1">
                                <div class="form-floating">
                                  <input v-model="user.account.Nombre" required type="text" class="form-control"
                                  v-bind:class="{'is-invalid': errorNombre}"  placeholder="Nombre">
                                  <label class="text-secondary opacity-75">Nombres</label>
                                </div>
                              </div>
                              <div class="col-md-5 my-1">
                                <div class="form-floating">
                                  <input v-model="user.account.Apellido" required type="text" class="form-control"
                                  v-bind:class="{'is-invalid': errorApellido}"  placeholder="Apellidos">
                                  <label class="text-secondary opacity-75">Apellidos</label>
                                </div>
                              </div>
                              <div class="col-md-5 my-1">
                                <div class="form-floating">
                                  <select v-model="user.account.Genero" class="form-select"
                                    v-bind:class="{'is-invalid': errorGenero}" aria-label="Floating label select example">
                                    <option value="Femenino">Femenino</option>
                                    <option value="Masculino">Masculino</option>
                                  </select>
                                  <label class="text-secondary opacity-75">Genero</label>
                                </div>
                              </div>
                              <div class="col-md-5 my-1">
                                <div class="form-floating">
                                  <input v-model="user.account.Telefono" required type="tel" class="form-control"
                                  v-bind:class="{'is-invalid': errorTelefono}"  placeholder="Telefono">
                                  <label class="text-secondary opacity-75">Telefono</label>
                                </div>
                              </div>
                              <div class="col-md-5 my-1">
                                <div class="form-floating">
                                  <select v-model="user.account.TipoDocumento" class="form-select"
                                    v-bind:class="{'is-invalid': errorTipoDocumento}" aria-label="Floating label select example">
                                    <option value="Cedula">Cedula</option>
                                    <option value="Cedula extranjera">Cedula extranjera</option>
                                    <option value="Tarjeta de identidad">Tarjeta de identidad</option>
                                  </select>
                                  <label class="text-secondary opacity-75">Tipo de documento</label>
                                </div>
                              </div>
                              <div class="col-md-5 my-1">
                                <div class="form-floating">
                                  <input v-model="user.account.NumeroDocumento" required type="text" class="form-control"
                                  v-bind:class="{'is-invalid': errorNumeroDocumento}"  placeholder="Numero de documento">
                                  <label class="text-secondary opacity-75">Numero de documento</label>
                                </div>
                              </div>
                              <div class="col-md-5 my-1">
                                <div class="form-floating">
                                  <input v-model="user.account.Ciudad" required type="text" class="form-control"
                                  v-bind:class="{'is-invalid': errorCiudad}"  placeholder="Ciudad">
                                  <label class="text-secondary opacity-75">Ciudad</label>
                                </div>
                              </div>
                              <div class="col-md-5 my-1">
                                <div class="form-floating">
                                  <input v-model="user.account.FechaNacimiento" required type="date" class="form-control"
                                  v-bind:class="{'is-invalid': errorFechaNacimiento}"  placeholder="Fecha nacimiento">
                                  <label class="text-secondary opacity-75">Fecha nacimiento</label>
                                </div>
                              </div>
                              <div class="col-md-5 my-1">
                                <div class="form-floating">
                                  <input v-model="user.account.Correo" required type="email" class="form-control"
                                  v-bind:class="{'is-invalid': errorCorreo}"  placeholder="Email">
                                  <label class="text-secondary opacity-75">Email</label>
                                </div>
                              </div>
                              <div class="col-md-5 my-1">
                                <div class="form-floating">
                                  <input v-model="user.account.Direccion" required type="text" class="form-control"
                                  v-bind:class="{'is-invalid': errorDireccion}"  placeholder="Direccion">
                                  <label class="text-secondary opacity-75">Direccion</label>
                                </div>
                              </div>
                              
                            </div>

                          </div>
                          <div class="card-footer text-center">
                            <button class="btn btn-outline-success my-2" v-on:click="validaciones" type="submit">Guardar</button>
                          </div>
                        </form>
                      </div> 
                    </div>
                    <div class="tab-pane fade" id="Medico-tab-pane" role="tabpanel" aria-labelledby="Medico-tab"
                      tabindex="0">
                      <div class="card m-3">
                        <div class="card-header text-center">
                          <h2 class="card-title ">Formulario Medico</h2>
                        </div>
                        <form class="needs-validation" v-on:submit.prevent="prosessMedico">
                          <div class="card-body">
                            <div class="row justify-content-center">
                              <div class="col-md-5 my-1">
                                <div class="form-floating is-invalid" >
                                  <input v-model="user.username"  required type="text" class="form-control"
                                  v-bind:class="{'is-invalid': errorUsername}"  placeholder="Nombre Usuario">
                                  <label class="text-secondary opacity-75">Nombre Usuario</label>
                                </div>
                              </div>
                              <div class="col-md-5 my-1">
                                <div class="form-floating">
                                  <input v-model="user.password" required type="password" class="form-control"
                                  v-bind:class="{'is-invalid': errorPassword}" placeholder="Contraseña">
                                  <label class="text-secondary opacity-75">Contraseña</label>
                                </div>
                              </div>
                              <div class="col-md-5 my-1">
                                <div class="form-floating">
                                  <input v-model="user.account.Nombre" required type="text" class="form-control"
                                  v-bind:class="{'is-invalid': errorNombre}"  placeholder="Nombre">
                                  <label class="text-secondary opacity-75">Nombres</label>
                                </div>
                              </div>
                              <div class="col-md-5 my-1">
                                <div class="form-floating">
                                  <input v-model="user.account.Apellido" required type="text" class="form-control"
                                  v-bind:class="{'is-invalid': errorApellido}"  placeholder="Apellidos">
                                  <label class="text-secondary opacity-75">Apellidos</label>
                                </div>
                              </div>
                              <div class="col-md-5 my-1">
                                <div class="form-floating">
                                  <select v-model="user.account.Genero" class="form-select"
                                    v-bind:class="{'is-invalid': errorGenero}" aria-label="Floating label select example">
                                    <option value="Femenino">Femenino</option>
                                    <option value="Masculino">Masculino</option>
                                  </select>
                                  <label class="text-secondary opacity-75">Genero</label>
                                </div>
                              </div>
                              <div class="col-md-5 my-1">
                                <div class="form-floating">
                                  <input v-model="user.account.Telefono" required type="tel" class="form-control"
                                  v-bind:class="{'is-invalid': errorTelefono}"  placeholder="Telefono">
                                  <label class="text-secondary opacity-75">Telefono</label>
                                </div>
                              </div>
                              <div class="col-md-5 my-1">
                                <div class="form-floating">
                                  <select v-model="user.account.TipoDocumento" class="form-select"
                                    v-bind:class="{'is-invalid': errorTipoDocumento}" aria-label="Floating label select example">
                                    <option value="Cedula">Cedula</option>
                                    <option value="Cedula extranjera">Cedula extranjera</option>
                                    <option value="Tarjeta de identidad">Tarjeta de identidad</option>
                                  </select>
                                  <label class="text-secondary opacity-75">Tipo de documento</label>
                                </div>
                              </div>
                              <div class="col-md-5 my-1">
                                <div class="form-floating">
                                  <input v-model="user.account.NumeroDocumento" required type="text" class="form-control"
                                  v-bind:class="{'is-invalid': errorNumeroDocumento}"  placeholder="Numero de documento">
                                  <label class="text-secondary opacity-75">Numero de documento</label>
                                </div>
                              </div>
                              <div class="col-md-5 my-1">
                                <div class="form-floating">
                                  <input v-model="user.account.Ciudad" required type="text" class="form-control"
                                  v-bind:class="{'is-invalid': errorCiudad}"  placeholder="Ciudad">
                                  <label class="text-secondary opacity-75">Ciudad</label>
                                </div>
                              </div>
                              <div class="col-md-5 my-1">
                                <div class="form-floating">
                                  <input v-model="user.account.FechaNacimiento" required type="date" class="form-control"
                                  v-bind:class="{'is-invalid': errorFechaNacimiento}"  placeholder="Fecha nacimiento">
                                  <label class="text-secondary opacity-75">Fecha nacimiento</label>
                                </div>
                              </div>
                              <div class="col-md-5 my-1">
                                <div class="form-floating">
                                  <input v-model="user.account.Correo" required type="email" class="form-control"
                                  v-bind:class="{'is-invalid': errorCorreo}"  placeholder="Email">
                                  <label class="text-secondary opacity-75">Email</label>
                                </div>
                              </div>
                              <div class="col-md-5 my-1">
                                <div class="form-floating">
                                  <input v-model="user.account.Direccion" required type="text" class="form-control"
                                  v-bind:class="{'is-invalid': errorDireccion}"  placeholder="Direccion">
                                  <label class="text-secondary opacity-75">Direccion</label>
                                </div>
                              </div>
                              
                            </div>

                          </div>
                          <div class="card-footer text-center">
                            <button class="btn btn-outline-success my-2" v-on:click="validaciones" type="submit">Guardar</button>
                          </div>
                        </form>
                      </div>  
                    </div>
                    <div class="tab-pane fade" id="Enfermero-tab-pane" role="tabpanel" aria-labelledby="Enfermero-tab"
                      tabindex="0">
                      <div class="card m-3">
                        <div class="card-header text-center">
                          <h2 class="card-title ">Formulario Enfermeria</h2>
                        </div>
                        <form class="needs-validation" v-on:submit.prevent="prosessEnfermero">
                          <div class="card-body">
                            <div class="row justify-content-center">
                              <div class="col-md-5 my-1">
                                <div class="form-floating is-invalid" >
                                  <input v-model="user.username"  required type="text" class="form-control"
                                  v-bind:class="{'is-invalid': errorUsername}"  placeholder="Nombre Usuario">
                                  <label class="text-secondary opacity-75">Nombre Usuario</label>
                                </div>
                              </div>
                              <div class="col-md-5 my-1">
                                <div class="form-floating">
                                  <input v-model="user.password" required type="password" class="form-control"
                                  v-bind:class="{'is-invalid': errorPassword}" placeholder="Contraseña">
                                  <label class="text-secondary opacity-75">Contraseña</label>
                                </div>
                              </div>
                              <div class="col-md-5 my-1">
                                <div class="form-floating">
                                  <input v-model="user.account.Nombre" required type="text" class="form-control"
                                  v-bind:class="{'is-invalid': errorNombre}"  placeholder="Nombre">
                                  <label class="text-secondary opacity-75">Nombres</label>
                                </div>
                              </div>
                              <div class="col-md-5 my-1">
                                <div class="form-floating">
                                  <input v-model="user.account.Apellido" required type="text" class="form-control"
                                  v-bind:class="{'is-invalid': errorApellido}"  placeholder="Apellidos">
                                  <label class="text-secondary opacity-75">Apellidos</label>
                                </div>
                              </div>
                              <div class="col-md-5 my-1">
                                <div class="form-floating">
                                  <select v-model="user.account.Genero" class="form-select"
                                    v-bind:class="{'is-invalid': errorGenero}" aria-label="Floating label select example">
                                    <option value="Femenino">Femenino</option>
                                    <option value="Masculino">Masculino</option>
                                  </select>
                                  <label class="text-secondary opacity-75">Genero</label>
                                </div>
                              </div>
                              <div class="col-md-5 my-1">
                                <div class="form-floating">
                                  <input v-model="user.account.Telefono" required type="tel" class="form-control"
                                  v-bind:class="{'is-invalid': errorTelefono}"  placeholder="Telefono">
                                  <label class="text-secondary opacity-75">Telefono</label>
                                </div>
                              </div>
                              <div class="col-md-5 my-1">
                                <div class="form-floating">
                                  <select v-model="user.account.TipoDocumento" class="form-select"
                                    v-bind:class="{'is-invalid': errorTipoDocumento}" aria-label="Floating label select example">
                                    <option value="Cedula">Cedula</option>
                                    <option value="Cedula extranjera">Cedula extranjera</option>
                                    <option value="Tarjeta de identidad">Tarjeta de identidad</option>
                                  </select>
                                  <label class="text-secondary opacity-75">Tipo de documento</label>
                                </div>
                              </div>
                              <div class="col-md-5 my-1">
                                <div class="form-floating">
                                  <input v-model="user.account.NumeroDocumento" required type="text" class="form-control"
                                  v-bind:class="{'is-invalid': errorNumeroDocumento}"  placeholder="Numero de documento">
                                  <label class="text-secondary opacity-75">Numero de documento</label>
                                </div>
                              </div>
                              <div class="col-md-5 my-1">
                                <div class="form-floating">
                                  <input v-model="user.account.Ciudad" required type="text" class="form-control"
                                  v-bind:class="{'is-invalid': errorCiudad}"  placeholder="Ciudad">
                                  <label class="text-secondary opacity-75">Ciudad</label>
                                </div>
                              </div>
                              <div class="col-md-5 my-1">
                                <div class="form-floating">
                                  <input v-model="user.account.FechaNacimiento" required type="date" class="form-control"
                                  v-bind:class="{'is-invalid': errorFechaNacimiento}"  placeholder="Fecha nacimiento">
                                  <label class="text-secondary opacity-75">Fecha nacimiento</label>
                                </div>
                              </div>
                              <div class="col-md-5 my-1">
                                <div class="form-floating">
                                  <input v-model="user.account.Correo" required type="email" class="form-control"
                                  v-bind:class="{'is-invalid': errorCorreo}"  placeholder="Email">
                                  <label class="text-secondary opacity-75">Email</label>
                                </div>
                              </div>
                              <div class="col-md-5 my-1">
                                <div class="form-floating">
                                  <input v-model="user.account.Direccion" required type="text" class="form-control"
                                  v-bind:class="{'is-invalid': errorDireccion}"  placeholder="Direccion">
                                  <label class="text-secondary opacity-75">Direccion</label>
                                </div>
                              </div>
                              
                            </div>

                          </div>
                          <div class="card-footer text-center">
                            <button class="btn btn-outline-success my-2" v-on:click="validaciones" type="submit">Guardar</button>
                          </div>
                        </form>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
  import axios from 'axios'
  export default {
    name: 'DashboardAux',
    data: function () {
      return {
        errorUsername: false,
        errorPassword: false,
        errorNombre:false,
        errorApellido:false,
        errorTelefono:false,
        errorGenero:false,
        errorTipoDocumento:false,
        errorNumeroDocumento:false,
        errorDireccion:false,
        errorCiudad:false,
        errorFechaNacimiento:false,
        errorCorreo:false,
        ocultarRol: false,
        user: {
          username: "",
          password: "",
          Estado: true,
          account: {
            Nombre: "",
            Apellido: "",
            Telefono: "",
            Genero: "",
            TipoDocumento: "",
            NumeroDocumento: "",
            Direccion: "",
            Ciudad: "",
            FechaNacimiento: "",
            Correo: "",
            Rol: ""
          }
        }
      }
    },
    methods: {
      
      prosessPaciente:function(){
        this.user.account.Rol="Paciente"
        this.processSignUp()
        
      },
      prosessMedico:function(){
        this.user.account.Rol="Medico"
        this.processSignUp()
      },
      prosessFamiliar:function(){
        this.user.account.Rol="Familiar"
        this.processSignUp()
      },
      prosessEnfermero:function(){
        this.user.account.Rol="Enfermero"
        this.processSignUp()
      },
      processSignUp: function () {
        axios.post(
            "https://be-hospital-grupo2.herokuapp.com/user/",
            this.user, {
              headers: {}
            }
          )
          .then(() => {
            this.$emit('completedSignUp')
          })
          .catch((error) => {
            console.log(error)
            alert("ERROR: Fallo en el registro")
          });
      },
      validaciones:function(){
        if (this.user.username == null || this.user.username == ""|| this.user.username == undefined){
          this.errorUsername=true
          
        }else{
          this.errorUsername=false
        }
        if (this.user.password == null || this.user.password == "" || this.user.password == undefined){
          this.errorPassword= true
          
        }else{
          this.errorPassword=false
        }
        if (this.user.account.Nombre == null || this.user.account.Nombre == "" || this.user.account.Nombre == undefined){
          this.errorNombre= true
          
        }else{
          this.errorNombre=false
        }
        if (this.user.account.Apellido == null || this.user.account.Apellido == "" || this.user.account.Apellido == undefined){
          this.errorApellido= true
          
        }else{
          this.errorApellido=false
        }
        if (this.user.account.Telefono == null || this.user.account.Telefono == "" || this.user.account.Telefono == undefined){
          this.errorTelefono= true
          
        }else{
          this.errorTelefono=false
        }
        if (this.user.account.Genero == null || this.user.account.Genero == "" || this.user.account.Genero == undefined){
          this.errorGenero= true
          
        }else{
          this.errorGenero=false
        }        
        if (this.user.account.TipoDocumento == null || this.user.account.TipoDocumento == "" || this.user.account.TipoDocumento == undefined){
          this.errorTipoDocumento= true
          
        }else{
          this.errorTipoDocumento=false
        }
        if (this.user.account.NumeroDocumento == null || this.user.account.NumeroDocumento == "" || this.user.account.NumeroDocumento == undefined){
          this.errorNumeroDocumento= true
          
        }else{
          this.errorNumeroDocumento=false
        }
        if (this.user.account.Direccion == null || this.user.account.Direccion == "" || this.user.account.Direccion == undefined){
          this.errorDireccion= true
          
        }else{
          this.errorDireccion=false
        }
        if (this.user.account.Ciudad == null || this.user.account.Ciudad == "" || this.user.account.Ciudad == undefined){
          this.errorCiudad= true
          
        }else{
          this.errorCiudad=false
        }
        if (this.user.account.FechaNacimiento == null || this.user.account.FechaNacimiento == "" || this.user.account.FechaNacimiento == undefined){
          this.errorFechaNacimiento= true
          
        }else{
          this.errorFechaNacimiento=false
        }
        if (this.user.account.Correo == null || this.user.account.Correo == "" || this.user.account.Correo == undefined){
          this.errorCorreo= true
          
        }else{
          this.errorCorreo=false
        }
              
      },
    }
  }
</script>