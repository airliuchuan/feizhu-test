<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body, html {
  font-size: 12px;
}
* {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
input {
  border: 0;
  outline: none;
  appearance: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  background-color: transparent;
}
.clear:after {
  content: '';
  display: table;
  clear: both;
}
.fl {
  float: left;
}
</style>
