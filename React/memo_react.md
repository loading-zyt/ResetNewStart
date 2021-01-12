### babel.min.js
* ES6 --> ES5
* jsx --> js
### react.development.js
* 核心包
### react-dom.development.js
* 扩展

### 虚拟DOM
1. 是一个OBJECT对象
2. 虚拟DOM属性少，真实的DOM属性很多（因为虚拟DOM只需要react使用的属性）
3. 虚拟DOM最终会被React转换展示在页面

### JSX:更简单的创建dom（JavaScript Xml）
* 语法规则
  1. 定义虚拟DOM时，不加引号
  2. 标签中混入js表达式时，要用{}
  3. 样式的类名指定要用className
  4. 内联样式要用style={{key:value}}的形式
  5. 只能有一个根标签
  6. 标签必须闭合
  7. 标签首字母
     * 小写字母开头:react将其转为html同名元素，若不存在报错
     * 大写字母开头:react渲染对应组件，若组件未定义报错

### 组件
* 定义函数式组件(简单)
* 定义类式组件
   1. 继承React.Component
   2. 类名即组件名
   3. 调用render()
   4. 渲染页面 -- ReactDOM.render(<组件名/>, 容器)

#### 组件实例三大属性
1. state
   * 值是可包含多个key-value的对象
   * 通过更新state重新渲染页面
   * 组件render方法中的this为组件的实例对象
   * 组件自定义方法(xxx)中的this为undefined，解决方法:
      1. 通过函数对象的bind()强制绑定this--this.xxx = this.xxx.bind(this)
      2. 使用箭头函数--xxx = () => {}
2. props
3. ref