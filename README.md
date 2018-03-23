# GalSceneGenerator-JS
a JavaScript version of [GalSceneGenerator](https://github.com/HasukaPoi/GalSceneGenerator).

之前借助Python的pillow库写了一个生成类似GalGame场景的工具，但是使用局限性较大，代码改起来麻烦，效果也不好看。而且跨平台支持做起来麻烦。

……然后我就想起来为什么不用Js写呢……利用HTML5的Canvas标签来绘图，完全靠前端，也是静态页面，可以直接挂在GitHub Page。→[点这里查看现在的效果](http://hasuka.top/GalSceneGenerator-JS)

## 开发进度

2018年3月23日：只引入背景图，尝试直接绘制文本框和文字。“保存”按钮可能不能正常工作在所有环境下。

2018年3月17日：立项。

## TODO
- 完善对话框样式
- 搞定图片自选
- etc

## 测试环境
Chrome 63 (64-bit), Windows 10 下工作正常，可以直接右键保存图像，“保存”按钮弹出对话框空白。

Safari, iOS 11.2.6 (iPhone 7 Plus) 下工作正常，点击保存按钮后弹出页面可以在Share Sheet中选择保存图像。