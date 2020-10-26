# vue3-forum

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### v-model 的区别
#### vue2
  - 在 Vue2 中，给组件传递 v-model 监听 @input 更新需要使用 $emit
  - 例如 CheckBox 需要监听 change 在 vue2 中需要
    ```html
      <input type="checkbox" :checked="checked" @change="onChange">
    ```
    ```js
      model: {
        prop: "checked", // 属性值
        event: "change" // 事件
      }

      onChange(e) {
        this.$emit('change', e.target.value)
      }
    ```
  - 弊端：不支持多个 v-model
#### vue3
  - 