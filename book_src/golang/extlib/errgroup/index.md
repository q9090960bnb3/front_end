# errgroup

Go 的扩展库 golang.org/x/sync 提供了 errgroup 包，它是基于 WaitGroup 实现的，功能上和 WaitGroup 类似，不过可以通过上下文取消，控制并发数量，还能返回错误。

## 获取错误

@import "t00/main.go"