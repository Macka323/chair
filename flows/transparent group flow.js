[{"id":"beb0a3a3.ec6e8","type":"tab","label":"Flow 1","disabled":false,"info":""},{"id":"af449272.64213","type":"ui_button","z":"beb0a3a3.ec6e8","name":"test button","group":"2cc829a5.610f36","order":11,"width":0,"height":0,"passthru":false,"label":"facebook","tooltip":"","color":"blue","bgcolor":"white","icon":"facebook","payload":"","payloadType":"str","topic":"","x":360,"y":260,"wires":[[]]},{"id":"b0bf3de5.ad13c","type":"ui_text","z":"beb0a3a3.ec6e8","group":"2cc829a5.610f36","order":1,"width":3,"height":1,"name":"","label":"text","format":"just a text","layout":"row-spread","x":320,"y":130,"wires":[]},{"id":"b93c110c.dfa28","type":"ui_template","z":"beb0a3a3.ec6e8","group":"a4a5657b.ad6998","name":"","order":2,"width":3,"height":2,"format":"<div id=\"div-in-template\">UI Template node</div>\n<style>\n    #TEST_group-test_cards{\n        background-color:#12345600;\n    }\n    #TEST_group-test{\n        background-color:#12345600;\n        border:none;\n    }\n</style>\n<script>\nfunction updateContainerStyle (el) {\n\tel = el.parentElement\n\tif (el && el.classList.contains('nr-dashboard-template')) {\n\t    // uncomment next line to make the parent container transparent\n\t\tel.style.backgroundColor = \"#12345600\"\n\t}\n}\n\nupdateContainerStyle(document.getElementById(\"div-in-template\"))\n</script>","storeOutMessages":true,"fwdInMessages":true,"resendOnRefresh":true,"templateScope":"local","x":330,"y":170,"wires":[[]]},{"id":"2cc829a5.610f36","type":"ui_group","name":"group-test","tab":"6766858b.dee74c","order":3,"disp":false,"width":3,"collapse":false},{"id":"a4a5657b.ad6998","type":"ui_group","name":"dashboard","tab":"bb56339e.2abaa","order":1,"disp":true,"width":"6","collapse":false},{"id":"6766858b.dee74c","type":"ui_tab","name":"TEST","icon":"dashboard","order":3,"disabled":false,"hidden":false},{"id":"bb56339e.2abaa","type":"ui_tab","name":"Chair","icon":"dashboard","order":1,"disabled":false,"hidden":false}]