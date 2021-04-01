<template>
    <div>
      <div>
        <h1>Page Contact</h1>
        <p>Formulaire</p>
      </div>

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
          <b>Merci de vérifier les champs suivant :</b>
          <ul>
            <li style="color: red" v-for="error in errors" :key="error">{{ error }}</li>
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

        <p>
          <label for="msg">Message</label>
          <textarea 
            id="msg" 
            v-model="message"
            type="text"
            name="user_message">
          </textarea>
        </p>

        <p style="display: none" class="hidden">
          <label>
            Don't fill out if you're human
            <input name="bot-field">
          </label>
        </p>

        <p>
          <input
            type="submit"
            value="Submit"
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

.containerForm{
  background-color:#20202c;
  border-radius: 20px;
  width: 70%;
  margin-right: auto;
  margin-left: auto;
  padding: 35px 35px;
}

input{
  width: 90%;

  margin-right: auto;
  margin-left: auto;

  padding: 4px 4px;
}

label{
  color: white;
  padding-bottom: 5px;

  margin-bottom: 50px;
}

textarea{
  width: 90%;
  height: 5rem;

  border-radius: 10px;
  border: none;
}

</style>