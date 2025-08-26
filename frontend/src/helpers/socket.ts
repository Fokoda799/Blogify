import { io } from "socket.io-client";


const backendUrl = import.meta.env.VITE_BACKEND_URL;

// Connect to backend Socket.IO server
export const socket = io(backendUrl, {
  autoConnect: false,
  transports: ["websocket"], // skip long-polling if possible
  withCredentials: true,
  auth: {
    token: localStorage.getItem("token"), // send token if backend expects auth
  },
});

socket.on("connect_error", (err) => {
  if (err.message === "jwt expired") {
    localStorage.removeItem("token");
    localStorage.removeItem("authUser");
  } else {
    console.error("Socket connection error:", err);
  }
});
