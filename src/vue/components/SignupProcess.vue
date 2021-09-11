<template>
  <div class="signup">
    <img
      class="signup_background"
      :src="getImgUrl(background.path)"
      alt="Marvel"
    />
    <div class="signup_logo-container">
      <a href="./index.html">
        <img
          class="signup_logo-container_logo"
          :src="getImgUrl(logo.path)"
          alt="logo"
        />
      </a>
    </div>
    <div class="signup_signin-container">
      <a class="signup_signin-container_button">Sign in</a>
    </div>
    <div class="signup_text-container">
      <h1 class="signup_text-container_title">
        Unlimited movies, TV shows, and more.
      </h1>
      <span class="signup_text-container_first-line"
        >Watch anywhere. Cancel anytime.</span
      >
      <span class="signup_text-container_second-line"
        >Ready to watch? Enter your email to create or restart your
        membership.</span
      >
      <form class="signup_text-container_form" action="example.php">
        <input
          class="signup_text-container_email"
          type="text"
          name="eaddress"
          id="email"
          placeholder="Email address"
        />
        <input
          class="signup_text-container_email-submit"
          type="submit"
          id="email"
          value="Get Started"
        />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignupProcess",
  data() {
    return {
      background: {
        id: 1,
        path: "marvel.jpeg",
      },
      logo: {
        id: 2,
        path: "logo.png",
      },
    };
  },
  methods: {
    getImgUrl(pic) {
      const images = require.context("../../images/", false, /\.jpeg|png$/);
      return images("./" + pic);
    },
  },
};
</script>

<style scoped>
.signup {
  position: relative;
  overflow: hidden;
}
.signup_background {
  width: auto;
  height: 1000px;
  object-fit: fill;
  filter: brightness(0.3);
}
.signup_logo-container {
  position: absolute;
  top: 0;
  left: 0;
}
.signup_logo-container_logo {
  width: 25px;
  height: auto;
  margin: 14px 16px;
  cursor: pointer;
}
.signup_logo-container_logo:hover {
  opacity: 0.7;
}
.signup_signin-container {
  position: absolute;
  top: 0;
  right: 0;
  margin: 24px 26px;
}
.signup_signin-container_button {
  padding: 7px 17px;
  border-radius: 5px;
  border: none;
  background-color: #1c55ff;
  font-size: 16px;
  color: white;
  cursor: pointer;
}
.signup_signin-container_button:hover {
  opacity: 0.7;
}
.signup_text-container {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
}
.signup_text-container_title {
  font-size: 50px;
}
.signup_text-container_first-line {
  font-size: 26px;
  margin: 16px 0;
}
.signup_text-container_second-line {
  font-size: 23px;
}
.signup_text-container_form {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.signup_text-container_email {
  width: 100%;
  height: 50px;
  padding: 7px 17px;
  margin: 15px 0;
}
.signup_text-container_email-submit {
  height: 50px;
  cursor: pointer;
  background-color: #1c55ff;
  color: white;
  padding: 7px 17px;
  border: none;
  font-size: 26px;
}
@media only screen and (max-width: 750px) {
  .signup_text-container_form {
    flex-direction: column;
  }
}
</style>
