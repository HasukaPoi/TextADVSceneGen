# GalSceneGenerator-JS
A tool to generate a picture of text-ADV-like scene. [[Hit here to try]](http://hasuka.top/GalSceneGenerator-JS)

Originally as the rewrite of [GalSceneGenerator](https://github.com/HasukaPoi/GalSceneGenerator).

## 功能简述
- 通过传入的背景图片和剧情/对话文本生成一张类似于文字ADV场景截图的图片。
- 现时样式仿照了*Hanasaki Work Spring!*和*Floral\*Flow Love*。
- 根据样式不同自动在说话人两侧加上符号或是在语句前后加上引号等。
- 可以更改文本框透明度等。
- 图片不论比例、尺寸如何，会等比缩放至满屏1280*720（用UIKit的话来说就是ScaleAspectFit）。


## 开发进度
### 2018年3月24日
整理HTML+CSS布局；加入样式：FloFlo。

更改了颜色、透明度自定义框的显示布局。加入了工具栏和文本框右下角的铃铛。加入了自动显示/隐藏的语音重放图标。

### 2018年3月23日
加入了简易的颜色选择器（RGBA）。

可以实时更改背景图片和文字了。

只引入背景图，尝试直接绘制文本框和文字。“保存”按钮可能不能正常工作在所有环境下。

### 2018年3月17日
立项。

## TODO
- 改进字体兼容性
- 增加更多样式
- 重写英文版README
- etc

## 测试环境
Chrome 63 (64-bit), Windows 10 下工作正常，可以直接右键保存图像，“保存”按钮弹出对话框空白。

Safari, iOS 11.2.6 (iPhone 7 Plus) 下工作正常，点击保存按钮后弹出页面可以在Share Sheet中选择保存图像。
