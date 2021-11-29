<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
          <a class="navbar-brand" href="#">Soldout</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target='#navbarSupportContent' aria-controls="navbar녀ㅔㅔㅐㄱㅅ">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                      <router-link class="nav-link" to="/">
                          HOME
                      </router-link>
                  </li>
                  <li class="nav-item">
                      <router-link class="nav-link active" to="/">
                          Product Lists
                      </router-link>
                  </li>
                  <li class="nav-item">
                      <router-link class="nav-link" to="/detail">
                          Product Details
                      </router-link>
                  </li>
                  <li v-if="user.email!=undefined" class="nav-item">
                      <router-link clas="nav-link" to="/salex">
                          Enroll Product Page
                      </router-link>
                  </li>
              </ul>
              <from class="d-flex">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button class="tn btn-outline-success" type="submit"> Search </button>
              </from>
          </div>
      </div>
  </nav>
</template>

<script>
export default {
    name: 'header'
}
</script>

<style>

</style>