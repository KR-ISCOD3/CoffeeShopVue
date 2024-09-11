<template>
  <div class="home d-grid">
    <div class="row m-0 justify-content-center  text-center">
      <div
        class=" col-10 col-lg-6 m-0 align-content-center justify-content-center p-lg-5"
      >
        <div class="ps-2 animate__animated animate__fadeIn">
          <h1 class="text-light m-0">
            DRINK <span style="color: #6f4e37">EHH</span>
          </h1>
          <p class=" p-0 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem odio
            dolores amet officia. Tempora iusto adipisci eveniet sint magni,
            sapiente eaque, natus architecto aut in tenetur eligendi commodi qui
            minus!
          </p>
          <div class="but d-sm-grid gap-2 d-lg-flex justify-content-center">
            <a href="#menu" class="btn btn-dark rounded-2">
              Order Now<i class="ms-3 bi bi-arrow-right-circle-fill"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home {
  width: 100%;
  height: 100vh;
  background-image: url(https://images.pexels.com/photos/683039/pexels-photo-683039.jpeg?cs=srgb&dl=pexels-apgpotr-683039.jpg&fm=jpg);
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
.home .row{
  background-color: rgba(0, 0, 0, 0.472);
  backdrop-filter: blur(3px);
}
.home .row h1 {
  font-size: clamp(35px, 6vw, 90px);
  font-family: "Nerko One", cursive;
  font-weight: 400;
  font-style: normal;
}
.home .row p {
  color: white;
  font-size: clamp(18px, 2vw, 20px);
  font-family: "Reddit Sans Condensed", sans-serif;
}

.home .row .col-6 .cup {
  display: flex;
  justify-content: center;
}


@media (max-width: 992px) {
  .home {
    width: 100%;
    height: 80vh;
  }
  .home > .row {
    padding: 60px 0;
  }
  .home .row .col-6 .but {
    display: grid;
  }
  .home .row .col-6 .but button {
    font-size: 14px;
  }
  .home .row .col-6 img {
    padding-top: 0px;
  }
}

@media (min-width: 1199.98px) {
  .home > .row {
    padding: 0;
  }
  .home .row .col-6 img {
    width: 80%;
    padding-top: 10px;
  }
  .home .row .col-6 .d-grid {
    padding-left: 130px;
  }
  .home .row .col-6 button {
    font-size: 20px;
    padding: 10px 40px;
  }
}
</style>
