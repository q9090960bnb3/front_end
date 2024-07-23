<template>
  <div>
    <h3>使用了插槽-作用域插槽</h3>
    <div class="container">
      <ZoneCategory>
        <template slot-scope="indata">
          <ul>
            <li v-for="(data, index) in indata.games" :key="index">
              {{ data }}
            </li>
          </ul>
        </template>
      </ZoneCategory>
      <ZoneCategory>
        <template slot-scope="indata">
          <ol>
            <li v-for="(data, index) in indata.games" :key="index">
              {{ data }}
            </li>
          </ol>
        </template>
      </ZoneCategory>
      <ZoneCategory>
        <template slot-scope="{ games }">
          <!-- 支持结构赋值 -->
          <h4 v-for="(data, index) in games" :key="index">
            {{ data }}
          </h4>
        </template>
      </ZoneCategory>
    </div>
    <hr />
    <h3>使用了插槽-具名插槽</h3>
    <div class="container">
      <SlotNameCategory title="美食">
        <img
          slot="center"
          src="https://tse4-mm.cn.bing.net/th/id/OIP-C.gihAGoizdsi2TYvWcGG1WQHaE1?w=287&h=187&c=7&r=0&o=5&dpr=2&pid=1.7"
          alt=""
        />
        <a slot="footer" href="http://www.baidu.com">百度一下，你就知道</a>
      </SlotNameCategory>
      <SlotNameCategory title="游戏">
        <u slot="center">
          <li v-for="(data, index) in games" :key="index">{{ data }}</li>
        </u>
        <!-- <div class="foot" slot="footer"> -->
        <template v-slot:footer>
          <!-- template 好处是不会额外多一层div -->
          <div class="foot">
            <a a href="http://www.baidu.com/s?wd=单机游戏">单机游戏</a>
            <a href="http://www.baidu.com/s?wd=网络游戏">网络游戏</a>
          </div>
          <h4 style="text-align: center">欢迎来打游戏</h4>
        </template>

        <!-- </div> -->
      </SlotNameCategory>
      <SlotNameCategory title="电影">
        <video controls src="http://vjs.zencdn.net/v/oceans.mp4"></video>
        <div class="foot" slot="footer">
          <a href="http://www.baidu.com/s?wd=经典">经典</a>
          <a href="http://www.baidu.com/s?wd=热门">热门</a>
          <a href="http://www.baidu.com/s?wd=推荐">推荐</a>
        </div>
        <h4 slot="footer" style="text-align: center">欢迎来观看</h4>
      </SlotNameCategory>
    </div>
    <hr />
    <h3>使用了插槽-默认插槽</h3>
    <div class="container">
      <SlotCategory title="美食">
        <img
          src="https://tse4-mm.cn.bing.net/th/id/OIP-C.gihAGoizdsi2TYvWcGG1WQHaE1?w=287&h=187&c=7&r=0&o=5&dpr=2&pid=1.7"
          alt=""
        />
      </SlotCategory>
      <SlotCategory title="游戏">
        <ul>
          <li v-for="(data, index) in games" :key="index">{{ data }}</li>
        </ul>
      </SlotCategory>
      <SlotCategory title="电影">
        <video controls src="http://vjs.zencdn.net/v/oceans.mp4"></video>
      </SlotCategory>
    </div>
    <hr />
    <h3>未使用插槽缺点</h3>
    <div class="container">
      <Category title="美食" :listData="foods" />
      <Category title="游戏" :listData="games" />
      <Category title="电影" :listData="films" />
    </div>
    <hr />
  </div>
</template> 

<script>
import Category from "./components/Category.vue";
import SlotCategory from "./components/SlotCategory.vue";
import SlotNameCategory from "./components/SlotNameCategory.vue";
import ZoneCategory from "./components/ZoneCategory.vue";
export default {
  name: "App",
  components: { Category, SlotCategory, SlotNameCategory, ZoneCategory },
  data() {
    return {
      foods: ["火锅", "烧烤", "小龙虾", "牛排"],
      games: ["星际争霸", "dota", "英雄联盟", "王者荣耀"],
      films: ["《教父》", "《拆弹专家》", "《你好，李焕英》", "《死神来了》"],
    };
  },
};
</script>

<style>
.container,
.foot {
  display: flex;
  justify-content: space-around;
}
video {
  width: 100%;
}
</style>