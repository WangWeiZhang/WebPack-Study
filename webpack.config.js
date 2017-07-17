module.exports = {
	entry: __dirname + "/app/main.js",
	output:{
		path: __dirname + "/public",
		filename:"bundle3.js"
	},
	devServer:{
		contentBase:"./public/",
		inline:true,
		historyApiFallback:true,
		port:"8081"
	}

}

//__dirname 是 node.js的全局变量  它指向当前脚本所在的根目录（如果他在app中 就指向app）
//entry指定webpack 唯一的入口文件
//output指定webpack 唯一的出口文件路劲和名称
//		path:指向路径
//		filename:设置文件名