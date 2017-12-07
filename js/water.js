// Water test

var scene, camera, renderer;

var width  = window.innerWidth;
var height = window.innerHeight;

var plane;
var time = 0.0;

//translate keypress events to strings
//from http://javascript.info/tutorial/keyboard-events
function getChar(event) {
  if (event.which == null) {
    return String.fromCharCode(event.keyCode); // IE
  } else if (event.which!=0 && event.charCode!=0) {
    return String.fromCharCode(event.which);   // the rest
  } else {
    return null; // special key
  }
}

function handleKeyPress(event)
{
  var ch = getChar(event);
  if (cameraControl(camera, ch)) return;
}

function init() {

  window.onkeypress = handleKeyPress;

  scene = new THREE.Scene();

  initCamera();
  initLights();
  initRenderer();
  initWater();
  //initReflections();

  document.body.appendChild(renderer.domElement);

  var render = function () {
      time++;
      plane.material.uniforms.time.value = time;
      renderer.render(scene, camera);
      requestAnimationFrame(render);
  };

  render();
}

function initWater() {
  var geometry = new THREE.PlaneBufferGeometry(20, 20, 200, 200);
  var material = new THREE.ShaderMaterial({
    transparent: true,
    uniforms: {
      timeScale: { value: 0.01 },
      time: { value: time },
      wave1: { value: new THREE.Vector3(-1.0, -3.0, 0.1) },
      wave2: { value: new THREE.Vector3(3.5, -4.5, 0.1) },
      wave3: { value: new THREE.Vector3(-0.5, 4.0, 0.01) }
    },
  	vertexShader: document.getElementById( 'vertexShader' ).textContent,
  	fragmentShader: document.getElementById( 'fragmentShader' ).textContent
  });
  plane = new THREE.Mesh(geometry, material);
  plane.rotation.x = -1.57;
  scene.add(plane);
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
    camera = new THREE.PerspectiveCamera(90, width / height, 1, 100);
    camera.position.set(1, 2, 4);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
}

function initRenderer() {
  renderer = new THREE.WebGLRenderer( {antialias: true} );
  renderer.setSize(width, height);
  //renderer.setClearColor(0xf44262);
}
