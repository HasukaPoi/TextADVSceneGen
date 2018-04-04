# TextADVSceneGen
[*[转到中文版]*](https://github.com/HasukaPoi/TextADVSceneGen/blob/master/README-cn.md)

A tool to generate a image that looks like a screenshot of text-ADV scene. Text-ADV means a kind of game that mainly interact by reading text and selecting options.  [[Click here to try]](http://hasuka.top/TextADVSceneGen)

Originally as the JavaScript implementation of [GalSceneGenerator](https://github.com/HasukaPoi/GalSceneGenerator), which was done in Python3.

## Main features
- Generate a text-ADV-like scene, using inputs of background image and scenario texts.
- Based on Canvas in HTML5 and JavaScript, which is supported by modern web browsers.
- The style of dialog box and toolbar is based on *Hanasaki Work Spring* & *Floral \* Flowlove*.
- (New) Added a highly-customable style.
- Depends on with/without speaker's name, brackets and quotes will be set automatically.
- The transparency of dialog box can be modified.
- Whatever the size of background image is, the output picture will be 1280*720 in ScaleAspectFit.

## Update footprint
### Mar 26, 2018
Added a highly-customable style.

### Mar 25, 2018
Changed name of this repo(GalSceneGenerator-JS -> TextADVSceneGen). Separated Chinese version of README.

### Mar 24, 2018
Re-arranged HTML layout and stylesheet. New style added: FloFlo.

Added toolbar and the suzu (in style Hanasaki) in output picture. Added voice icon which will automatically appear/disappear.

### Mar 23, 2018
A simple color picker is added.

The background image and scenario text can be changed in real time.

Try to build the code. The save button may not work in any environment.

### Mar 17, 2018
Started this project.

## TODO
- Refactor code structure.
- etc

## Test Environment
Chrome 63 (64-bit), Windows 10: Works well. Output picture can be saved by right-click.

Safari, iOS 11.2.6 (iPhone 7 Plus) : Works well (including save button)
