package main

import (
	"framework/book_src/golang/stdlib/rpc/demo/t00/common"
	"net"
	"net/rpc"
)

func main() {
	arith := new(common.Arith)
	err := rpc.Register(arith)
	if err != nil {
		panic(err)
	}
	rpc.HandleHTTP()
	l, err := net.Listen("tcp", ":1234")
	if err != nil {
		panic(err)
	}
	defer l.Close()

	for {
		conn, err := l.Accept()
		if err != nil {
			panic(err)
		}
		go rpc.ServeConn(conn)
	}
}
