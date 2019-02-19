var text = null;
var acl = null;
var startAcc = false;
var startGyro = false;

function setText(text) {
    game_text.innerText = text;
    game_text.style.display = "none";
    game_text.style.display = "block";
}
function main() {
 game_text = document.getElementById("game_text");
 
//acl = new LinearAccelerationSensor({frequency:250});
acl = new Accelerometer({frequency:250});
gyro = new Gyroscope({frequency:60});

acl.addEventListener('reading', e => {
    document.getElementById("acc_x_val").innerHTML = Math.round(acl.x*1000)/1000;
    document.getElementById("acc_y_val").innerHTML = Math.round(acl.y*1000)/1000;
    document.getElementById("acc_z_val").innerHTML = Math.round(acl.z*1000)/1000;
  });

gyro.addEventListener('reading', e => {
    document.getElementById("gyro_x_val").innerHTML = Math.round(gyro.x*1000)/1000;
    document.getElementById("gyro_y_val").innerHTML = Math.round(gyro.y*1000)/1000;
    document.getElementById("gyro_z_val").innerHTML = Math.round(gyro.z*1000)/1000;
  });

acl.onerror = event => console.log(event.error.name, event.error.message);
gyro.onerror = event => console.log(event.error.name, event.error.message);
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
    }
}
