export default {
  props:['tempProduct'],
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
                <input type="number" class="form-control" min="1">
                <button type="button" class="btn btn-primary" >加入購物車</button>
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
      productModal: null
    }
  },
  methods: {
    openModal() {
      this.productModal.show()
    }
  },
  mounted() {
    this.productModal = new bootstrap.Modal(this.$refs.modal, {
      keyboard: false,
      backdrop: 'static'
    })
  }
}