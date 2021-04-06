const THREE = require("./three.js")();

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry(700, 700, 700, 10, 10, 10)
var material = new THREE.MeshPhongMaterial({ shininess: 1 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

var geometry = new THREE.SphereGeometry(70, 32, 32)
geometry.applyMatrix4(new THREE.Matrix4().makeScale(1.0, 2.0, 2.0))
var material = new THREE.MeshPhongMaterial({ shininess: 1 });
const sphere = new THREE.Mesh(geometry, material);
sphere.position.set(505, 0, 0)
scene.add(sphere);

var geometry = new THREE.BoxGeometry(200, 70, 70, 10, 10, 10)
var material = new THREE.MeshPhongMaterial({ shininess: 1 });
const cube3 = new THREE.Mesh(geometry, material);
cube3.position.set(440, 0, 0)
scene.add(cube3);

var geometry = new THREE.BoxGeometry(200, 70, 70, 10, 10, 10)
var material = new THREE.MeshPhongMaterial({ shininess: 1 });
const cube4 = new THREE.Mesh(geometry, material);
cube4.position.set(440, 0, -350)
scene.add(cube4);

var light = new THREE.PointLight(0x0000ff)
light.position.set(1001, 1001, 1001)
scene.add(light);

var light2 = new THREE.PointLight(0x0f00ff)
light2.position.set(-1001, -1001, -1001)
scene.add(light2);

var light3 = new THREE.PointLight(0x00ff00)
light3.position.set(1001, -1001, -1001)
scene.add(light3);

var light4 = new THREE.PointLight(0xff00ff)
light4.position.set(1001, 1001, -1001)
scene.add(light4);

//controls = new THREE.OrbitControls( camera, renderer.domElement );

function render() {
  requestAnimationFrame(render);

  renderer.render(scene, camera);
};
render();