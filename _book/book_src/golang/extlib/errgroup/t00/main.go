package main

import (
	"errors"
	"fmt"
	"time"

	"golang.org/x/sync/errgroup"
)

func main() {
	var g errgroup.Group

	g.Go(func() error {
		time.Sleep(2 * time.Second)
		fmt.Println("exec 1")
		return nil
	})

	g.Go(func() error {
		time.Sleep(3 * time.Second)
		fmt.Println("exec 2")
		return errors.New("failed to exec 2")
	})

	g.Go(func() error {
		fmt.Println("exec 3")
		return errors.New("failed to exec 3")
	})

	if err := g.Wait(); err == nil {
		fmt.Println("exec done")
	} else {
		fmt.Println("failed: ", err)
		fmt.Printf("failed: %+v\n", err)
	}
}
