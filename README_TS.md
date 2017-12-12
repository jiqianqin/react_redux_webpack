更改项目为ts 时，做了一下动作
## 配置项
1. npm i ts-loader --save-dev
2. npm i typescript --save
3. webpack.common.config 的 module 中添加 
   {
            test: /\.tsx$/,
            use: ['ts-loader'],
            include: path.join(__dirname, 'src')
    },


4. webpack.common.config 的 resolve 中添加 
    extensions: [".tsx", ".ts", ".js"] 

5. 新增 tsconfig 文件

6. 更改 js 为ts 