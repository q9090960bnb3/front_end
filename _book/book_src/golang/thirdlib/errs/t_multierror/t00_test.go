package tmultierror

import (
	"fmt"
	"testing"

	"golang.org/x/xerrors"

	"github.com/hashicorp/go-multierror"
)

func f1() error {
	return xerrors.New("f1 error")
}

func f2() error {
	return xerrors.New("f2 error")
}

func Test00(t *testing.T) {

	err := multierror.Append(f1(), f2())

	fmt.Printf("%+v\n", err)

	for _, e := range err.WrappedErrors() {
		fmt.Printf("%+v\n", e)
	}
}
