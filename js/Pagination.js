export default {
  props:['pages', 'getProducts'],
  template: `<nav aria-label="products-admin-navigation" class="d-flex justify-content-center">
  <ul class="pagination">
    <li class="page-item" :class="{disabled: !pages.has_pre}">
      <a class="page-link" @click="getProducts(pages.current_page - 1)" href="javascript:;" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a>
    </li>
    <li class="page-item" v-for="page in pages.total_pages" :key="page+23" :class="{active: page === pages.current_page}"><a class="page-link" @click="getProducts(page)" href="javascript:;">{{ page }}</a></li>
    <li class="page-item" :class="{disabled: !pages.has_next}">
      <a class="page-link" @click="getProducts(pages.current_page + 1)" href="javascript:;" aria-label="Next"><span aria-hidden="true">&raquo;</span></a>
    </li>
  </ul>
</nav>`
}