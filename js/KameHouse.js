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
    .setPath( 'images/other/' )
    .load( [
      'right.png',
      'left.png',
      'top.png',
      'bottom.png',
      'front.png',
      'back.png'
    ]);
}

function initMesh() {

  var loader = new THREE.JSONLoader();

  // island model
  loader.load('./models/island.json', function(geometry, materials) {
      var island = new THREE.Mesh(geometry, new THREE.MeshFaceMaterial(materials));
      island.scale.x = island.scale.y = island.scale.z = 0.88;
      island.position.z = 2.3;
      island.position.y = -0.4;
      scene.add(island);
  });

  // palm tree model
  loader.load('./models/palmtree.json', function(geometry, materials) {

      var tree = new THREE.Mesh(geometry, new THREE.MeshFaceMaterial(materials));
      tree.scale.x = tree.scale.y = tree.scale.z = 0.3;
      tree.position.set(1.6, 1, 1.6);
      scene.add(tree);

      var tree2 = new THREE.Mesh(geometry, new THREE.MeshFaceMaterial(materials));
      tree2.scale.x = tree2.scale.y = tree2.scale.z = 0.3;
      tree2.position.set(-1, 1, 4.3);
      scene.add(tree2);
  });

  // kame house model

  // bush model

  // rock model
  loader.load('./models/rock.json', function(geometry, materials) {
      var material = new THREE.MeshBasicMaterial( { color: 0x5c5d60 } );
      var rock = new THREE.Mesh(geometry, new THREE.MeshFaceMaterial(material));
      rock.scale.x = rock.scale.y = rock.scale.z = 0.2;
      rock.position.set(-0.7, 1.5, 4.3);
      scene.add(rock);
  });

  // fake water
  var geometry = new THREE.PlaneGeometry(100, 100, 1, 1);
  var material = new THREE.MeshPhongMaterial({color:0x00ccff, specular: 0x222222, shininess: 1});

  var fakeWater = new THREE.Mesh(geometry, material);
  fakeWater.position.y = 1;
  fakeWater.rotation.x = -1.57;
  scene.add(fakeWater);
}

function initLights() {
    var light = new THREE.PointLight(0xffffff, 1.0);
    light.position.set(0, 20, -5);
    scene.add(light);

    var ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(ambientLight);
}

function initCamera() {
    camera = new THREE.PerspectiveCamera(90, width / height, 1, 10);
    camera.position.set(2.5, 3, 6.5);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
}

function initRenderer() {
  renderer = new THREE.WebGLRenderer( {antialias: true} );
  renderer.setSize(width, height);
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
