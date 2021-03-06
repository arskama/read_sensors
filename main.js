var text = null;
var startAcc = false;
var startGravi = false;
var startGyro = false;
var startLinAcc = false;

console.log("acl ->" + typeof(Accelerometer));

let acl = null;
let lin_acl = null;
let gravi = null;
let gyro = null;

if (typeof(Accelerometer) === 'function')
    acl = new Accelerometer({frequency:10});

if (typeof(LinearAccelerationSensor) === 'function')
    lin_acl = new LinearAccelerationSensor({frequency:10});

if (typeof(GravitySensor) === 'function')
    gravi = new GravitySensor({frequency:10});

if (typeof(Gyroscope) === 'function')
    gyro = new Gyroscope({frequency:10});

console.log("acl" + acl);
console.log("linacl" + lin_acl);
console.log("gravi" + gravi);
console.log("gyro" + gyro);

function setText(text) {
    game_text.innerText = text;
    game_text.style.display = "none";
    game_text.style.display = "block";
}
function main() {
  game_text = document.getElementById("game_text");
 
  acl.addEventListener('reading', e => {
    document.getElementById("acc_x_val").innerHTML = Math.round(acl.x*1000)/1000;
    document.getElementById("acc_y_val").innerHTML = Math.round(acl.y*1000)/1000;
    document.getElementById("acc_z_val").innerHTML = Math.round(acl.z*1000)/1000;
  });
  acl.onerror = event => {
    console.log(event.error.name, event.error.message);
    document.getElementById("acc_status").innerHTML = event.error.message;
  }
    lin_acl.addEventListener('reading', e => {
    document.getElementById("lin_acc_x_val").innerHTML = Math.round(lin_acl.x*1000)/1000;
    document.getElementById("lin_acc_y_val").innerHTML = Math.round(lin_acl.y*1000)/1000;
    document.getElementById("lin_acc_z_val").innerHTML = Math.round(lin_acl.z*1000)/1000;
  });

  lin_acl.onerror = event => {
    console.log(event.error.name, event.error.message);
    document.getElementById("lin_acc_status").innerHTML = event.error.message;
  }

  if (gravi) {
    gravi.addEventListener('reading', e => {
      document.getElementById("gravity_x_val").innerHTML = Math.round(gravi.x*1000)/1000;
      document.getElementById("gravity_y_val").innerHTML = Math.round(gravi.y*1000)/1000;
      document.getElementById("gravity_z_val").innerHTML = Math.round(gravi.z*1000)/1000;
    });

    gravi.onerror = event => {
      console.log(event.error.name, event.error.message);
      document.getElementById("gravity_status").innerHTML = event.error.message;
    }
  }

  gyro.addEventListener('reading', e => {
    document.getElementById("gyro_x_val").innerHTML = Math.round(gyro.x*1000)/1000;
    document.getElementById("gyro_y_val").innerHTML = Math.round(gyro.y*1000)/1000;
    document.getElementById("gyro_z_val").innerHTML = Math.round(gyro.z*1000)/1000;
  });

  gyro.onerror = event => {
    console.log(event.error.name, event.error.message);
    document.getElementById("gyro_status").innerHTML = event.error.message;
  }
}

function startStopAcc() {
    if (startAcc == false) {
        document.getElementById("accStatus").innerHTML = "ON";
        startAcc = true;
        acl.start();
    } else {
        document.getElementById("accStatus").innerHTML = "OFF";
        startAcc = false;
        acl.stop();
        document.getElementById("acc_x_val").innerHTML = "-";
        document.getElementById("acc_y_val").innerHTML = "-";
        document.getElementById("acc_z_val").innerHTML = "-";
        document.getElementById("acc_status").innerHTML = "";
    }
}

function startStopLinAcc() {
    if (startLinAcc == false) {
        document.getElementById("linAccStatus").innerHTML = "ON";
        startLinAcc = true;
        lin_acl.start();
    } else {
        document.getElementById("linAccStatus").innerHTML = "OFF";
        startLinAcc = false;
        lin_acl.stop();
        document.getElementById("lin_acc_x_val").innerHTML = "-";
        document.getElementById("lin_acc_y_val").innerHTML = "-";
        document.getElementById("lin_acc_z_val").innerHTML = "-";
        document.getElementById("lin_acc_status").innerHTML = "";
    }
}

function startStopGravity() {
  if (gravi) {
    if (startGravi == false) {
      document.getElementById("gravityStatus").innerHTML = "ON";
      startGravi = true;
      gravi.start();
    } else {
      document.getElementById("gravityStatus").innerHTML = "OFF";
      startGravi = false;
      gravi.stop();
      document.getElementById("gravity_x_val").innerHTML = "-";
      document.getElementById("gravity_y_val").innerHTML = "-";
      document.getElementById("gravity_z_val").innerHTML = "-";
      document.getElementById("gravity_status").innerHTML = "";
    }
  } else {
      document.getElementById("gravityStatus").innerHTML = "SENSOR NOT SUPPORTED";
  }
}

function startStopGyro() {
    if (startGyro == false) {
        document.getElementById("gyroStatus").innerHTML = "ON";
        startGyro = true;
        gyro.start();
    } else {
        document.getElementById("gyroStatus").innerHTML = "OFF";
        startGyro = false;
        gyro.stop();
        document.getElementById("gyro_x_val").innerHTML = "-";
        document.getElementById("gyro_y_val").innerHTML = "-";
        document.getElementById("gyro_z_val").innerHTML = "-";
        document.getElementById("gyro_status").innerHTML = "-";
    }
}
