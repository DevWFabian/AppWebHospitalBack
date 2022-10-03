<template>
  <div class="container-fluid text-center color-bg">
    <div class="row">
      <div class="col ">
        <div class="container bg-body rounded my-5 shadow ">
          <div class="row ">
            <div class="col align-self-center border-end border-dark">
              <img class=" img-fluid " src="@/images/logoLogin.png" width="400" alt="logo login">
            </div>
            <div class="col align-self-center">
              <div class="d-flex justify-content-center">
                <div class="card w-50 my-5">
                  <div class="card-header color-bg">
                    <h5 class="card-title">LOGIN</h5>
                  </div>
                  <form v-on:submit.prevent="processLogInUser">
                    <div class="card-body">

                      <div class="form-floating mb-3">
                        <input type="text" class="form-control" v-model="user.username" required maxlength="10" id="floatingInput"
                          placeholder="name@example.com">
                        <label for="floatingInput">Nombre Usuario</label>
                      </div>
                      <div class="form-floating">
                        <input type="password" class="form-control" v-model="user.password" required maxlength="35" id="floatingPassword"
                          placeholder="Password">
                        <label for="floatingPassword">Contraseña</label>
                      </div>
                    </div>
                    <div class="card-footer">
                      <button class="btn btn-outline-success  my-2" type="submit">login</button>
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
import axios from 'axios';
export default {
    name: "LogIn",
    data: function () {
        return {
            user: {
                username: "",
                password: ""
            }
        }
    },
    methods: {
        processLogInUser: function () {
            axios.post(
                    "https://be-hospital-grupo2.herokuapp.com/login/",
                    this.user, {
                        headers: {}
                    }
                )
                .then((result) => {
                    let dataLogIn = {
                        username: this.user.username,
                        token_access: result.data.access,
                        token_refresh: result.data.refresh,
                    }
                    
                    this.$emit('completedLogIn', dataLogIn)
                })
                .catch((error) => {
                    if (error.response.status == "401")
                        alert("ERROR 401: Credenciales Incorrectas.");
                });
        },
        
            
        },
    
}
</script>

<style>
  .color-bg {
    background-image: linear-gradient(to top right, rgba(89, 208, 255, 0.712), rgba(104, 255, 185, 0.664), rgba(153, 255, 204, 0.623));
  }
</style>