package main

import (
	"fmt"
	"io/fs"
	"path/filepath"

	"github.com/colinmarc/hdfs/v2"
)

func main() {
	client, err := hdfs.New("namenode:8020")
	if err != nil {
		panic(err)
	}
	fmt.Println(client.Name())

	client.Walk("/", func(path string, info fs.FileInfo, err error) error {
		fmt.Println(path)
		return nil
	})

	// fi, err := client.ReadDir("/")
	// if err != nil {
	// 	panic(fmt.Errorf("client readdir:%v err:%w", "/", err))
	// }
	// printTree("/", fi, client, "", 3)
}

// func walkTree(path string, info fs.FileInfo, err error) error {

// }

func printTree(parentPath string, fileInfo []fs.FileInfo, client *hdfs.Client, indent string, depth int) {
	// if depth <= 0 {
	// 	return
	// }
	for i, info := range fileInfo {
		// 打印文件名
		fmt.Printf("%s", indent)
		if i == len(fileInfo)-1 {
			fmt.Print("└─── ")
		} else {
			fmt.Print("├─── ")
		}
		fmt.Println(info.Name())

		// 如果是目录，递归打印子文件
		if info.IsDir() {
			subdir := filepath.Join(parentPath, info.Name())
			subfileInfo, err := client.ReadDir(subdir)
			if err != nil {
				panic(err)
			}

			// var subfileInfoTyped []fs.FileInfo
			// for _, entry := range subfileInfo {
			// 	subfileInfoTyped = append(subfileInfoTyped, entry.(fs.FileInfo))
			// }
			printTree(subdir, subfileInfo, client, indent+"|\t", depth-1)
		}
	}
}
