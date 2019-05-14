<template>
  <div class="hello">
    <!-- <div>
      <img :src="`data:image/png;base64,${base64Code}`" alt=""> v-for
    </div>-->
    <div class="upload">
      <!-- 
      :auto-upload="false"
      :show-file-list="false"
      :file-list="fileList"
      至少需要写一个list-type用来获取file.url-->
      <el-upload
        action="http://192.168.5.12:9090/upload1/cutImage/"
        :on-remove="handleRemove"
        ref="upload"
        :on-preview="handlePictureCardPreview"
        :on-success="handleSuccess"
        :on-error="uploadError"
        :before-upload="avatar"
        list-type="text"
      >
        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
        <el-button style="margin-left: 10px;" size="small" type="danger" @click="clearAll">清空</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpeg/jpg文件,且不超过2Mb,仅支持单文件上传</div>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt>
      </el-dialog>
    </div>
    <div class="draw">
      <canvas id="Vas" width="1020px" height="1320px" style="border:1px solid #d3d3d3"></canvas>
    </div>
    <div class="btn">
      <el-dialog :visible.sync="dialogB">
        <img width="100%" :src="k" alt="">
      </el-dialog>
    </div>
  </div>
</template>

<script src="./hello.js"></script>

<style lang="less" src="./hello.less"></style>
