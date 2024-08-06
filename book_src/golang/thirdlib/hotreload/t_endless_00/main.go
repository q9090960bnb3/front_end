package main

import (
	"fmt"
	"net/http"
	"time"

	"github.com/fvbock/endless"
)

func main() {
	tStart := time.Now()

	mux := http.NewServeMux()
	mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "系统启动时间: %s\n", tStart.Format(time.DateTime))
	})

	panic(endless.NewServer(":8080", mux).ListenAndServe())
}
