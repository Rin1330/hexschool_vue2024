export default {
  props:['tempProduct', 'deleteProduct'],
  template: `<div id="delProductModal" ref="delProductModal" class="modal fade" tabindex="-1"
  aria-labelledby="delProductModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content border-0">
      <div class="modal-header bg-danger text-white">
        <h5 id="delProductModalLabel" class="modal-title">
          <span>刪除產品</span>
        </h5>
        <button type="button" class="btn-close" aria-label="Close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        是否刪除
        <strong class="text-danger">{{ tempProduct.title }}</strong> 商品(刪除後將無法恢復)。
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">取消</button>
        <button type="button" class="btn btn-danger" @click="deleteProduct">確認刪除</button>
      </div>
    </div>
  </div>
</div>`,
  data() {
    return {
      deleteModal: null
    }
  },
  methods:{
    openModal() {
      this.deleteModal.show()
    },
    hideModal() {
      this.deleteModal.hide()
    }
  },
  mounted() {
    this.deleteModal = new bootstrap.Modal('#delProductModal', {
      keyboard: false,
      backdrop: 'static'
    })
    // this.openModal()
  }
}