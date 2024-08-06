package tests

import (
	"testing"

	"github.com/spf13/viper"
)

type Config struct {
	Name         string
	Age          int
	Skills       []string
	WorkDuration string
}

// 基础功能读取
func TestViper00(t *testing.T) {
	v := viper.New()
	v.SetConfigFile("test.yaml")
	v.SetConfigType("yaml")
	err := v.ReadInConfig()
	if err != nil {
		t.Fatal(err)
	}
	cfg := &Config{}
	err = v.Unmarshal(cfg)
	if err != nil {
		t.Fatal(err)
	}
	t.Logf("cfg: %#v\n", cfg)
}
