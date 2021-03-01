[
    {
        "id": "cf0aac14.ce246",
        "type": "inject",
        "z": "ad3d7b82.7ef828",
        "name": "",
        "props": [
            {
                "p": "payload"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "2.32",
        "payloadType": "str",
        "x": 290,
        "y": 580,
        "wires": [
            [
                "f6af559e.6d3c58"
            ]
        ]
    },
    {
        "id": "abf2bd27.a6d59",
        "type": "debug",
        "z": "ad3d7b82.7ef828",
        "name": "",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 750,
        "y": 580,
        "wires": []
    },
    {
        "id": "f6af559e.6d3c58",
        "type": "switch",
        "z": "ad3d7b82.7ef828",
        "name": "",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "btwn",
                "v": "1",
                "vt": "num",
                "v2": "3",
                "v2t": "num"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 460,
        "y": 580,
        "wires": [
            [
                "abf2bd27.a6d59"
            ]
        ]
    }
]
