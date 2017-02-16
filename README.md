# vue-cli多页面应用
> A Vue.js project

> Include element-ui and vue-router

> Base webpack 1.x  and vue-cli

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```
## Folder directory is introduced

``` bash
  build     --- 基于webpack构建的 配置文件
  config    --- 环境变量 配置文件
  src       --- 主要项目内容
      common      -- 页面静态文件目录
      components  -- 组件目录
      module      -- 多页面入口文件
  static    --- 预留静态文件文件夹
```


## How to add folder

``` bash

    module      -- 多页面入口文件
    
        index       ------ 首页入口
            index.html    --- 首页入口 页面
            index.js      --- 对应 js 入口
            App.vue       --- 对应 全页面 app.vue 文件
          
        list        ------ list页面入口
            list.html     --- list页面入口 页面     （html 文件名称必须和 目录名称一致）
            list.js       --- 对应 js 入口          （js 文件名称必须和 目录名称一致）
            App.vue       --- 对应 全页面 app.vue 文件 （随意）
 
 
        spa         ------ spa页面入口              
            spa.html      --- spa 入口页面          （html 文件名称必须和 目录名称一致） 
            spa.js       --- 对应 js 入口           （js 文件名称必须和 目录名称一致）
            App.vue       --- 对应 全页面 app.vue 文件（随意）        
        
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
