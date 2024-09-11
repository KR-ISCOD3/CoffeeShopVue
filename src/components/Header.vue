<script>
import { ref, onMounted, onUnmounted } from 'vue';
import Cart from "./Cart.vue";
import OffcanSideBar from "./OffcanSideBar.vue";
import { useCart } from "@/useCart.js";
export default {
  components: {
    Cart,
    OffcanSideBar,
  },
  setup() {
    const { countProduct,getTotalPrice } = useCart(); 

    // Scroll reactive state
    const scroll = ref(false);

    // Function to check the scroll position
    const handleScroll = () => {
      scroll.value = window.scrollY > 90; // Change scroll to true if scrolled more than 90px
    };

    // Register scroll event on mount
    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    // Remove scroll event on unmount
    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });
    return {
      scroll,
      countProduct,
      getTotalPrice,
    };
  },
};

</script>
<template>
  <nav style="transition: 0.5s ease-in-out;" :class="['navbar', 'navbar-expand-lg', 'fixed-top','text-light', scroll ? 'bg-light shadow text-dark' : 'bg-transparent']">
    <div class="container p-0">
      <div>
        <a href="" class="navbar-brand ">
          <img src="https://icons.veryicon.com/png/o/object/color-icon/coffee-65.png" alt="" width="50px">
        </a>
      </div>

      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="mx-2">
            <a :class="['text-light  text-decoration-none fs-6 mx-2', scroll ? 'text-dark':'' ]" href="#home">Home</a>
          </li>
          <li class="mx-2">
            <a :class="['text-light  text-decoration-none fs-6 mx-2', scroll ? 'text-dark':'' ]" href="#about">About</a>
          </li>
          <li class="mx-2">
            <a :class="['text-light  text-decoration-none fs-6 mx-2', scroll ? 'text-dark':'' ]" href="#menu">Menu</a>
          </li>
          <li class="mx-2">
            <a :class="['text-light  text-decoration-none fs-6 mx-2', scroll ? 'text-dark':'' ]" href="#menu">Schedule</a>
          </li>
          <li class="mx-2">
            <a :class="['text-light  text-decoration-none fs-6 mx-2', scroll ? 'text-dark':'' ]" href="#menu">Contact</a>
          </li>
        </ul>
      </div>
      <p class="m-0">${{ getTotalPrice.toFixed(2) }}</p>
      <div class="d-flex align-content-center">
        <button
          class="btn shawdow-none border-0 position-relative"
          data-bs-toggle="offcanvas"
          data-bs-target="#cart"
        >
          <i style="transition: 0.5s ease-in-out;" :class="['text-light bi bi-cart-plus fs-4', scroll ? 'text-dark':'' ]" ></i>
          <span 
          style="
          top: 15px;
          left: 38px;" 
          class="position-absolute translate-middle badge rounded-pill bg-danger">
            {{ countProduct }}
            <span class="visually-hidden">unread messages</span>
          </span>
        </button>
        <button
          :class="['text-light fs-4 navbar-toggler btn border-0 shadow-none', scroll ? 'text-dark':'' ]" 
          data-bs-toggle="offcanvas"
          data-bs-target="#offcan"
        >
          <i class="bi bi-list fs-3"></i>
        </button>
      </div>
      <div class="d-none d-lg-flex align-items-center">
        <ul class="log m-0 mx-4 p-0">
          <i class="bi bi-person-fill fs-4"></i>
          <ul
            class="bg-body-secondary list-unstyled position-absolute rounded-2 overflow-hidden drop"
          >
            <li class="nav-link text-dark ps-3 py-2 pe-4">Sign in</li>
            <li class="nav-link text-dark ps-3 py-2 pe-4">Sign up</li>
          </ul>
        </ul>
      </div>
    </div>
  </nav>

  <Cart />
  <OffcanSideBar />
 
</template>

<style scoped>
a{
  font-family: "Reddit Sans Condensed", sans-serif;
  transition: 0.5s ease-in-out;
}
a:hover {
  text-decoration: underline !important;
}

.log {
  cursor: pointer;
}
.drop {
  display: none;
}
.log:hover > .drop {
  display: block;
}
.log > ul > li:hover {
  background-color: rgb(213, 213, 211);
}
</style>
