import io from "socket.io-client";
import Endpoints from "./Endpoints";
import { Lang } from "../Functions/Device";

const socket = io(Endpoints.API.SOCKET.IO, { transports: ["websocket"] });

export default class Socket {
  constructor(metaverse) {
    this.metaverse = metaverse;
    this.room = `${env.METAVERSO}-${env.ENTORNO}-${this.metaverse.getRoom()}`;
    this.idiomaCompleto = navigator.language || navigator.userLanguage;
    this.idiomaCliente = this.idiomaCompleto.split("-")[0];

    this.set();
  }

  set = () => {
    socket.emit("join-room", { room: this.room });
    socket.on("connect", () => {
      // console.log('CONNECTED')
    });

    socket.on("room-joined", (room, id) => {
      // console.log(room,id)
      socket.emit("get-all-users-in-room");
    });

    socket.on("all-users-in-room", (users, id) => {});

    socket.on("user-disconnected", (id) => {});

    socket.on(
      "server-send-message",
      ({ who, msn, lang, userId, timestamp }) => {
        const data = {
          userId: userId,
          userName: who,
          message: msn,
          timestamp: timestamp,
          lang: lang,
        };
        if (!(lang === this.idiomaCliente)) {
          let langSource = lang;
          let langTarget = this.idiomaCliente;
          socket.emit("translate-message", {
            who,
            msn,
            langSource,
            langTarget,
            userId,
            timestamp,
          });
        } else {
          this.metaverse.menu.chat.msnOut(data);
        }
      }
    );

    socket.on(
      "server-translated-message",
      ({ userId, who, msnTranslated, timestamp }, socketid) => {
        const data = {
          userId: userId,
          userName: who,
          message: msnTranslated,
          timestamp: timestamp,
        };
        console.log(data);
        this.metaverse.menu.chat.msnOut(data);
      }
    );
  };

  message = (data) => {
    const payload = {
      who: data.userName,
      msn: data.message,
      room: { room: this.room },
      lang: Lang(),
      userId: data.userId,
      timestamp: data.timestamp,
    };
    socket.emit("client-send-message", payload);
  };

  reconnect() {
    socket.emit("user-wwwwdisconnected", socket.id);
    this.room = `${env.METAVERSO}-${env.ENTORNO}-${this.metaverse.getRoom()}`;
    socket.emit("join-room", { room: this.room });
  }
}
