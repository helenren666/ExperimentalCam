// import * as THREE from 'three';

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );
// renderer.setAnimationLoop( animate );
// document.body.appendChild( renderer.domElement );

// const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

// camera.position.z = 5;

// function animate() {

// 	cube.rotation.x += 0.01;
// 	cube.rotation.y += 0.01;

// 	renderer.render( scene, camera );

// }














//version that actually work!!!!!!!!!!!
//version that actually work!!!!!!!!!!!
//version that actually work!!!!!!!!!!!


 //src/main.js



// import * as THREE from 'three';
// // import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
// camera.position.z = 5;

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// // 灯光（让模型看得见）
// const light = new THREE.DirectionalLight(0xffffff, 1);
// light.position.set(5, 5, 5);
// scene.add(light);










// // 加载 GLB 模型
// const loader = new GLTFLoader();
// let cloudModel;

// loader.load(
//   '/model/cloud.glb', // 注意路径是从 public 开始的
//   (gltf) => {
//     console.log("模型加载成功！");
//     cloudModel = gltf.scene;
//     cloudModel.position.set(2, 4, -3); // 你可以改成你想要的坐标
//     scene.add(cloudModel);
//   },
//   undefined,
//   (error) => {
//     console.error("模型加载失败:", error);
//   }
// );

// // 动画循环
// function animate() {
//   requestAnimationFrame(animate);

//   if (cloudModel) {
//     cloudModel.rotation.y += 0.01;
//   }

//   renderer.render(scene, camera);
// }
// animate();



//version that actually work!!!!!!!!!!!
//version that actually work!!!!!!!!!!!
//version that actually work!!!!!!!!!!!



//version actually work's copy

// import * as THREE from 'three';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// camera.position.z = 5;

// const renderer = new THREE.WebGLRenderer({ alpha: true }); // alpha 让背景透明
// renderer.setSize(window.innerWidth, window.innerHeight);

// // ✅ 设置 canvas 样式让它浮在上面
// renderer.domElement.style.position = 'absolute';
// renderer.domElement.style.top = '0';
// renderer.domElement.style.left = '0';
// renderer.domElement.style.zIndex = '1'; // Three.js 在摄像头上面
// document.body.appendChild(renderer.domElement);

// // 灯光
// const light = new THREE.DirectionalLight(0xffffff, 1);
// light.position.set(5, 5, 5);
// scene.add(light);

// // 模型加载
// let cloudModel;
// const loader = new GLTFLoader();

// loader.load(
//   '/model/cloud.glb',
//   (gltf) => {
//     console.log('✅ 模型加载成功！');
//     cloudModel = gltf.scene;
//     cloudModel.position.set(0, 0, 0);
//     cloudModel.scale.set(1.5, 1.5, 1.5);
//     scene.add(cloudModel);
//   },
//   undefined,
//   (error) => {
//     console.error('❌ 模型加载失败:', error);
//   }
// );

// // 动画渲染循环
// function animate() {
//   requestAnimationFrame(animate);

//   if (cloudModel) {
//     cloudModel.rotation.y += 0.01;
//   }

//   renderer.render(scene, camera);
// }
// animate();

//version actually work's copy

// import * as THREE from 'three';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// // camera.position.x = -3;
// // camera.position.y = 3;
// camera.position.z = 5;

// const renderer = new THREE.WebGLRenderer({ alpha: true }); // alpha 让背景透明
// renderer.setSize(window.innerWidth, window.innerHeight);

// // ✅ 设置 canvas 样式让它浮在上面
// renderer.domElement.style.position = 'absolute';
// renderer.domElement.style.top = '0';
// renderer.domElement.style.left = '0';
// renderer.domElement.style.zIndex = '1'; // Three.js 在摄像头上面
// document.body.appendChild(renderer.domElement);

// // 灯光
// const light = new THREE.DirectionalLight(0xffffff, 1);
// light.position.set(5, 5, 5);
// scene.add(light);

// // 模型加载
// let cloudModel;
// const loader = new GLTFLoader();

// loader.load(
//   '/model/cloud.glb',
//   (gltf) => {
//     console.log('✅ 模型加载成功！');
//     cloudModel = gltf.scene;
//     cloudModel.position.set(0, 0, 0);
//     cloudModel.scale.set(1.5, 1.5, 1.5);
//     scene.add(cloudModel);

    
//   },
//   undefined,
//   (error) => {
//     console.error('❌ 模型加载失败:', error);
//   }
// );

// // 动画渲染循环
// function animate() {
//   requestAnimationFrame(animate);

//   if (cloudModel) {
//     cloudModel.rotation.y += 0.01;
//     //cloudModel.position.y += 0.01;
//   }

//   renderer.render(scene, camera);
// }
// animate();

