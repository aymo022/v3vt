<template>
  <div class="goods">
    <MessageBox />
    <!-- 类别 -->
    <el-card class="classes">
      <div class="cardHead">
        <i class="iconfont icon-fenlei"></i>
        选择分类
      </div>
      <div class="content">
        <div
          class="item"
          v-for="(classes, index) in state.classesList"
          :key="index"
        >
          <span>{{ classes.name }}</span>
          <span class="num">商品数量：{{ classes.num }}</span>
        </div>
      </div>
    </el-card>
    <!-- 商品 -->
    <el-card class="goodsList">
      <div class="cardHead">
        <span style="margin-right: 20px">
          <i class="iconfont icon-shangpin"></i>
          选择商品
        </span>
        <span>
          <el-input
            v-model="state.goodsInput"
            placeholder="请输入商品名称"
            size="small"
          >
            <template #prefix>
              <i class="iconfont icon-sousuo"></i>
            </template>
          </el-input>
        </span>
      </div>
      <div class="content">
        <swiper
          :modules="[Autoplay]"
          :loop="true"
          :slides-per-view="5"
          :loop-additional-slides="5"
          :space-between="30"
          :autoplay="{ delay: 50000, disableOnInteraction: false }"
        >
          <!-- loop可循环轮播，autoplay可自动播放 -->
          <swiper-slide
            v-for="(goods, index) in state.goodsList"
            :key="goods.name"
          >
            <el-card @click="toDetail(goods)">
              <img
                class="img"
                src="~@/assets/images/goods1.jpg"
                v-if="index % 2 === 0"
              />
              <img
                class="img"
                src="~@/assets/images/goods2.png"
                alt=""
                v-if="index % 2 === 1"
              />
              <div class="leftBox">
                <span class="name">{{ goods.name }}</span>
                <span class="price">¥ {{ goods.price }}</span>
                <span class="stock">
                  <el-progress
                    :percentage="+`${(goods.stock / goods.total) * 100}`"
                    :show-text="false"
                    status="success"
                  />
                </span>
              </div>
            </el-card>
          </swiper-slide>
        </swiper>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import MessageBox from '@/components/MessageBox.vue';
import { reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';

// 引入swiper组件
import { Swiper, SwiperSlide } from 'swiper/vue';
// 引入swiper样式（按需导入）
import 'swiper/css';
// 引入swiper核心和所需模块
import { Autoplay } from 'swiper';

defineOptions({
  name: 'Goods',
});

const router = useRouter();

const state = reactive({
  classesList: [],
  goodsInput: '',
  goodsList: [],
});

onMounted(() => {
  getClassesList();
  getGoodsList();
});

const getClassesList = () => {
  state.classesList.push(
    { name: '商品类别1', num: 9 },
    { name: '商品类别2', num: 10 }
  );
};
const getGoodsList = () => {
  state.goodsList.push(
    {
      name: '商品名称1',
      img: '',
      price: '5.78',
      stock: 50,
      total: 100,
      id: '0001',
    },
    {
      name: '商品名称2',
      img: '',
      price: '5.78',
      stock: 50,
      total: 100,
      id: '0002',
    },
    {
      name: '商品名称3',
      img: '',
      price: '5.78',
      stock: 50,
      total: 100,
      id: '0003',
    },
    {
      name: '商品名称4',
      img: '',
      price: '5.78',
      stock: 50,
      total: 100,
      id: '0004',
    },
    {
      name: '商品名称5',
      img: '',
      price: '5.78',
      stock: 50,
      total: 100,
      id: '0005',
    },
    {
      name: '商品名称6',
      img: '',
      price: '5.78',
      stock: 50,
      total: 100,
      id: '0006',
    },
    {
      name: '商品名称7',
      img: '',
      price: '5.78',
      stock: 50,
      total: 100,
      id: '0007',
    },
    {
      name: '商品名称8',
      img: '',
      price: '5.78',
      stock: 50,
      total: 100,
      id: '0008',
    },
    {
      name: '商品名称9',
      img: '',
      price: '5.78',
      stock: 50,
      total: 100,
      id: '0009',
    }
  );
};
const toDetail = goods => {
  router.push({
    name: 'goodsDetail',
    params: { id: goods.id },
  });
};
</script>

<style lang="less" scoped>
.goods {
  .classes {
    margin-bottom: 20px;
    .cardHead {
      font-size: 14px;
      font-weight: bold;
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      .iconfont {
        margin-right: 5px;
      }
    }
    .content {
      display: flex;
      .item {
        width: 150px;
        height: 75px;
        margin-right: 20px;
        border-radius: 10px;
        background: #448bff linear-gradient(45deg, #448bff, #44e9ff);
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 10px;
        color: #fff;
        .num {
          font-size: 14px;
        }
      }
    }
  }
  .goodsList {
    margin-bottom: 20px;
    .cardHead {
      font-size: 14px;
      font-weight: bold;
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      .iconfont {
        margin-right: 5px;
      }
    }
    .content {
      :deep(.swiper) {
        .swiper-slide {
          // &:hover {
          //   transform: translateY(5px);
          // }
          .el-card {
            border-radius: 10px;
            cursor: pointer;
            .el-card__body {
              padding: 10px;
              display: flex;
              .img {
                width: 100px;
                height: 100px;
                border: 1px solid #dcdfe6;
                border-radius: 14px;
                margin-right: 30px;
              }
              .leftBox {
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                span {
                  line-height: 1em;
                  font-size: 14px;
                  &.name {
                    font-weight: bold;
                    letter-spacing: 2px;
                  }
                  &.price {
                    color: #409eff;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
