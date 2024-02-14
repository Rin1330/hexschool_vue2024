// import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
import axios from "https://cdnjs.cloudflare.com/ajax/libs/axios/1.6.5/esm/axios.min.js";
import UserProductModal from './UserProductModal.js';
// import Loading from 'https://cdn.jsdelivr.net/npm/vue-loading-overlay@6.0.3/dist/css/index.min.css';
// import 'https://cdn.jsdelivr.net/npm/vue-loading-overlay@6.0.3/dist/css/index.min.css';

const { Form, Field, ErrorMessage, defineRule, configure } = VeeValidate;
const { loadLocaleFromURL, localize } = VeeValidateI18n;

Object.keys(VeeValidateRules).forEach(rule => {
  if (rule !== 'default') {
    defineRule(rule, VeeValidateRules[rule]);
  }
});

loadLocaleFromURL('./json/zh_TW.json');

configure({
  generateMessage: localize('zh_TW'),
  validateOnInput: true, // 調整為：輸入文字時，就立即進行驗證
});


const vm = Vue.createApp({
  data() {
    return {
      apiUrl: 'https://vue3-course-api.hexschool.io/v2',
      apiPath: 'delifans',
      isLoading: true,
      status: {
        addCartLoading: '',
        cartQtyLoading: '',
      },
      products: [],
      tempProduct: {},
      carts: [],
      order: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
      offcanvas: null
    }
  },
  components: {
    UserProductModal,
    VForm: Form,
    VField: Field,
    ErrorMessage: ErrorMessage,
  },
  methods: {
    getProducts() {
      axios.get(`${this.apiUrl}/api/${this.apiPath}/products/all`)
        .then(res => this.products = res.data.products )
    },
    openModal(product) {
      this.tempProduct = product
      this.$refs.productModal.open()
    },
    addCart(product_id, qty=1) {
      const data = {
        product_id,
        qty
      }
      
      this.status.addCartLoading = product_id
      axios.post(`${this.apiUrl}/api/${this.apiPath}/cart`, {data})
        .then(res => {
          this.status.addCartLoading = '';
          this.getCart()
          this.$refs.productModal.close()
        })
    },
    editCartQty(item, qty=1) {
      const data = {
        product_id: item.product_id,
        qty
      }
      this.status.cartQtyLoading = item.id;
      axios.put(`${this.apiUrl}/api/${this.apiPath}/cart/${item.id}`, {data})
            .then(res => {
              this.status.cartQtyLoading = '';
              this.getCart();
            })
    },
    getCart() {
      const loader = this.$loading.show({
        color: '#0a0a00',
        loader: 'dots',
        backgroundColor: '#ffffff',
        opacity: 0.9,
        zIndex: 999,
      })
      axios.get(`${this.apiUrl}/api/${this.apiPath}/cart`)
        .then(res => {
          this.carts = res.data.data
          loader.hide()
        })
    },
    removeCartItem(id) {
      this.status.cartQtyLoading = id;
      axios.delete(`${this.apiUrl}/api/${this.apiPath}/cart/${id}`)
      .then(res => {
        this.status.cartQtyLoading = '';
        this.getCart();
        })
    },
    removeCart() {
      axios.delete(`${this.apiUrl}/api/${this.apiPath}/carts`)
      .then(res => {
        this.getCart();
        })
    },
    openOffcanvas() {
      this.offcanvas.show()
    },
    createOreder() {
      const url = `${this.apiUrl}/api/${this.apiPath}/order`
      const order = this.order
      axios.post( url, { data: order })
        .then(res => {
          alert(res.data.message)
          this.$refs.form.resetForm()
          this.getCart()
        })
    }
  },
  mounted() {
    this.getProducts()
    this.getCart()
  }
})

vm.use(VueLoading.LoadingPlugin)

vm.mount('#app')