const pages = [
  {
    title: 'Ex1 - 從函式拆解認識設計模式',
    week: '第一週',
    link: './week1.html',
    is_active: true
  },
  {
    title: 'Ex2 - RESTful API 串接',
    week: '第二週',
    link: './week2-login.html',
    is_active: true
  },
  {
    title: 'Ex3 - 熟練 Vue.js',
    week: '第三週',
    link: './week3-login.html',
    is_active: true
  },
  {
    title: 'Ex4：元件化',
    week: '第四週',
    link: './week4-login.html',
    is_active: true
  },
  {
    title: 'Ex5：進階語法介紹',
    week: '第五週',
    link: './cart.html',
    is_active: true
  },
]

export default {
  template: `<nav class="navbar navbar-expand-lg bg-warning">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
      <ul class="navbar-nav mb-2 mb-lg-0">
        <li class="nav-item"><a class="nav-link" href="./index.html">目錄</a></li>
        <template  v-for="(page, index) in pages" :key="index">
          <li class="nav-item" v-if="page.is_active">
            <a class="nav-link" :aria-label="page.title" :href="page.link">{{ page.week }}</a>
          </li>
        </template>
      </ul>
    </div>
  </div>
</nav>`,
  data() {
    return {
      pages
    }
  },
}

export const indexList = {
  template: `<div class="list-group index-list">
  <template v-for="(page, index) in pages" :key="index + 20240129">
    <a
      class="list-group-item list-group-item-action list-group-item-info text-dark fw-bold font-salsa fs-5"
      :href="page.link"
      v-if="page.is_active"
      >{{ page.title }}</a
    >
  </template>
</div>`,
  data() {
    return {
      pages
    }
  }
}