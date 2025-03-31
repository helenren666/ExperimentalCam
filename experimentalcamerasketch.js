// let video;
// let handpose;
// let predictions = [];

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   video = createCapture(VIDEO);
//   video.size(width, height);
//   video.hide();

//   handpose = ml5.handpose(video, () => {
//     console.log('Handpose ready!');
//   });
//   handpose.on('predict', results => {
//     predictions = results;
//   });
// }

// function draw() {
//   background(0);
//   image(video, 0, 0, width, height);

//   if (predictions.length > 0) {
//     let hand = predictions[0];
//     let pt9 = hand.annotations.middleFinger[0]; // MCP 点，结构是 [x, y, z]

//     let x = (pt9[0] - width / 2) / 100;
//     let y = -(pt9[1] - height / 2) / 100;
//     let z = -pt9[2] / 100;

//     // 将坐标传递给 Three.js
//     if (window.setHandPosition) {
//       window.setHandPosition(x, y, z);
//     }

//     // 可选：画个红点确认
//     fill(255, 0, 0);
//     noStroke();
//     circle(pt9[0], pt9[1], 20);
//   }
// }





//成功版本 猫咪加载在手上！！！！！！当紫水晶出现时
//成功版本 猫咪加载在手上！！！！！！当紫水晶出现时
//成功版本 猫咪加载在手上！！！！！！当紫水晶出现时

// let bloudModel;

// let my_capture, handPose;
// let hands = [];




// function preload() {
//   handPose = ml5.handPose(); // 加载 handpose 模型

//   bloudModel = loadModel('/model/astroooo.stl');

// }

// function setup() {
//   createCanvas(windowWidth, windowHeight,WEBGL);
//   my_capture = createCapture(VIDEO);
//   my_capture.size(width, height);
//   my_capture.hide();

//   handPose.detectStart(my_capture, gotHands); // 开始识别手势
//   normalMaterial();
// }

// function draw() {
//   background(0);

//   translate(-(width/2), -(height/2))
  
  
//   // 镜像视频画面
//   push();
//   translate(width, 0);
//   scale(-1, 1);
//   image(my_capture, 0, 0, width, height);
//   pop();

//   if (hands.length > 0) {
//     let keypoints = hands[0].keypoints;

//     // 获取第9号关键点（中指 MCP）
//     let pt9 = keypoints[9];

//     // 镜像 x 坐标（因为我们翻转了视频）
//     let mirroredX = width - pt9.x;


      
//     push()
//     translate(mirroredX, pt9.y)
//     scale(5.0);
//     rotateX(frameCount*0.1)
//     rotateY(frameCount*0.1)
//     rotateZ(frameCount*0.1)
//     model(bloudModel);
//     pop()
    

//   }
// }

// // handPose 检测回调函数
// function gotHands(results) {
//   hands = results;
// }




// 成功版本 猫咪加载在手上！！！！！！当紫水晶出现时
// 成功版本 猫咪加载在手上！！！！！！当紫水晶出现时
// 成功版本 猫咪加载在手上！！！！！！当紫水晶出现时



// 这是一个普通的摄像机
// let video;

// function setup() {
//   let canvas = createCanvas(windowWidth, windowHeight);
//   canvas.position(0, 0);
//   canvas.style('z-index', '0'); // 摄像头在下面

//   video = createCapture(VIDEO);
//   video.size(width, height);
//   video.hide();
//}


//终于他妈成功了的版本！！！！！！！！！！！
//终于他妈成功了的版本！！！！！！！！！！！
//终于他妈成功了的版本！！！！！！！！！！！
//终于他妈成功了的版本！！！！！！！！！！！

// let my_capture, handPose;
// let hands = [];

// function preload() {
//   handPose = ml5.handPose(); // 加载模型
// }

// function setup() {
//   createCanvas(windowWidth, windowHeight, WEBGL);
//   my_capture = createCapture(VIDEO);
//   my_capture.size(width, height);
//   my_capture.hide();

//   handPose.detectStart(my_capture, gotHands); // 开始识别
//   normalMaterial(); // 为后续绘图准备（可不写）
// }

// function draw() {
//   background(0);
//   translate(-width / 2, -height / 2);

//   // 显示摄像头画面（镜像）
//   push();
//   translate(width, 0);
//   scale(-1, 1);
//   image(my_capture, 0, 0, width, height);
//   pop();

//   if (hands.length > 0) {
//     let keypoints = hands[0].keypoints;
//     let pt9 = keypoints[9]; // 中指 MCP

//     // 镜像转换 + 转换为 Three.js 世界坐标（缩小 & 中心化）
//     let mirroredX = width - pt9.x;
//     let x = (mirroredX - width / 2) / 100;
//     let y = -(pt9.y - height / 2) / 100;
//     let z = 0;//最他妈重要的就是由于ml5没有3d的坐标。所以只能够给z为一个固定的值，也可以是其他值， 比如-20，就会特别小，离camera 明白了吧

//     // 传给 Three.js
//     if (window.setHandPosition) {
//       window.setHandPosition(x, y, z);
//       // console.log("👉 已发送给 Three.js:", x, y, z);
//     }
//   }
// }

// // handPose 回调
// function gotHands(results) {
//   hands = results;
// }
//终于他妈成功了的版本！！！！！！！！！！！
//终于他妈成功了的版本！！！！！！！！！！！
//终于他妈成功了的版本！！！！！！！！！！！
//终于他妈成功了的版本！！！！！！！！！！！
//终于他妈成功了的版本！！！！！！！！！！！
//终于他妈成功了的版本！！！！！！！！！！！
// let my_capture, handPose, bodySegmentation;
// let hands = [];
// let segmentation = null;
// let bgImage;

