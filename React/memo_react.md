### babel.min.js
* ES6 --> ES5
* jsx --> js
### react.development.js
* 核心包--React
### react-dom.development.js
* 扩展--ReactDom
### prop-types.js
* 用于对组件标签属性进行限制--PropTypes

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
   * 每个组件都有props属性
   * 组件标签的所有属性都保存在props中
   * 组件内部不能修改props数据，作用是从外部向组件内传递变化的数据
   * v15.5开始，PropsTypes单独封装为一个库，不在React里了
   * 通过{...xxx}将对象的所有属性通过props传递
3. ref
   * 字符串(不推荐)
   * 回调形式
   * createRef

#### React构造函数作用：
1. 通过给this.state赋值对象来初始化内部state
2. 为事件处理函数绑定实例

#### 事件处理
1. 通过onXxx属性指定事件处理函数
   * React使用的是自定义事件，不是原生DOM事件
   * React中的事件是通过事件委托方式处理的(委托给组件最外层的元素)
2. 通过event.target得到发生事件的DOM元素对象

#### 高阶函数
1. 若A函数接收的参数是一个函数，那么A就称为高阶函数
2. 若A函数调用的返回值是一个函数，那么A就称为高阶函数

#### 函数的柯里化
    通过函数调用继续返回函数的方式，实现多次接收参数最后统一处理的函数编码形式。

#### 生命周期(旧)
* constructor---构造函数
* componentWillMount---组件挂载前(将废弃UNSAFE_)
* render---初期化，更新state
* componentDidMount---组件挂载完毕
* componentWillUnmount---组件卸载前
* componentDidUpdate---组件卸载完毕
* shouldComponentUpdate---state更新时，判断是否要更新
* componentWillUpdate---执行更新(将废弃UNSAFE_)
* componentWillReceiveProps---父组件render执行(将废弃UNSAFE_)
#### ↑重要的勾子
* render：初始化渲染或更新渲染调用
* componentDidMount：开启监听，发送ajax请求
* componentWillUnmount：做收尾工作


