# 热更新

## endless

### 基本使用

@import "t_endless_00/main.go"

编译后 使用 kill -1 pid 即可实现热更新

```sh
ps aux | grep "<执行文件名称>" | grep -v grep | awk '{print $2}' | xargs -i kill -1
```

### 如何保证其他协程也能优雅退出

- 使用 context.WithCancel 来实现其他协程优雅的退出

@import "t_endless_01/main.go"