// function preload() {
//   handPose = ml5.handPose();
//   bodySegmentation = ml5.bodySegmentation("BodyPix", {
//     maskType: "person"
//   });
// }

// function setup() {
//   createCanvas(windowWidth, windowHeight, WEBGL);

//   my_capture = createCapture(VIDEO);
//   my_capture.size(width, height);
//   my_capture.hide();

//   handPose.detectStart(my_capture, gotHands);

//   // 定时更新分割信息
//   setInterval(() => {
//     bodySegmentation.segment(my_capture, gotSegmentation);
//   }, 300);

//   normalMaterial();

//   // 初始化空背景图
//   bgImage = createGraphics(width, height);
// }

// function draw() {
//   background(0);

//   push();
//   translate(-width / 2, -height / 2);

//   // 先绘制替代背景（根据 segmentation.data 创建）
//   if (segmentation && segmentation.data) {
//     bgImage.loadPixels();
//     const segData = segmentation.data;

//     for (let y = 0; y < height; y++) {
//       for (let x = 0; x < width; x++) {
//         const index = x + y * width;
//         const isPerson = segData[index]; // 1=人，0=背景

//         if (isPerson === 0) {
//           // 背景像素 → 改为蓝色
//           const i = index * 4;
//           bgImage.pixels[i + 0] = 150; // R
//           bgImage.pixels[i + 1] = 200; // G
//           bgImage.pixels[i + 2] = 255; // B
//           bgImage.pixels[i + 3] = 255; // A
//         } else {
//           // 人像像素 → 全透明，方便叠加摄像头图像
//           const i = index * 4;
//           bgImage.pixels[i + 3] = 0;
//         }
//       }
//     }

//     bgImage.updatePixels();
//     image(bgImage, 0, 0, width, height);
//   }

//   // 再叠加摄像头（只保留人物区域）
//   image(my_capture, 0, 0, width, height);

//   pop();

//   // 手部跟踪控制紫水晶位置
//   if (hands.length > 0) {
//     let keypoints = hands[0].keypoints;
//     let pt9 = keypoints[9];
//     let mirroredX = width - pt9.x;

//     let x = (mirroredX - width / 2) / 100;
//     let y = -(pt9.y - height / 2) / 100;
//     let z = -2;

//     if (window.setHandPosition) {
//       window.setHandPosition(x, y, z);
//     }
//   }
// }

// function gotHands(results) {
//   hands = results;
// }

// function gotSegmentation(result) {
//   segmentation = result;
// }



//我们刚刚改好的版本

let my_capture, handPose;
let hands = [];

let lastX = null;        // 上一帧手的位置
let scrollOffset = 0;    // 累计滚动位置
let isHandPresent = false;

function preload() {
  handPose = ml5.handPose();
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  my_capture = createCapture(VIDEO);
  my_capture.size(1280, 800);
  //my_capture.size(1280, 826);
  my_capture.hide();

  handPose.detectStart(my_capture, gotHands);
  normalMaterial();
}

function draw() {
  background(0);
  translate(-width / 2, -height / 2);

  // 摄像头画面
  push();
  translate(width, 0);
  scale(-1, 1);
  //image(my_capture, 0, 0, 1280, 826);
   image(my_capture, 0, 0, my_capture.width, my_capture.height);
  pop();

  if (hands.length > 0) {
    isHandPresent = true;
    let keypoints = hands[0].keypoints;
    let pt9 = keypoints[9];

    let mirroredX = width - pt9.x;

    if (lastX !== null) {
      let dx = mirroredX - lastX;
      scrollOffset += dx * 0.01; // 调整灵敏度（越小越慢）
    }

    lastX = mirroredX;
  } else {
    isHandPresent = false;
    lastX = null; // 手消失时清空 lastX，防止回跳
  }

  // 发送 scrollOffset 到 Three.js
  if (window.setHandPosition) {
    window.setHandPosition(scrollOffset, 0, 0);
  }
}

function gotHands(results) {
  hands = results;
}

//不算完美 但是勉强可以运作 在certain情况之下



// let my_capture, handPose;
// let hands = [];

// let lastX = null;        // 上一帧手的位置
// let scrollOffset = 0;    // 累计滚动位置
// let isHandPresent = false;

// function preload() {
//   handPose = ml5.handPose();
// }

// function setup() {
//   createCanvas(windowWidth, (windowWidth/16*9), WEBGL);
//   my_capture = createCapture(VIDEO);
//   my_capture.size(windowWidth, (windowWidth/16*9));
//   my_capture.hide();

//   handPose.detectStart(my_capture, gotHands);
//   normalMaterial();
// }

// function draw() {
//   background(220);
//   translate(-width / 2, -height / 2);
//   translate(0,0)

//   // 摄像头画面
//   push();
//   translate(width, 0);
//   scale(-1, 1);
//   image(my_capture, 0, 0, 1280, 720);
//   pop();

//   if (hands.length > 0) {
//     isHandPresent = true;
//     let keypoints = hands[0].keypoints;
//     let pt9 = keypoints[9];

//     let mirroredX = width - pt9.x;

//     if (lastX !== null) {
//       let dx = mirroredX - lastX;
//       scrollOffset += dx * 0.01; // 调整灵敏度（越小越慢）
//     }

//     lastX = mirroredX;
//   } else {
//     isHandPresent = false;
//     lastX = null; // 手消失时清空 lastX，防止回跳
//   }

//   // 发送 scrollOffset 到 Three.js
//   if (window.setHandPosition) {
//     window.setHandPosition(scrollOffset, 0, 0);
//   }
// }

// function gotHands(results) {
//   hands = results;
// }




