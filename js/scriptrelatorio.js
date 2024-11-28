const offline = document.querySelector('.offline');
const conexao = document.querySelector('.not-conexao');

offline.addEventListener('mouseenter', () => {
  conexao.style.display = 'block';
  offline.addEventListener('mouseleave', () => {
    conexao.style.display = 'none';
  });
});

function configSensor(sensorName) {
  alert(`Configurar: ${sensorName}`);
}

function restartSensor(sensorName) {
  alert(`Reiniciando: ${sensorName}`);
}


document.addEventListener("DOMContentLoaded", () => {
  const scanDevicesButton = document.getElementById("scanDevicesButton");
  const sensorContainer = document.querySelector(".sensor-container");
  const connectSensor1 = document.getElementById("connectSensor1");
  const connectSensor2 = document.getElementById("connectSensor2");
  const deviceSection = document.getElementById("deviceSection");
  const pairButton = document.getElementById("pairButton");
  const deviceList = document.getElementById("deviceList");
  const statusMessage = document.getElementById("statusMessage");

  let selectedSensorId = null;

  scanDevicesButton.addEventListener("click", () => {
      scanDevicesButton.classList.add("hidden");
      sensorContainer.classList.remove("hidden");
  });

  connectSensor1.addEventListener("click", () => {
      selectedSensorId = "001";
      deviceSection.classList.remove("hidden");
  });

  connectSensor2.addEventListener("click", () => {
      selectedSensorId = "002";
      deviceSection.classList.remove("hidden");
  });

  deviceList.addEventListener("change", () => {
      pairButton.disabled = false;
  });

  pairButton.addEventListener("click", () => {
      const selectedDevice = document.querySelector('input[name="device"]:checked').value;
      if (selectedSensorId && selectedDevice) {
          statusMessage.textContent = `Sensor ${selectedSensorId}: Emparelhado ao ambiente ${selectedDevice}`;
      }
  });
});
