<script setup>
import { useCart } from "@/useCart";
const { cart, addToCart, removeFromCart, getSubtotal } = useCart();

const increaseQty = (item) => {
  item.quantity += 1;
};

const decreaseQty = (item) => {
  if (item.quantity > 1) {
    item.quantity -= 1;
  } else {
    removeFromCart(item.id);
  }
};
</script>
<template>
  <div class="w offcanvas offcanvas-end" data-bs-scroll="true" id="cart">
    <div class="offcanvas-header border-bottom">
      <i class="bi bi-bag-dash-fill fs-4 px-1 border-end"></i>
      <a href="" class="navbar-brand fs-2 mx-1">Your Cart</a>
      <button
        class="btn shadow-none btn-close"
        data-bs-dismiss="offcanvas"
        data-bs-target="#cart"
      ></button>
    </div>
    <div class="offcanvas-body d-grid ">
      <p v-if="cart.length === 0">Your Cart is Empty</p>

      <!-- Display cart items when available -->
      <div v-else>
       
        <div
          v-for="item in cart"
          :key="item.id"
          class="d-flex border-bottom align-items-center p-1"
        >
          <button
            class="btn me-3 mt-2 text-danger btn-close shadow-none"
            style="font-size: 12px"
            @click="removeFromCart(item.id)"
          ></button>
          <div
            class="rounded-circle overflow-hidden col-4"
            style="width: 50px; height: 50px"
          >
            <img
              :src="item.image"
              :alt="item.name"
              class="img-fluid h-100 object-fit-cover"
            />
          </div>
          <div class="ms-1 col-3 col-md-4 mx-md-3">
            <p class="m-0">{{ item.name }}</p>
            <p class="text-success m-0">{{ item.size }}</p>
          </div>
          <div class="d-flex align-items-center m-0">
            <button class="btn-qty mx-1 mx-md-3" @click="decreaseQty(item)">
              <span>-</span>
            </button>
            <p class="m-0">{{ item.quantity }}</p>
            <button class="btn-qty mx-1 mx-md-3" @click="increaseQty(item)">
              <span>+</span>
            </button>
          </div>
          <div class="ms-3">
            <p class="m-0 text-danger">${{ item.price.toFixed(2) }}</p>
            <p class="m-0 text-secondary">
              Subtotal: ${{ getSubtotal(item.id).toFixed(2) }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="total bg-body-tertiary p-2 align-items-center d-flex justify-content-between"
    >
      <h3 class="m-0">Total Price:</h3>
      <h4 class="m-0">${{ cart.reduce((total, item) => total + getSubtotal(item.id), 0).toFixed(2) }}</h4>
    </div>
    <button class="btn btn-dark border-0 rounded-0 p-3 fs-5">
      Check Out 
      <i class="bi bi-cash-stack ms-2"></i>
    </button>
  </div>
</template>
<style scoped>

.offcanvas-body::-webkit-scrollbar{
  display: none;
}
.offcanvas-body {
  height: 400px !important;
  font-family: "Reddit Sans Condensed", sans-serif;
}
.total,.offcanvas-header,button{
  font-family: "Reddit Sans Condensed", sans-serif;
}

.btn-qty {
  /* width: 10px; */
  /* height: 10px; */
  /* padding:0 10px; */
  border: none;
  color: white;
  background-color: rgb(145, 113, 113);
  border-radius: 2px;
  font-size: 12px;
  font-weight: 800;
  padding: 0 7px;
  display: flex;
  align-items: center;
}
@media (max-width: 576px) {
  .w {
    width: 85% !important;
  }
}
@media (min-width: 992px) {
  .w {
    width: 35% !important;
  }
}
</style>
