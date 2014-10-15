tree
====

## 使用

1. copy tree目录到 `src/components/`下

2. 复制
```
 <script src="components/tree/tree.ctrl.js"></script>
 <script src="components/tree/tree.service.js"></script>
```
到 `index.html` 里 `<!-- build:js({src,.tmp}) scripts/main.js -->`里面

3. 再需要的地方 添加 `<div ng-include="'components/tree/tree.html'"></div>`

4. 在自己的模块中添加依赖 `app.tree'`, 编写自己的 `controller`, 并添加

```
$scope.$on('nodeChanged', function(e, val) {
    // TODO
    console.log(2, val);
});
```

在里面 添加自己的逻辑...

