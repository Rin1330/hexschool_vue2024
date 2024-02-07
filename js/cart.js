import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
import axios from "https://cdnjs.cloudflare.com/ajax/libs/axios/1.6.5/esm/axios.min.js";
import UserProductModal from './UserProductModal.js';

const vm = createApp({
  data() {
    return {
      apiUrl: 'https://vue3-course-api.hexschool.io/v2',
      apiPath: 'delifans',
      products: [],
      tempProduct: {}
    }
  },
  components: {
    UserProductModal
  },
  methods: {
    getProducts() {
      axios.get(`${this.apiUrl}/api/${this.apiPath}/products/all`)
        .then(res => {
          console.log(res);
          this.products = res.data.products
        })
    },
    openModal(product) {
      this.tempProduct = product
      this.$refs.productModal.openModal()
    },
    addCart() {
      const data = {
        "product_id": "-L9tH8jxVb2Ka_DYPwng",
        "qty": 1
      }
      axios.post(`${this.apiUrl}/api/${this.apiPath}/cart`, {data})
    }
  },
  mounted(){
    this.getProducts()
  }
})

vm.mount('#app')