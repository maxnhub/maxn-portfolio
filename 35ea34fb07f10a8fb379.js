(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{106:function(t,e,s){"use strict";var a=s(76);s.n(a).a},114:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"block block--skills"},[e("div",{staticClass:"section-top"},[e("div",{staticClass:"section-title"},[this._v('Блок "Обо мне"')]),e("button",{staticClass:"add-group",on:{click:this.addNewGroup}},[e("div",{staticClass:"add-icon"},[e("svg-icon",{attrs:{className:"admin__icon",iconName:"remove"}})],1),e("div",{staticClass:"add-group-text"},[this._v("Добавить группу")])])]),e("ul",{staticClass:"skills"},this._l(this.categories,(function(t){return e("li",{key:t.id,staticClass:"change-block change-block--skills"},[e("category-edit",{attrs:{category:t}})],1)})),0)])};a._withStripped=!0;var i=s(72),n={data:function(){return{isReadySkill:!0,isGoSkill:!1,categories:[],cat:""}},components:{svgIcon:function(){return Promise.resolve().then(s.bind(null,15))},categoryEdit:function(){return s.e(7).then(s.bind(null,117))}},methods:{fetchCategories:function(){var t=this;i.a.get("/categories/182").then((function(e){t.categories=e.data}))},addNewGroup:function(t){this.categories.push(t)}},created:function(){this.fetchCategories()}},o=(s(106),s(3)),c=Object(o.a)(n,a,[],!1,null,null,null);c.options.__file="src/admin/pages/about.vue";e.default=c.exports},72:function(t,e,s){"use strict";var a=s(73),i=s.n(a),n=localStorage.getItem("token");i.a.defaults.baseURL="https://webdev-api.loftschool.com",i.a.defaults.headers.Authorization="Bearer ".concat(n),i.a.interceptors.response.use((function(t){return t}),(function(t){var e=t.config;return t.response&&401===t.response.status?i.a.post("/refreshToken").then((function(t){var s=t.data.token;return localStorage.setItem("token",s),i.a.defaults.headers.Authorization="Bearer ".concat(s),e.headers.Authorization="Bearer ".concat(s),i()(e)})):Promise.reject(t)})),e.a=i.a},76:function(t,e,s){}}]);