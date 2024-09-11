<template>
    <!-- offcanvas  -->
  <div class="w-75 offcanvas offcanvas-start d-lg-none" id="offcan">
    <div class="offcanvas-header">
      <a href="" class="navbar-brand fs-2">Coffee</a>
      <button
        class="btn shadow-none btn-close"
        data-bs-dismiss="offcanvas"
        data-bs-target="#offcan"
      ></button>
    </div>
    <div class="offcanvas-body d-grid">
      <ul class="navbar-nav">
        <a class="nav-link" href="#home">
          <li
            class="fs-6 py-2 border-bottom d-flex"
            data-bs-dismiss="offcanvas"
            data-bs-target="#offcan"
          >
            <i class="bi bi-house-door-fill me-3"></i>
            Home
          </li>
        </a>
        <a class="nav-link" href="#menu">
          <li
            class="fs-6 py-2 border-bottom d-flex"
            data-bs-dismiss="offcanvas"
            data-bs-target="#offcan"
          >
            <i class="bi bi-file-earmark-person me-3"></i>
            Menu
          </li>
        </a>
        <a class="nav-link" href="#about">
          <li
            class="fs-6 py-2 border-bottom d-flex"
            data-bs-dismiss="offcanvas"
            data-bs-target="#offcan"
          >
            <i class="bi bi-telephone-forward-fill me-3"></i>
            About
          </li>
        </a>
        <button
          class="btn p-0 px-0 d-flex align-items-center border-0"
          data-bs-toggle="collapse"
          data-bs-target="#dropd"
        >
          <i class="bi bi-person-fill fs-6 me-3"></i>
          <span class="fs-6 nav-link">Account</span>
        </button>
        <div class="collapse bg-body-secondary mt-1 rounded-2" id="dropd">
          <li class="nav-link ps-3 py-2 pe-4">Sign in</li>
          <li class="nav-link ps-3 py-2 pe-4">Sign up</li>
        </div>
        <hr class="bg-body-tertiary m-1 mb-5" />
        <div class="w-100">
          <button class="w-100 btn fs-6 d-flex justify-content-between">
            Sign Out
            <i class="bi bi-box-arrow-left me-1"></i>
          </button>
        </div>
      </ul>
    </div>
  </div>
</template>