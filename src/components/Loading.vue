<template>
    <div class="loader"></div>
</template>
<style>
/* HTML: <div class="loader"></div> */
.loader {
  width: 60px;
  height: 16px;
  display: flex;
  justify-content: space-between;
  animation: l3-0 2s infinite alternate;
}
.loader:before,
.loader:after {
  content: "";
  width: 16px;
  background: #876e3a;
  animation: l3-1 1s infinite alternate;
}
.loader:after {
  background: #45170b;
  --s:-1;
}
@keyframes l3-0 {
   0%,40%   {transform: rotate(0)}
   80%,100% {transform: rotate(.5turn)}
}
@keyframes l3-1 {
   80%,100% {transform: translate(calc(var(--s,1)*14px))}
}
</style>