// Austin Bullard
// Dheeraj Nalluri
// CS336 Final Project - Water
// November 5th, 2017

var scene, camera, renderer;

var width  = window.innerWidth;
var height = window.innerHeight;

function init() {

  scene = new THREE.Scene();
  initSkybox();
  initMesh();
  initCamera();
  initLights();
  initRenderer();
  // initWater();
  // initReflections();
  initSounds();

  document.body.appendChild(renderer.domElement);

  var render = function () {
      renderer.render(scene, camera);
      requestAnimationFrame(render);
  };

  render();
}

function initSkybox(){
  scene.background = new THREE.CubeTextureLoader()
    .setPath( 'images/test/dawnmountain-' )
    .load( [
      'xpos.png',
      'xneg.png',
      'ypos.png',
      'yneg.png',
      'zpos.png',
      'zneg.png'
    ]);
}

function initMesh() {

  var loader = new THREE.JSONLoader();

  // island model
  loader.load('./models/island.json', function(geometry, materials) {
      var island = new THREE.Mesh(geometry, new THREE.MeshFaceMaterial(materials));
      scene.add(island);
  });

  // palm tree model
  loader.load('./models/palmtree.json', function(geometry, materials) {
      var tree = new THREE.Mesh(geometry, new THREE.MeshFaceMaterial(materials));
      tree.scale.x = tree.scale.y = tree.scale.z = 0.5;
      tree.position.set(1, 1, 0);
      scene.add(tree);

      var tree2 = new THREE.Mesh(geometry, new THREE.MeshFaceMaterial(materials));
      tree2.scale.x = tree2.scale.y = tree2.scale.z = 0.5;
      tree2.position.set(-1, 1, 0.5);
      scene.add(tree2);
  });

  // kame house model

  // bush model

  // rock model
}

function initLights() {
    var light = new THREE.PointLight(0xffffff, 1.0);
    light.position.set(0, 20, -5);
    scene.add(light);

    var ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(ambientLight);
}

function initCamera() {
    camera = new THREE.PerspectiveCamera(70, width / height, 1, 10);
    camera.position.set(0, 5, 8.5);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
}

function initRenderer() {
  var canvas = document.getElementById('theCanvas');
  renderer = new THREE.WebGLRenderer({canvas: canvas});
  //renderer.setClearColor(0xf0f0f0);
}

function initWater() {

}

function initReflections() {

}

function initSounds() {
    var listener = new THREE.AudioListener();
    camera.add(listener);

    var sound = new THREE.Audio(listener);

    var audioLoader = new THREE.AudioLoader();

    audioLoader.load('sounds/Beach Waves-SoundBible.com-1024681188.mp3', function(buffer) {
        sound.setBuffer(buffer);
        sound.setLoop(true);
        sound.setVolume(0.5);
        sound.play();
    });
}
