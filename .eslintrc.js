// 参考 https://juejin.im/post/5bab946cf265da0ae92a75ca
module.exports = {
	// 环境定义了预定义的全局变量。
	env: {
		//环境定义了预定义的全局变量。更多在官网查看
		browser: true,
		node: true,
		commonjs: true,
		amd: true,
		es6: true,
		mocha: true
	},
    // JavaScript 语言选项
    parser:"babel-eslint",
	parserOptions: {
		// ECMAScript 版本
		ecmaVersion: 6,
		sourceType: 'module' //设置为 "script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)。
	},
	//-----让eslint支持 JSX start
	extends: ['eslint:recommended', 'standard'],
	//-----让eslint支持 JSX end

	/**
	 * "off" 或 0 - 关闭规则
	 * "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出),
	 * "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
	 */
	rules: {
    }
}