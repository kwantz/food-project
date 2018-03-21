<template>
  <div id="login-page">
    <form class="form-signin">
      <div class="text-center">
        <img class="mb-4" src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">
        <h1 class="h3 mb-3 font-weight-normal">Please Register</h1>
      </div>

      <div class="form-group">
        <label>Email address</label>
        <input type="email" class="form-control" required autofocus/>
      </div>

      <div class="form-group">
        <label>Password</label>
        <input type="password" class="form-control" required/>
      </div>

      <div class="form-group">
        <label>Re-Password</label>
        <input type="password" class="form-control" required/>
      </div>

      <button class="btn btn-lg btn-primary btn-block" type="submit">Register</button>
    </form>

    <footer>
      <p class="message">Already have account? <router-link to="/login">Sign in</router-link><p>
      <p class="text-muted">&copy; 2017-2018</p>
    </footer>
  </div>
</template>
