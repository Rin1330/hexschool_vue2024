export default {
  props:['tempProduct', 'addCart', 'status'],
  template: `<div class="modal fade" id="productModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
  <div class="modal-dialog modal-xl" role="document">
    <div class="modal-content border-0">
      <div class="modal-header bg-dark text-white">
        <h5 class="modal-title" id="exampleModalLabel">
          <span>{{ tempProduct.title }}</span>
        </h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col-sm-6">
            <img class="img-fluid" :src="tempProduct.imageUrl" alt="">
          </div>
          <div class="col-sm-6">
            <span class="badge bg-primary rounded-pill">{{ }}</span>
            <p>商品描述：{{ tempProduct.description }}</p>
            <p>商品內容：{{ tempProduct.content}}</p>
            <div class="h5" v-if="tempProduct.price === tempProduct.origin_price">{{ tempProduct.price }} 元</div>
            <div>
              <del class="h6">原價 {{ tempProduct.origin_price }} 元</del>
              <div class="h5">現在只要 {{ tempProduct.price }} 元</div>
            </div>
            <div>
              <div class="input-group">
                <select name="" id="" class="form-select" v-model="qty">
                  <option :value="i" v-for="i in 20" :key="i">{{ i }}</option>
                </select>
                <button type="button" class="btn btn-primary" @click="addCart(tempProduct.id, qty)" :disabled="tempProduct.id === status.addCartLoading">
                  <span class="spinner-border spinner-border-sm" aria-hidden="true" v-if="tempProduct.id === status.addCartLoading"></span>
                  加入購物車
                </button>
              </div>
            </div>
          </div>
          <!-- col-sm-6 end -->
        </div>
      </div>
    </div>
  </div>
</div>`,
  data() {
    return {
      productModal: null,
      qty: 1,
    }
  },
  methods: {
    open() {
      this.productModal.show()
    },
    close() {
      this.productModal.hide()
    }
  },
  watch: {
    tempProduct() {
      this.qty = 1
    }
  },
  mounted() {
    this.productModal = new bootstrap.Modal(this.$refs.modal, {
      keyboard: false,
      backdrop: 'static'
    })
  }
}