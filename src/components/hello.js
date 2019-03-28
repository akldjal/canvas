export default {
  name: "HelloWorld",
  data() {
    return {
      fileList: [],
      dialogImageUrl: "",
      dialogVisible: false
    };
  },
  methods: {
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
    },
    //预览
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    // 上传
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
    // 成功
    handleSuccess(res, file) {
      console.log("上传成功");
      // console.log(res);
      // 延迟渲染
      this.$nextTick(() => {
        var c = document.getElementById("Vas");
        var ctx = c.getContext("2d");
        var img9 = new Image();
        img9.src = file.url;
        // console.log(img9);
        img9.setAttribute("crossOrigin", "anonymous");
        img9.onload = function() {
          ctx.drawImage(img9, 0, 0);
          ctx.stroke();
        };
        //封装渲染
        let setCanvas = (obj, i) => {
          var { x1, y1, x2, y2 } = obj;
          var img = new Image();
          img.src = "data:image/png;base64," + res.data1.lsitByte[i];
          img.setAttribute("crossOrigin", "anonymous");
          img.onload = function() {
            // ctx.drawImage(img, x1, y1, x2, y2);
            ctx.moveTo(x1, y1);
            ctx.lineTo(x1, y1 + y2);
            ctx.lineTo(x1 + x2, y1 + y2);
            ctx.lineTo(x1 + x2, y1);
            ctx.lineTo(x1, y1);
            ctx.stroke();
          };
        };
        let xy = [
          {
            x1: 130,
            y1: 140,
            x2: 775,
            y2: 174
          },
          {
            x1: 100,
            y1: 410,
            x2: 140,
            y2: 130
          },
          {
            x1: 410,
            y1: 410,
            x2: 140,
            y2: 130
          },
          {
            x1: 710,
            y1: 410,
            x2: 140,
            y2: 130
          },
          {
            x1: 100,
            y1: 590,
            x2: 280,
            y2: 180
          },
          {
            x1: 410,
            y1: 590,
            x2: 280,
            y2: 180
          },
          {
            x1: 710,
            y1: 590,
            x2: 280,
            y2: 180
          },
          {
            x1: 100,
            y1: 870,
            x2: 380,
            y2: 340
          },
          {
            x1: 500,
            y1: 870,
            x2: 380,
            y2: 340
          }
        ];
        for (let i = 0; i < 9; i++) {
          setCanvas(xy[i], i);
        }
      });
    },
    // 失败
    uploadError() {
      console.log("上传失败");
    }
  }
};

//贼鸡儿繁琐的蠢方法
// var img0 = new Image();
// img0.src = 'data:image/png;base64,'+res.data1.lsitByte[0];
// img0.setAttribute('crossOrigin', 'anonymous');
// img0.onload = function() {
//   ctx.drawImage(img0,130,140,775,174);//ctx.drawImage(img0,x1,y1,x2,y2);
//   ctx.moveTo(130,140);                //ctx.moveTo(x1,y1);
//   ctx.lineTo(130,174+140);            //ctx.lineTo(x1,y1+y2);
//   ctx.lineTo(775+130,174+140);        //ctx.lineTo(x1+x2,y1+y2);
//   ctx.lineTo(775+130,140);            //ctx.lineTo(x1+x2,y1);
//   ctx.lineTo(130,140);                //ctx.lineTo(x1,y1);
//   ctx.stroke();
// };
// console.log(img0)
// var img1 = new Image();
// img1.src = 'data:image/png;base64,'+res.data1.lsitByte[1];
// img1.setAttribute('crossOrigin', 'anonymous');
// img1.onload = function() {
//   ctx.drawImage(img1,100,420,140,130);
//   ctx.moveTo(100,420);
//   ctx.lineTo(100,130+420);
//   ctx.lineTo(140+100,130+420);
//   ctx.lineTo(140+100,420);
//   ctx.lineTo(100,420);
//   ctx.stroke();
// };
// var img2 = new Image();
// img2.src = 'data:image/png;base64,'+res.data1.lsitByte[2];
// img2.setAttribute('crossOrigin', 'anonymous');
// img2.onload = function() {
//   ctx.drawImage(img2,420,420,140,130);
//   ctx.moveTo(420,420);
//   ctx.lineTo(420,130+420);
//   ctx.lineTo(140+420,130+420);
//   ctx.lineTo(140+420,420);
//   ctx.lineTo(420,420);
//   ctx.stroke();
// };
// var img3 = new Image();
// img3.src = 'data:image/png;base64,'+res.data1.lsitByte[3];
// img3.setAttribute('crossOrigin', 'anonymous');
// img3.onload = function() {
//   ctx.drawImage(img3,720,420,140,130);
//   ctx.moveTo(720,420);
//   ctx.lineTo(720,130+420);
//   ctx.lineTo(140+720,130+420);
//   ctx.lineTo(140+720,420);
//   ctx.lineTo(720,420);
//   ctx.stroke();
// };
// var img4 = new Image();
// img4.src = 'data:image/png;base64,'+res.data1.lsitByte[4];
// img4.setAttribute('crossOrigin', 'anonymous');
// img4.onload = function() {
//   ctx.drawImage(img4,100,590,280,180);
//   ctx.moveTo(100,590);
//   ctx.lineTo(100,180+590);
//   ctx.lineTo(280+100,180+590);
//   ctx.lineTo(280+100,590);
//   ctx.lineTo(100,590);
//   ctx.stroke();
// };
// var img5 = new Image();
// img5.src = 'data:image/png;base64,'+res.data1.lsitByte[5];
// img5.setAttribute('crossOrigin', 'anonymous');
// img5.onload = function() {
//   ctx.drawImage(img5,420,590,280,180);
//   ctx.moveTo(420,590);
//   ctx.lineTo(420,180+590);
//   ctx.lineTo(280+420,180+590);
//   ctx.lineTo(280+420,590);
//   ctx.lineTo(420,590);
//   ctx.stroke();
// };
// var img6 = new Image();
// img6.src = 'data:image/png;base64,'+res.data1.lsitByte[6];
// img6.setAttribute('crossOrigin', 'anonymous');
// img6.onload = function() {
//   ctx.drawImage(img6,720,590,280,180);
//   ctx.moveTo(720,590);
//   ctx.lineTo(720,180+590);
//   ctx.lineTo(280+720,180+590);
//   ctx.lineTo(280+720,590);
//   ctx.lineTo(720,590);
//   ctx.stroke();
// };
// var img7 = new Image();
// img7.src = 'data:image/png;base64,'+res.data1.lsitByte[7];
// img7.setAttribute('crossOrigin', 'anonymous');
// img7.onload = function() {
//   ctx.drawImage(img7,100,870,380,340);
//   ctx.moveTo(100,870);
//   ctx.lineTo(100,340+870);
//   ctx.lineTo(380+100,340+870);
//   ctx.lineTo(380+100,870);
//   ctx.lineTo(100,870);
//   ctx.stroke();
// };
// var img8 = new Image();
// img8.src = 'data:image/png;base64,'+res.data1.lsitByte[8];
// img8.setAttribute('crossOrigin', 'anonymous');
// img8.onload = function() {
//   ctx.drawImage(img8,500,870,380,340);
//   ctx.moveTo(500,870);
//   ctx.lineTo(500,340+870);
//   ctx.lineTo(380+500,340+870);
//   ctx.lineTo(380+500,870);
//   ctx.lineTo(500,870);
//   ctx.stroke();
// };
