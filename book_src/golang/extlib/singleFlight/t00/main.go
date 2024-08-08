package main

import (
	"fmt"
	"time"

	"golang.org/x/sync/singleflight"
)

func GetValueFromRedis(key string) string {
	fmt.Println("query ...")
	time.Sleep(10 * time.Second) // 模拟一个比较耗时的操作
	return "singleflight demo"
}

func main() {
	requestGroup := new(singleflight.Group)

	cachekey := "demokey"
	go func() {
		v1, _, shared := requestGroup.Do(cachekey, func() (interface{}, error) {
			ret := GetValueFromRedis(cachekey)
			return ret, nil
		})
		fmt.Printf("1st call: v1: %v, shared: %v\n", v1, shared)
	}()

	time.Sleep(2 * time.Second)

	// 重复查询 key，第一次查询还未结束
	v2, _, shared := requestGroup.Do(cachekey, func() (interface{}, error) {
		ret := GetValueFromRedis(cachekey)
		return ret, nil
	})
	fmt.Printf("2nd call: v2:%v, shared:%v\n", v2, shared)
}
