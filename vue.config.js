module.exports={
  configureWebpack:{   // configureWebpack：声明要做webpack的config配置了
   resolve:{//resolve:配置路径相关 
      alias:{//alias:别名
       'assets':'@/assets',
       'common':'@/common',
       'components':'@/components',
       'network':'@/network',
       'view':'@/view'
      }
   }
  }
}
