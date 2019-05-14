export default {
  name: "HelloWorld",
  data() {
    return {
      fileList: [],
      dialogImageUrl: "",
      dialogVisible: false,
      k: "",
      dialogB: false,
    };
  },
  methods: {
    // 查看剪切图
    saw(h) {
      // this.dialogB = true;
      console.log(h.id);
    },
    // 清空
    clearAll() {
      this.$refs.upload.clearFiles();
      var cd = document.getElementById("Vas");
      var cdxt = cd.getContext("2d");
      cdxt.clearRect(0, 0, cd.width, cd.height);
    },
    // 移除
    handleRemove(file, fileList) {
      // console.log(file, fileList);
      var cd = document.getElementById("Vas");
      var cdxt = cd.getContext("2d");
      cdxt.clearRect(0, 0, cd.width, cd.height);
    },
    // 预览,需要获取url
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    // 手动上传
    // submitUpload() {
    //   this.$refs.upload.submit();
    // },
    // 校验
    avatar(file) {
      const isJPG = file.type === "image/jpeg";
      const isLimit = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error("图片格式只能是jpg格式！");
      }
      if (!isLimit) {
        this.$message.error("图片大小不能超过2MB");
      }
      return isJPG && isLimit;
    },
    // 上传成功
    handleSuccess(res, file) {
      console.log("上传成功");
      // console.log(res);
      let k = res.data.listResult.length;
      // 延迟渲染
      this.$nextTick(() => {
        var c = document.getElementById("Vas");
        var ctx = c.getContext("2d");
        var img9 = new Image();
        img9.src = file.url;
        img9.setAttribute("crossOrigin", "anonymous");
        img9.onload = function() {
          ctx.drawImage(img9, 0, 0);
          ctx.stroke();
        };
        //封装渲染
        let setCanvas = obj => {
          var { x, y, w, h } = obj;
          // 后端给图片的base64码
          // var img = new Image();
          // img.src = "data:image/png;base64," + res.data.lsitByte[i];
          // img.setAttribute("crossOrigin", "anonymous");
          // img.onload = function() {
          // ctx.drawImage(img, x, y, w, h);
          ctx.moveTo(x, y);
          ctx.lineTo(x, y + h);
          ctx.lineTo(x + w, y + h);
          ctx.lineTo(x + w, y);
          ctx.lineTo(x, y);
          ctx.stroke();
          // };
        };
        for (let i = 0; i < 9; i++) {
          setCanvas(res.data.listResult[i]);
        }
      });
      for (let j = 1; j <= k; j++) {
        this.l = j;
        // console.log(this.l);
      }
    },
    // 失败
    uploadError() {
      console.log("上传失败");
    }
  }
};
