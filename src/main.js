import Vue from "vue";

import QAForm from './components/QuestionForm'
import SubmissionSuccess from './components/SubmissionSuccess'
import SubmissionFail from './components/SubmissionFail'

import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'QA Form',
      component: QAForm
    },
    {
      path: '/thanks',
      name: 'success',
      component: SubmissionSuccess
    },
    {
      path: '/404',
      name: 'fail',
      component: SubmissionFail
    }
  ]
})

import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
