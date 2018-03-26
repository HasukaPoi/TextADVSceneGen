# TextADVSceneGen
一个可以简单生成类似于文字ADV场景的图片的工具。 [*[点这里立即使用]*](http://hasuka.top/TextADVSceneGen)

原本是 [GalSceneGenerator](https://github.com/HasukaPoi/GalSceneGenerator) 的重写。

不想写了好麻烦，学习学习就行了。

## 可以做到的
- 通过传入的背景图片和剧情/对话文本生成一张类似于文字ADV场景截图的图片。
- 基于现代浏览器对HTML5中Canvas，以及JavaScript来实现，完全依靠前端。
- 现时样式仿照了*Hanasaki Work Spring!*和*Floral \* Flowlove*。
- (新) 加入了可以高度定制的样式（太麻烦了不打算继续写）。
- 根据样式不同自动在说话人两侧加上符号或是在语句前后加上引号等。
- 可以更改文本框透明度等。
- 图片不论比例、尺寸如何，会等比缩放至满屏1280*720（用UIKit的话来说就是ScaleAspectFit）。

## 开发进度
### 2018年3月26日
加入了可以高度定制的样式（太麻烦了不打算继续写）。

### 2018年3月25日
更改Repo名（GalSceneGenerator-JS → TextADVSceneGen）。分离中文版README。

### 2018年3月24日
整理HTML+CSS布局；加入样式：FloFlo。

加入了工具栏和Hanasaki文本框右下角的铃铛。加入了自动显示/隐藏的语音重放图标。

### 2018年3月23日
加入了简易的颜色选择器（RGBA）。

可以实时更改背景图片和文字了。

只引入背景图，尝试直接绘制文本框和文字。“保存”按钮可能不能正常工作在所有环境下。

### 2018年3月17日
立项。

## TODO
- 重新组织js代码结构。
- etc

## 测试环境
Chrome 63 (64-bit), Windows 10 下工作正常，可以直接右键保存图像，“保存”按钮弹出对话框空白。

Safari, iOS 11.2.6 (iPhone 7 Plus) 下工作正常，点击保存按钮后弹出页面可以在Share Sheet中选择保存图像。
