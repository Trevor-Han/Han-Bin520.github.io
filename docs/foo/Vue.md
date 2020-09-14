# vue基础知识
> Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，
Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方
库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够
为复杂的单页应用提供驱动。
### 几种模式介绍#
### MVC（Model View Controller）模式
 MVC 是比较直观的架构模式，即用户操作 →View（负责接收用户的输入操作）→Controller
 （业务逻辑处理）→Model（数据持久化）→View（将结果反馈给 View）。
 
 ![Image text](https://mmbiz.qpic.cn/mmbiz_jpg/WXda9MIjaibBnia87NKx6Gibziac8BV1uygCQAAPD5PC5EPA92zEibyNTVqbQ8xdkN19bwB4SyaqxyIUTibyJCibBwZsw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)
### MVP（Model View Presenter）模式
MVP 是把 MVC 中的 Controller 换成了 Presenter（呈现），目的就是为了完全切断 View 跟 
Model 之间的联系，由 Presenter 充当桥梁，做到 View-Model 之间通信的完全隔离。
![Image text](https://mmbiz.qpic.cn/mmbiz_jpg/WXda9MIjaibBnia87NKx6Gibziac8BV1uygCLH9SQ92oEMiamxVrdojjlnOAABRKibBaBcfL3RT2LzQ2ibuBmDbbeooRQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)
### MVVM（Model View ViewModel）模式
如果说 MVP 是对 MVC 的进一步改进，那么 MVVM 则是思想的完全变革。
MVVM 是将“数据模型数据双向绑定”的思想作为核心，因此在 View 和 
Model 之间没有联系，而是通过 ViewModel 进行交互，而且 Model 和 
ViewModel 之间的交互是双向的，因此视图数据的变化会同时修改数据源，
而数据源数据的变化也会立即反应到 View 上。
### MVVM 模式的优点
- 视图层低耦合

视图（View）可以独立于 Model 变化和修改，一个 ViewModel 可以绑定到不同的 View 上，当 View 变化的时候 Model 可以不变，当 
Model 变化的时候 View 也可以不变。

- 各种代码写成控件之后可重用

可以把一些视图逻辑放在一个 ViewModel 里面成为多重可以组合的控件，在具体的页面中进行整合和使用，让更多 View 重用这段视图逻辑。

- 可以交由前端工程师独立开发

开发人员可以专注于业务逻辑和数据的开发（ViewModel），设计人员可以专注于页面设计，通过相应的接口规范可以简单地进行整合。

- 便于测试和部署

界面向来是比较难于测试的，而现在测试可以针对具体的页面控件来写，也可以在不依赖于后端的基础上，直接通过工具或者假数据进行测试。

![Image text](https://mmbiz.qpic.cn/mmbiz_jpg/WXda9MIjaibBnia87NKx6Gibziac8BV1uygCTkwaJvFHXgRtaNq4G5LAGBYRVMLU14PZLmX2xUs1d1HUUQtu2btibVQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)
