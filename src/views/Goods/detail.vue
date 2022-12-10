<template>
  <div class="goodsDetail">
    <!-- 商品详情 -->
    <el-card class="detail">
      <div class="cardHead">
        <span style="margin-right: 20px">
          <i class="iconfont icon-shangpin"></i>
          商品详情
        </span>
      </div>
      <div class="content">
        <img class="img" src="~@/assets/images/goods1.jpg" alt="" />
        <div class="leftBox">
          <div class="name">{{ state.detailInfo.name }}</div>
          <div class="price">¥ {{ state.detailInfo.price }}</div>
          <div class="payNum">
            <el-input-number
              v-model="state.payNum"
              :min="1"
              :max="state.detailInfo.stock"
              @change="payNumChange"
            />
            <span class="stock">库存：{{ state.detailInfo.stock }}</span>
          </div>
        </div>
      </div>
    </el-card>
    <!-- 商品介绍 -->
    <el-card class="info">
      <div class="cardHead">
        <span style="margin-right: 20px">
          <i class="iconfont icon-shangpinjieshao"></i>
          商品介绍
        </span>
      </div>
      {{ state.detailInfo.msg }}
    </el-card>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { useRoute } from 'vue-router';

defineOptions({
  name: 'Goodsinfo',
});

const route = useRoute();

let state = reactive({
  detailInfo: {},
  payNum: 1,
});

onMounted(() => {
  getGoodsDetail();
});

const getGoodsDetail = () => {
  // const id = route.params.id;

  state.detailInfo = {
    id: '0001',
    img: '',
    name: '商品名称1',
    price: '5.78',
    stock: 50,
    total: 100,
    msg: '还没有为该商品添加介绍～',
  };
};

const payNumChange = () => {};
</script>

<style lang="less" scoped>
.goodsDetail {
  .detail {
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
      .img {
        width: 400px;
        height: 400px;
        border: 1px solid #dcdfe6;
        border-radius: 14px;
        margin-right: 50px;
      }
      .leftBox {
        .name {
          font-size: 20px;
          font-weight: bold;
          height: 50px;
          line-height: 50px;
        }
        .price {
          font-size: 20px;
          font-weight: bold;
          color: #f56c6c;
          height: 50px;
          line-height: 50px;
        }
        .payNum {
          font-size: 16px;
          font-weight: bold;
          height: 50px;
          line-height: 50px;
          .stock {
            margin-left: 20px;
          }
        }
      }
    }
  }
  .info {
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
  }
}
</style>
