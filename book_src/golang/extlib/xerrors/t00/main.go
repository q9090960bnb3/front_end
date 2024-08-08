package main

import (
	"fmt"

	"golang.org/x/xerrors"
)

func f1() error {
	return xerrors.New("f1 error")
}

func f2() error {
	err := f1()
	return xerrors.Errorf("err: %w", err)
}

func main() {
	err := f2()
	fmt.Printf("%+v\n", err)
}
