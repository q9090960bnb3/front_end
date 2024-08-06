package tests

import (
	"reflect"
	"strconv"
	"strings"
	"testing"
	"time"

	"github.com/mitchellh/mapstructure"
	"github.com/spf13/viper"
)

type Config2 struct {
	Name         string
	Age          int
	Skills       []string
	WorkDuration time.Duration
}

// 普通支持时间字符串，但不能包含天，因为其默认实现了 mapstructure.StringToTimeDurationHookFunc()
func TestViper01(t *testing.T) {

	cfgReader := strings.NewReader(`
Name: "张三丰"
Age: 100
Skills:
  - "铁拳"
  - "铁掌"
  - "铁剑"
WorkDuration: 13m6s	
`)

	v := viper.New()

	v.SetConfigType("yaml")
	err := v.ReadConfig(cfgReader)
	if err != nil {
		t.Fatal(err)
	}

	cfg := &Config2{}
	err = v.Unmarshal(cfg)
	if err != nil {
		t.Fatal(err)
	}
	t.Logf("cfg: %#v\n", cfg)
}

// 支持天
func TestViper01_supportDay(t *testing.T) {

	cfgReader := strings.NewReader(`
Name: "张三丰"
Age: 100
Skills:
  - "铁拳"
  - "铁掌"
  - "铁剑"
WorkDuration: 3d13m6s	
`)

	v := viper.New()

	v.SetConfigType("yaml")
	err := v.ReadConfig(cfgReader)
	if err != nil {
		t.Fatal(err)
	}

	cfg := &Config2{}
	err = v.Unmarshal(cfg,
		viper.DecodeHook(mapstructure.StringToSliceHookFunc(",")),
		viper.DecodeHook(StringToTimeDurationHookFunc()),
	)
	if err != nil {
		t.Fatal(err)
	}
	t.Logf("cfg: %#v\n", cfg)
}

func StringToTimeDurationHookFunc() mapstructure.DecodeHookFunc {
	return func(
		f reflect.Type,
		t reflect.Type,
		data interface{}) (interface{}, error) {
		if f.Kind() != reflect.String {
			return data, nil
		}
		if t != reflect.TypeOf(time.Duration(5)) {
			return data, nil
		}

		return ParseDuration(data.(string))
	}
}

func ParseDuration(d string) (time.Duration, error) {
	d = strings.TrimSpace(d)
	dr, err := time.ParseDuration(d)
	if err == nil {
		return dr, nil
	}
	if strings.Contains(d, "d") {
		index := strings.Index(d, "d")

		hour, _ := strconv.Atoi(d[:index])
		dr = time.Hour * 24 * time.Duration(hour)
		ndr, err := time.ParseDuration(d[index+1:])
		if err != nil {
			return dr, nil
		}
		return dr + ndr, nil
	}

	dv, err := strconv.ParseInt(d, 10, 64)
	return time.Duration(dv), err
}
