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
  loader.load('./models/island2.json', function(geometry, materials) {
      var island = new THREE.Mesh(geometry, new THREE.MeshFaceMaterial(materials));
      island.scale.x = island.scale.y = island.scale.z = 0.88;
      island.position.z = 2.3;
      island.position.y = -0.4;
      island.receiveShadow = true;
      scene.add(island);
  });

  // palm tree model
  loader.load('./models/palmtree.json', function(geometry, materials) {
      var tree = new THREE.Mesh(geometry, new THREE.MeshFaceMaterial(materials));
      tree.scale.x = tree.scale.y = tree.scale.z = 0.35;
      tree.position.set(1, 1, 1.6);
      tree.castShadow = true;
      tree.receiveShadow = true;
      scene.add(tree);

      var tree2 = new THREE.Mesh(geometry, new THREE.MeshFaceMaterial(materials));
      tree2.scale.x = tree2.scale.y = tree2.scale.z = 0.35;
      tree2.position.set(-1, 1, 2.9);
      tree2.castShadow = true;
      tree2.receiveShadow = true;
      scene.add(tree2);
  });

  // kame house model
  loader.load('./models/kame.json', function(geometry, materials) {
      var house = new THREE.Mesh(geometry, new THREE.MeshFaceMaterial(materials));
      house.scale.x = house.scale.y = house.scale.z = 0.18;
      //house.rotation.set(0, 0.8, -0.03);
      house.rotation.set(0, 0.8, 0);
      house.position.set(0.45, 1.47, 2.8);
      house.castShadow = true;
      house.receiveShadow = true;
      scene.add(house);
  });

  // bush model
  loader.load('./models/bush.json', function(geometry, materials) {
      var bush = new THREE.Mesh(geometry, new THREE.MeshFaceMaterial(materials));
      bush.scale.x = bush.scale.y = bush.scale.z = 0.35;
      bush.position.set(-1, 1.3, 2.6);
      bush.castShadow = true;
      bush.receiveShadow = true;
      scene.add(bush);

      var bush2 = new THREE.Mesh(geometry, new THREE.MeshFaceMaterial(materials));
      bush2.scale.x = bush2.scale.y = bush2.scale.z = 0.35;
      bush2.position.set(-1.1, 1.2, 2.9);
      bush2.castShadow = true;
      bush2.receiveShadow = true;
      scene.add(bush2);

      var bush3 = new THREE.Mesh(geometry, new THREE.MeshFaceMaterial(materials));
      bush3.scale.x = bush3.scale.y = bush3.scale.z = 0.35;
      bush3.position.set(1, 1.2, 0);
      bush3.castShadow = true;
      bush3.receiveShadow = true;
      scene.add(bush3);
  });

  // rock model
  loader.load('./models/rock.json', function(geometry, materials) {
      var rock = new THREE.Mesh(geometry, new THREE.MeshFaceMaterial(materials));
      rock.scale.x = rock.scale.y = rock.scale.z = 0.2;
      rock.position.set(-0.7, 1.5, 4.3);
      rock.castShadow = true;
      rock.receiveShadow = true;
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
  var light = new THREE.DirectionalLight( 0xffffff, 1, 100 );
    light.position.set(0, 40, 20);
    light.castShadow = true;
    scene.add(light);

    var ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(ambientLight);
}

function initCamera() {
    camera = new THREE.PerspectiveCamera(90, width / height, 1, 10);
    camera.position.set(2.5, 2.3, 6);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
}

function initRenderer() {
  renderer = new THREE.WebGLRenderer( {antialias: true} );
  renderer.setSize(width, height);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap
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
