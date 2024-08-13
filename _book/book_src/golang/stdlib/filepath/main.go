package main

import (
	"fmt"
	"io/fs"
	"path/filepath"
)

func main() {
	err := filepath.Walk("data", myWalk)
	if err != nil {
		panic(err)
	}
}

func myWalk(path string, info fs.FileInfo, err error) error {
	if err != nil {
		return err
	}
	fmt.Println(path)
	if !info.IsDir() {
		return nil
	}
	// infos, err := os.ReadDir(path)
	// if err != nil {
	// 	return err
	// }
	// for _, entry := range infos {

	// 	fmt.Println(entry.Name())
	// 	// elemInfo, err := entry.Info()
	// 	// err = myWalk(filepath.Join(path, elemInfo.Name()), elemInfo, err)
	// 	// if err != nil {
	// 	// 	return err
	// 	// }
	// }
	return nil
}