// // ✅ 每秒打印一次模型位置
// setInterval(() => {
//   if (cloudModel) {
//     const pos = cloudModel.position;
//     console.log(`💠 X: ${pos.x.toFixed(2)}, Y: ${pos.y.toFixed(2)}, Z: ${pos.z.toFixed(2)}`);
//   }
// }, 1000);


//终于他妈成功了的版本！！！！！！！！！！！
//终于他妈成功了的版本！！！！！！！！！！！
//终于他妈成功了的版本！！！！！！！！！！！
//终于他妈成功了的版本！！！！！！！！！！！
//终于他妈成功了的版本！！！！！！！！！！！
//终于他妈成功了的版本！！！！！！！！！！！
// import * as THREE from 'three';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// // 创建场景和相机
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// camera.position.z = 5;

// // 创建透明背景渲染器
// const renderer = new THREE.WebGLRenderer({ alpha: true });
// renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.domElement.style.position = 'absolute';
// renderer.domElement.style.top = '0';
// renderer.domElement.style.left = '0';
// renderer.domElement.style.zIndex = '1'; // 确保在摄像头上方
// document.body.appendChild(renderer.domElement);

// // 添加灯光
// const light = new THREE.DirectionalLight(0xffffff, 1);
// light.position.set(5, 5, 5);
// scene.add(light);

// // 加载 cloud.glb 模型
// let cloudModel;
// const loader = new GLTFLoader();

// loader.load(
//   '/model/roll.glb',
//   (gltf) => {
//     console.log('✅ 模型加载成功！');
//     cloudModel = gltf.scene;
//     cloudModel.scale.set(3, 3, 3); // 可根据实际调整
//     cloudModel.position.set(0, 0, 0); // 初始位置
//     scene.add(cloudModel);
    
//   },
//   undefined,
//   (error) => {
//     console.error('❌ 模型加载失败:', error);
//   }
// );

// // 接收手势位置的变量
// let trackedX = 0;
// let trackedY = 0;
// let trackedZ = 0;




// // 设置全局函数接收 handPose 坐标
// window.setHandPosition = (x, y, z) => {
//   trackedX = x;
//   trackedY = y;
//   trackedZ = z;
//   // console.log('📥 Three.js 收到位置:', x, y, z);
// };

// // 动画循环
// function animate() {
//   requestAnimationFrame(animate);

//   if (cloudModel) {
//     cloudModel.position.set(trackedX, trackedY, trackedZ);
//      //cloudModel.rotation.y += 0.01; // ❌ 现在不转
//   }

//   renderer.render(scene, camera);
// }
// animate();

// // 每秒打印一次模型坐标（调试用）
// setInterval(() => {
//   if (cloudModel) {
//     const pos = cloudModel.position;
//     console.log(`💎 紫水晶位置：x=${pos.x.toFixed(2)} y=${pos.y.toFixed(2)} z=${pos.z.toFixed(2)}`);
//   }
// }, 1000);
//终于他妈成功了的版本！！！！！！！！！！！
//终于他妈成功了的版本！！！！！！！！！！！
//终于他妈成功了的版本！！！！！！！！！！！
//终于他妈成功了的版本！！！！！！！！！！！
//终于他妈成功了的版本！！！！！！！！！！！
//终于他妈成功了的版本！！！！！！！！！！！




// import * as THREE from 'three';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// // 场景 & 相机
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// camera.position.z = 5;

// // 渲染器 & 背景透明
// const renderer = new THREE.WebGLRenderer({ alpha: true });
// renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.domElement.style.position = 'absolute';
// renderer.domElement.style.top = '0';
// renderer.domElement.style.left = '0';
// renderer.domElement.style.zIndex = '1';
// document.body.appendChild(renderer.domElement);

// // 灯光
// const light = new THREE.DirectionalLight(0xffffff, 1);
// light.position.set(5, 5, 5);
// scene.add(light);

// // 加载 GLB 模型（使用自带材质）
// let cloudModel;
// const loader = new GLTFLoader();

// loader.load(
//   '/model/fish.glb',
//   (gltf) => {
//     console.log('✅ 模型加载成功！');
//     cloudModel = gltf.scene;
//     cloudModel.scale.set(1.5, 1.5, 1.5);
//     cloudModel.position.set(0, 0, 0);
//     scene.add(cloudModel);
//     // ✅ 不再修改材质，使用 glb 原始材质
//   },
//   undefined,
//   (error) => {
//     console.error('❌ 模型加载失败:', error);
//   }
// );

// // 跟踪变量
// let trackedX = 0;
// let trackedY = 0;
// let trackedZ = 0;
// let floatOffset = 0;
// let handDetected = false;

// // 接收手部坐标
// window.setHandPosition = (x, y, z) => {
//   trackedX = x;
//   trackedY = y;
//   trackedZ = z;
//   handDetected = true;
// };

