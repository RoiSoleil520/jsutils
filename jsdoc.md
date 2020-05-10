# JS 工具函数库

> - 打包工具：[rollup](https://www.rollupjs.com/)
> - 生成文档工具： [jsDoc](https://devdocs.io/jsdoc-inline-tags/)
> - eslint： [standard](https://standardjs.com/readme-zhcn.html)
> - 单元测试： [jest](https://jestjs.io/docs/zh-Hans/getting-started)
> - Git commit 规范：[commitlint](https://commitlint.js.org/#/reference-rules)
> - jsDoc 模板：[docdash](http://clenemt.github.io/docdash/)


> - 生成文档查看： docs/index.html
> - 工具函数列表： src/utils/
> - 单测列表： test/

## 安装
```
(c)npm i
```

## 开发
- 一个工具函数一个 js 文件；（utils/XX.js）
- 一个工具函数对应一个单测文件；（test/XX.test.js）

***注意： 工具函数 js 需要写上带 jsDoc [标签](http://shouce.jb51.net/jsdoc/tags.html)的注释才会生成对应的页面***

### 示例
```js
/**
 * @author v@zanyuyu.com
 * @name 两数之和
 * @param {Number} a 数 1
 * @param {Number} b 数 2
 * @returns {Number} `a` `b` 的和
 * @example
 *
 * add(1,2)
 * // => 3
 */

let add = function add(a, b) {
    return a + b;
};
export default add;
```


#### 打包
```
npm run build
```

#### 生成文档
```
npm run build:doc
```

#### 打包 js
```
npm run build:lib
```

#### 执行单测
```
npm run test
```

#### eslint
```
npm run lint
// 验证 eslint

npm run lint:fix
// 修正 eslint 错误

```


## 上传 Commit 规范

* feat: 新增功能
* fix: 修复bug
* docs:  文档修改
* style: 代码格式修改, 注意不是 css 修改
* test: 增加测试
* perf: 优化代码，性能优化
* refactor: 重构（即不是新增功能，也不是修改bug的代码变动）
* revert: 撤销上一次的 commit
* build: build 工具更改
* chore: 其他修改, 比如构建流程, 依赖管理.