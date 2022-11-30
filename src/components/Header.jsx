import React from 'react';
function Header() {
  return (
    <header class="header">
      <nav class="nav nav--dark">
        <div class="nav__logo">
          <a href="/"></a>
        </div>
        <ul class="nav__menu">
          <li class="nav__menu-item">
            <a href="" class="nav__menu-item-link nav__menu-item-link--active">
              Agregar titulos
            </a>
          </li>
        </ul>
        <div class="nav__right">
          <button class="snipcart-checkout nav__button button button--transparent">
            <span class="button__icon nav__button-icon">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22.907 4.22c0.125-0.021 0.254-0.016 0.383 0.018l-0-0c0.505 0.135 0.808 0.704 0.682 1.244l-2.299 9.644c-0.126 0.434-0.505 0.759-0.934 0.759h-12.428l0.556 2.41h10.357c0.531 0 0.96 0.46 0.96 1.030s-0.429 1.029-0.96 1.029h-11.089c-0.455 0-0.834-0.325-0.934-0.785l-3.89-17.010h-2.349c-0.531 0-0.96-0.46-0.96-1.030s0.429-1.030 0.96-1.030h3.082c0.455 0 0.834 0.325 0.934 0.785l2.88 12.542h12.174l1.746-7.377h-7.877c-0.617 0-1.118-0.5-1.118-1.117s0.5-1.117 1.118-1.117l8.901 0c0.036 0 0.071 0.002 0.106 0.005zM9.928 24.5c0.851 0 1.54-0.741 1.54-1.653s-0.69-1.653-1.54-1.653c-0.852 0-1.541 0.741-1.541 1.653s0.69 1.653 1.541 1.653zM19.424 22.847c0 0.912-0.69 1.653-1.54 1.653-0.852 0-1.541-0.741-1.541-1.653s0.69-1.653 1.541-1.653c0.85 0 1.54 0.741 1.54 1.653z"></path>
              </svg>
            </span>
            <span class="snipcart-items-count nav__total-items button__text">
              0
            </span>
          </button>
          <button class="hamburger button button--transparent">
            <svg
              width="24"
              height="16"
              viewBox="0 0 24 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 1c0-0.552 0.448-1 1-1h22c0.552 0 1 0.448 1 1s-0.448 1-1 1h-22c-0.552 0-1-0.448-1-1zM0 8c0-0.552 0.448-1 1-1h12c0.552 0 1 0.448 1 1s-0.448 1-1 1h-12c-0.552 0-1-0.448-1-1zM1 14.001c-0.552 0-1 0.448-1 1s0.448 1 1 1h15c0.552 0 1-0.448 1-1s-0.448-1-1-1h-15z"></path>
            </svg>
          </button>
          <div class="hamburger__content" style={{
            backgroundImage:  ''
          }}>
            <div class="hamburger__options">
              <button class="snipcart-checkout button button--transparent">
                <span class="button__icon nav__button-icon">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22.907 4.22c0.125-0.021 0.254-0.016 0.383 0.018l-0-0c0.505 0.135 0.808 0.704 0.682 1.244l-2.299 9.644c-0.126 0.434-0.505 0.759-0.934 0.759h-12.428l0.556 2.41h10.357c0.531 0 0.96 0.46 0.96 1.030s-0.429 1.029-0.96 1.029h-11.089c-0.455 0-0.834-0.325-0.934-0.785l-3.89-17.010h-2.349c-0.531 0-0.96-0.46-0.96-1.030s0.429-1.030 0.96-1.030h3.082c0.455 0 0.834 0.325 0.934 0.785l2.88 12.542h12.174l1.746-7.377h-7.877c-0.617 0-1.118-0.5-1.118-1.117s0.5-1.117 1.118-1.117l8.901 0c0.036 0 0.071 0.002 0.106 0.005zM9.928 24.5c0.851 0 1.54-0.741 1.54-1.653s-0.69-1.653-1.54-1.653c-0.852 0-1.541 0.741-1.541 1.653s0.69 1.653 1.541 1.653zM19.424 22.847c0 0.912-0.69 1.653-1.54 1.653-0.852 0-1.541-0.741-1.541-1.653s0.69-1.653 1.541-1.653c0.85 0 1.54 0.741 1.54 1.653z"></path>
                  </svg>
                </span>
              </button>
              <div class="">
                <span class="snipcart-items-count"></span> products |{' '}
                <span class="snipcart-total-price"></span>
              </div>
            </div>
            <button class="link snipcart-checkout hamburger__checkout">
              Checkout
              <svg
                width="26"
                height="14"
                viewBox="0 0 26 14"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22.682 6.079h-22.682v1.712h22.814l-4.574 4.528 1.194 1.182 6.566-6.5-6.566-6.5-1.194 1.182 4.442 4.397z"></path>
              </svg>
            </button>
            <ul class="hamburger__nav">
              <li class="hamburger__nav-item">
                <a
                  href=""
                  class="hamburger__nav-link hamburger__nav-link--active'"
                >
                  Agregar titulos
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
