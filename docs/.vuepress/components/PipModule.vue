<template>
  <Navbar ref="navbarRef" />

  <div v-if="showby" style="width: 30vw;padding: 20px;  position: fixed; left: 35vw; top: 20vh; border-radius: 10px; background-color: white; z-index: 10000;   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); justify-items: center;align-items: center; text-align: center;">
    
    <h3>为AirScript 添加新的Python包</h3>

    由于Android权限影响,需要重新编译AirScript
  

    <div style="display: flex;justify-content: center; align-items: center; margin-top: 20px;">
      <el-button @click="openpip_document">查看文档</el-button>
      <el-button @click="openpip_pippackage">前往编译</el-button>
        
    </div>

    <a @click="showby = false" style="position: absolute; right: 0px; top: 0px; padding: 15px; cursor: pointer;">x</a>

  </div>

  <div :style="{ paddingTop: navbarHeight + 'px' }" style="width: 100%; height: 100%; position: relative;">
    <div class="container">
      <div class="image-container">
        <!-- Replace with your image URL -->
        <img :src=img alt="AirScript Image">
        <div class="image-text">
          <span style="font-size: 35px;">AirScript 安装  <strong>Python 拓展库</strong></span>
          <div style="margin-top: 10px;">
            <el-button @click="showby = true" style="padding: 20px; background-color: #6bc261; border: none; border-radius: 20px; color: white;box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);"> + 自定义Python拓展</el-button>
          </div>
        </div>
      </div>
    </div>

    <div style="width: 80%; margin: 20px auto;">
      <!-- Data Display using el-card -->
      <el-row justify="space-around">
        <el-col :span="24">
          <el-card v-for="item in currentdatalist" :key="item.id" style="margin-bottom: 20px;" :body-style="{margin:0,padding:10}">
            <el-row>
              <el-col :span="24">
                <span class="pip_item_attr"><strong>ID:{{item.id}}</strong></span>

                <span class="pip_item_attr">版本:{{item.version_code}}</span>

                <span class="pip_item_attr">时间:{{item.create_time}}</span>

                <span class="pip_item_attr" style="color: brown;">🔥{{item.download_num}}</span>
               
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="20" style="margin-top: 20px; word-wrap:break-word;">
                
                <span v-for="p in item.pip" class="pip_span">{{p}}</span>

              </el-col>
              <el-col :span="4" style="margin-top: 20px;">
                <el-button @click="download(item)" >下载</el-button>
                <el-button @click="copyLink(item.id)" class="copy-button">分享</el-button>
              </el-col>
            </el-row>
            
          </el-card>
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
import img from "../assert/ico_pypi.jpeg"
import 'element-plus/dist/index.css'
import axios from "axios";
import { useRoute,useRouter } from 'vue-router'
import {ElNotification} from "element-plus";
import ClipboardJS from "clipboard";

const navbarRef = ref(null)
const navbarHeight = ref(0)

const datalist=ref([])
const currentdatalist=ref([])
const currentPage=ref(1)
const pageSize=ref(10)
const totalItems=ref(0)
const currentImg=ref("")
const showpic = ref(0); 
const showby = ref(0); 

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

const copyLink = (id) => {
  const clipboard = new ClipboardJS('.copy-button', {  // 使用复制按钮的class初始化clipboard
    text: () => `${getFullUrl()}?shareid=${id}`
  });

  clipboard.on('success', (e) => {
    ElNotification({
      title: '分享成功',
      message: '分享链接已复制到剪切板',
      type: 'success',
    });
    e.clearSelection(); // 清除选中文本
    clipboard.destroy(); // 销毁实例，避免多次初始化
  });

  clipboard.on('error', (e) => {
    console.error('复制失败:', e);
    clipboard.destroy(); // 销毁实例
  });
}

const download = (item) => {
  // alert(item.img)
  window.location.href = item.path;
  // alert(item.path)

};

const openpip_document = (item) => {
  // alert(item.img)
  window.location.href = "/airapi/code.html#python包拓展";
  // alert(item.path)

};

const openpip_pippackage = (item) => {
  // alert(item.img)
  window.location.href = "http://py.airscript.cn/admin/pip/list";
  // alert(item.path)

};

const mouseOverEvent = (item) => {
  // alert(item.img)
  currentImg = item.img
  showpic = true;

};

const mouseOutEvent = () => {
  // showpic = false;
};




onMounted(() => {
  if (navbarRef.value) {
    navbarHeight.value = navbarRef.value.$el.offsetHeight
  }


  axios.get("https://py.airscript.cn/api/package/list").then(res=>{
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
  height: 20vh;
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

.pip_item_attr{
  font-size: 15px; margin-right: 20px;
}

.pip_span{
  font-size: 13px;
  background-color: #f8f9fa;
  border-radius: 2px;
  padding: 5px;
  color: black;
  display: block;
  margin-right: 20px;
}

</style>
