# vue-basic
vue2 basic

## Vue.js Start

### 开发环境搭建

#### node.js开发环境搭建 

[笔记地址](http://note.youdao.com/noteshare?id=951604433c8b64fde837e9b6a0c5ff75&sub=56F4BC47BA304C9991C6486E7DFF2677)

#### npm & yarn 准备 & 检查版本

```powershell
npm -v
yarn -v
```

#### 全局安装`vue/cli`脚手架

```
# 3.0以前版本
1.安装vue-cli 脚手架 npm install -g vue-cli
2.查看vue-cli版本vue -V
3.初始化项目vue init webpack my-project
4.cd my-project
5.yarn run dev
6.脚手架运行项目yarn run serve
7.脚手架打dist包yarn run build
```

```
# 3.0.之后版本
1.全局安装最新脚手架
npm install -g @vue/cli
# OR
yarn global add @vue/cli
2.查看vue-cli 版本
vue -V
3.创建项目
vue create projectName
4.cd projectName
5.yarn run dev
6.脚手架运行项目yarn run serve
7.脚手架打dist包yarn run build
```

#### 版本升级

1. 卸载旧版本`vue/cli`
     > //npm
   >
   > npm uninstall vue-cli -g

   

   > // yarn 
   >
   > yarn remove vue-cli -g
   
2. 确认[node.js]()的环境变量配置

3. 升级安装

     

     >npm install -g  @vue/cli 

     >yarn global add @vue/cli 

4. yarn 命令安装 @vue/cli成功，bash: vue command not found
     > 添加到环境变量
     >
     > C:\Users\Administrator\AppData\Local\Yarn\Data\global\node_modules\.bin
5. 确认[vue/cli](vue/cl)版本

     > vue -V






