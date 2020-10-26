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
  - modelValue
  ```js
    props: {
      modelValue: String
    },
  ```
  - 更新 v-model 
  ```js
  setup(props, context) {
    const udpateValue = (e: KeyboardEvent) => {
      const targetValue = (e.target as HTMLInputElement).value
      inputRef.val = targetValue
      context.emit('update:modelValue', targetValue)
    }
    return {
      udpateValue
    }
  }
  ```

#### attrs
- 父组件
```js
 <validate-input
  :rules="emailRules"
  v-model="modelValue"
  placeholder="Hello"
  type="text"
  ></validate-input>
```
- 子组件
```js
<div>
  <input
    v-bind="$attrs"
    :class="{'is-invalid': inputRef.error}"
    type="email" v-model="inputRef.val"
    name="" id="" class="form-control"
    @blur="validateInput"
    @input="udpateValue"
  />
</div>
```
- 直接写 placeholder 会继承在子组件的根元素的属性中，也就是上面的 div 中 ```使用 inheritAttrs : false``` 禁用 Attribute 的继承
- 然后直接使用 $attrs 获取添加的属性