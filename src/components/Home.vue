<template>
  <transition name="home" mode="out-in">
    <div class="background">
      <div class="my-container">
        <div class="row">
          <div class="column col-md-6 col-sm-24 jack">
            <router-link :to="'/jack'">
              <div class="name">JACK</div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
.background {
  width: 100vw;
  height: 100vh;
}

.my-container {
  height: 100%;
  width: 100%;
  text-align: center;
}

.home-enter-active,
.home-leave-active {
  transition: opacity 1s ease-in-out;
}

.home-enter,
.home-leave-to {
  opacity: 0;
}

a {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 5rem;
}

a:hover {
  text-decoration: none;
}

.column {
  height: 50vh;
}

.row {
  margin: 0 !important;
}

.jack {
  background: black;
  transition: background 0.5s linear;
}

.jack:hover {
  background: black;
}


.name {
  color: #fff;
}

.jack:hover .name {
  color: black;
}
</style>