// // 动画
// function animate() {
//   requestAnimationFrame(animate);

//   if (cloudModel) {
//     floatOffset = Math.sin(Date.now() * 0.002) * 0.3;

//     cloudModel.visible = handDetected;
//     cloudModel.position.set(trackedX, trackedY + floatOffset, trackedZ);

//     handDetected = false;
//   }

//   renderer.render(scene, camera);
// }
// animate();



import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';



// 创建场景和相机
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// 创建透明背景渲染器
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.domElement.style.position = 'absolute';
renderer.domElement.style.top = '0';
renderer.domElement.style.left = '0';
renderer.domElement.style.zIndex = '1'; // 确保在摄像头上方
document.body.appendChild(renderer.domElement);

// 接收手势位置的变量
let trackedX = 0;
let trackedY = 0;
let trackedZ = 0;
let uiScale = 1.5; // 初始 scale，与模型初始化的 scale 对应
let mixer;
const clock = new THREE.Clock();


// 添加缩放 slider 控件
const scaleSlider = document.createElement("input");
scaleSlider.type = "range";
scaleSlider.min = "1";
scaleSlider.max = "5";
scaleSlider.step = "0.01";
scaleSlider.value = uiScale;
scaleSlider.style.position = "absolute";
scaleSlider.style.top = "20px";
scaleSlider.style.left = "20px";
scaleSlider.style.zIndex = "10";
document.body.appendChild(scaleSlider);

// slider 改变时更新 uiScale
scaleSlider.addEventListener("input", () => {
  uiScale = parseFloat(scaleSlider.value);
});


// 添加灯光
const light = new THREE.DirectionalLight(0xffffff, 10);
light.position.set(5, 5, 5);
scene.add(light);




// 加载 cloud.glb 模型
let cloudModel;
const loader = new GLTFLoader();

loader.load(
  '/model/roll6.glb',
  (gltf) => {
    console.log('✅ 模型加载成功！');
    cloudModel = gltf.scene;
    cloudModel.scale.set(uiScale, uiScale, uiScale); // 可根据实际调整
    cloudModel.position.set(0, 0, 0); // 初始位置
    cloudModel.rotation.y = -(Math.PI / 2)



    scene.add(cloudModel);
     /////////////////////////////////
    cloudModel.traverse((node) => {
      if (node.isLight) {
        console.log('✅ ✅ ✅ 成功加载灯光 ✅ ✅ ✅');
        console.log('🕯️ 灯光类型:', node.type);
        console.log('📛 灯光名称:', node.name || '(无名)');
        console.log('📍 位置:', `x=${node.position.x.toFixed(2)}, y=${node.position.y.toFixed(2)}, z=${node.position.z.toFixed(2)}`);
        console.log('💡 强度:', node.intensity);
        console.log('🎨 颜色:', node.color.getHexString());
      }
    });
    
    // 👇 如果遍历完后都没找到灯光，加一个 fallback
    let foundLight = false;
    cloudModel.traverse((node) => {
      if (node.isLight) foundLight = true;
    });
    
    if (!foundLight) {
      console.warn('⚠️ 模型中未检测到任何灯光！请检查 Blender 导出是否勾选 "Include → Lights"');
    }
    //////////////////////////////////////////
     // ✅ 输出模型中的灯光
  cloudModel.traverse((node) => {
    if (node.isLight) {
      console.log('💡 模型中包含灯光:', node);
    }
  });

    // ✅ 添加这段初始化动画
  mixer = new THREE.AnimationMixer(cloudModel);
  gltf.animations.forEach((clip) => {
    mixer.clipAction(clip).play();
  });

    
  },
  undefined,
  (error) => {
    console.error('❌ 模型加载失败:', error);
  }
);


// 设置全局函数接收 handPose 坐标
window.setHandPosition = (x, y, z) => {
  trackedX = x;
  trackedY = y;
  trackedZ = z;
  // console.log('📥 Three.js 收到位置:', x, y, z);
};

// 动画循环
function animate() {
  requestAnimationFrame(animate);

  if (cloudModel) {
    cloudModel.position.x = trackedX;
    cloudModel.scale.set(uiScale, uiScale, uiScale);
  }
   // ✅ 添加动画更新
   const delta = clock.getDelta();
   if (mixer) mixer.update(delta);

  renderer.render(scene, camera);
}
animate();

// 每秒打印一次模型坐标（调试用）
setInterval(() => {
  if (cloudModel) {
    const pos = cloudModel.position;
    console.log(`💎 紫水晶位置：x=${pos.x.toFixed(2)} y=${pos.y.toFixed(2)} z=${pos.z.toFixed(2)}`);
  }
}, 1000);













