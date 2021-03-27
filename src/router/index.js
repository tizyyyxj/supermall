import Vue from 'vue'
import Router from 'vue-router'

// 对文件进行懒加载
const Home = () => import('view/home/Home');
const Category = () => import('view/category/Category');
const Cart = () => import('view/cart/Cart');
const Profile = () => import('view/profile/Profile');

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect:'/home' 
    },{
      path:'/home',
      component:Home
    },{
      path:'/category',
      component:Category
    },{
      path:'/cart',
      component:Cart
    },{
      path:'/profile',
      component:Profile
    }
  ],
  mode:'history'
})
