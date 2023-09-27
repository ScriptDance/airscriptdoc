<template>
  <Navbar ref="navbarRef" />

  <div :style="{ paddingTop: navbarHeight + 'px' }" style="width: 100%; height: 100%; position: relative;">
    <div class="container">
      <div class="image-container">
        <!-- Replace with your image URL -->
        <img :src=img alt="AirScript Image">
        <div class="image-text">
          <h1>AirScript <strong>UI Kit</strong></h1>
          <h5>开发者分享的UI组件库 <strong>喜欢</strong> 就<strong>下载</strong>使用吧</h5>
        </div>
      </div>
    </div>

    <div style="width: 100%;margin-top: 20px">
      <!-- Data Display using el-card -->
      <el-row justify="space-around">
        <el-col :span="12">
          <el-card v-for="item in currentdatalist" :key="item.id" style="margin-bottom: 20px;" :body-style="{margin:0,padding:10}" @click="currentImg=item.img">
            <el-row>
              <el-col :span="17">
                {{item.name}}
              </el-col>
              <el-col :span="3">
                id: {{item.id}}
              </el-col>
              <el-col :span="4">
                热度: {{item.download_num}}
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="17">
                <div v-html="item.info"/>
              </el-col>
              <el-col :span="3">
                <div  style="margin-top: 20px">
                  <a :href="item.file_path">
                    <el-button >下载</el-button>
                  </a>
                </div>
              </el-col>
              <el-col :span="4">
                <el-button @click="copyLink(item.id)" style="margin-top: 20px">分享</el-button>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
        <el-col :span="9">
          <el-image style="width: 100%" :src="currentImg"/>
        </el-col>
      </el-row>
    </div>

    <div class="pagination-container">
      <el-pagination
          v-model:current-page="currentPage"
          v-model:page-size="pageSize"
          :page-sizes="[5,10, 20, 50, 100]"
          background
          layout="total, sizes, prev, pager, next, jumper"
          :total="totalItems"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
      />
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Navbar from '@theme/Navbar.vue'
import img from "../assert/resourceImg.jpg"
import 'element-plus/dist/index.css'
import axios from "axios";
import { useRoute,useRouter } from 'vue-router'
import {ElNotification} from "element-plus";


const navbarRef = ref(null)
const navbarHeight = ref(0)

const datalist=ref([])
const currentdatalist=ref([])
const currentPage=ref(1)
const pageSize=ref(10)
const totalItems=ref(0)
const currentImg=ref("")

const handleSizeChange = (val) => {
  currentdatalist.value=datalist.value.slice((currentPage.value-1)*pageSize.value,Math.min(currentPage.value*pageSize.value,totalItems.value))
}
const handleCurrentChange = (val) => {
  currentdatalist.value=datalist.value.slice((currentPage.value-1)*pageSize.value,Math.min(currentPage.value*pageSize.value,totalItems.value))
}

const route=useRoute()

const getFullUrl = () => {
  const protocol = window.location.protocol;
  const host = window.location.host;
  const fullPath = route.fullPath; // This includes path, query and hash
  return `${protocol}//${host}${fullPath}`;
};

const copyLink=async (id)=>{
  await navigator.clipboard.writeText(`${getFullUrl()}?shareid=${id}`);
  ElNotification({
    title: '分享成功',
    message: '分享链接已复制到剪切板',
    type: 'success',
  })
}


onMounted(() => {
  if (navbarRef.value) {
    navbarHeight.value = navbarRef.value.$el.offsetHeight
  }


  axios.get("http://py.airscript.cn/api/ui/list").then(res=>{
    console.log(res)
    res=res.data
    if (res.code!==1)
      return
    currentPage.value=res.data.current_page

    if (route?.query.shareid){
      datalist.value=res.data.data.filter(item => Number(item.id) === Number(route.query.shareid))
    }else {
      datalist.value=res.data.data
    }
    totalItems.value=datalist.value.length
    currentdatalist.value=datalist.value.slice((currentPage.value-1)*pageSize.value,Math.min(currentPage.value*pageSize.value,totalItems.value))
    currentImg.value=datalist.value[0].img
  }).catch(e=>{

  })
})
</script>

<style scoped>

.container {
  width: 100vw; /* Viewport width */
  display: flex;
  align-items: center; /* Center vertically */
  justify-content: center; /* Center horizontally */
}

.image-container {
  position: relative;
  width: 100%;
  overflow: hidden; /* Hide any overflowing content */
}
.image-container::before {
  content: "";  /* 这使得伪元素实际上有内容，因此它会显示 */
  position: absolute;  /* 绝对定位相对于其最近的定位祖先（在这种情况下是.image-container） */
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;  /* 这四个属性确保伪元素覆盖整个.image-container */
  background-color: rgba(128, 128, 128, 0.5);  /* 半透明的灰色背景 */
  z-index: 0;  /* 确保它位于其他内容之上 */
}
img {
  width: 100%; /* Image takes full width of its container */
  height: 100%; /* Image takes full height of its container */
  object-fit: cover; /* Resize the image to cover the container while maintaining its aspect ratio */
  object-position: center; /* Center the image within the container */
}

.image-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Center the text within the image */
  color: white; /* Assuming the text color is white for better visibility on images */
  text-align: center;
}

.image-text h1 {
  font-size: 7.5rem;
}
.image-text h5 {
  font-size: 1.2rem;
}
.pagination-container {
  display: flex;
  justify-content: center;
  margin: 20px;
}
</style>
