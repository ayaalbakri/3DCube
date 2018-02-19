//Get the value of canavas tag by id 
var canvas = document.getElementById("canvasID");
//Get the value of span tag by id 
var msg = document.getElementById('state-msg');

// add mp3 file )(sound) 

var audio = document.createElement('audio');
var source = document.createElement('source');
source.src='assets/sound/button.mp3';
audio.appendChild(source);


//Creating the scene
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true,alpha:true });
renderer.setClearColor(0x000000, 0);
//texture
var cubeTexture = THREE.ImageUtils.loadTexture('assets/image/logo.png');
//set size of cube
renderer.setSize(window.innerWidth, window.innerHeight);
// append cube to body
document.body.appendChild(renderer.domElement);
// end template here
// creating a cube quadrilateral of the dimensions provided with the 'width', 'height', and 'depth' constructor arguments.
var geometry = new THREE.BoxGeometry( 10, 10, 10 );
// cube face texture (image)
var cubeMaterial = new THREE.MeshBasicMaterial({ map: cubeTexture });
var cube = new THREE.Mesh(geometry, cubeMaterial);
//add multipl color to cube
// red = new THREE.Color(1, 0, 0);
// green = new THREE.Color(0, 1, 0);
// blue = new THREE.Color(0, 0, 1);
// var colors = [red, green, blue];

// for (var i = 0; i < 3; i++) {
//     geometry.faces[4 * i].color = colors[i];
//     geometry.faces[4 * i + 1].color = colors[i];
//     geometry.faces[4 * i + 2].color = colors[i];
//     geometry.faces[4 * i + 3].color = colors[i];
// }
//add shadow
var ambientLight = new THREE.AmbientLight(0x090909);
scene.add(ambientLight);

// Spotlight for specific illumination
var light = new THREE.SpotLight(0xAAAAAA);
renderer.shadowMapEnabled = true;
light.castShadow = true;
light.shadowDarkness = 0.5;
light.shadowCameraVisible = true;
light.shadowCameraRight     =  5;
light.shadowCameraLeft     = -5;
light.shadowCameraTop      =  5;
light.shadowCameraBottom   = -5;
//add scene
scene.add(cube);
//  position
camera.position.x = 2;
camera.position.y = 1;
camera.position.z = 20;

// // movement the cube by keyboard 
document.addEventListener("keydown", onKeyBoard, false);
function onKeyBoard(event) {
    var keyCode = event.which;
    //convert keyCode to character
    var value = String.fromCharCode(event.keyCode)
    audio.play()
    // up
    if (keyCode == 87) {
      //Increase y position when press W
        cube.position.y += 1;
         //append text to div that appear key
         msg.textContent =  'YOU pressed '+ value + ' key GO UP';
         //play sound
         audio.play();
        // down
    } else if (keyCode == 83) {
      //Desrease y position when press S
        cube.position.y -= 1;
         //append text  to div that appear key
        msg.textContent = 'YOU pressed '+ value+ ' key GO DOWN';
           //play sound
        audio.play();
        // left
    } else if (keyCode == 65) {
       //Desrease x position when press A
        cube.position.x -= 1;
         //append text  to div that appear key
        msg.textContent =  'YOU pressed '+ value + ' key GO LEFT';
         //play sound
        audio.play();
        // right
    } else if (keyCode == 68) {
      //increase x position when press D
        cube.position.x += 1;
        //append text  to div that appear key
        msg.textContent =   'YOU pressed '+ value + ' key GO RIGTH';
         //play sound
       // audio.stop();
    
    }
    else{
      //audio.stop();
      return;

    }
    render();
};

//render
var render = function() {
  requestAnimationFrame(render);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  cube.rotation.z += 0.01;
  renderer.render(scene, camera);
// console.log(cube.rotation.z)
};

render();



