<template>
  
  <div class="imageFond">
        <h1 class="titleContact">Contact  <p>En construction</p> </h1>
    <div class="containerForm">
      <form
        id="app"
        name="contact"
        @submit="checkForm"
        action="/"
        method="POST"
        novalidate="true"
        netlify-honeypot="bot-field"
        data-netlify="true"
      >

        <p v-if="errors.length">
          <b class="attention">Merci de vérifier les champs suivant :</b>
          <ul>
            <li class="attentionList" style="color: red" v-for="error in errors" :key="error">{{ error }}</li>
          </ul>
        </p>

        <p>
          <label for="name">Name</label>
          <input
            id="name"
            v-model="name"
            type="text"
            name="name"
          >
        </p>

        <p>
          <label for="email">Email</label>
          <input
            id="email"
            v-model="email"
            type="email"
            name="email"
          >
        </p>

        <p style="display: none">
          <label>
            Don't fill out if you're human
            <input name="bot-field">
          </label>
        </p>

        <p>
          <label for="msg">Message</label>
          <textarea 
            id="msg" 
            v-model="message"
            type="text"
            name="user_message">
          </textarea>
        </p>

        <p>
          <input 
            type="submit"
            value="Submit"
            class="buttonSubmit"
          >
        </p>

      </form>
    </div>
  </div>
</template>

<script>
export default{
  data: () => {
    return {
    errors: [],
    name: null,
    email: null,
    message: null
    }
  },
  methods: {
    checkForm: function (e) {
      this.errors = [];

      if (!this.name) {
        this.errors.push("Name required.");
      }

      if (!this.message) {
        this.errors.push("Message required.");
      }
      if (!this.email) {
        this.errors.push('Email required.');
      } else if (!this.validEmail(this.email)) {
        this.errors.push('Valid email required.');
      }

      if (!this.errors.length) {
        return true;
      }

      e.preventDefault();
    },
    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  }
}
</script>

<style scoped>

/* .imageFond{
  background-image: url("../assets/picture/Paysage-Saint-Malo-Magali-Garot.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  width: 100%;
  height: 100%;
  padding: 20px 20px;
} */

.titleContact{
  text-align:center;
  margin-top: 60px;
  margin-bottom: 60px;

  font-family: 'PT Serif', serif;
}

.containerForm{
  background-color:#20202c;
  border-radius: 20px;
  width: 70%;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 50px;
  padding: 35px 35px;
}

input{
  width: 100%;

  margin-right: auto;
  margin-left: auto;
  padding: 4px 4px;
}

label{
  display: block;
  color: white;
  font-family: 'Prata', serif;

  margin-top: 10px;
  margin-bottom: 10px;
}

textarea{
  width: 100%;
  height: 5rem;

  border-radius: 10px;
  border: none;
}

.buttonSubmit{
  font-family: 'PT Serif', serif;
  font-weight: 800;
  background-color: white;
  border: none;
  border-radius: 6px;
  margin-top: 30px;
  height: 40px;
}

.attention{
  color: white;
  font-family: 'PT Serif', serif;

  margin-bottom: 5px;
}

.attentionList{
  font-family: 'PT Serif', serif;
}

/* ================================
    RESPONSIVE --> SCREEN DESKTOP
   ================================ */

@media screen and (min-width: 1000px) {

  .containerForm{
    width: 30%;
}


.buttonSubmit{
   width: 30%;
   height: 40px;
}

}

/* ================================
    RESPONSIVE --> TABLETTE
   ================================ */

@media screen and (min-width: 500px) and (max-width: 1000px) {

.buttonSubmit{
   width: 30%;
   height: 40px;
}

}

</style>