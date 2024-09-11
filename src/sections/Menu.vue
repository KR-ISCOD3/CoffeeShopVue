<script setup>
import coffeeData from "@/data/product.json";
import { ref,computed } from "vue";
import { useCart } from "@/useCart";
const {cart,addToCart} =useCart();


const coffeeDrinks = ref(coffeeData.coffeeDrinks);
const pageSize = 3;
const currentPage = ref(0);

const isMobile = computed(() => window.innerWidth < 992);
// Computed property for drinks
const Drinks = computed(() => {
  if (isMobile.value) {
    // On mobile, display all drinks
    return coffeeDrinks.value;
  } else {
    // On larger screens, display drinks with pagination
    const start = currentPage.value * pageSize;
    const end = start + pageSize;
    return coffeeDrinks.value.slice(start, end);
  }
});
const NextPage = () => {
  if ((currentPage.value + 1) * pageSize < coffeeDrinks.value.length) {
    currentPage.value += 1;

    const start = currentPage.value * pageSize;
    const end = start + pageSize;
    Drinks.value = coffeeDrinks.value.slice(start, end);
  }
  else{
    
  }
};
const PrevPage = () => {
  if (currentPage.value > 0) {
    currentPage.value -= 1;

    const start = currentPage.value * pageSize;
    const end = start + pageSize;
    Drinks.value = coffeeDrinks.value.slice(start, end);
  }
};

</script>
<template>
  <div class="container-fluid p-0 text-center py-5 position-relative">
    <h1 class="m-0" >Our Hot Products </h1>
    <p  class="px-5 p-md-0 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore</p>

    <div
      class="scroll-row d-flex m-0 gap-lg-2 px-lg-5 py-2 justify-content-md-center position-relative"
    >
      <div 
        v-for="drink in Drinks" 
        :key="drink.id"
        :class="['card-container', {'d-none d-lg-block col-6 col-md-3': !isMobile, 'col-12 col-md-6 justify-content-md-start d-block p-4': isMobile}]"
        >
        <div class="card mx-3 overflow-hidden animate__animated animate__zoomIn" >
          <div class="h-50">
            <img
              :src="drink.image"
              alt=""
              class="w-100 h-100 object-fit-cover"
            />
          </div>
          <div class="card-body text-start position-relative">
            <h5>{{ drink.name }}</h5>
            <p>
              {{ drink.description }}
            </p>
            <div class="d-flex justify-content-between align-items-center">
              <p class="m-0 fw-bold text-brown">${{ drink.price.toFixed(2) }}</p>
              <button class="btn-bg-brown" @click="addToCart(drink)">
                Add to Cart
                <i class="bi bi-cart-plus ms-1"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="col-12 col-md-3 d-block d-md-none p-4" v-for="drink in coffeeDrinks" :key="drink.id">
        <div class="card mx-3 overflow-hidden">
          <div class="h-50">
            <img
              :src="drink.image"
              alt=""
              class="w-100 h-100 object-fit-cover"
            />
          </div>
          <div class="card-body text-start position-relative">
            <h5>{{ drink.name }}</h5>
            <p>
              {{ drink.description }}
            </p>
            <div class="d-flex justify-content-between align-items-center">
              <p class="m-0 fw-bold text-brown">${{ drink.price.toFixed(2) }}</p>
              <button class="btn-bg-brown">
                Add to Cart
                <i class="bi bi-cart-plus ms-1"></i>
              </button>
            </div>
          </div>
        </div>
      </div> -->
      <!-- Scroll Buttons -->
      <button @click="PrevPage" class="btn-page d-none d-lg-block position-absolute start-0 top-50 translate-middle-y ms-5 border-0 fs-4 rounded-circle">
        <i class="bi bi-caret-left text-light"></i>
      </button>
      <button @click="NextPage" class="btn-page d-none d-lg-block position-absolute end-0 top-50 translate-middle-y me-5 border-0 fs-4 rounded-circle">
        <i class="bi bi-caret-right text-light"></i>
      </button>
    </div>
  </div>
</template>

<style scoped>

.card {
  height: 350px;
  font-family: "Reddit Sans Condensed", sans-serif;
}


.scroll-row {
  overflow-x: hidden;
  overflow-y: hidden;
}
.container-fluid > p{
  font-family: "Dancing Script", cursive;
  color: white;
}
.btn-page {
  background-color: #6f4e37;
}
.container-fluid {
  background-image: url(bg2.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  backdrop-filter: blur(4px);
}
.container-fluid h1 {
  font-family: "Nerko One", cursive;
  font-size: clamp(45px, 4vw, 90px);
  color: white;
}

.btn-bg-brown{
  border:1px solid #6f4e37;
  color: #6f4e37;
  border-radius: 5px;
  padding: 4px 8px;
  background-color: transparent;
  transition: 0.2s;
}
.btn-bg-brown:hover{
  color: white;
  background-color: #6f4e37;
}
.card .card-body > p{
  font-size: 15px;
  color: gray;
}
.card .card-body h5{
  color: #6f4e37;
  font-weight: bold;
}
@media (max-width: 992px) {
  .scroll-row {
    overflow-x: scroll;
    scroll-behavior: smooth;
    background-color: transparent;
  }
}
</style>


