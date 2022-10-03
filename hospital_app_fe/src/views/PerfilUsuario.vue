<template>
    <div class="perfil">
        <div class="container-fluid text-center color-bg">
            <div class="row">
                <div class="col ">
                    <div class="container my-5 ">
                        <div class="row ">
                            <div class="col align-self-center">
                                <div class="card text-center">
                                    <div class="card-header">
                                        <h5 class="card-title">Perfil</h5>
                                    </div>
                                    <form class="needs-validation" v-on:submit.prevent="putUsuario">
                                        <div class="card-body">
                                            <div class="row justify-content-center">
                                                <div class="col-md-5 my-1">
                                                    <div class="form-floating is-invalid">
                                                        <input required type="text" class="form-control "
                                                            v-model="user.account.Nombre" placeholder="Nombre">
                                                        <label
                                                            class="text-secondary opacity-75">Nombre: {{user.account.Nombre}}</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-5 my-1">
                                                    <div class="form-floating is-invalid">
                                                        <input required type="text" class="form-control"
                                                            v-model="user.account.Apellido" placeholder="Apellido">
                                                        <label
                                                            class="text-secondary opacity-75">Apellido: {{user.account.Apellido}}</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-5 my-1">
                                                    <div class="form-floating is-invalid">
                                                        <input required type="text" class="form-control"
                                                            v-model="user.account.Telefono" placeholder="Telefono">
                                                        <label
                                                            class="text-secondary opacity-75">Telefono: {{user.account.Telefono}}</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-5 my-1">
                                                    <div class="form-floating">
                                                        <select class="form-select" v-model="user.account.Genero"
                                                            aria-label="Floating label select example">
                                                            <option value="Femenino">Femenino</option>
                                                            <option value="Masculino">Masculino</option>
                                                        </select>
                                                        <label
                                                            class="text-secondary opacity-75">Genero: {{user.account.Genero}}</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-5 my-1">
                                                    <div class="form-floating">
                                                        <select class="form-select" v-model="user.account.TipoDocumento"
                                                            aria-label="Floating label select example">
                                                            <option value="Cedula">Cedula</option>
                                                            <option value="Cedula Extranjera">Cedula Extranjera</option>
                                                            <option value="Tarjeta de identidad">Tarjeta de identidad
                                                            </option>
                                                        </select>
                                                        <label
                                                            class="text-secondary opacity-75">Tipo de documento: {{user.account.TipoDocumento}}</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-5 my-1">
                                                    <div class="form-floating is-invalid">
                                                        <input required type="text" class="form-control"
                                                            v-model="user.account.NumeroDocumento"
                                                            placeholder="Numero de documento">
                                                        <label
                                                            class="text-secondary opacity-75">Numero de documento: {{user.account.NumeroDocumento}}</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-5 my-1">
                                                    <div class="form-floating is-invalid">
                                                        <input required type="text" class="form-control"
                                                            v-model="user.account.Direccion" placeholder="Direccion">
                                                        <label
                                                            class="text-secondary opacity-75">Direccion: {{user.account.Direccion}}</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-5 my-1">
                                                    <div class="form-floating is-invalid">
                                                        <input required type="text" class="form-control"
                                                            v-model="user.account.Ciudad" placeholder="Ciudad">
                                                        <label
                                                            class="text-secondary opacity-75">Ciudad: {{user.account.Ciudad}}</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-5 my-1">
                                                    <div class="form-floating is-invalid">
                                                        <input required type="text" class="form-control"
                                                            v-model="user.account.FechaNacimiento"
                                                            placeholder="Fecha de nacimiento">
                                                        <label
                                                            class="text-secondary opacity-75">Fecha de nacimiento: {{user.account.FechaNacimiento}}
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="col-md-5 my-1">
                                                    <div class="form-floating is-invalid">
                                                        <input required type="text" class="form-control"
                                                            v-model="user.account.Correo" placeholder="Correo">
                                                        <label
                                                            class="text-secondary opacity-75">Email: {{user.account.Correo}}</label>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="card-footer text-muted">
                                            <button class="btn btn-outline-success my-2"
                                                type="submit">Actualizar</button>
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
</template>
<script>
    import jwt_decode from "jwt-decode";
    import axios from 'axios'
    export default {
        name: 'PerfilUsuario',
        data: function () {
            return {

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

            getData: async function () {

                if (localStorage.getItem("token_access") === null || localStorage.getItem("token_refresh") ===
                    null) {
                    this.$emit('logOut');
                    return;
                }

                await this.verifyToken();

                let token = localStorage.getItem("token_access");
                let userId = jwt_decode(token).user_id.toString();



                axios.get(`https://be-hospital-grupo2.herokuapp.com/user/${userId}`, {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    })


                    .then((result) => {
                        this.user.account.Nombre = result.data.account.Nombre
                        this.user.account.Apellido = result.data.account.Apellido
                        this.user.account.Telefono = result.data.account.Telefono
                        this.user.account.Genero = result.data.account.Genero
                        this.user.account.TipoDocumento = result.data.account.TipoDocumento
                        this.user.account.NumeroDocumento = result.data.account.NumeroDocumento
                        this.user.account.Direccion = result.data.account.Direccion
                        this.user.account.Ciudad = result.data.account.Ciudad
                        this.user.account.FechaNacimiento = result.data.account.FechaNacimiento
                        this.user.account.Correo = result.data.account.Correo
                        this.user.account.Rol = result.data.account.Rol
                    })

                    .catch(() => {
                        this.$emit('logOut');
                    });

            },
            putUsuario: function() {
                let token = localStorage.getItem("token_access");
                let userId = jwt_decode(token).user_id.toString();

                axios.put(`https://be-hospital-grupo2.herokuapp.com/persona/${userId}`,
                    this.user.account, {
                        headers: {}
                    })
                    .then(()=>{
                        alert('actualizado')
                        this.$emit('loadHome')
                    })
                    .catch((error) => {
                        alert(error,'Error no se pudo actualizar')
                    });

            },

            verifyToken: function () {

                return axios.post("https://be-hospital-grupo2.herokuapp.com/refresh/", {
                        refresh: localStorage.getItem("token_refresh")
                    }, {
                        headers: {}
                    })

                    .then((result) => {

                        localStorage.setItem("token_access", result.data.access);
                    })

                    .catch(() => {
                        this.$emit('logOut');
                    });


            },

        },
        created: async function () {
            this.getData();
        },

    }
</script>