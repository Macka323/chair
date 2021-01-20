[
    {
        "id": "204f2b47.3da1b4",
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
        "payload": "a.232",
        "payloadType": "str",
        "x": 270,
        "y": 360,
        "wires": [
            [
                "36a535e8.d2d9da"
            ]
        ]
    },
    {
        "id": "36a535e8.d2d9da",
        "type": "switch",
        "z": "ad3d7b82.7ef828",
        "name": "",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "cont",
                "v": "a",
                "vt": "str"
            },
            {
                "t": "cont",
                "v": "b",
                "vt": "str"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 2,
        "x": 450,
        "y": 400,
        "wires": [
            [
                "531dd9f4.724a98"
            ],
            [
                "531dd9f4.724a98"
            ]
        ]
    },
    {
        "id": "17177f27.bd8ac1",
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
        "payload": "b.234",
        "payloadType": "str",
        "x": 270,
        "y": 440,
        "wires": [
            [
                "36a535e8.d2d9da"
            ]
        ]
    },
    {
        "id": "531dd9f4.724a98",
        "type": "change",
        "z": "ad3d7b82.7ef828",
        "name": "",
        "rules": [
            {
                "t": "change",
                "p": "payload",
                "pt": "msg",
                "from": "a.",
                "fromt": "str",
                "to": "",
                "tot": "str"
            },
            {
                "t": "change",
                "p": "payload",
                "pt": "msg",
                "from": "b.",
                "fromt": "str",
                "to": "",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 650,
        "y": 400,
        "wires": [
            [
                "c3b702d0.759b2"
            ]
        ]
    },
    {
        "id": "c3b702d0.759b2",
        "type": "debug",
        "z": "ad3d7b82.7ef828",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 920,
        "y": 400,
        "wires": []
    },
    {
        "id": "61261215.b3fa5c",
        "type": "comment",
        "z": "ad3d7b82.7ef828",
        "name": "",
        "info": "with letters",
        "x": 590,
        "y": 320,
        "wires": []
    }
]
