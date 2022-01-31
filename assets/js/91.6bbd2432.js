(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{1910:function(e,t,o){"use strict";o.r(t);var r=o(26),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"filemaker"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#filemaker"}},[e._v("#")]),e._v(" FileMaker")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://FileMaker.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("FileMaker"),r("OutboundLink")],1),e._v(" is an open-source integrated Enterprise Resource Planning software. It is a generic ERP software used by manufacturers, distributors, and service companies.")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),r("p",[e._v("You can find authentication information for this node "),r("RouterLink",{attrs:{to:"/nodes/credentials/FileMaker/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),r("h2",{attrs:{id:"basic-operations"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),r("ul",[r("li",[e._v("Find Records")]),e._v(" "),r("li",[e._v("Get Records")]),e._v(" "),r("li",[e._v("Get Records by Id")]),e._v(" "),r("li",[e._v("Perform Script")]),e._v(" "),r("li",[e._v("Create Record")]),e._v(" "),r("li",[e._v("Edit Record")]),e._v(" "),r("li",[e._v("Duplicate Record")]),e._v(" "),r("li",[e._v("Delete Record")])]),e._v(" "),r("h2",{attrs:{id:"example-usage"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),r("p",[e._v("This workflow allows you to create, update, and retrieve a record from FileMaker. You can also find the "),r("a",{attrs:{href:"https://n8n.io/workflows/1068",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),r("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow uses the following nodes.")]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),r("li",[r("a",{attrs:{href:""}},[e._v("FileMaker")])])]),e._v(" "),r("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(920),alt:"A workflow with the FileMaker node"}})]),e._v(" "),r("h3",{attrs:{id:"_1-start-node"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),r("p",[e._v("The Start node exists by default when you create a new workflow.")]),e._v(" "),r("h3",{attrs:{id:"_2-filemaker-node"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-filemaker-node"}},[e._v("#")]),e._v(" 2. FileMaker node")]),e._v(" "),r("p",[e._v("This node will create a new record in FileMaker.")]),e._v(" "),r("ol",[r("li",[e._v("First of all, you'll have to enter credentials for the FileMaker node. You can find out how to do that "),r("RouterLink",{attrs:{to:"/nodes/credentials/FileMaker/"}},[e._v("here")]),e._v(".")],1),e._v(" "),r("li",[e._v("Select 'Create Record' from the "),r("em",[r("strong",[e._v("Action")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Select a layout from the "),r("em",[r("strong",[e._v("Layout")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Click on the "),r("em",[r("strong",[e._v("Add Field")])]),e._v(" button.")]),e._v(" "),r("li",[e._v("Select a field from the "),r("em",[r("strong",[e._v("Field")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Enter a value in the "),r("em",[r("strong",[e._v("Value")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Click on the "),r("em",[r("strong",[e._v("Add field")])]),e._v(" button.")]),e._v(" "),r("li",[e._v("Select a field from the "),r("em",[r("strong",[e._v("Field")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Enter a value in the "),r("em",[r("strong",[e._v("Value")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),r("p",[e._v("In the screenshot below, you will notice that the node creates a new record in FileMaker.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(921),alt:"Using the FileMaker node to create a new record"}})]),e._v(" "),r("h3",{attrs:{id:"_3-filemaker1-node"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-filemaker1-node"}},[e._v("#")]),e._v(" 3. FileMaker1 node")]),e._v(" "),r("p",[e._v("This node will add a new field to the record that we created in the previous node.")]),e._v(" "),r("div",{pre:!0},[r("ol",[r("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),r("li",[e._v("Select 'Edit Record' from the "),r("em",[r("strong",[e._v("Action")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Select a layout from the "),r("em",[r("strong",[e._v("Layout")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Click on the gears icon next to the "),r("em",[r("strong",[e._v("Record Id")])]),e._v(" field and click on "),r("em",[r("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),r("li",[e._v("Select the following in the "),r("em",[r("strong",[e._v("Variable Selector")])]),e._v(" section: Current Node > Input Data > JSON > response > recordId. You can also add the following expression: "),r("code",[e._v('{{$json["response"]["recordId"]}}')]),e._v(".")]),e._v(" "),r("li",[e._v("Click on the gears icon next to the "),r("em",[r("strong",[e._v("Mod Id")])]),e._v(" field and click on "),r("em",[r("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),r("li",[e._v("Select the following in the "),r("em",[r("strong",[e._v("Variable Selector")])]),e._v(" section: Current Node > Input Data > JSON > response > modId. You can also add the following expression: "),r("code",[e._v('{{$json["response"]["modId"]}}')]),e._v(".")]),e._v(" "),r("li",[e._v("Click on the "),r("em",[r("strong",[e._v("Add field")])]),e._v(" button.")]),e._v(" "),r("li",[e._v("Select a field from the "),r("em",[r("strong",[e._v("Field")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Enter a value in the "),r("em",[r("strong",[e._v("Value")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),r("p",[e._v("In the screenshot below, you will notice that the node adds the "),r("code",[e._v("address_country")]),e._v(" field to the record that we created in the previous node.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(922),alt:"Using the FileMaker node to update a record"}})]),e._v(" "),r("h3",{attrs:{id:"_4-filemaker2-node"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-filemaker2-node"}},[e._v("#")]),e._v(" 4. FileMaker2 node")]),e._v(" "),r("p",[e._v("This node will get the information about the record that we created earlier.")]),e._v(" "),r("div",{pre:!0},[r("ol",[r("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),r("li",[e._v("Select 'Get Records by Id' from the "),r("em",[r("strong",[e._v("Action")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Select a layout from the "),r("em",[r("strong",[e._v("Layout")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Click on the gears icon next to the "),r("em",[r("strong",[e._v("Record Id")])]),e._v(" field and click on "),r("em",[r("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),r("li",[e._v("Select the following in the "),r("em",[r("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > FileMaker > Output Data > JSON > response > recordId. You can also add the following expression: "),r("code",[e._v('{{$node["FileMaker"].json["response"]["recordId"]}}')]),e._v(".")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),r("p",[e._v("In the screenshot below, you will notice that the node returns the information of the record.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(923),alt:"Using the FileMaker node to return the information a record"}})])])}),[],!1,null,null,null);t.default=n.exports},920:function(e,t,o){e.exports=o.p+"assets/img/workflow.6f8a7308.png"},921:function(e,t,o){e.exports=o.p+"assets/img/FileMaker_node.d0b2cf0e.png"},922:function(e,t,o){e.exports=o.p+"assets/img/FileMaker1_node.923cbea3.png"},923:function(e,t,o){e.exports=o.p+"assets/img/FileMaker2_node.e2951300.png"}}]);