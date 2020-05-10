# jsUtils

前端业务代码工具库 [jsUtils](https://roisoleil520.github.io/jsutils/docs/index.html)

> 目的：减少重复造轮子，高效率完成前端业务代码

在我们日常开发的项目中，几乎每个项目都会有自己的一个 util 文件，用来编写一些工具函数的集合，这样导致的问题是：
- 不同项目中，不同的 util 文件包含相同的工具函数（项目之间相互拷贝）；
- 别人写过的工具函数我不知道，我需要自己再去造一遍轮子；

为了避免这样的问题，就有了这个工具函数库；

## 安装使用
1. 直接下载 `dist` 目录下的 `index.min.js` 使用
2. 使用 `(c)npm` 安装

### 按需引入（推荐）

```js
const { add } = require('jsUtils');

import { add } from 'jsUtils'

add(1, 2);

// => 3
```

### 完整引入

```js
const jsUtils = require('jsUtils');

import * as jsUtils from 'jsUtils'

jsUtils.add(1, 2);

// => 3
```


