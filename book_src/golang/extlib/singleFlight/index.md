# SingleFlight

作用: 它的作用在处理多个 goroutine 同时调用同一个函数的时候，只让一个 goroutine 去调用这个函数，等到这个 goroutine 返回结果时，再把结 果返回给这几个 goroutine，这样可以减少并发调用的数量。

@import "t00/main.go"