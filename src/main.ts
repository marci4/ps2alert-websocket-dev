import {Configuration} from "./configuration";
import {WebSocketHandler} from "./webSocketHandler";
import * as WebSocket from "ws";

export class Main {
    private webSocketHandler: WebSocketHandler;
    private webSocketClient: WebSocket;

    constructor() {
        this.webSocketHandler = new WebSocketHandler();
        console.log("constructor");
        this.webSocketClient = new WebSocket("wss://push.planetside2.com/streaming?environment=" + Configuration.Environment + "&service-id=s:"+Configuration.ServiceId);
    }
    start(): void {
        this.webSocketClient.on('open', () => {
            const subscribeMessage = {"service": "event", "action": "subscribe", "worlds": ["all"], "eventNames": ["PlayerLogin", "PlayerLogin"]};
            this.webSocketClient.send(JSON.stringify(subscribeMessage));
        });

        this.webSocketClient.on('message', (message) => {
            console.log(message);
            this.webSocketHandler.handleMessage(message);
        });
        this.webSocketClient.on('error', (error) => {
            console.log(error);
        });
    }
}
