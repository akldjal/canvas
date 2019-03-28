<template>
  <div class="hello">
    <!-- <div>
      <img :src="`data:image/png;base64,${base64Code}`" alt=""> v-for
    </div>-->
    <div class="upload">
      <!-- 
      :auto-upload="false"
      :show-file-list="false"
      :file-list="fileList"-->
      <el-upload
        action="http://192.168.5.12:9090/upload1/cutImages/"
        :on-remove="handleRemove"
        ref="upload"
        :on-preview="handlePictureCardPreview"
        :on-success="handleSuccess"
        :on-error="uploadError"
        :before-upload="avatar"
        list-type="picture"
      >
        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
        <el-button style="margin-left: 10px;" size="small" type="danger" @click="clearAll">清空</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpeg/jpg文件，且不超过2Mb</div>
        <!-- <el-button
            style="margin-left: 10px;"
            size="small"
            type="success"
            @click="submitUpload"
        >上传到服务器</el-button>-->
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt>
      </el-dialog>
    </div>
    <div class="draw">
      <canvas id="Vas" width="1080px" height="1400px" style="border:1px solid #d3d3d3"></canvas>
    </div>
  </div>
</template>

<script src="./hello.js"></script>

<style lang="less" src="./hello.less"></style>
