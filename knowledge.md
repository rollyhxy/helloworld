# DOM的性能问题

- 当解析的html文件很大时，生成DOM树占用内存较大，同时遍历（不更新）元素耗时也更长。但这都不是重点，DOM的核心问题是：DOM修改导致的页面重绘、重新排版！重新排版是用户阻塞的操作，同时，如果频繁重排，CPU使用率也会猛涨.
- DOM操作会导致一系列的重绘（repaint）、重新排版（reflow）操作。为了确保执行结果的准确性，所有的修改操作是按顺序同步执行的。大部分浏览器都不会在JavaScript的执行过程中更新DOM。相应的，这些浏览器将对对 DOM的操作放进一个队列，并在JavaScript脚本执行完毕以后按顺序一次执行完毕。也就是说，在JavaScript执行的过程，直到发生重新排版，用户一直被阻塞。

- 一般的浏览器中（不含IE），repaint的速度远快于reflow，所以避免reflow更重要。

# 导致repaint、reflow的操作：

    * DOM元素的添加、修改（内容）、删除( Reflow + Repaint)

    * 仅修改DOM元素的字体颜色（只有Repaint，因为不需要调整布局）

    * 应用新的样式或者修改任何影响元素外观的属性

    * Resize浏览器窗口、滚动页面

    * 读取元素的某些属性（offsetLeft、offsetTop、offsetHeight、offsetWidth、scrollTop/Left/Width/Height、clientTop/Left/Width/Height、getComputedStyle()、currentStyle(in IE)) 

    【2】其他

    某些Javascript框架中，CSS选择器，如：var el = $('.hyddd');由于IE6、7不支持，所以Javascript框架必须通过遍历整个DOM树来寻找对象。

# 针对DOM问题，Javascript的应对方案
- 减少因DOM操作，引起的reflow
1) 在DOM外，执行尽量多的变更操作
2) 操作DOM前，先把DOM节点删除或隐藏，因为隐藏的节点不会触发重排
3) 一次性，修改样式属性
4) 使用缓存，缓存临时节点。


# 根据浏览器请求处理流程，进行前端性能优化：
[性能优化](http://www.jianshu.com/p/1e96be604706)