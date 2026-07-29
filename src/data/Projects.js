export const projects = [
  {
    id: 1,
    no: "01",
    title: "NewsNexus",
    subtitle: "AI Powered Marine Life Protection System",

    thumbnail: "/images/poseidon.png",

    question:
      "Can an inexpensive autonomous system identify and alert ph change in deep oceans?",

    story:
      "Poseidon began as an EDI idea after exploring the growing problem of river pollution. I wanted to understand how computer vision,sensors and embedded systems could work together to automate the process rather than relying entirely on manual cleaning.",

    architecture: "/images/poseidon-architecture.png",

    challenges: [
      "Sensor calibration",
      "Waterproof electronics",
      "False detections",
      "Pump synchronization",
    ],

    stack: [
      "Python",
      "OpenCV",
      "ESP8266",
      "Arduino",
      "IoT",
    ],
    gallery:[

    ],

    github :[

    ],
  },

  {
    id: 2,
    no: "02",
    title: "CreditSense AI",
    subtitle: "Explainable Credit Risk Prediction",

    thumbnail: "/images/creditsense.png",

    question:
      "Can machine learning predict loan defaults while remaining interpretable?",

    story:
      "Instead of chasing raw accuracy, this project focused on building explainable models that financial institutions can trust. I experimented with feature engineering, ensemble learning and SHAP explanations.",

    architecture: "/images/creditsense-architecture.png",

    challenges: [
      "Class imbalance",
      "Feature engineering",
      "Model explainability",
      "Large dataset",
    ],

    stack: [
      "Python",
      "XGBoost",
      "SHAP",
      "Pandas",
      "Scikit-Learn",
    ],
  },

  {
    id: 3,
    no: "03",
    title: "Anveshak Netram",
    subtitle: "Smart Border Surveillance",

    thumbnail: "/images/netram.png",

    question:
      "Can a embedded devices prevent border infiltration using computer vision?",

    story:
      "This project combines ESP32-CAM, Arduino and YOLO to detect human intrusion while remaining affordable enough for large deployments.",

    architecture: "/images/netram-architecture.png",

    challenges: [
      "Real-time inference",
      "Power efficiency",
      "False alarms",
      "Night vision",
    ],

    stack: [
      "YOLO",
      "ESP32-CAM",
      "OpenCV",
      "Arduino",
    ],
  },
];
