// Austin Bullard
// Dheeraj Nalluri
// CS336 Final Project - Water
// November 5th, 2017

var scene, camera, renderer;

var width  = window.innerWidth;
var height = window.innerHeight;

function init() {

  scene = new THREE.Scene();
  initMesh();
  initCamera();
  initLights();
  initRenderer();

  document.body.appendChild(renderer.domElement);

  var render = function () {
      renderer.render(scene, camera);
      requestAnimationFrame(render);
  };

  render();
}

var mesh = null;
function initMesh() {
  var loader = new THREE.JSONLoader();
  loader.load('./shape.json', function(geometry, materials) {
      mesh = new THREE.Mesh(geometry, new THREE.MeshFaceMaterial(materials));
      mesh.scale.x = mesh.scale.y = mesh.scale.z = 0.5;
      scene.add(mesh);
  });
}

function initLights() {
    var light = new THREE.PointLight(0xffffff, 1.0);
    light.position.set(0, 10, -5);

    var ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(light);
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
  renderer.setClearColor(0xf0f0f0);
}

// stuff for austin to do
function austin() {

}

// stuff for dheeraj to do
function dheeraj() {

}
//
// function start()
// {
//   // // Create a threejs renderer from the canvas
//   // var ourCanvas = document.getElementById('theCanvas');
//   // var renderer = new THREE.WebGLRenderer({canvas: ourCanvas});
//   //
//   // // create a scene and camera
//   // var scene = new THREE.Scene();
//   // var camera = new THREE.PerspectiveCamera( 30, 1.5, 0.1, 1000 );
//   // camera.position.x = 2;
//   // camera.position.y = 2;
//   // camera.position.z = 5;
//   // camera.lookAt(new THREE.Vector3(0, 0, 0));
//   //
//   // // Choose a geometry
//   // //var geometry = new THREE.PlaneGeometry( 1, 1 );
//   // var geometry = new THREE.BoxGeometry( 1, 1, 1 );
//   // //var geometry = new THREE.SphereGeometry(1);
//   //
//   // // Choose a material:
//   // //var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
//   // //var material = new THREE.MeshLambertMaterial( { color: 0x00ff00 } );
//   // var material = new THREE.MeshPhongMaterial( { color: 0x00ff00, specular: 0x222222, shininess: 50} );
//   //
//   // // Note: we can make the PhongMaterial use face normals by selecting FlatShading
//   // //var material = new THREE.MeshPhongMaterial( { color: 0x00ff00, specular: 0x222222, shininess: 50, shading: THREE.FlatShading} );
//   //
//   // // Create a mesh
//   // var cube = new THREE.Mesh( geometry, material );
//   //
//   // // Add it to the scene
//   // scene.add(cube);
//   //
//   //
//   // // Make some axes, this will be a Line instead of a Mesh
//   // var material = new THREE.LineBasicMaterial({color: 0xff0000});
//   // var geometry = new THREE.Geometry();
//   // geometry.vertices.push(
//   //   new THREE.Vector3( 0, 0, 0 ),
//   //   new THREE.Vector3( 2, 0, 0 )
//   // );
//   // var line = new THREE.Line( geometry, material );
//   // scene.add( line );
//   //
//   // material = new THREE.LineBasicMaterial({color: 0x00ff00});
//   // geometry = new THREE.Geometry();
//   // geometry.vertices.push(
//   //   new THREE.Vector3( 0, 0, 0 ),
//   //   new THREE.Vector3( 0, 2, 0 )
//   // );
//   // line = new THREE.Line( geometry, material );
//   // scene.add( line );
//   //
//   // material = new THREE.LineBasicMaterial({color: 0x0000ff});
//   // geometry = new THREE.Geometry();
//   // geometry.vertices.push(
//   //   new THREE.Vector3( 0, 0, 0 ),
//   //   new THREE.Vector3( 0, 0, 2 )
//   // );
//   // line = new THREE.Line( geometry, material );
//   // scene.add( line );
//   //
//   // // Put a point light in the scene
//   // var light = new THREE.PointLight(0xffffff, 1.0);
//   // light.position.set(-2, 3, 5);
//   // scene.add(light);
//   //
//   // // Put in an ambient light too
//   // light = new THREE.AmbientLight(0x555555);
//   // scene.add(light);
//   //
//   // // (**) If cube is not centered at origin, notice that 2nd and 3rd rotation
//   // // examples do the rotation extrinsically
//   // //cube.position.set(0.5, 0, 0);
//
//   var render = function () {
//       renderer.render(scene, camera);
//       var increment = 1.0 * Math.PI / 180.0;  // convert to radians
//       requestAnimationFrame( render );
//   };
//
//   render();
// }
