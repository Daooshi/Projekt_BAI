<template>
  <div id="app">
    <Header/>
    <FacebookUser @setLoginData="setLoginData"> </FacebookUser>>
    <Weather/>
    <Map/>
    <AddReservation :userName="userName" :isConnected ="isConnected"></AddReservation>
    <Reservations :isAdmin = "isAdmin"></Reservations>
    <Contact/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Contact from './components/layout/Contact';
import FacebookUser from './components/FacebookUser';
import Map from './components/Map';
import AddReservation from './components/AddReservation';
import Reservations from './components/Reservations';
import Weather from './components/Weather';
import 'bootstrap'

export default {
  name: 'App',
  components: {
    Header,
    Weather,
    Map,
    FacebookUser,
    AddReservation,
    Reservations,
    Contact,
    Footer
  },data: function() {
    return{
    isConnected: false,
    userName: "User",
    email: "",
    isAdmin: false
    }
  },
  methods: {
    setLoginData(data) {
      console.log(data)
      var array = data
      this.isConnected = array[3]
      this.email = data[1]
      this.userName = data[2]
      this.isAdmin = data[4]
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body{
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}

.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}

.btn:hover {
  background: #666;
}
.containter{
        background: #333;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

@import'~bootstrap/dist/css/bootstrap.css'
</style>