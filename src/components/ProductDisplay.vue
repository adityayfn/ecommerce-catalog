<template>
  <div id="product">
    <section class="men" id="men" v-if="display1">
      <div :class="changebg()">
        <div class="bg-pattern">
          <div class="card">
            <div>
              <div class="card-img">
                <img :src="products.image" alt="item-image" />
              </div>
            </div>
            <div class="px">
              <div class="card-title">
                <h1 class="title">{{ products.title }}</h1>
              </div>
              <div class="category-rating">
                <div class="category-div">
                  <p class="category">{{ products.category }}</p>
                </div>
                <div class="rating-div">
                  <p class="rating-text">{{ ratingText }}/5</p>
                </div>
              </div>
              <hr />
              <div class="card-desc">
                <p class="description">{{ products.description }}</p>
              </div>
              <hr />
              <div class="card-price">
                <h1 class="price">${{ products.price }}</h1>
              </div>
              <div class="button">
                <button class="buy">Buy Now</button>
                <button class="next" @click="getProducts()">
                  Next Product
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- <section class="women" id="women" v-if="display2">
      <div :class="changebg()">
        <div class="bg-pattern">
          <div class="card">
            <div>
              <div class="card-img">
                <img :src="products.image" alt="item-image" />
              </div>
            </div>
            <div class="px">
              <div class="card-title">
                <h1 class="title">{{ products.title }}</h1>
              </div>
              <div class="category-rating">
                <div class="category-div">
                  <p class="category">{{ products.category }}</p>
                </div>
                <div class="rating-div">
                  <p class="rating-text">{{ rating }}/5</p>
                  <span class="rating"></span>
                </div>
              </div>
              <hr />
              <div class="card-desc">
                <p class="description">{{ products.description }}</p>
              </div>
              <hr />
              <div class="card-price">
                <h1 class="price">${{ products.price }}</h1>
              </div>
              <div class="button">
                <button class="buy">Buy Now</button>
                <button class="next" @click="getProducts()">
                  Next Product
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->
    <section class="unavailable" id="unavailable" v-if="display3">
      <div class="bg-layers">
        <div class="card">
          <div class="sad-face">
            <img src="../assets/sad-1.png" alt="" class="eye-brow-1" />
            <img src="../assets/sad-2.png" alt="" class="eye-brow-2" />
            <img src="../assets/sad-3.png" alt="" class="eyes" />
            <img src="../assets/sad-4.png" alt="" class="lips" />
            <div class="unavailable-content">
              <h1 class="unavailable-text">
                This product is unavailable to show
              </h1>
              <button class="btn-unavailable" @click="getProducts()">
                Next Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "product-display",
  data: function () {
    return {
      products: [],
      ratingIcon: null,
      ratingText: null,
      id: 1,
      bgsection: "",
      display1: true,
      // display2: false,
      display3: false,
    }
  },
  methods: {
    getProducts() {
      fetch(`https://fakestoreapi.com/products/${this.id}`)
        .then((res) => res.json())
        .then((datas) => {
          let product = { ...datas }
          this.id++
          this.products = product
          if (
            product.category === "men's clothing" ||
            product.category === "women's clothing"
          ) {
            this.products = product
            this.ratingText = product.rating["rate"]

            this.display1 = true
            this.display3 = false
          } else {
            this.display1 = false
            this.display3 = true
          }
          if (this.id === 21) {
            this.id = 1
          }
        })
    },
    changebg() {
      if (this.products.category === "men's clothing") {
        return (this.bgsection = "bg-layers-men")
      } else {
        return (this.bgsection = "bg-layers-women")
      }
    },
  },
  mounted: function () {
    this.getProducts()
  },
}
</script>
<style scoped>
hr {
  margin-left: 0;
  width: 90%;
}
.px {
  padding: 0 30px;
}
.men {
  position: relative;
  height: 100vh;
}
.bg-layers-men {
  position: relative;
  height: 65%;
  background-color: var(--light-cyan);
}
.bg-pattern {
  background-image: url("../assets/bg-pattern.svg");
  height: 100%;
}
.card {
  position: absolute;
  width: 1000px;
  height: 430px;
  top: 85px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background: #ffffff;
  box-shadow: 1px 1px 8px 0px rgba(0, 0, 0, 0.75);
  border-radius: 10px;
  display: flex;
}
.card-img {
  position: relative;
  margin: 10px;
  padding: 20px;
}
.card-img img {
  height: 320px;
  margin: 20px;
  margin-left: 35px;
}
.card-title {
  text-align: left;
  margin: 20px 0;
  margin-right: 20px;
}
.title {
  font-size: 1.7em;
  color: var(--dark-blue);
}
.category-rating {
  display: flex;
}
.category-div {
  flex: 1 1 65%;
}
.rating-div {
  position: relative;
  flex: 1 1 35%;
}
.category {
  color: var(--dark-grey);
}
.rating {
  display: inline-block;
  position: absolute;
  top: 0;
  left: 35px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  z-index: 999;
  background-color: var(--dark-blue);
}
.card-desc {
  height: 170px;
  width: 90%;
}
.price {
  font-size: 1.5em;
  color: var(--dark-blue);
}
.buy {
  background-color: var(--dark-blue);
  color: var(--light);
  padding: 10px;
  border: none;
  width: 259px;
  height: 42px;
  margin: 5px;
  cursor: pointer;
}
.next {
  background-color: var(--light);
  color: var(--dark-blue);
  padding: 10px;
  border: none;
  width: 259px;
  height: 42px;
  border: 2px solid var(--dark-blue);
  cursor: pointer;
}
.women {
  position: relative;
  height: 100vh;
}
.bg-layers-women {
  position: relative;
  height: 65%;
  background-color: var(--light-pink);
}
.unavailable {
  position: relative;
  height: 100vh;
}
.bg-layers {
  position: relative;
  height: 65%;
  background-color: var(--light-grey);
}
.sad-face {
  position: relative;
  width: 100%;
  border: 1px solid black;
}
.eye-brow-1 {
  position: absolute;
  left: 20%;
  margin-top: 28px;
}
.eye-brow-2 {
  position: absolute;
  right: 20%;
  margin-top: 28px;
}
.eyes {
  position: absolute;
  bottom: 55%;
  left: 0;
  right: 0;
  margin: 0 auto;
}
.lips {
  position: absolute;
  bottom: 5%;
  left: 0;
  right: 0;
  margin: 0 auto;
}
.unavailable-content {
  position: absolute;
  height: 100%;
  width: 100%;
}
.unavailable-text {
  position: absolute;
  left: 34%;
  top: 36%;
  font-size: 1.5em;
}
.btn-unavailable {
  position: absolute;
  left: 34%;
  top: 45%;
  width: 340px;
  height: 36px;
  background: transparent;
  border: 3px solid black;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  cursor: pointer;
}
</style>
