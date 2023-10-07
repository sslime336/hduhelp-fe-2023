import toast from "react-hot-toast";

export const Toast = {};

Toast.plain = (msg) => {
  toast(msg);
};

Toast.info = (msg) => {
  toast(msg, {
    icon: "ℹ️",
  });
};

Toast.warn = (msg) => {
  toast(msg, {
    icon: "⚠️",
  });
};

Toast.error = (msg) => {
  toast.error(msg);
};

Toast.success = (msg) => {
  toast.success(msg);
};

Toast.onDev = (msg) => {
  toast(msg, {
    icon: "🚧️",
  });
};
