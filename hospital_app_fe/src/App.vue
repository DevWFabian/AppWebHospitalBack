<template>
    <div id="app" class="app">
        <header>
            <nav class="navbar navbar-expand-md shadow p-3 bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand me-3">
                        <img src="@/images/logoHospital.png" alt="logo-hopital" width="60">
                        HOSPITALIZACION EN CASA
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">

                        <form class="d-flex ms-5" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>

                        <div class="btn-group " role="group" aria-label="Basic outlined example">
                            <button type="button" v-on:click="loadHome"
                                class="btn btn-outline-success text-uppercase">Inicio</button>
                            <button type="button" v-if="is_auth" v-on:click="loadPerfil"
                                class="btn btn-outline-success text-uppercase">Perfil</button>
                            <button type="button" v-if="rol==='Auxiliar' && is_auth" v-on:click="loadDashboardAux"
                                class="btn btn-outline-success text-uppercase">Administrador</button>
                            <button type="button" v-if="is_auth" v-on:click="logOut"
                                class="btn btn-outline-success text-uppercase">Cerrar Sesion</button>
                            <button type="button" v-if="!is_auth" v-on:click="loadLogIn"
                                class="btn btn-outline-success text-uppercase">Log-in</button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        <div class="main-component">
            <router-view v-on:completedLogIn="completedLogIn" v-on:completedSignUp="completedSignUp">
            </router-view>
        </div>


    </div>
</template>
<script>
import axios from 'axios'
import jwt_decode from 'jwt-decode'
    export default {
        name: 'App',
        data: function () {
            return {
                is_auth: false,
                rol:""
            }
        },
        components: {},
        methods: {
            verifyuser: function () {
                this.is_auth = localStorage.getItem("isAuth") || false;
                
                if (this.is_auth == false) 
                    this.$router.push({
                        name: "Home"
                    })
                
            },
            verifyAuth: function () {
                this.is_auth = localStorage.getItem("isAuth") || false;

                if (this.is_auth == false)
                    this.$router.push({
                        name: "Home"
                    })
                else
                    this.$router.push({
                        name: "Home"
                    });
            },
            loadLogIn: function () {
                this.$router.push({
                    name: "Login"
                })
            },
            loadHome: function () {
                this.$router.push({
                    name: "Home"
                });
            },
            loadDashboardAux: function () {
                this.$router.push({
                    name: 'DashboardAux'
                })
            },
            logOut: function () {
                localStorage.clear();
                alert("Sesión Cerrada");
                this.verifyAuth();
                this.verifyuser();
                this.rol=""
            },
            loadAccount: function () {
                this.$router.push({
                    name: "Account"
                })
            },
            loadPerfil: function () {
                this.$router.push({
                    name: 'PerfilUsuario'
                })
            },
            completedLogIn: function (data) {
                localStorage.setItem("isAuth", true);
                localStorage.setItem("username", data.username);
                localStorage.setItem("token_access", data.token_access);
                localStorage.setItem("token_refresh", data.token_refresh);
                alert("Autenticación Exitosa");
                this.getData();
                this.verifyAuth();
            },
            completedSignUp: function () {
                alert("Registro Exitoso");
                this.$router.push({
                    name: "Home"
                });
            },
            getData: async function () {

                let token = localStorage.getItem("token_access");
                let userId = jwt_decode(token).user_id.toString();

                axios.get(`https://be-hospital-grupo2.herokuapp.com/user/${userId}`, {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    })
                    .then((result) => {
                        localStorage.setItem("Rol",result.data.account.Rol)
                        this.rol=localStorage.getItem("Rol")

                    })
                
            },

            
        },
        created: async function () {
            this.verifyuser();
            this.getData();
        }
    }
</script>


<style>
    * {
        margin: 0%;
        padding: 0%;
    }
</style>