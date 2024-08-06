package main

import (
	"context"
	"fmt"
	"net/http"
	"sync"
	"time"

	"github.com/fvbock/endless"
)

func main() {
	tStart := time.Now()

	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()

	var wg sync.WaitGroup

	wg.Add(1)
	go func() {

		t := time.NewTicker(time.Second)

		for {
			select {
			case <-t.C:
				fmt.Printf("timer中 当前启动时间: %s 当前时间:%s\n", tStart.Format(time.DateTime), time.Now().Format(time.DateTime))
			case <-ctx.Done():
				fmt.Println("timer cancel")
				wg.Done()
				return
			}
		}

	}()

	mux := http.NewServeMux()
	mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "系统启动时间: %s\n", tStart.Format(time.DateTime))
	})

	server := endless.NewServer(":8080", mux)

	fmt.Println(server.ListenAndServe())
	cancel()
	wg.Wait()
}
