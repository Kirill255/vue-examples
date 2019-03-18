<template>
  <div id="app">
    <img src="./assets/logo.png">
    <ul>
      <li>
        <router-link
          to="/"
          tag="li"
          exact
        ><a>Home</a></router-link>
      </li>
      <li>
        <router-link
          to="/users"
          tag="li"
        ><a>Users</a></router-link>
      </li>
      <li>
        <router-link
          to="/about"
          tag="li"
        ><a>About</a></router-link>
      </li>
    </ul>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

li {
  margin-right: 10px;
}

a {
  text-decoration: none;
}

.router-link-active {
  text-decoration: underline;
}
</style>
