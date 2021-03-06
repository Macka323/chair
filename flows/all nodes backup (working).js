[
    {
        "id": "772b4e64.18e6e",
        "type": "tab",
        "label": "dashboard",
        "disabled": false,
        "info": ""
    },
    {
        "id": "dc7f38ca.1f1628",
        "type": "tab",
        "label": "status",
        "disabled": false,
        "info": ""
    },
    {
        "id": "af13bad2.757ad8",
        "type": "tab",
        "label": "settings",
        "disabled": false,
        "info": ""
    },
    {
        "id": "cc53778b.362758",
        "type": "tab",
        "label": "indication",
        "disabled": false,
        "info": ""
    },
    {
        "id": "e6bd1a7b.e18128",
        "type": "tab",
        "label": "tests",
        "disabled": false,
        "info": ""
    },
    {
        "id": "93d0b05b.5a7bb",
        "type": "tab",
        "label": "configuration",
        "disabled": false,
        "info": ""
    },
    {
        "id": "bc402e29.82aae",
        "type": "serial-port",
        "serialport": "/dev/ttyACM0",
        "serialbaud": "9600",
        "databits": "8",
        "parity": "none",
        "stopbits": "1",
        "waitfor": "",
        "dtr": "none",
        "rts": "none",
        "cts": "none",
        "dsr": "none",
        "newline": "\\n",
        "bin": "false",
        "out": "char",
        "addchar": "",
        "responsetimeout": "10000"
    },
    {
        "id": "7cfe000b.34beb",
        "type": "ui_link",
        "name": "Github repository",
        "link": "https://github.com/Macka323/chair",
        "icon": "open_in_browser",
        "target": "newtab",
        "order": 4
    },
    {
        "id": "89368e3e.e8a0b",
        "type": "ui_base",
        "theme": {
            "name": "theme-light",
            "lightTheme": {
                "default": "#0094CE",
                "baseColor": "#0094CE",
                "baseFont": "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif",
                "edited": true,
                "reset": false
            },
            "darkTheme": {
                "default": "#097479",
                "baseColor": "#097479",
                "baseFont": "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif",
                "edited": false,
                "reset": false
            },
            "customTheme": {
                "name": "Untitled Theme 1",
                "default": "#4B7930",
                "baseColor": "#4B7930",
                "baseFont": "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif",
                "reset": false
            },
            "themeState": {
                "base-color": {
                    "default": "#0094CE",
                    "value": "#0094CE",
                    "edited": true
                },
                "page-titlebar-backgroundColor": {
                    "value": "#0094CE",
                    "edited": false
                },
                "page-backgroundColor": {
                    "value": "#fafafa",
                    "edited": false
                },
                "page-sidebar-backgroundColor": {
                    "value": "#ffffff",
                    "edited": false
                },
                "group-textColor": {
                    "value": "#1bbfff",
                    "edited": false
                },
                "group-borderColor": {
                    "value": "#ffffff",
                    "edited": false
                },
                "group-backgroundColor": {
                    "value": "#ffffff",
                    "edited": true
                },
                "widget-textColor": {
                    "value": "#111111",
                    "edited": true
                },
                "widget-backgroundColor": {
                    "value": "#0094ce",
                    "edited": false
                },
                "widget-borderColor": {
                    "value": "#ffffff",
                    "edited": true
                },
                "base-font": {
                    "value": "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif"
                }
            },
            "angularTheme": {
                "primary": "indigo",
                "accents": "blue",
                "warn": "red",
                "background": "grey"
            }
        },
        "site": {
            "name": "Node-RED Dashboard",
            "hideToolbar": "false",
            "allowSwipe": "false",
            "lockMenu": "false",
            "allowTempTheme": "true",
            "dateFormat": "DD/MM/YYYY",
            "sizes": {
                "sx": 35,
                "sy": 35,
                "gx": 6,
                "gy": 6,
                "cx": 112,
                "cy": 6,
                "px": 0,
                "py": 0
            }
        }
    },
    {
        "id": "bb56339e.2abaa",
        "type": "ui_tab",
        "name": "Chair",
        "icon": "dashboard",
        "order": 1,
        "disabled": false,
        "hidden": false
    },
    {
        "id": "9a7b5679.e3e9e8",
        "type": "ui_tab",
        "name": "Stats",
        "icon": "dashboard",
        "order": 1,
        "disabled": false,
        "hidden": false
    },
    {
        "id": "666ce8f4.6780c8",
        "type": "ui_tab",
        "name": "settings",
        "icon": "settings",
        "order": 3,
        "disabled": false,
        "hidden": false
    },
    {
        "id": "a4a5657b.ad6998",
        "type": "ui_group",
        "name": "dashboard",
        "tab": "bb56339e.2abaa",
        "order": 1,
        "disp": true,
        "width": "2",
        "collapse": false
    },
    {
        "id": "8a312ad2.ae3c18",
        "type": "ui_group",
        "name": "",
        "tab": "9a7b5679.e3e9e8",
        "order": 1,
        "disp": true,
        "width": 13,
        "collapse": false
    },
    {
        "id": "8d305fa8.31707",
        "type": "ui_group",
        "name": "Visual-settings",
        "tab": "666ce8f4.6780c8",
        "order": 1,
        "disp": true,
        "width": 3,
        "collapse": false
    },
    {
        "id": "49deb1f5.12e01",
        "type": "ui_group",
        "name": "status",
        "tab": "bb56339e.2abaa",
        "order": 3,
        "disp": true,
        "width": "3",
        "collapse": false
    },
    {
        "id": "7db0b691.b8aa88",
        "type": "ui_group",
        "name": "spacer",
        "tab": "bb56339e.2abaa",
        "order": 2,
        "disp": false,
        "width": "3",
        "collapse": false
    },
    {
        "id": "a61f5046.b796f",
        "type": "ui_group",
        "name": "General settings",
        "tab": "666ce8f4.6780c8",
        "order": 2,
        "disp": true,
        "width": 3,
        "collapse": false
    },
    {
        "id": "7534c655.1c8b38",
        "type": "ui_spacer",
        "name": "spacer",
        "group": "444dec1e.47f464",
        "order": 1,
        "width": 1,
        "height": 1
    },
    {
        "id": "6b773d0.d1cd5c4",
        "type": "ui_spacer",
        "name": "spacer",
        "group": "a4a5657b.ad6998",
        "order": 5,
        "width": 2,
        "height": 1
    },
    {
        "id": "e3c97686.204ea8",
        "type": "ui_spacer",
        "name": "spacer",
        "group": "a4a5657b.ad6998",
        "order": 6,
        "width": 2,
        "height": 1
    },
    {
        "id": "950c64e1.4f19e8",
        "type": "ui_spacer",
        "name": "spacer",
        "group": "a4a5657b.ad6998",
        "order": 7,
        "width": 2,
        "height": 1
    },
    {
        "id": "119df2cf.a019dd",
        "type": "ui_spacer",
        "name": "spacer",
        "group": "a4a5657b.ad6998",
        "order": 10,
        "width": 2,
        "height": 1
    },
    {
        "id": "a2b6ba4c.ac2598",
        "type": "ui_spacer",
        "name": "spacer",
        "group": "a4a5657b.ad6998",
        "order": 11,
        "width": 2,
        "height": 1
    },
    {
        "id": "93c1bc42.41993",
        "type": "ui_spacer",
        "name": "spacer",
        "group": "a4a5657b.ad6998",
        "order": 12,
        "width": 2,
        "height": 1
    },
    {
        "id": "48c08ef4.26603",
        "type": "ui_spacer",
        "name": "spacer",
        "group": "a4a5657b.ad6998",
        "order": 15,
        "width": 2,
        "height": 1
    },
    {
        "id": "2f5e3be9.8f6b54",
        "type": "ui_spacer",
        "name": "spacer",
        "group": "a4a5657b.ad6998",
        "order": 16,
        "width": 2,
        "height": 1
    },
    {
        "id": "a9e82da.f5697d",
        "type": "ui_spacer",
        "name": "spacer",
        "group": "a4a5657b.ad6998",
        "order": 17,
        "width": 2,
        "height": 1
    },
    {
        "id": "8f38ef56.61501",
        "type": "ui_spacer",
        "name": "spacer",
        "group": "a4a5657b.ad6998",
        "order": 20,
        "width": 2,
        "height": 1
    },
    {
        "id": "6a31addf.c4d394",
        "type": "ui_spacer",
        "name": "spacer",
        "group": "a4a5657b.ad6998",
        "order": 21,
        "width": 2,
        "height": 1
    },
    {
        "id": "b93e86b8.b62ec8",
        "type": "ui_spacer",
        "name": "spacer",
        "group": "a4a5657b.ad6998",
        "order": 23,
        "width": 2,
        "height": 1
    },
    {
        "id": "c5a55bf.9dd48a8",
        "type": "ui_spacer",
        "name": "spacer",
        "group": "49deb1f5.12e01",
        "order": 1,
        "width": 3,
        "height": 1
    },
    {
        "id": "72a34362.f8346c",
        "type": "ui_spacer",
        "name": "spacer",
        "group": "7db0b691.b8aa88",
        "order": 2,
        "width": 1,
        "height": 1
    },
    {
        "id": "fef9a7be.35f718",
        "type": "persist-store",
        "filename": "conf.json",
        "interval": "3"
    },
    {
        "id": "793c0106.f5d84",
        "type": "serial in",
        "z": "772b4e64.18e6e",
        "d": true,
        "name": "",
        "serial": "bc402e29.82aae",
        "x": 90,
        "y": 380,
        "wires": [
            [
                "dbf643f6.8ba",
                "c955f148.352cb"
            ]
        ]
    },
    {
        "id": "2bbb4ab1.8c3416",
        "type": "switch",
        "z": "772b4e64.18e6e",
        "name": "",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "cont",
                "v": "a.",
                "vt": "str"
            },
            {
                "t": "cont",
                "v": "b.",
                "vt": "str"
            },
            {
                "t": "cont",
                "v": "c.",
                "vt": "str"
            },
            {
                "t": "cont",
                "v": "d.",
                "vt": "str"
            },
            {
                "t": "cont",
                "v": "e.",
                "vt": "str"
            },
            {
                "t": "cont",
                "v": "f.",
                "vt": "str"
            },
            {
                "t": "cont",
                "v": "g.",
                "vt": "str"
            },
            {
                "t": "cont",
                "v": "h.",
                "vt": "str"
            },
            {
                "t": "cont",
                "v": "i.",
                "vt": "str"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 9,
        "x": 870,
        "y": 260,
        "wires": [
            [
                "691dbee2.8ba5a"
            ],
            [
                "6c99a29b.22ce6c"
            ],
            [
                "9e0d1ca2.29a28"
            ],
            [
                "aa4f92b2.0c5c3"
            ],
            [
                "f7678041.78cfa"
            ],
            [
                "52929fb1.77dda"
            ],
            [
                "fdc7bab0.682798"
            ],
            [
                "27e3ef12.45571"
            ],
            [
                "486f8032.e9df4"
            ]
        ],
        "outputLabels": [
            "sensor 1,a",
            "sensor 2,b",
            "sensor 3,c",
            "sensor 4,d",
            "sensor 5,e",
            "sensor 6,f",
            "sensor 7,g",
            "sensor 8,h",
            "sensor 9,i"
        ]
    },
    {
        "id": "76d77b12.d85874",
        "type": "range",
        "z": "772b4e64.18e6e",
        "minin": "0",
        "maxin": "500",
        "minout": "0",
        "maxout": "255",
        "action": "scale",
        "round": true,
        "property": "payload",
        "name": "G value",
        "x": 1400,
        "y": 100,
        "wires": [
            [
                "e4c888ef.9ac1c8"
            ]
        ]
    },
    {
        "id": "159e6cf.0807693",
        "type": "range",
        "z": "772b4e64.18e6e",
        "minin": "0",
        "maxin": "500",
        "minout": "255",
        "maxout": "0",
        "action": "scale",
        "round": true,
        "property": "payload",
        "name": "R value",
        "x": 1400,
        "y": 140,
        "wires": [
            [
                "6914a374.3ac90c"
            ]
        ]
    },
    {
        "id": "e4c888ef.9ac1c8",
        "type": "change",
        "z": "772b4e64.18e6e",
        "name": "",
        "rules": [
            {
                "t": "move",
                "p": "payload",
                "pt": "msg",
                "to": "g_value_1",
                "tot": "flow"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1610,
        "y": 100,
        "wires": [
            [
                "c98d586a.69a248"
            ]
        ]
    },
    {
        "id": "c98d586a.69a248",
        "type": "template",
        "z": "772b4e64.18e6e",
        "name": "",
        "field": "payload",
        "fieldType": "msg",
        "format": "handlebars",
        "syntax": "mustache",
        "template": "rgb({{flow.r_value_1}},{{flow.g_value_1}},0)",
        "output": "str",
        "x": 1820,
        "y": 140,
        "wires": [
            [
                "28efe1d.f11891e"
            ]
        ]
    },
    {
        "id": "6914a374.3ac90c",
        "type": "change",
        "z": "772b4e64.18e6e",
        "name": "",
        "rules": [
            {
                "t": "move",
                "p": "payload",
                "pt": "msg",
                "to": "r_value_1",
                "tot": "flow"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1610,
        "y": 140,
        "wires": [
            [
                "c98d586a.69a248"
            ]
        ]
    },
    {
        "id": "28efe1d.f11891e",
        "type": "change",
        "z": "772b4e64.18e6e",
        "name": "",
        "rules": [
            {
                "t": "move",
                "p": "payload",
                "pt": "msg",
                "to": "background",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 2010,
        "y": 140,
        "wires": [
            [
                "f6d796c3.7cc288"
            ]
        ]
    },
    {
        "id": "a6c9cc94.8468d",
        "type": "range",
        "z": "772b4e64.18e6e",
        "minin": "0",
        "maxin": "500",
        "minout": "0",
        "maxout": "255",
        "action": "scale",
        "round": true,
        "property": "payload",
        "name": "G value",
        "x": 1400,
        "y": 220,
        "wires": [
            [
                "efa235ac.d18c48"
            ]
        ]
    },
    {
        "id": "9f0b72ba.2ba9c",
        "type": "range",
        "z": "772b4e64.18e6e",
        "minin": "0",
        "maxin": "500",
        "minout": "255",
        "maxout": "0",
        "action": "scale",
        "round": true,
        "property": "payload",
        "name": "R value",
        "x": 1400,
        "y": 260,
        "wires": [
            [
                "3b08bdca.7f1142"
            ]
        ]
    },
    {
        "id": "efa235ac.d18c48",
        "type": "change",
        "z": "772b4e64.18e6e",
        "name": "",
        "rules": [
            {
                "t": "move",
                "p": "payload",
                "pt": "msg",
                "to": "g_value_2",
                "tot": "flow"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1610,
        "y": 220,
        "wires": [
            [
                "3077ea82.8cb406"
            ]
        ]
    },
    {
        "id": "3077ea82.8cb406",
        "type": "template",
        "z": "772b4e64.18e6e",
        "name": "",
        "field": "payload",
        "fieldType": "msg",
        "format": "handlebars",
        "syntax": "mustache",
        "template": "rgb({{flow.r_value_2}},{{flow.g_value_2}},0)",
        "output": "str",
        "x": 1820,
        "y": 260,
        "wires": [
            [
                "fa2fa3e2.a7b29"
            ]
        ]
    },
    {
        "id": "3b08bdca.7f1142",
        "type": "change",
        "z": "772b4e64.18e6e",
        "name": "",
        "rules": [
            {
                "t": "move",
                "p": "payload",
                "pt": "msg",
                "to": "r_value_2",
                "tot": "flow"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1610,
        "y": 260,
        "wires": [
            [
                "3077ea82.8cb406"
            ]
        ]
    },
    {
        "id": "fa2fa3e2.a7b29",
        "type": "change",
        "z": "772b4e64.18e6e",
        "name": "",
        "rules": [
            {
                "t": "move",
                "p": "payload",
                "pt": "msg",
                "to": "background",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 2010,
        "y": 260,
        "wires": [
            [
                "a8e6a66.7e16558"
            ]
        ]
    },
    {
        "id": "76b6ad35.3577c4",
        "type": "range",
        "z": "772b4e64.18e6e",
        "minin": "0",
        "maxin": "500",
        "minout": "0",
        "maxout": "255",
        "action": "scale",
        "round": true,
        "property": "payload",
        "name": "G value",
        "x": 1400,
        "y": 340,
        "wires": [
            [
                "6c0be974.7191b8"
            ]
        ]
    },
    {
        "id": "a353e04f.ffc78",
        "type": "range",
        "z": "772b4e64.18e6e",
        "minin": "0",
        "maxin": "500",
        "minout": "255",
        "maxout": "0",
        "action": "scale",
        "round": true,
        "property": "payload",
        "name": "R value",
        "x": 1400,
        "y": 380,
        "wires": [
            [
                "5b5b31e6.72a1a"
            ]
        ]
    },
    {
        "id": "6c0be974.7191b8",
        "type": "change",
        "z": "772b4e64.18e6e",
        "name": "",
        "rules": [
            {
                "t": "move",
                "p": "payload",
                "pt": "msg",
                "to": "g_value_3",
                "tot": "flow"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1610,
        "y": 340,
        "wires": [
            [
                "c5b67216.1682c"
            ]
        ]
    },
    {
        "id": "c5b67216.1682c",
        "type": "template",
        "z": "772b4e64.18e6e",
        "name": "",
        "field": "payload",
        "fieldType": "msg",
        "format": "handlebars",
        "syntax": "mustache",
        "template": "rgb({{flow.r_value_3}},{{flow.g_value_3}},0)",
        "output": "str",
        "x": 1820,
        "y": 380,
        "wires": [
            [
                "b9d1ec4e.bfefc"
            ]
        ]
    },
    {
        "id": "5b5b31e6.72a1a",
        "type": "change",
        "z": "772b4e64.18e6e",
        "name": "",
        "rules": [
            {
                "t": "move",
                "p": "payload",
                "pt": "msg",
                "to": "r_value_3",
                "tot": "flow"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1610,
        "y": 380,
        "wires": [
            [
                "c5b67216.1682c"
            ]
        ]
    },
    {
        "id": "b9d1ec4e.bfefc",
        "type": "change",
        "z": "772b4e64.18e6e",
        "name": "",
        "rules": [
            {
                "t": "move",
                "p": "payload",
                "pt": "msg",
                "to": "background",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 2010,
        "y": 380,
        "wires": [
            [
                "fce183d6.20d76"
            ]
        ]
    },
    {
        "id": "d7bce8c7.8a05b8",
        "type": "range",
        "z": "772b4e64.18e6e",
        "minin": "0",
        "maxin": "500",
        "minout": "0",
        "maxout": "255",
        "action": "scale",
        "round": true,
        "property": "payload",
        "name": "G value",
        "x": 1400,
        "y": 460,
        "wires": [
            [
                "88aae6e.6e0d218"
            ]
        ]
    },
    {
        "id": "e98d1267.eec3e",
        "type": "range",
        "z": "772b4e64.18e6e",
        "minin": "0",
        "maxin": "500",
        "minout": "255",
        "maxout": "0",
        "action": "scale",
        "round": true,
        "property": "payload",
        "name": "R value",
        "x": 1400,
        "y": 500,
        "wires": [
            [
                "6d415d02.7ff9a4"
            ]
        ]
    },
    {
        "id": "88aae6e.6e0d218",
        "type": "change",
        "z": "772b4e64.18e6e",
        "name": "",
        "rules": [
            {
                "t": "move",
                "p": "payload",
                "pt": "msg",
                "to": "g_value_4",
                "tot": "flow"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1610,
        "y": 460,
        "wires": [
            [
                "e53d1808.906be8"
            ]
        ]
    },
    {
        "id": "e53d1808.906be8",
        "type": "template",
        "z": "772b4e64.18e6e",
        "name": "",
        "field": "payload",
        "fieldType": "msg",
        "format": "handlebars",
        "syntax": "mustache",
        "template": "rgb({{flow.r_value_4}},{{flow.g_value_4}},0)",
        "output": "str",
        "x": 1820,
        "y": 500,
        "wires": [
            [
                "d5a3e8bb.ea2f38"
            ]
        ]
    },
    {
        "id": "6d415d02.7ff9a4",
        "type": "change",
        "z": "772b4e64.18e6e",
        "name": "",
        "rules": [
            {
                "t": "move",
                "p": "payload",
                "pt": "msg",
                "to": "r_value_4",
                "tot": "flow"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1610,
        "y": 500,
        "wires": [
            [
                "e53d1808.906be8"
            ]
        ]
    },
    {
        "id": "d5a3e8bb.ea2f38",
        "type": "change",
        "z": "772b4e64.18e6e",
        "name": "",
        "rules": [
            {
                "t": "move",
                "p": "payload",
                "pt": "msg",
                "to": "background",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 2010,
        "y": 500,
        "wires": [
            [
                "f184020f.e59d6"
            ]
        ]
    },
    {
        "id": "b91830c3.4d3e8",
        "type": "range",
        "z": "772b4e64.18e6e",
        "minin": "0",
        "maxin": "500",
        "minout": "0",
        "maxout": "255",
        "action": "scale",
        "round": true,
        "property": "payload",
        "name": "G value",
        "x": 1400,
        "y": 580,
        "wires": [
            [
                "f784e610.4640e8"
            ]
        ]
    },
    {
        "id": "46824be5.fefa94",
        "type": "range",
        "z": "772b4e64.18e6e",
        "minin": "0",
        "maxin": "500",
        "minout": "255",
        "maxout": "0",
        "action": "scale",
        "round": true,
        "property": "payload",
        "name": "R value",
        "x": 1400,
        "y": 620,
        "wires": [
            [
                "6243f5a2.57960c"
            ]
        ]
    },
    {
        "id": "f784e610.4640e8",
        "type": "change",
        "z": "772b4e64.18e6e",
        "name": "",
        "rules": [
            {
                "t": "move",
                "p": "payload",
                "pt": "msg",
                "to": "g_value_5",
                "tot": "flow"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1610,
        "y": 580,
        "wires": [
            [
                "451ba7e8.f58998"
            ]
        ]
    },
    {
        "id": "451ba7e8.f58998",
        "type": "template",
        "z": "772b4e64.18e6e",
        "name": "",
        "field": "payload",
        "fieldType": "msg",
        "format": "handlebars",
        "syntax": "mustache",
        "template": "rgb({{flow.r_value_5}},{{flow.g_value_5}},0)",
        "output": "str",
        "x": 1820,
        "y": 620,
        "wires": [
            [
                "f7e33fa1.7f197"
            ]
        ]
    },
    {
        "id": "6243f5a2.57960c",
        "type": "change",
        "z": "772b4e64.18e6e",
        "name": "",
        "rules": [
            {
                "t": "move",
                "p": "payload",
                "pt": "msg",
                "to": "r_value_5",
                "tot": "flow"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1610,
        "y": 620,
        "wires": [
            [
                "451ba7e8.f58998"
            ]
        ]
    },
    {
        "id": "f7e33fa1.7f197",
        "type": "change",
        "z": "772b4e64.18e6e",
        "name": "",
        "rules": [
            {
                "t": "move",
                "p": "payload",
                "pt": "msg",
                "to": "background",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 2010,
        "y": 620,
        "wires": [
            [
                "9e9de0a.0ec8d2"
            ]
        ]
    },
    {
        "id": "be6008a8.0a3da8",
        "type": "range",
        "z": "772b4e64.18e6e",
        "minin": "0",
        "maxin": "500",
        "minout": "0",
        "maxout": "255",
        "action": "scale",
        "round": true,
        "property": "payload",
        "name": "G value",
        "x": 1400,
        "y": 700,
        "wires": [
            [
                "337068e1.507238"
            ]
        ]
    },
    {
        "id": "fd51b0b2.b0789",
        "type": "range",
        "z": "772b4e64.18e6e",
        "minin": "0",
        "maxin": "500",
        "minout": "255",
        "maxout": "0",
        "action": "scale",
        "round": true,
        "property": "payload",
        "name": "R value",
        "x": 1400,
        "y": 740,
        "wires": [
            [
                "62724294.56a1cc"
            ]
        ]
    },
    {
        "id": "337068e1.507238",
        "type": "change",
        "z": "772b4e64.18e6e",
        "name": "",
        "rules": [
            {
                "t": "move",
                "p": "payload",
                "pt": "msg",
                "to": "g_value_6",
                "tot": "flow"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1610,
        "y": 700,
        "wires": [
            [
                "18deb5ae.e5370a"
            ]
        ]
    },
    {
        "id": "62724294.56a1cc",
        "type": "change",
        "z": "772b4e64.18e6e",
        "name": "",
        "rules": [
            {
                "t": "move",
                "p": "payload",
                "pt": "msg",
                "to": "r_value_6",
                "tot": "flow"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1610,
        "y": 740,
        "wires": [
            [
                "18deb5ae.e5370a"
            ]
        ]
    },
    {
        "id": "a3f5ee2.1ce9c1",
        "type": "change",
        "z": "772b4e64.18e6e",
        "name": "",
        "rules": [
            {
                "t": "move",
                "p": "payload",
                "pt": "msg",
                "to": "background",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 2010,
        "y": 740,
        "wires": [
            [
                "b8109e81.426cc"
            ]
        ]
    },
    {
        "id": "f57dd729.469d78",
        "type": "range",
        "z": "772b4e64.18e6e",
        "minin": "0",
        "maxin": "500",
        "minout": "0",
        "maxout": "255",
        "action": "scale",
        "round": true,
        "property": "payload",
        "name": "G value",
        "x": 1400,
        "y": 820,
        "wires": [
            [
                "1f1ea6ad.ef97f9"
            ]
        ]
    },
    {
        "id": "bce40e35.f46dc",
        "type": "range",
        "z": "772b4e64.18e6e",
        "minin": "0",
        "maxin": "500",
        "minout": "255",
        "maxout": "0",
        "action": "scale",
        "round": true,
        "property": "payload",
        "name": "R value",
        "x": 1400,
        "y": 860,
        "wires": [
            [
                "1085df8.3cf8e21"
            ]
        ]
    },
    {
        "id": "1f1ea6ad.ef97f9",
        "type": "change",
        "z": "772b4e64.18e6e",
        "name": "",
        "rules": [
            {
                "t": "move",
                "p": "payload",
                "pt": "msg",
                "to": "g_value_7",
                "tot": "flow"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1610,
        "y": 820,
        "wires": [
            [
                "e589868d.017648"
            ]
        ]
    },
    {
        "id": "e589868d.017648",
        "type": "template",
        "z": "772b4e64.18e6e",
        "name": "",
        "field": "payload",
        "fieldType": "msg",
        "format": "handlebars",
        "syntax": "mustache",
        "template": "rgb({{flow.r_value_7}},{{flow.g_value_7}},0)",
        "output": "str",
        "x": 1820,
        "y": 860,
        "wires": [
            [
                "6ae7931d.618cac"
            ]
        ]
    },
    {
        "id": "1085df8.3cf8e21",
        "type": "change",
        "z": "772b4e64.18e6e",
        "name": "",
        "rules": [
            {
                "t": "move",
                "p": "payload",
                "pt": "msg",
                "to": "r_value_7",
                "tot": "flow"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1610,
        "y": 860,
        "wires": [
            [
                "e589868d.017648"
            ]
        ]
    },
    {
        "id": "6ae7931d.618cac",
        "type": "change",
        "z": "772b4e64.18e6e",
        "name": "",
        "rules": [
            {
                "t": "move",
                "p": "payload",
                "pt": "msg",
                "to": "background",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 2010,
        "y": 860,
        "wires": [
            [
                "ef6cfabd.3c58c8"
            ]
        ]
    },
    {
        "id": "a4010501.7d6b08",
        "type": "range",
        "z": "772b4e64.18e6e",
        "minin": "0",
        "maxin": "500",
        "minout": "0",
        "maxout": "255",
        "action": "scale",
        "round": true,
        "property": "payload",
        "name": "G value",
        "x": 1400,
        "y": 940,
        "wires": [
            [
                "2867b559.270c0a"
            ]
        ]
    },
    {
        "id": "20414b95.4bd244",
        "type": "range",
        "z": "772b4e64.18e6e",
        "minin": "0",
        "maxin": "500",
        "minout": "255",
        "maxout": "0",
        "action": "scale",
        "round": true,
        "property": "payload",
        "name": "R value",
        "x": 1400,
        "y": 980,
        "wires": [
            [
                "a5c60e0d.cc818"
            ]
        ]
    },
    {
        "id": "2867b559.270c0a",
        "type": "change",
        "z": "772b4e64.18e6e",
        "name": "",
        "rules": [
            {
                "t": "move",
                "p": "payload",
                "pt": "msg",
                "to": "g_value_8",
                "tot": "flow"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1610,
        "y": 940,
        "wires": [
            [
                "8b18c906.f14ed8"
            ]
        ]
    },
    {
        "id": "8b18c906.f14ed8",
        "type": "template",
        "z": "772b4e64.18e6e",
        "name": "",
        "field": "payload",
        "fieldType": "msg",
        "format": "handlebars",
        "syntax": "mustache",
        "template": "rgb({{flow.r_value_8}},{{flow.g_value_8}},0)",
        "output": "str",
        "x": 1820,
        "y": 980,
        "wires": [
            [
                "44e792d5.2d9d9c"
            ]
        ]
    },
    {
        "id": "a5c60e0d.cc818",
        "type": "change",
        "z": "772b4e64.18e6e",
        "name": "",
        "rules": [
            {
                "t": "move",
                "p": "payload",
                "pt": "msg",
                "to": "r_value_8",
                "tot": "flow"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1610,
        "y": 980,
        "wires": [
            [
                "8b18c906.f14ed8"
            ]
        ]
    },
    {
        "id": "44e792d5.2d9d9c",
        "type": "change",
        "z": "772b4e64.18e6e",
        "name": "",
        "rules": [
            {
                "t": "move",
                "p": "payload",
                "pt": "msg",
                "to": "background",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 2010,
        "y": 980,
        "wires": [
            [
                "f7c62b0.f0ddad8"
            ]
        ]
    },
    {
        "id": "3264844a.8084dc",
        "type": "range",
        "z": "772b4e64.18e6e",
        "minin": "0",
        "maxin": "500",
        "minout": "0",
        "maxout": "255",
        "action": "scale",
        "round": true,
        "property": "payload",
        "name": "G value",
        "x": 1400,
        "y": 1060,
        "wires": [
            [
                "da188207.1d9b2"
            ]
        ]
    },
    {
        "id": "eb07b316.87d4a",
        "type": "range",
        "z": "772b4e64.18e6e",
        "minin": "0",
        "maxin": "500",
        "minout": "255",
        "maxout": "0",
        "action": "scale",
        "round": true,
        "property": "payload",
        "name": "R value",
        "x": 1400,
        "y": 1100,
        "wires": [
            [
                "3661c9cf.c22c96"
            ]
        ]
    },
    {
        "id": "da188207.1d9b2",
        "type": "change",
        "z": "772b4e64.18e6e",
        "name": "",
        "rules": [
            {
                "t": "move",
                "p": "payload",
                "pt": "msg",
                "to": "g_value_9",
                "tot": "flow"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1610,
        "y": 1060,
        "wires": [
            [
                "b056475.29964b8"
            ]
        ]
    },
    {
        "id": "b056475.29964b8",
        "type": "template",
        "z": "772b4e64.18e6e",
        "name": "",
        "field": "payload",
        "fieldType": "msg",
        "format": "handlebars",
        "syntax": "mustache",
        "template": "rgb({{flow.r_value_9}},{{flow.g_value_9}},0)",
        "output": "str",
        "x": 1820,
        "y": 1100,
        "wires": [
            [
                "f47e0192.40e72"
            ]
        ]
    },
    {
        "id": "3661c9cf.c22c96",
        "type": "change",
        "z": "772b4e64.18e6e",
        "name": "",
        "rules": [
            {
                "t": "move",
                "p": "payload",
                "pt": "msg",
                "to": "r_value_9",
                "tot": "flow"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1610,
        "y": 1100,
        "wires": [
            [
                "b056475.29964b8"
            ]
        ]
    },
    {
        "id": "f47e0192.40e72",
        "type": "change",
        "z": "772b4e64.18e6e",
        "name": "",
        "rules": [
            {
                "t": "move",
                "p": "payload",
                "pt": "msg",
                "to": "background",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 2010,
        "y": 1100,
        "wires": [
            [
                "ef762a1e.de0e08"
            ]
        ]
    },
    {
        "id": "18deb5ae.e5370a",
        "type": "template",
        "z": "772b4e64.18e6e",
        "name": "",
        "field": "payload",
        "fieldType": "msg",
        "format": "handlebars",
        "syntax": "mustache",
        "template": "rgb({{flow.r_value_6}},{{flow.g_value_6}},0)",
        "output": "str",
        "x": 1820,
        "y": 740,
        "wires": [
            [
                "a3f5ee2.1ce9c1"
            ]
        ]
    },
    {
        "id": "db7b1a3d.3a2868",
        "type": "comment",
        "z": "772b4e64.18e6e",
        "name": "sensor 1",
        "info": "",
        "x": 1180,
        "y": 80,
        "wires": []
    },
    {
        "id": "1169d83d.4d97a8",
        "type": "comment",
        "z": "772b4e64.18e6e",
        "name": "sensor 2",
        "info": "",
        "x": 1400,
        "y": 180,
        "wires": []
    },
    {
        "id": "65c26d66.785f54",
        "type": "comment",
        "z": "772b4e64.18e6e",
        "name": "sensor 3",
        "info": "",
        "x": 1400,
        "y": 300,
        "wires": []
    },
    {
        "id": "30772f28.b343d",
        "type": "comment",
        "z": "772b4e64.18e6e",
        "name": "sensor 4",
        "info": "",
        "x": 1400,
        "y": 420,
        "wires": []
    },
    {
        "id": "cc4f6534.27cbd8",
        "type": "comment",
        "z": "772b4e64.18e6e",
        "name": "sensor 5",
        "info": "",
        "x": 1400,
        "y": 540,
        "wires": []
    },
    {
        "id": "c2b8867d.3eabf8",
        "type": "comment",
        "z": "772b4e64.18e6e",
        "name": "sensor 6",
        "info": "",
        "x": 1400,
        "y": 660,
        "wires": []
    },
    {
        "id": "2e674a41.f2f536",
        "type": "comment",
        "z": "772b4e64.18e6e",
        "name": "sensor 7",
        "info": "",
        "x": 1400,
        "y": 780,
        "wires": []
    },
    {
        "id": "692c990c.7d1a08",
        "type": "comment",
        "z": "772b4e64.18e6e",
        "name": "sensor 8",
        "info": "",
        "x": 1400,
        "y": 900,
        "wires": []
    },
    {
        "id": "d7b1f86d.e652d8",
        "type": "comment",
        "z": "772b4e64.18e6e",
        "name": "sensor 9",
        "info": "",
        "x": 1400,
        "y": 1020,
        "wires": []
    },
    {
        "id": "691dbee2.8ba5a",
        "type": "change",
        "z": "772b4e64.18e6e",
        "name": "sensor 1",
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
                "t": "set",
                "p": "sensor_1",
                "pt": "global",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1180,
        "y": 120,
        "wires": [
            [
                "76d77b12.d85874",
                "159e6cf.0807693"
            ]
        ]
    },
    {
        "id": "6c99a29b.22ce6c",
        "type": "change",
        "z": "772b4e64.18e6e",
        "name": "sensor 2",
        "rules": [
            {
                "t": "change",
                "p": "payload",
                "pt": "msg",
                "from": "b.",
                "fromt": "str",
                "to": "",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "sensor_2",
                "pt": "global",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1180,
        "y": 240,
        "wires": [
            [
                "a6c9cc94.8468d",
                "9f0b72ba.2ba9c"
            ]
        ]
    },
    {
        "id": "9e0d1ca2.29a28",
        "type": "change",
        "z": "772b4e64.18e6e",
        "name": "sensor 3",
        "rules": [
            {
                "t": "change",
                "p": "payload",
                "pt": "msg",
                "from": "c.",
                "fromt": "str",
                "to": "",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "sensor_3",
                "pt": "global",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1180,
        "y": 360,
        "wires": [
            [
                "76b6ad35.3577c4",
                "a353e04f.ffc78"
            ]
        ]
    },
    {
        "id": "aa4f92b2.0c5c3",
        "type": "change",
        "z": "772b4e64.18e6e",
        "name": "sensor 4",
        "rules": [
            {
                "t": "change",
                "p": "payload",
                "pt": "msg",
                "from": "d.",
                "fromt": "str",
                "to": "",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "sensor_4",
                "pt": "global",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1180,
        "y": 480,
        "wires": [
            [
                "d7bce8c7.8a05b8",
                "e98d1267.eec3e"
            ]
        ]
    },
    {
        "id": "f7678041.78cfa",
        "type": "change",
        "z": "772b4e64.18e6e",
        "name": "sensor 5",
        "rules": [
            {
                "t": "change",
                "p": "payload",
                "pt": "msg",
                "from": "e.",
                "fromt": "str",
                "to": "",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "sensor_5",
                "pt": "global",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1180,
        "y": 600,
        "wires": [
            [
                "b91830c3.4d3e8",
                "46824be5.fefa94"
            ]
        ]
    },
    {
        "id": "52929fb1.77dda",
        "type": "change",
        "z": "772b4e64.18e6e",
        "name": "sensor 6",
        "rules": [
            {
                "t": "change",
                "p": "payload",
                "pt": "msg",
                "from": "f.",
                "fromt": "str",
                "to": "",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "sensor_6",
                "pt": "global",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1180,
        "y": 720,
        "wires": [
            [
                "be6008a8.0a3da8",
                "fd51b0b2.b0789"
            ]
        ]
    },
    {
        "id": "fdc7bab0.682798",
        "type": "change",
        "z": "772b4e64.18e6e",
        "name": "sensor 7",
        "rules": [
            {
                "t": "change",
                "p": "payload",
                "pt": "msg",
                "from": "g.",
                "fromt": "str",
                "to": "",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "sensor_7",
                "pt": "global",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1180,
        "y": 840,
        "wires": [
            [
                "f57dd729.469d78",
                "bce40e35.f46dc"
            ]
        ]
    },
    {
        "id": "27e3ef12.45571",
        "type": "change",
        "z": "772b4e64.18e6e",
        "name": "sensor 8",
        "rules": [
            {
                "t": "change",
                "p": "payload",
                "pt": "msg",
                "from": "h.",
                "fromt": "str",
                "to": "",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "sensor_8",
                "pt": "global",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1180,
        "y": 960,
        "wires": [
            [
                "a4010501.7d6b08",
                "20414b95.4bd244"
            ]
        ]
    },
    {
        "id": "486f8032.e9df4",
        "type": "change",
        "z": "772b4e64.18e6e",
        "name": "sensor 9",
        "rules": [
            {
                "t": "change",
                "p": "payload",
                "pt": "msg",
                "from": "i.",
                "fromt": "str",
                "to": "",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "sensor_9",
                "pt": "global",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1180,
        "y": 1080,
        "wires": [
            [
                "3264844a.8084dc",
                "eb07b316.87d4a"
            ]
        ]
    },
    {
        "id": "780ba7df.cdcab8",
        "type": "change",
        "z": "772b4e64.18e6e",
        "name": "",
        "rules": [
            {
                "t": "change",
                "p": "payload",
                "pt": "msg",
                "from": "a.",
                "fromt": "str",
                "to": "b.",
                "tot": "str"
            },
            {
                "t": "change",
                "p": "payload",
                "pt": "msg",
                "from": "c.",
                "fromt": "str",
                "to": "d.",
                "tot": "str"
            },
            {
                "t": "change",
                "p": "payload",
                "pt": "msg",
                "from": "e.",
                "fromt": "str",
                "to": "f.",
                "tot": "str"
            },
            {
                "t": "change",
                "p": "payload",
                "pt": "msg",
                "from": "h.",
                "fromt": "str",
                "to": "i.",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 620,
        "y": 420,
        "wires": [
            [
                "2bbb4ab1.8c3416"
            ]
        ]
    },
    {
        "id": "ffc9a5b6.777f38",
        "type": "change",
        "z": "772b4e64.18e6e",
        "name": "",
        "rules": [
            {
                "t": "change",
                "p": "payload",
                "pt": "msg",
                "from": "b.",
                "fromt": "str",
                "to": "a.",
                "tot": "str"
            },
            {
                "t": "change",
                "p": "payload",
                "pt": "msg",
                "from": "d.",
                "fromt": "str",
                "to": "c.",
                "tot": "str"
            },
            {
                "t": "change",
                "p": "payload",
                "pt": "msg",
                "from": "f.",
                "fromt": "str",
                "to": "e.",
                "tot": "str"
            },
            {
                "t": "change",
                "p": "payload",
                "pt": "msg",
                "from": "i.",
                "fromt": "str",
                "to": "h.",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 620,
        "y": 460,
        "wires": [
            [
                "2bbb4ab1.8c3416"
            ]
        ]
    },
    {
        "id": "20089778.b355c8",
        "type": "link in",
        "z": "772b4e64.18e6e",
        "name": "sensors input",
        "links": [
            "14604c5.63664b4",
            "2a6a1d2d.cf9e12",
            "11272f39.b866e1",
            "1bbe8653.cc2ada",
            "ac5e3224.5d66b",
            "cf36ba8a.930c68",
            "96be2821.e90748",
            "4d3c254e.1e576c",
            "e270db02.487ef8"
        ],
        "x": 175,
        "y": 560,
        "wires": [
            [
                "c955f148.352cb",
                "dbf643f6.8ba"
            ]
        ]
    },
    {
        "id": "2a6a1d2d.cf9e12",
        "type": "link out",
        "z": "e6bd1a7b.e18128",
        "name": "",
        "links": [
            "20089778.b355c8",
            "491344a2.8d453c"
        ],
        "x": 375,
        "y": 360,
        "wires": []
    },
    {
        "id": "e802718.821529",
        "type": "inject",
        "z": "e6bd1a7b.e18128",
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
        "payload": "a.10",
        "payloadType": "str",
        "x": 190,
        "y": 360,
        "wires": [
            [
                "2a6a1d2d.cf9e12"
            ]
        ]
    },
    {
        "id": "e201f932.afe2d8",
        "type": "inject",
        "z": "e6bd1a7b.e18128",
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
        "payload": "b.450",
        "payloadType": "str",
        "x": 190,
        "y": 400,
        "wires": [
            [
                "2a6a1d2d.cf9e12"
            ]
        ]
    },
    {
        "id": "3b5f2375.c6da7c",
        "type": "inject",
        "z": "e6bd1a7b.e18128",
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
        "payload": "c.100",
        "payloadType": "str",
        "x": 190,
        "y": 440,
        "wires": [
            [
                "2a6a1d2d.cf9e12"
            ]
        ]
    },
    {
        "id": "bb05b4.caab9a5",
        "type": "inject",
        "z": "e6bd1a7b.e18128",
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
        "payload": "d.150",
        "payloadType": "str",
        "x": 190,
        "y": 480,
        "wires": [
            [
                "2a6a1d2d.cf9e12"
            ]
        ]
    },
    {
        "id": "a637b93c.00cc58",
        "type": "inject",
        "z": "e6bd1a7b.e18128",
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
        "payload": "e.200",
        "payloadType": "str",
        "x": 190,
        "y": 520,
        "wires": [
            [
                "2a6a1d2d.cf9e12"
            ]
        ]
    },
    {
        "id": "9976d080.5b086",
        "type": "inject",
        "z": "e6bd1a7b.e18128",
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
        "payload": "f.250",
        "payloadType": "str",
        "x": 190,
        "y": 560,
        "wires": [
            [
                "2a6a1d2d.cf9e12"
            ]
        ]
    },
    {
        "id": "c4cea1f7.5adfc",
        "type": "inject",
        "z": "e6bd1a7b.e18128",
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
        "payload": "g.300",
        "payloadType": "str",
        "x": 190,
        "y": 600,
        "wires": [
            [
                "2a6a1d2d.cf9e12"
            ]
        ]
    },
    {
        "id": "182f3a8c.169c95",
        "type": "inject",
        "z": "e6bd1a7b.e18128",
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
        "payload": "h.350",
        "payloadType": "str",
        "x": 190,
        "y": 640,
        "wires": [
            [
                "2a6a1d2d.cf9e12"
            ]
        ]
    },
    {
        "id": "a1c05efb.1f0fe",
        "type": "inject",
        "z": "e6bd1a7b.e18128",
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
        "payload": "i.400",
        "payloadType": "str",
        "x": 190,
        "y": 680,
        "wires": [
            [
                "2a6a1d2d.cf9e12"
            ]
        ]
    },
    {
        "id": "b687f285.31795",
        "type": "link out",
        "z": "772b4e64.18e6e",
        "name": "",
        "links": [
            "491344a2.8d453c",
            "14323014.f36b8"
        ],
        "x": 565,
        "y": 360,
        "wires": []
    },
    {
        "id": "b66416e4.9e3488",
        "type": "switch",
        "z": "dc7f38ca.1f1628",
        "name": "",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "cont",
                "v": "a.",
                "vt": "str"
            },
            {
                "t": "cont",
                "v": "b.",
                "vt": "str"
            },
            {
                "t": "cont",
                "v": "c.",
                "vt": "str"
            },
            {
                "t": "cont",
                "v": "d.",
                "vt": "str"
            },
            {
                "t": "cont",
                "v": "e.",
                "vt": "str"
            },
            {
                "t": "cont",
                "v": "f.",
                "vt": "str"
            },
            {
                "t": "cont",
                "v": "g.",
                "vt": "str"
            },
            {
                "t": "cont",
                "v": "h.",
                "vt": "str"
            },
            {
                "t": "cont",
                "v": "i.",
                "vt": "str"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 9,
        "x": 290,
        "y": 220,
        "wires": [
            [
                "cc9057d2.900d98"
            ],
            [
                "1efff684.4c27e9"
            ],
            [
                "220833e1.adeecc"
            ],
            [
                "aa5e712d.a8f6"
            ],
            [
                "a391ea57.ec4748"
            ],
            [
                "9ba68925.368698"
            ],
            [
                "c950c7e3.062088"
            ],
            [
                "1ac27291.4d67bd"
            ],
            [
                "d2f09002.f1a8e"
            ]
        ],
        "outputLabels": [
            "sensor 1,a",
            "sensor 2,b",
            "sensor 3,c",
            "sensor 4,d",
            "sensor 5,e",
            "sensor 6,f",
            "sensor 7,g",
            "sensor 8,h",
            "sensor 9,i"
        ]
    },
    {
        "id": "cc9057d2.900d98",
        "type": "change",
        "z": "dc7f38ca.1f1628",
        "name": "sensor 1",
        "rules": [
            {
                "t": "change",
                "p": "payload",
                "pt": "msg",
                "from": "a.",
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
        "x": 520,
        "y": 80,
        "wires": [
            [
                "332fc34a.2a909c"
            ]
        ]
    },
    {
        "id": "1efff684.4c27e9",
        "type": "change",
        "z": "dc7f38ca.1f1628",
        "name": "sensor 2",
        "rules": [
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
        "x": 520,
        "y": 120,
        "wires": [
            [
                "332fc34a.2a909c"
            ]
        ]
    },
    {
        "id": "220833e1.adeecc",
        "type": "change",
        "z": "dc7f38ca.1f1628",
        "name": "sensor 3",
        "rules": [
            {
                "t": "change",
                "p": "payload",
                "pt": "msg",
                "from": "c.",
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
        "x": 520,
        "y": 160,
        "wires": [
            [
                "332fc34a.2a909c"
            ]
        ]
    },
    {
        "id": "aa5e712d.a8f6",
        "type": "change",
        "z": "dc7f38ca.1f1628",
        "name": "sensor 4",
        "rules": [
            {
                "t": "change",
                "p": "payload",
                "pt": "msg",
                "from": "d.",
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
        "x": 520,
        "y": 200,
        "wires": [
            [
                "332fc34a.2a909c"
            ]
        ]
    },
    {
        "id": "a391ea57.ec4748",
        "type": "change",
        "z": "dc7f38ca.1f1628",
        "name": "sensor 5",
        "rules": [
            {
                "t": "change",
                "p": "payload",
                "pt": "msg",
                "from": "e.",
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
        "x": 520,
        "y": 240,
        "wires": [
            [
                "332fc34a.2a909c"
            ]
        ]
    },
    {
        "id": "9ba68925.368698",
        "type": "change",
        "z": "dc7f38ca.1f1628",
        "name": "sensor 6",
        "rules": [
            {
                "t": "change",
                "p": "payload",
                "pt": "msg",
                "from": "f.",
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
        "x": 520,
        "y": 280,
        "wires": [
            [
                "332fc34a.2a909c"
            ]
        ]
    },
    {
        "id": "c950c7e3.062088",
        "type": "change",
        "z": "dc7f38ca.1f1628",
        "name": "sensor 7",
        "rules": [
            {
                "t": "change",
                "p": "payload",
                "pt": "msg",
                "from": "g.",
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
        "x": 520,
        "y": 320,
        "wires": [
            [
                "332fc34a.2a909c"
            ]
        ]
    },
    {
        "id": "1ac27291.4d67bd",
        "type": "change",
        "z": "dc7f38ca.1f1628",
        "name": "sensor 8",
        "rules": [
            {
                "t": "change",
                "p": "payload",
                "pt": "msg",
                "from": "h.",
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
        "x": 520,
        "y": 360,
        "wires": [
            [
                "332fc34a.2a909c"
            ]
        ]
    },
    {
        "id": "d2f09002.f1a8e",
        "type": "change",
        "z": "dc7f38ca.1f1628",
        "name": "sensor 9",
        "rules": [
            {
                "t": "change",
                "p": "payload",
                "pt": "msg",
                "from": "i.",
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
        "x": 520,
        "y": 400,
        "wires": [
            [
                "332fc34a.2a909c"
            ]
        ]
    },
    {
        "id": "332fc34a.2a909c",
        "type": "join",
        "z": "dc7f38ca.1f1628",
        "name": "",
        "mode": "custom",
        "build": "array",
        "property": "payload",
        "propertyType": "msg",
        "key": "topic",
        "joiner": "\\n",
        "joinerType": "str",
        "accumulate": false,
        "timeout": "",
        "count": "9",
        "reduceRight": false,
        "reduceExp": "",
        "reduceInit": "",
        "reduceInitType": "",
        "reduceFixup": "",
        "x": 810,
        "y": 240,
        "wires": [
            [
                "46d3275.7ab72d8",
                "333a0831.528298"
            ]
        ]
    },
    {
        "id": "14323014.f36b8",
        "type": "link in",
        "z": "dc7f38ca.1f1628",
        "name": "",
        "links": [
            "b687f285.31795"
        ],
        "x": 175,
        "y": 220,
        "wires": [
            [
                "b66416e4.9e3488"
            ]
        ]
    },
    {
        "id": "d94fff7a.517ba",
        "type": "debug",
        "z": "dc7f38ca.1f1628",
        "name": "",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "jsonata",
        "statusVal": "",
        "statusType": "auto",
        "x": 1160,
        "y": 260,
        "wires": []
    },
    {
        "id": "86a8cf72.f6d03",
        "type": "inject",
        "z": "e6bd1a7b.e18128",
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
        "payload": "g.0",
        "payloadType": "str",
        "x": 350,
        "y": 600,
        "wires": [
            [
                "2a6a1d2d.cf9e12"
            ]
        ]
    },
    {
        "id": "35be3bd2.e0a234",
        "type": "link in",
        "z": "772b4e64.18e6e",
        "name": "led indicator",
        "links": [
            "21ad533d.4ddcfc"
        ],
        "x": 165,
        "y": 720,
        "wires": [
            [
                "22cf8ee8.8b2802"
            ]
        ]
    },
    {
        "id": "333a0831.528298",
        "type": "debug",
        "z": "dc7f38ca.1f1628",
        "name": "",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 1040,
        "y": 360,
        "wires": []
    },
    {
        "id": "3dd38ac5.919ba6",
        "type": "function",
        "z": "772b4e64.18e6e",
        "name": "[s] to [hh:mm:ss]",
        "func": "// Message from preceeding node is in seconds - should be less than 24 hours (86400 seconds).\nvar time = (new Date(msg.payload * 1000)).toUTCString().match(/(\\d\\d:\\d\\d:\\d\\d)/)[0];\n// Pass on the string to the next node, what ever that may be. (groov Data Store for example).\nmsg.payload = time;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 320,
        "y": 960,
        "wires": [
            [
                "e3407524.0c5c08"
            ]
        ]
    },
    {
        "id": "10ff4972.6bf057",
        "type": "function",
        "z": "772b4e64.18e6e",
        "name": "[s] to [hh:mm:ss]",
        "func": "// Message from preceeding node is in seconds - should be less than 24 hours (86400 seconds).\nvar time = (new Date(msg.payload * 1000)).toUTCString().match(/(\\d\\d:\\d\\d:\\d\\d)/)[0];\n// Pass on the string to the next node, what ever that may be. (groov Data Store for example).\nmsg.payload = time;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 320,
        "y": 1020,
        "wires": [
            [
                "d7ffc29.680874"
            ]
        ]
    },
    {
        "id": "4f97a66b.8c6e98",
        "type": "range",
        "z": "af13bad2.757ad8",
        "minin": "0",
        "maxin": "90",
        "minout": "0",
        "maxout": "5400",
        "action": "scale",
        "round": true,
        "property": "payload",
        "name": "",
        "x": 1340,
        "y": 760,
        "wires": [
            [
                "5b3f90ca.1dff7",
                "2288ada.041d952"
            ]
        ]
    },
    {
        "id": "de3a9912.998a78",
        "type": "range",
        "z": "af13bad2.757ad8",
        "minin": "0",
        "maxin": "90",
        "minout": "0",
        "maxout": "900",
        "action": "scale",
        "round": false,
        "property": "payload",
        "name": "",
        "x": 1340,
        "y": 820,
        "wires": [
            [
                "2cc38880.b603c8",
                "2288ada.041d952"
            ]
        ]
    },
    {
        "id": "5b3f90ca.1dff7",
        "type": "change",
        "z": "af13bad2.757ad8",
        "name": "",
        "rules": [
            {
                "t": "move",
                "p": "payload",
                "pt": "msg",
                "to": "timer30settings",
                "tot": "global"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1530,
        "y": 760,
        "wires": [
            [
                "f900f509.e7d088"
            ]
        ]
    },
    {
        "id": "2cc38880.b603c8",
        "type": "change",
        "z": "af13bad2.757ad8",
        "name": "",
        "rules": [
            {
                "t": "move",
                "p": "payload",
                "pt": "msg",
                "to": "timer5settings",
                "tot": "global"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1530,
        "y": 820,
        "wires": [
            [
                "dcbb2813.13c448"
            ]
        ]
    },
    {
        "id": "f900f509.e7d088",
        "type": "link out",
        "z": "af13bad2.757ad8",
        "name": "",
        "links": [
            "f24f38bd.3b58d8",
            "e801eb04.be9fb8",
            "54bff081.d9e48",
            "9381314d.dab63"
        ],
        "x": 1675,
        "y": 760,
        "wires": []
    },
    {
        "id": "dcbb2813.13c448",
        "type": "link out",
        "z": "af13bad2.757ad8",
        "name": "",
        "links": [
            "8688dada.8ecc38",
            "551a61b.85ceaa",
            "fb864280.267e7",
            "c64f6043.60d79"
        ],
        "x": 1675,
        "y": 820,
        "wires": []
    },
    {
        "id": "e3407524.0c5c08",
        "type": "change",
        "z": "772b4e64.18e6e",
        "name": "",
        "rules": [
            {
                "t": "change",
                "p": "payload",
                "pt": "msg",
                "from": "23:59:59",
                "fromt": "str",
                "to": "00:00:00",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 540,
        "y": 960,
        "wires": [
            [
                "895ce5fb.28ce78"
            ]
        ]
    },
    {
        "id": "d7ffc29.680874",
        "type": "change",
        "z": "772b4e64.18e6e",
        "name": "",
        "rules": [
            {
                "t": "change",
                "p": "payload",
                "pt": "msg",
                "from": "23:59:59",
                "fromt": "str",
                "to": "00:00:00",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 540,
        "y": 1020,
        "wires": [
            [
                "7241ddc8.4ff374"
            ]
        ]
    },
    {
        "id": "bd4aa230.c7a14",
        "type": "ui_switch",
        "z": "772b4e64.18e6e",
        "name": "",
        "label": "pogled",
        "tooltip": "",
        "group": "8d305fa8.31707",
        "order": 2,
        "width": 0,
        "height": 0,
        "passthru": true,
        "decouple": "false",
        "topic": "control",
        "style": "",
        "onvalue": "toggle",
        "onvalueType": "str",
        "onicon": "",
        "oncolor": "",
        "offvalue": "toggle",
        "offvalueType": "str",
        "officon": "",
        "offcolor": "",
        "x": 110,
        "y": 320,
        "wires": [
            [
                "c955f148.352cb",
                "dbf643f6.8ba"
            ]
        ]
    },
    {
        "id": "febb07.0de8b4f8",
        "type": "ui_switch",
        "z": "af13bad2.757ad8",
        "name": "",
        "label": "light mode",
        "tooltip": "",
        "group": "8d305fa8.31707",
        "order": 3,
        "width": 0,
        "height": 0,
        "passthru": true,
        "decouple": "false",
        "topic": "",
        "style": "",
        "onvalue": "chair_white.png",
        "onvalueType": "str",
        "onicon": "",
        "oncolor": "",
        "offvalue": "chair_dark.png",
        "offvalueType": "str",
        "officon": "",
        "offcolor": "",
        "x": 290,
        "y": 260,
        "wires": [
            [
                "15008359.1075bd"
            ]
        ]
    },
    {
        "id": "5bd13785.e19178",
        "type": "ui_button",
        "z": "772b4e64.18e6e",
        "name": "",
        "group": "a4a5657b.ad6998",
        "order": 8,
        "width": 1,
        "height": 1,
        "passthru": false,
        "label": "1",
        "tooltip": "",
        "color": "",
        "bgcolor": "{{background}}",
        "icon": "",
        "payload": "",
        "payloadType": "str",
        "topic": "",
        "x": 2390,
        "y": 140,
        "wires": [
            []
        ]
    },
    {
        "id": "f2348297.312d5",
        "type": "ui_button",
        "z": "772b4e64.18e6e",
        "name": "",
        "group": "a4a5657b.ad6998",
        "order": 9,
        "width": 1,
        "height": 1,
        "passthru": false,
        "label": "2",
        "tooltip": "",
        "color": "",
        "bgcolor": "{{background}}",
        "icon": "",
        "payload": "",
        "payloadType": "str",
        "topic": "",
        "x": 2390,
        "y": 260,
        "wires": [
            []
        ]
    },
    {
        "id": "dddbfdf.a0487",
        "type": "ui_button",
        "z": "772b4e64.18e6e",
        "name": "",
        "group": "a4a5657b.ad6998",
        "order": 13,
        "width": 1,
        "height": 1,
        "passthru": false,
        "label": "3",
        "tooltip": "",
        "color": "",
        "bgcolor": "{{background}}",
        "icon": "",
        "payload": "",
        "payloadType": "str",
        "topic": "",
        "x": 2390,
        "y": 380,
        "wires": [
            []
        ]
    },
    {
        "id": "d389f6c.a7b4808",
        "type": "ui_button",
        "z": "772b4e64.18e6e",
        "name": "",
        "group": "a4a5657b.ad6998",
        "order": 14,
        "width": 1,
        "height": 1,
        "passthru": false,
        "label": "4",
        "tooltip": "",
        "color": "",
        "bgcolor": "{{background}}",
        "icon": "",
        "payload": "",
        "payloadType": "str",
        "topic": "",
        "x": 2390,
        "y": 500,
        "wires": [
            []
        ]
    },
    {
        "id": "1a670f20.74b8d1",
        "type": "ui_button",
        "z": "772b4e64.18e6e",
        "name": "",
        "group": "a4a5657b.ad6998",
        "order": 18,
        "width": 1,
        "height": 1,
        "passthru": false,
        "label": "5",
        "tooltip": "",
        "color": "",
        "bgcolor": "{{background}}",
        "icon": "",
        "payload": "",
        "payloadType": "str",
        "topic": "",
        "x": 2390,
        "y": 620,
        "wires": [
            []
        ]
    },
    {
        "id": "32a2c8b6.ad1ef8",
        "type": "ui_button",
        "z": "772b4e64.18e6e",
        "name": "",
        "group": "a4a5657b.ad6998",
        "order": 19,
        "width": 1,
        "height": 1,
        "passthru": false,
        "label": "6",
        "tooltip": "",
        "color": "",
        "bgcolor": "{{background}}",
        "icon": "",
        "payload": "",
        "payloadType": "str",
        "topic": "",
        "x": 2390,
        "y": 740,
        "wires": [
            []
        ]
    },
    {
        "id": "4e76324b.e51c5c",
        "type": "ui_button",
        "z": "772b4e64.18e6e",
        "name": "",
        "group": "a4a5657b.ad6998",
        "order": 22,
        "width": 2,
        "height": 1,
        "passthru": false,
        "label": "7",
        "tooltip": "",
        "color": "",
        "bgcolor": "{{background}}",
        "icon": "",
        "payload": "",
        "payloadType": "str",
        "topic": "",
        "x": 2390,
        "y": 860,
        "wires": [
            []
        ]
    },
    {
        "id": "525a6967.a4b008",
        "type": "ui_button",
        "z": "772b4e64.18e6e",
        "name": "",
        "group": "a4a5657b.ad6998",
        "order": 24,
        "width": 1,
        "height": 1,
        "passthru": false,
        "label": "8",
        "tooltip": "",
        "color": "",
        "bgcolor": "{{background}}",
        "icon": "",
        "payload": "",
        "payloadType": "str",
        "topic": "",
        "x": 2390,
        "y": 980,
        "wires": [
            []
        ]
    },
    {
        "id": "7f66877b.72f598",
        "type": "ui_button",
        "z": "772b4e64.18e6e",
        "name": "",
        "group": "a4a5657b.ad6998",
        "order": 25,
        "width": 1,
        "height": 1,
        "passthru": false,
        "label": "9",
        "tooltip": "",
        "color": "",
        "bgcolor": "{{background}}",
        "icon": "",
        "payload": "",
        "payloadType": "str",
        "topic": "",
        "x": 2390,
        "y": 1100,
        "wires": [
            []
        ]
    },
    {
        "id": "17e913d1.43c79c",
        "type": "ui_button",
        "z": "af13bad2.757ad8",
        "name": "",
        "group": "a61f5046.b796f",
        "order": 2,
        "width": 0,
        "height": 0,
        "passthru": false,
        "label": "Default time for sitting",
        "tooltip": "",
        "color": "",
        "bgcolor": "",
        "icon": "",
        "payload": "30",
        "payloadType": "num",
        "topic": "",
        "topicType": "str",
        "x": 640,
        "y": 800,
        "wires": [
            [
                "830fa7fc.f43558"
            ]
        ]
    },
    {
        "id": "d71fd2c0.52775",
        "type": "ui_button",
        "z": "af13bad2.757ad8",
        "name": "",
        "group": "a61f5046.b796f",
        "order": 3,
        "width": 0,
        "height": 0,
        "passthru": false,
        "label": "Extended time for sitting",
        "tooltip": "",
        "color": "",
        "bgcolor": "",
        "icon": "",
        "payload": "60",
        "payloadType": "num",
        "topic": "",
        "topicType": "str",
        "x": 630,
        "y": 760,
        "wires": [
            [
                "830fa7fc.f43558"
            ]
        ]
    },
    {
        "id": "830fa7fc.f43558",
        "type": "ui_slider",
        "z": "af13bad2.757ad8",
        "name": "",
        "label": "Manual time for sitting",
        "tooltip": "",
        "group": "a61f5046.b796f",
        "order": 1,
        "width": 3,
        "height": 2,
        "passthru": true,
        "outs": "end",
        "topic": "",
        "topicType": "str",
        "min": "2",
        "max": "90",
        "step": "2",
        "x": 900,
        "y": 760,
        "wires": [
            [
                "de3a9912.998a78",
                "da200976.fb7d98",
                "4f97a66b.8c6e98"
            ]
        ]
    },
    {
        "id": "895ce5fb.28ce78",
        "type": "ui_text",
        "z": "772b4e64.18e6e",
        "group": "49deb1f5.12e01",
        "order": 2,
        "width": 0,
        "height": 0,
        "name": "",
        "label": "Rest time",
        "format": "{{msg.payload}}",
        "layout": "row-spread",
        "x": 740,
        "y": 960,
        "wires": []
    },
    {
        "id": "7241ddc8.4ff374",
        "type": "ui_text",
        "z": "772b4e64.18e6e",
        "group": "49deb1f5.12e01",
        "order": 3,
        "width": 0,
        "height": 0,
        "name": "",
        "label": "Working / sitting time",
        "format": "{{msg.payload}}",
        "layout": "row-spread",
        "x": 780,
        "y": 1020,
        "wires": []
    },
    {
        "id": "3664af40.09d38",
        "type": "ui_chart",
        "z": "dc7f38ca.1f1628",
        "name": "",
        "group": "8a312ad2.ae3c18",
        "order": 2,
        "width": 13,
        "height": 12,
        "label": "all sensors",
        "chartType": "line",
        "legend": "false",
        "xformat": "auto",
        "interpolate": "linear",
        "nodata": "",
        "dot": false,
        "ymin": "",
        "ymax": "",
        "removeOlder": "2",
        "removeOlderPoints": "",
        "removeOlderUnit": "60",
        "cutout": 0,
        "useOneColor": false,
        "useUTC": false,
        "colors": [
            "#1f77b4",
            "#aec7e8",
            "#ff7f0e",
            "#2ca02c",
            "#98df8a",
            "#d62728",
            "#ff9896",
            "#9467bd",
            "#c5b0d5"
        ],
        "outputs": 1,
        "useDifferentColor": false,
        "x": 1170,
        "y": 220,
        "wires": [
            []
        ]
    },
    {
        "id": "66cdfb8d.5e06a4",
        "type": "ui_ui_control",
        "z": "af13bad2.757ad8",
        "name": "",
        "events": "connect",
        "x": 140,
        "y": 260,
        "wires": [
            [
                "febb07.0de8b4f8"
            ]
        ]
    },
    {
        "id": "15008359.1075bd",
        "type": "ui_template",
        "z": "af13bad2.757ad8",
        "group": "a4a5657b.ad6998",
        "name": "Background image template",
        "order": 1,
        "width": 0,
        "height": 0,
        "format": "<style>\n    body {\n        background-image: url(\"/{{msg.payload}}\");\n        background-repeat: no-repeat;\n        background-position: 100% 100%;\n        background-size: 100%;\n    }\n</style>",
        "storeOutMessages": true,
        "fwdInMessages": true,
        "resendOnRefresh": true,
        "templateScope": "local",
        "x": 520,
        "y": 260,
        "wires": [
            []
        ]
    },
    {
        "id": "9b860027.7803a",
        "type": "ui_template",
        "z": "af13bad2.757ad8",
        "group": "a4a5657b.ad6998",
        "name": "transperent group dashboard",
        "order": 2,
        "width": 0,
        "height": 0,
        "format": "\n<style>\n    #Chair_dashboard_cards{\n        background-color:#12345600;\n    }\n    #Chair_dashboard{\n        background-color:#12345600;\n        border:none;\n    }\n</style>\n<script>\nfunction updateContainerStyle (el) {\n\tel = el.parentElement\n\tif (el && el.classList.contains('nr-dashboard-template')) {\n\t    // uncomment next line to make the parent container transparent\n\t\tel.style.backgroundColor = \"#12345600\"\n\t}\n}\n\nupdateContainerStyle(document.getElementById(\"div-in-template\"))\n</script>",
        "storeOutMessages": true,
        "fwdInMessages": true,
        "resendOnRefresh": true,
        "templateScope": "global",
        "x": 520,
        "y": 300,
        "wires": [
            []
        ]
    },
    {
        "id": "d0587aeb.c3ed38",
        "type": "ui_template",
        "z": "af13bad2.757ad8",
        "d": true,
        "group": "8a312ad2.ae3c18",
        "name": "Background image template",
        "order": 1,
        "width": 0,
        "height": 0,
        "format": "<style>\n    body {\n        background-image: url(\"/white.png\");\n        background-repeat: no-repeat;\n        background-position: 100% 100%;\n        background-size: 100%;\n    }\n</style>",
        "storeOutMessages": true,
        "fwdInMessages": true,
        "resendOnRefresh": true,
        "templateScope": "local",
        "x": 520,
        "y": 480,
        "wires": [
            []
        ]
    },
    {
        "id": "2b628fd3.7e1df",
        "type": "ui_template",
        "z": "af13bad2.757ad8",
        "d": true,
        "group": "8d305fa8.31707",
        "name": "Background image template",
        "order": 1,
        "width": 0,
        "height": 0,
        "format": "<style>\n    body {\n        background-image: url(\"/white.png\");\n        background-repeat: no-repeat;\n        background-position: 100% 100%;\n        background-size: 100%;\n    }\n</style>",
        "storeOutMessages": true,
        "fwdInMessages": true,
        "resendOnRefresh": true,
        "templateScope": "local",
        "x": 520,
        "y": 520,
        "wires": [
            []
        ]
    },
    {
        "id": "a54856c0.0df898",
        "type": "ui_template",
        "z": "af13bad2.757ad8",
        "d": true,
        "group": "a4a5657b.ad6998",
        "name": "transperent group status",
        "order": 3,
        "width": 0,
        "height": 0,
        "format": "\n<style>\n    #Chair_status_cards{\n        background-color:#12345600;\n    }\n    #Chair_status{\n        background-color:#12345600;\n        border:none;\n    }\n</style>\n<script>\nfunction updateContainerStyle (el) {\n\tel = el.parentElement\n\tif (el && el.classList.contains('nr-dashboard-template')) {\n\t    // uncomment next line to make the parent container transparent\n\t\tel.style.backgroundColor = \"#12345600\"\n\t}\n}\n\nupdateContainerStyle(document.getElementById(\"div-in-template\"))\n</script>",
        "storeOutMessages": true,
        "fwdInMessages": true,
        "resendOnRefresh": true,
        "templateScope": "local",
        "x": 510,
        "y": 400,
        "wires": [
            []
        ]
    },
    {
        "id": "292f39f9.1baf86",
        "type": "ui_template",
        "z": "af13bad2.757ad8",
        "group": "a4a5657b.ad6998",
        "name": "transperent group spacer",
        "order": 4,
        "width": 0,
        "height": 0,
        "format": "\n<style>\n    #Chair_spacer_cards{\n        background-color:#12345600;\n    }\n    #Chair_spacer{\n        background-color:#12345600;\n        border:none;\n    }\n</style>\n<script>\nfunction updateContainerStyle (el) {\n\tel = el.parentElement\n\tif (el && el.classList.contains('nr-dashboard-template')) {\n\t    // uncomment next line to make the parent container transparent\n\t\tel.style.backgroundColor = \"#12345600\"\n\t}\n}\n\nupdateContainerStyle(document.getElementById(\"div-in-template\"))\n</script>",
        "storeOutMessages": true,
        "fwdInMessages": true,
        "resendOnRefresh": true,
        "templateScope": "local",
        "x": 510,
        "y": 340,
        "wires": [
            []
        ]
    },
    {
        "id": "c955f148.352cb",
        "type": "gate",
        "z": "772b4e64.18e6e",
        "name": "",
        "controlTopic": "control",
        "defaultState": "open",
        "openCmd": "open",
        "closeCmd": "close",
        "toggleCmd": "toggle",
        "defaultCmd": "default",
        "statusCmd": "status",
        "persist": false,
        "x": 410,
        "y": 340,
        "wires": [
            [
                "2bbb4ab1.8c3416",
                "b687f285.31795"
            ]
        ]
    },
    {
        "id": "dbf643f6.8ba",
        "type": "gate",
        "z": "772b4e64.18e6e",
        "name": "",
        "controlTopic": "control",
        "defaultState": "closed",
        "openCmd": "open",
        "closeCmd": "close",
        "toggleCmd": "toggle",
        "defaultCmd": "default",
        "statusCmd": "status",
        "persist": false,
        "x": 410,
        "y": 440,
        "wires": [
            [
                "780ba7df.cdcab8",
                "ffc9a5b6.777f38"
            ]
        ]
    },
    {
        "id": "46d3275.7ab72d8",
        "type": "calculator",
        "z": "dc7f38ca.1f1628",
        "name": "",
        "inputMsgField": "payload",
        "outputMsgField": "payload",
        "operation": "avg",
        "constant": "9",
        "round": false,
        "decimals": 0,
        "x": 960,
        "y": 240,
        "wires": [
            [
                "d94fff7a.517ba",
                "3664af40.09d38"
            ]
        ]
    },
    {
        "id": "22cf8ee8.8b2802",
        "type": "ui_led",
        "z": "772b4e64.18e6e",
        "order": 4,
        "group": "49deb1f5.12e01",
        "width": 0,
        "height": 0,
        "label": "Indicator",
        "labelPlacement": "left",
        "labelAlignment": "left",
        "colorForValue": [
            {
                "color": "#008000",
                "value": "0",
                "valueType": "num"
            },
            {
                "color": "#ff0000",
                "value": "1",
                "valueType": "num"
            },
            {
                "color": "#ffff00",
                "value": "2",
                "valueType": "num"
            }
        ],
        "allowColorForValueInMessage": false,
        "shape": "circle",
        "showGlow": true,
        "name": "",
        "x": 370,
        "y": 720,
        "wires": []
    },
    {
        "id": "9c83173a.964bb8",
        "type": "ui_button",
        "z": "af13bad2.757ad8",
        "name": "",
        "group": "a61f5046.b796f",
        "order": 5,
        "width": 0,
        "height": 0,
        "passthru": false,
        "label": "Restart Node Red",
        "tooltip": "",
        "color": "",
        "bgcolor": "orange",
        "icon": "",
        "payload": "",
        "payloadType": "str",
        "topic": "",
        "x": 190,
        "y": 1000,
        "wires": [
            [
                "845959e.0f5d7a8"
            ]
        ]
    },
    {
        "id": "845959e.0f5d7a8",
        "type": "exec",
        "z": "af13bad2.757ad8",
        "command": "node-red-restart",
        "addpay": false,
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "oldrc": false,
        "name": "",
        "x": 380,
        "y": 1000,
        "wires": [
            [],
            [],
            []
        ]
    },
    {
        "id": "983c787e.0d00d8",
        "type": "ui_button",
        "z": "af13bad2.757ad8",
        "name": "",
        "group": "a61f5046.b796f",
        "order": 6,
        "width": 0,
        "height": 0,
        "passthru": false,
        "label": "Power Off",
        "tooltip": "",
        "color": "",
        "bgcolor": "red",
        "icon": "",
        "payload": "",
        "payloadType": "str",
        "topic": "",
        "topicType": "str",
        "x": 160,
        "y": 1120,
        "wires": [
            [
                "bd706339.2ff22"
            ]
        ]
    },
    {
        "id": "bd706339.2ff22",
        "type": "exec",
        "z": "af13bad2.757ad8",
        "command": "sudo poweroff",
        "addpay": false,
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "oldrc": false,
        "name": "",
        "x": 380,
        "y": 1120,
        "wires": [
            [],
            [],
            []
        ]
    },
    {
        "id": "87c41945.885cf8",
        "type": "ui_button",
        "z": "af13bad2.757ad8",
        "name": "",
        "group": "a61f5046.b796f",
        "order": 7,
        "width": 0,
        "height": 0,
        "passthru": false,
        "label": "Reboot",
        "tooltip": "",
        "color": "",
        "bgcolor": "red",
        "icon": "",
        "payload": "",
        "payloadType": "str",
        "topic": "",
        "topicType": "str",
        "x": 160,
        "y": 1180,
        "wires": [
            [
                "f43446c.df038b8"
            ]
        ]
    },
    {
        "id": "f43446c.df038b8",
        "type": "exec",
        "z": "af13bad2.757ad8",
        "command": "sudo reboot",
        "addpay": false,
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "oldrc": false,
        "name": "",
        "x": 370,
        "y": 1180,
        "wires": [
            [],
            [],
            []
        ]
    },
    {
        "id": "899da717.80eeb8",
        "type": "ui_button",
        "z": "af13bad2.757ad8",
        "name": "",
        "group": "a61f5046.b796f",
        "order": 4,
        "width": 0,
        "height": 0,
        "passthru": false,
        "label": "Stop Node Red",
        "tooltip": "",
        "color": "",
        "bgcolor": "orange",
        "icon": "",
        "payload": "",
        "payloadType": "str",
        "topic": "",
        "x": 180,
        "y": 1060,
        "wires": [
            [
                "d89cd4cc.ff7b48"
            ]
        ]
    },
    {
        "id": "d89cd4cc.ff7b48",
        "type": "exec",
        "z": "af13bad2.757ad8",
        "command": "node-red-stop",
        "addpay": false,
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "oldrc": false,
        "name": "",
        "x": 380,
        "y": 1060,
        "wires": [
            [],
            [],
            []
        ]
    },
    {
        "id": "8f40604a.bdf5a",
        "type": "link in",
        "z": "af13bad2.757ad8",
        "name": "",
        "links": [
            "974d8a9b.1f77d8",
            "819d8395.2a38b",
            "888bea59.d1ee48",
            "53252ca3.0ceed4"
        ],
        "x": 115,
        "y": 760,
        "wires": [
            [
                "346f0bd9.7160f4"
            ]
        ]
    },
    {
        "id": "346f0bd9.7160f4",
        "type": "change",
        "z": "af13bad2.757ad8",
        "name": "",
        "rules": [
            {
                "t": "move",
                "p": "payload",
                "pt": "msg",
                "to": "enabled",
                "tot": "msg"
            },
            {
                "t": "change",
                "p": "enabled",
                "pt": "msg",
                "from": "open",
                "fromt": "str",
                "to": "true",
                "tot": "bool"
            },
            {
                "t": "change",
                "p": "enabled",
                "pt": "msg",
                "from": "close",
                "fromt": "str",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 300,
        "y": 760,
        "wires": [
            [
                "830fa7fc.f43558",
                "d71fd2c0.52775",
                "17e913d1.43c79c"
            ]
        ]
    },
    {
        "id": "6c963028.97ed6",
        "type": "rpi-gpio in",
        "z": "af13bad2.757ad8",
        "d": true,
        "name": "",
        "pin": "40",
        "intype": "tri",
        "debounce": "25",
        "read": false,
        "x": 170,
        "y": 1220,
        "wires": [
            [
                "f43446c.df038b8"
            ]
        ]
    },
    {
        "id": "f86e12d3.f5e9b",
        "type": "rpi-gpio in",
        "z": "e6bd1a7b.e18128",
        "name": "",
        "pin": "40",
        "intype": "tri",
        "debounce": "25",
        "read": false,
        "x": 530,
        "y": 420,
        "wires": [
            [
                "3f9ea895.234538"
            ]
        ]
    },
    {
        "id": "3f9ea895.234538",
        "type": "switch",
        "z": "e6bd1a7b.e18128",
        "name": "",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "1",
                "vt": "num"
            },
            {
                "t": "eq",
                "v": "0",
                "vt": "num"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 2,
        "x": 680,
        "y": 420,
        "wires": [
            [
                "9067d90f.0a93c8"
            ],
            [
                "4197c1dd.9c377"
            ]
        ]
    },
    {
        "id": "9067d90f.0a93c8",
        "type": "change",
        "z": "e6bd1a7b.e18128",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "sensor_7",
                "pt": "global",
                "to": "800",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 870,
        "y": 400,
        "wires": [
            []
        ]
    },
    {
        "id": "4197c1dd.9c377",
        "type": "change",
        "z": "e6bd1a7b.e18128",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "sensor_7",
                "pt": "global",
                "to": "0",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 870,
        "y": 440,
        "wires": [
            []
        ]
    },
    {
        "id": "43c04df2.bb05b4",
        "type": "inject",
        "z": "cc53778b.362758",
        "name": "",
        "props": [
            {
                "p": "payload"
            }
        ],
        "repeat": "1",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "sensor_7",
        "payloadType": "global",
        "x": 210,
        "y": 300,
        "wires": [
            [
                "2493dfbe.bceec"
            ]
        ]
    },
    {
        "id": "b9a0849.bd1d078",
        "type": "debug",
        "z": "cc53778b.362758",
        "name": "",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 950,
        "y": 360,
        "wires": []
    },
    {
        "id": "2e38984.3d2bf68",
        "type": "inject",
        "z": "cc53778b.362758",
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
        "payload": "10",
        "payloadType": "num",
        "x": 150,
        "y": 440,
        "wires": [
            [
                "53725210.061f8c"
            ]
        ]
    },
    {
        "id": "53725210.061f8c",
        "type": "change",
        "z": "cc53778b.362758",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "timer30",
                "pt": "global",
                "to": "10",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 350,
        "y": 440,
        "wires": [
            []
        ]
    },
    {
        "id": "916b23c5.5b5d1",
        "type": "function",
        "z": "cc53778b.362758",
        "name": "",
        "func": "var sensor_7 = global.get(\"sensor_7\");\nvar timer30 = global.get(\"timer_30\");\n\nif (timer30 <= 0){\n    timer30=2;\n}\n\nif (sensor_7 > 50){\n    timer30=timer30-1;\n    global.set(\"timer_30\", timer30);\n    return {payload:timer30, topic:\"control\"}\n} \n\nelse {\n    return {payload:false}\n}\n\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 780,
        "y": 80,
        "wires": [
            []
        ]
    },
    {
        "id": "2880e6ad.ae817a",
        "type": "comment",
        "z": "cc53778b.362758",
        "name": "raboti",
        "info": "",
        "x": 610,
        "y": 260,
        "wires": []
    },
    {
        "id": "7ceae748.ed8978",
        "type": "function",
        "z": "e6bd1a7b.e18128",
        "name": "",
        "func": "\n\nnode.send ({payload:\"test\"});\nsleep(1000);\nreturn msg;\n\nfunction sleep(milliseconds) {\n  const date = Date.now();\n  let currentDate = null;\n  do {\n    currentDate = Date.now();\n  } while (currentDate - date < milliseconds);\n}",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 420,
        "y": 860,
        "wires": [
            [
                "3b5c2f5.6427bd"
            ]
        ]
    },
    {
        "id": "3b5c2f5.6427bd",
        "type": "debug",
        "z": "e6bd1a7b.e18128",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 630,
        "y": 860,
        "wires": []
    },
    {
        "id": "b6644c85.ffb6f",
        "type": "inject",
        "z": "e6bd1a7b.e18128",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 180,
        "y": 860,
        "wires": [
            [
                "7ceae748.ed8978"
            ]
        ]
    },
    {
        "id": "77fa3b57.930a64",
        "type": "function",
        "z": "cc53778b.362758",
        "name": "",
        "func": "var sensor_7 = global.get(\"sensor_7\");\nvar timer30=global.get(\"timer30\");\nvar timer5=global.get(\"timer5\");\nnode.send([null,{timer30:timer30,timer5:timer5}]);\n\nif (timer30==0 && sensor_7>50 && timer5==0){\n    timer30=global.get(\"timer30\");\n}\nif (timer30)\n\nif (sensor_7 > 50){\n    if (timer30 >= 0){\n         //setTimeout(sitting,timer30);\n         timer30=timer30-1;\n         global.set(\"timer30\", timer30);\n    }\n} \n/*\nfunction sitting(){\n    node.send([{payload:true},null]);\n}*/\n\nif (timer30==0 && timer5==0){\n    //setTimeout(sitanding,timer5);\n    timer5=timer5-1;\n    global.set(\"timer5\", timer5);\n}\n\n/*function sitanding(){\n    node.send([{payload:false},null]);\n}*/",
        "outputs": 2,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 780,
        "y": 120,
        "wires": [
            [],
            []
        ]
    },
    {
        "id": "92afcbfb.a9b308",
        "type": "function",
        "z": "cc53778b.362758",
        "name": "",
        "func": "var calc=global.get(\"timer_30\");\ncalc = calc-1;\nreturn  {payload: calc, topic: \"control\"};",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 780,
        "y": 40,
        "wires": [
            []
        ]
    },
    {
        "id": "7b8b5352.71d6dc",
        "type": "inject",
        "z": "cc53778b.362758",
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
        "payload": "5",
        "payloadType": "num",
        "x": 150,
        "y": 560,
        "wires": [
            [
                "10a2f660.36bfba"
            ]
        ]
    },
    {
        "id": "10a2f660.36bfba",
        "type": "change",
        "z": "cc53778b.362758",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "timer5",
                "pt": "global",
                "to": "5",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 340,
        "y": 560,
        "wires": [
            []
        ]
    },
    {
        "id": "366dcc28.910b14",
        "type": "inject",
        "z": "cc53778b.362758",
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
        "payload": "0",
        "payloadType": "num",
        "x": 150,
        "y": 620,
        "wires": [
            [
                "4f0e8105.7409"
            ]
        ]
    },
    {
        "id": "4f0e8105.7409",
        "type": "change",
        "z": "cc53778b.362758",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "timer5",
                "pt": "global",
                "to": "0",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 340,
        "y": 620,
        "wires": [
            []
        ]
    },
    {
        "id": "3e0d9a73.7e91e6",
        "type": "inject",
        "z": "cc53778b.362758",
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
        "payload": "0",
        "payloadType": "num",
        "x": 150,
        "y": 500,
        "wires": [
            [
                "2cead9b7.e5e1e6"
            ]
        ]
    },
    {
        "id": "2cead9b7.e5e1e6",
        "type": "change",
        "z": "cc53778b.362758",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "timer30",
                "pt": "global",
                "to": "0",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 350,
        "y": 500,
        "wires": [
            []
        ]
    },
    {
        "id": "6e938974.681a58",
        "type": "function",
        "z": "cc53778b.362758",
        "name": "",
        "func": "var sensor_7 = global.get(\"sensor_7\");\nvar timer30=global.get(\"timer30\");\nvar timer5=global.get(\"timer5\");\n\nif (timer30<=0){\n        global.set(\"timer30\",global.get(\"timer30settings\"));\n    }\n    \nif (sensor_7>50 && timer5<=0 && timer30>=0){\n    timer30=timer30-1;\n    global.set(\"timer30\",timer30);\n}\n\n\nif (timer5<=0){\n    global.set(\"timer5\",global.get(\"timer5settings\"));\n\n    }\n\nif (timer30==0){\n    timer5=timer5-1;\n    global.set(\"timer5\",timer5);\n}else{\n    global.set(\"timer5\",0);\n}\n\n\nnode.send([null,{timer30:timer30,timer5:timer5}]);\n",
        "outputs": 2,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 780,
        "y": 160,
        "wires": [
            [],
            []
        ]
    },
    {
        "id": "2288ada.041d952",
        "type": "debug",
        "z": "af13bad2.757ad8",
        "name": "",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 1720,
        "y": 900,
        "wires": []
    },
    {
        "id": "62e13e9a.c5015",
        "type": "inject",
        "z": "af13bad2.757ad8",
        "name": "",
        "props": [
            {
                "p": "payload"
            }
        ],
        "repeat": "1",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "time_for_sitting",
        "payloadType": "global",
        "x": 630,
        "y": 720,
        "wires": [
            [
                "830fa7fc.f43558"
            ]
        ]
    },
    {
        "id": "38b7981a.f7a2d8",
        "type": "function",
        "z": "cc53778b.362758",
        "name": "",
        "func": "var sensor_7 = global.get(\"sensor_7\");\nvar timer30=global.get(\"timer30\");\nvar timer5=global.get(\"timer5\");\n\nif (timer30<=0){\n        global.set(\"timer30\",global.get(\"timer30settings\"));\n    }\n    \nwhile (sensor_7>50 && timer5<=0){\n    timer30=timer30-1;\n    global.set(\"timer30\",timer30);\n    if (timer30<=0) {\n        break;\n    }\n}\n\nif (timer5<=0){\n    global.set(\"timer5\",global.get(\"timer5settings\"));\n\n    }\n\nwhile (timer30==0){\n    timer5=timer5-1;\n    global.set(\"timer5\",timer5);\n} \n\n\nif (timer30==0){}\nelse{\n    global.set(\"timer5\",0);\n}\n\n\nnode.send([null,{timer30:timer30,timer5:timer5}]);\n",
        "outputs": 2,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 940,
        "y": 200,
        "wires": [
            [],
            []
        ]
    },
    {
        "id": "dea93835.41c5a8",
        "type": "function",
        "z": "cc53778b.362758",
        "name": "",
        "func": "var sensor_7 = global.get(\"sensor_7\");\nvar timer30=global.get(\"timer30\");\nvar timer5=global.get(\"timer5\");\n\nif (sensor_7>50 && timer5==0 && timer30>=0){\n    timer30=timer30-1;\n    global.set(\"timer30\",timer30);\n    if (timer30<=0){\n        global.set(\"timer30\",global.get(\"timer30settings\"));\n        node.error(\"timer 30 got value from timer30settings\");\n    }\n}\n\nif (timer30==0){\n    if (timer5<=0){\n    global.set(\"timer5\",global.get(\"timer5settings\"));\n    node.error(\"timer 5 got value from timer5settings\");\n    }\n    timer5=timer5-1;\n    global.set(\"timer5\",timer5);\n}\nwhile (timer5<=0){\n    timer5=0;\n}\n\n\nnode.send([null,{timer30:timer30,timer5:timer5}]);\n",
        "outputs": 2,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 780,
        "y": 240,
        "wires": [
            [],
            []
        ]
    },
    {
        "id": "2493dfbe.bceec",
        "type": "function",
        "z": "cc53778b.362758",
        "name": "Countdown",
        "func": "var sensor_7 = global.get(\"sensor_7\");\nvar timer30=global.get(\"timer30\");\nvar timer5=global.get(\"timer5\");\nvar timeout=global.get(\"timeout\");\n\n\nif (sensor_7>50 && timer30>0){\n    timer30=timer30-1;\n    if (timer30==0){\n        timeout=1;\n        timer5=global.get(\"timer5settings\");\n    }\n}\n\nif (timeout==1){\n    timer5=timer5-1;\n    if (timer5==0){\n        timeout=0;\n        timer30=global.get(\"timer30settings\");\n    }\n}\n\nglobal.set(\"timer30\",timer30);\nglobal.set(\"timer5\",timer5);\nglobal.set(\"timeout\",timeout);\n\nnode.send([{timeout:timeout},{timer30:timer30,timer5:timer5}]);",
        "outputs": 2,
        "noerr": 0,
        "initialize": "// Code added here will be run once\n// whenever the node is deployed.\nglobal.set(\"timer30\",global.get(\"timer30settings\"));\nglobal.set(\"timer5\",global.get(\"timer5settings\"));\nglobal.set(\"timeout\",0);",
        "finalize": "",
        "x": 770,
        "y": 300,
        "wires": [
            [
                "51c537b5.af4ef8"
            ],
            [
                "b9a0849.bd1d078"
            ]
        ]
    },
    {
        "id": "771d263b.3d9638",
        "type": "inject",
        "z": "cc53778b.362758",
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
        "payload": "g.300",
        "payloadType": "str",
        "x": 270,
        "y": 240,
        "wires": [
            [
                "e270db02.487ef8"
            ]
        ]
    },
    {
        "id": "1478bb68.318eb5",
        "type": "inject",
        "z": "cc53778b.362758",
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
        "payload": "g.0",
        "payloadType": "str",
        "x": 430,
        "y": 240,
        "wires": [
            [
                "e270db02.487ef8"
            ]
        ]
    },
    {
        "id": "e270db02.487ef8",
        "type": "link out",
        "z": "cc53778b.362758",
        "name": "",
        "links": [
            "20089778.b355c8",
            "491344a2.8d453c"
        ],
        "x": 495,
        "y": 140,
        "wires": []
    },
    {
        "id": "51c537b5.af4ef8",
        "type": "function",
        "z": "cc53778b.362758",
        "name": "led indicator",
        "func": "var count=msg.timeout; \n\nif (global.get(\"sensor_7\")>50 && count ==0){\n    node.send({payload:2});\n} else{\n   node.send({payload:count});\n}\n\n\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 1150,
        "y": 280,
        "wires": [
            [
                "ef2d960b.d78688",
                "21ad533d.4ddcfc"
            ]
        ]
    },
    {
        "id": "ef2d960b.d78688",
        "type": "debug",
        "z": "cc53778b.362758",
        "name": "",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 1470,
        "y": 280,
        "wires": []
    },
    {
        "id": "cf29152d.d0efb8",
        "type": "inject",
        "z": "772b4e64.18e6e",
        "name": "",
        "props": [
            {
                "p": "payload"
            }
        ],
        "repeat": "1",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "timer30",
        "payloadType": "global",
        "x": 120,
        "y": 1020,
        "wires": [
            [
                "10ff4972.6bf057"
            ]
        ]
    },
    {
        "id": "de1409db.0be158",
        "type": "inject",
        "z": "772b4e64.18e6e",
        "name": "",
        "props": [
            {
                "p": "payload"
            }
        ],
        "repeat": "1",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "timer5",
        "payloadType": "global",
        "x": 120,
        "y": 960,
        "wires": [
            [
                "3dd38ac5.919ba6"
            ]
        ]
    },
    {
        "id": "21ad533d.4ddcfc",
        "type": "link out",
        "z": "cc53778b.362758",
        "name": "led indicator input",
        "links": [
            "35be3bd2.e0a234"
        ],
        "x": 1355,
        "y": 240,
        "wires": []
    },
    {
        "id": "da200976.fb7d98",
        "type": "change",
        "z": "af13bad2.757ad8",
        "name": "",
        "rules": [
            {
                "t": "move",
                "p": "payload",
                "pt": "msg",
                "to": "time_for_sitting",
                "tot": "global"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1310,
        "y": 720,
        "wires": [
            []
        ]
    },
    {
        "id": "6fe87501.ad0e8c",
        "type": "start-up-trigger",
        "z": "af13bad2.757ad8",
        "x": 660,
        "y": 660,
        "wires": [
            [
                "cec64188.1400e"
            ]
        ]
    },
    {
        "id": "cec64188.1400e",
        "type": "change",
        "z": "af13bad2.757ad8",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "time_for_sitting",
                "pt": "global",
                "to": "30",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 910,
        "y": 660,
        "wires": [
            []
        ]
    },
    {
        "id": "3afcb30e.2b97dc",
        "type": "function",
        "z": "cc53778b.362758",
        "name": "audio alert",
        "func": "var timeout=global.get(\"timeout\"); \nvar sensor_7 = global.get(\"sensor_7\");\nvar sn_sens = global.get(\"sn_sens\");\n\nif(timeout==1 && sensor_7 >sn_sens){\n    return msg;\n}",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 930,
        "y": 540,
        "wires": [
            [
                "850a5a91.8e3158"
            ]
        ]
    },
    {
        "id": "c1821d9d.e4a1e",
        "type": "start-up-trigger",
        "z": "cc53778b.362758",
        "x": 1160,
        "y": 180,
        "wires": [
            [
                "22004d28.fdf2f2"
            ]
        ]
    },
    {
        "id": "22004d28.fdf2f2",
        "type": "change",
        "z": "cc53778b.362758",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "sn_sens",
                "pt": "global",
                "to": "50",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1390,
        "y": 180,
        "wires": [
            []
        ]
    },
    {
        "id": "75cb605.b4257a",
        "type": "http request",
        "z": "cc53778b.362758",
        "name": "",
        "method": "GET",
        "ret": "bin",
        "paytoqs": "ignore",
        "url": "http://192.168.27.128:1880/what-302.mp3",
        "tls": "",
        "persist": false,
        "proxy": "",
        "authType": "",
        "x": 1330,
        "y": 540,
        "wires": [
            [
                "7a4f27f8.130e58"
            ]
        ]
    },
    {
        "id": "7a4f27f8.130e58",
        "type": "ui_audio",
        "z": "cc53778b.362758",
        "name": "",
        "group": "a4a5657b.ad6998",
        "voice": "",
        "always": true,
        "x": 1510,
        "y": 540,
        "wires": []
    },
    {
        "id": "10352e58.6d01f2",
        "type": "inject",
        "z": "cc53778b.362758",
        "name": "",
        "props": [
            {
                "p": "payload"
            }
        ],
        "repeat": "5",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "str",
        "x": 700,
        "y": 540,
        "wires": [
            [
                "3afcb30e.2b97dc"
            ]
        ]
    },
    {
        "id": "850a5a91.8e3158",
        "type": "trigger",
        "z": "cc53778b.362758",
        "name": "",
        "op1": "1",
        "op2": "0",
        "op1type": "str",
        "op2type": "str",
        "duration": "500",
        "extend": false,
        "overrideDelay": false,
        "units": "ms",
        "reset": "",
        "bytopic": "all",
        "topic": "topic",
        "outputs": 1,
        "x": 1140,
        "y": 540,
        "wires": [
            [
                "75cb605.b4257a"
            ]
        ]
    },
    {
        "id": "f6d796c3.7cc288",
        "type": "function",
        "z": "772b4e64.18e6e",
        "name": "",
        "func": "var sensor_7 = global.get(\"sensor_7\");\nvar sn_sens = global.get(\"sn_sens\");\n\nif (sensor_7<sn_sens){\n    node.send({background:\"rgb(255,255,55)\"});\n}else{\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 2200,
        "y": 140,
        "wires": [
            [
                "5bd13785.e19178"
            ]
        ]
    },
    {
        "id": "a8e6a66.7e16558",
        "type": "function",
        "z": "772b4e64.18e6e",
        "name": "",
        "func": "var sensor_7 = global.get(\"sensor_7\");\nvar sn_sens = global.get(\"sn_sens\");\n\nif (sensor_7<sn_sens){\n    node.send({background:\"rgb(255,255,55)\"});\n}else{\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 2200,
        "y": 260,
        "wires": [
            [
                "f2348297.312d5"
            ]
        ]
    },
    {
        "id": "fce183d6.20d76",
        "type": "function",
        "z": "772b4e64.18e6e",
        "name": "",
        "func": "var sensor_7 = global.get(\"sensor_7\");\nvar sn_sens = global.get(\"sn_sens\");\n\nif (sensor_7<sn_sens){\n    node.send({background:\"rgb(255,255,55)\"});\n}else{\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 2200,
        "y": 380,
        "wires": [
            [
                "dddbfdf.a0487"
            ]
        ]
    },
    {
        "id": "f184020f.e59d6",
        "type": "function",
        "z": "772b4e64.18e6e",
        "name": "",
        "func": "var sensor_7 = global.get(\"sensor_7\");\nvar sn_sens = global.get(\"sn_sens\");\n\nif (sensor_7<sn_sens){\n    node.send({background:\"rgb(255,255,55)\"});\n}else{\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 2200,
        "y": 500,
        "wires": [
            [
                "d389f6c.a7b4808"
            ]
        ]
    },
    {
        "id": "9e9de0a.0ec8d2",
        "type": "function",
        "z": "772b4e64.18e6e",
        "name": "",
        "func": "var sensor_7 = global.get(\"sensor_7\");\nvar sn_sens = global.get(\"sn_sens\");\n\nif (sensor_7<sn_sens){\n    node.send({background:\"rgb(255,255,55)\"});\n}else{\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 2200,
        "y": 620,
        "wires": [
            [
                "1a670f20.74b8d1"
            ]
        ]
    },
    {
        "id": "b8109e81.426cc",
        "type": "function",
        "z": "772b4e64.18e6e",
        "name": "",
        "func": "var sensor_7 = global.get(\"sensor_7\");\nvar sn_sens = global.get(\"sn_sens\");\n\nif (sensor_7<sn_sens){\n    node.send({background:\"rgb(255,255,55)\"});\n}else{\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 2200,
        "y": 740,
        "wires": [
            [
                "32a2c8b6.ad1ef8"
            ]
        ]
    },
    {
        "id": "ef6cfabd.3c58c8",
        "type": "function",
        "z": "772b4e64.18e6e",
        "name": "",
        "func": "var sensor_7 = global.get(\"sensor_7\");\nvar sn_sens = global.get(\"sn_sens\");\n\nif (sensor_7<sn_sens){\n    node.send({background:\"rgb(255,255,55)\"});\n}else{\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 2200,
        "y": 860,
        "wires": [
            [
                "4e76324b.e51c5c"
            ]
        ]
    },
    {
        "id": "f7c62b0.f0ddad8",
        "type": "function",
        "z": "772b4e64.18e6e",
        "name": "",
        "func": "var sensor_7 = global.get(\"sensor_7\");\nvar sn_sens = global.get(\"sn_sens\");\n\nif (sensor_7<sn_sens){\n    node.send({background:\"rgb(255,255,55)\"});\n}else{\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 2200,
        "y": 980,
        "wires": [
            [
                "525a6967.a4b008"
            ]
        ]
    },
    {
        "id": "ef762a1e.de0e08",
        "type": "function",
        "z": "772b4e64.18e6e",
        "name": "",
        "func": "var sensor_7 = global.get(\"sensor_7\");\nvar sn_sens = global.get(\"sn_sens\");\n\nif (sensor_7<sn_sens){\n    node.send({background:\"rgb(255,255,55)\"});\n}else{\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 2200,
        "y": 1100,
        "wires": [
            [
                "7f66877b.72f598"
            ]
        ]
    }
]
