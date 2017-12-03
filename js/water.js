// Water test

var scene, camera, renderer;

var width  = window.innerWidth;
var height = window.innerHeight;

function init() {

  scene = new THREE.Scene();

  initCamera();
  initLights();
  initRenderer();
  initWater();
  //initReflections();

  document.body.appendChild(renderer.domElement);

  var render = function () {
      renderer.render(scene, camera);
      requestAnimationFrame(render);
  };

  render();
}

function initWater() {
  var geometry = new THREE.PlaneBufferGeometry( 5, 5, 10, 10);
  var material = new THREE.MeshBasicMaterial( {color: 0x4286f4, side: THREE.DoubleSide} );
  var plane = new THREE.Mesh( geometry, material );
  plane.rotation.x = -1.57;
  scene.add( plane );
}

function initReflections() {

}


function initLights() {
  var light = new THREE.DirectionalLight( 0xffffff, 1, 100 );
    light.position.set(0, 40, 30);
    light.castShadow = true;
    scene.add(light);

    var ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(ambientLight);
}

function initCamera() {
    camera = new THREE.PerspectiveCamera(90, width / height, 1, 10);
    camera.position.set(1, 2, 4);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
}

function initRenderer() {
  renderer = new THREE.WebGLRenderer( {antialias: true} );
  renderer.setSize(width, height);
}
