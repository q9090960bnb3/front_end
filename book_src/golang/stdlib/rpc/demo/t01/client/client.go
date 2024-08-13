package main

import (
	"fmt"
	"framework/book_src/golang/stdlib/rpc/demo/t00/common"
	"net/rpc"
	"os"
)

func synchRpc(client *rpc.Client) (reply int, err error) {
	args := &common.Args{A: 7, B: 8}
	err = client.Call("Arith.Multiply", args, &reply)
	return reply, err
}

func asyncRpc(client *rpc.Client) (reply common.Quotient, err error) {
	args := &common.Args{A: 9, B: 8}
	divCall := client.Go("Arith.Divide", args, &reply, nil)
	replyCall := <-divCall.Done

	return reply, replyCall.Error
}

func main() {
	mode := "sync"
	if len(os.Args) > 1 {
		mode = os.Args[1]
	}

	client, err := rpc.Dial("tcp", ":1234")
	if err != nil {
		panic(err)
	}
	var reply any
	switch mode {
	case "sync":
		reply, err = synchRpc(client)
		if err != nil {
			panic(err)
		}
	case "async":
		reply, err = asyncRpc(client)
		if err != nil {
			panic(err)
		}
	}
	fmt.Printf("reply:%v\n", reply)
}
