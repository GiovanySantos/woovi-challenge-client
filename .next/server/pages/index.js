"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/__generated__/gql.ts":
/*!**********************************!*\
  !*** ./src/__generated__/gql.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gql\": () => (/* binding */ gql)\n/* harmony export */ });\n/* harmony import */ var _graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graphql */ \"./src/__generated__/graphql.ts\");\n/* eslint-disable */ \n/**\n * Map of all GraphQL operations in the project.\n *\n * This map has several performance disadvantages:\n * 1. It is not tree-shakeable, so it will include all operations in the project.\n * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.\n * 3. It does not support dead code elimination, so it will add unused operations.\n *\n * Therefore it is highly recommended to use the babel or swc plugin for production.\n */ const documents = {\n    \"\\n  query GetContentKeys($keyList: [String]!, $lang: String!) {\\n    contentKeys(keyList: $keyList, lang: $lang) {\\n      key\\n      content\\n    }\\n  }\\n\": _graphql__WEBPACK_IMPORTED_MODULE_0__.GetContentKeysDocument\n};\nfunction gql(source) {\n    return documents[source] ?? {};\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvX19nZW5lcmF0ZWRfXy9ncWwudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxrQkFBa0IsR0FDaUI7QUFHbkM7Ozs7Ozs7OztDQVNDLEdBQ0QsTUFBTUMsWUFBWTtJQUNkLDhKQUE4SkQsNERBQTRCO0FBQzlMO0FBcUJPLFNBQVNHLElBQUlDLE1BQWMsRUFBRTtJQUNsQyxPQUFPLFNBQWtCLENBQUNBLE9BQU8sSUFBSSxDQUFDO0FBQ3hDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93b292aS8uL3NyYy9fX2dlbmVyYXRlZF9fL2dxbC50cz80NGE4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlICovXG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuL2dyYXBocWwnO1xuaW1wb3J0IHsgVHlwZWREb2N1bWVudE5vZGUgYXMgRG9jdW1lbnROb2RlIH0gZnJvbSAnQGdyYXBocWwtdHlwZWQtZG9jdW1lbnQtbm9kZS9jb3JlJztcblxuLyoqXG4gKiBNYXAgb2YgYWxsIEdyYXBoUUwgb3BlcmF0aW9ucyBpbiB0aGUgcHJvamVjdC5cbiAqXG4gKiBUaGlzIG1hcCBoYXMgc2V2ZXJhbCBwZXJmb3JtYW5jZSBkaXNhZHZhbnRhZ2VzOlxuICogMS4gSXQgaXMgbm90IHRyZWUtc2hha2VhYmxlLCBzbyBpdCB3aWxsIGluY2x1ZGUgYWxsIG9wZXJhdGlvbnMgaW4gdGhlIHByb2plY3QuXG4gKiAyLiBJdCBpcyBub3QgbWluaWZpYWJsZSwgc28gdGhlIHN0cmluZyBvZiBhIEdyYXBoUUwgcXVlcnkgd2lsbCBiZSBtdWx0aXBsZSB0aW1lcyBpbnNpZGUgdGhlIGJ1bmRsZS5cbiAqIDMuIEl0IGRvZXMgbm90IHN1cHBvcnQgZGVhZCBjb2RlIGVsaW1pbmF0aW9uLCBzbyBpdCB3aWxsIGFkZCB1bnVzZWQgb3BlcmF0aW9ucy5cbiAqXG4gKiBUaGVyZWZvcmUgaXQgaXMgaGlnaGx5IHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgYmFiZWwgb3Igc3djIHBsdWdpbiBmb3IgcHJvZHVjdGlvbi5cbiAqL1xuY29uc3QgZG9jdW1lbnRzID0ge1xuICAgIFwiXFxuICBxdWVyeSBHZXRDb250ZW50S2V5cygka2V5TGlzdDogW1N0cmluZ10hLCAkbGFuZzogU3RyaW5nISkge1xcbiAgICBjb250ZW50S2V5cyhrZXlMaXN0OiAka2V5TGlzdCwgbGFuZzogJGxhbmcpIHtcXG4gICAgICBrZXlcXG4gICAgICBjb250ZW50XFxuICAgIH1cXG4gIH1cXG5cIjogdHlwZXMuR2V0Q29udGVudEtleXNEb2N1bWVudCxcbn07XG5cbi8qKlxuICogVGhlIGdxbCBmdW5jdGlvbiBpcyB1c2VkIHRvIHBhcnNlIEdyYXBoUUwgcXVlcmllcyBpbnRvIGEgZG9jdW1lbnQgdGhhdCBjYW4gYmUgdXNlZCBieSBHcmFwaFFMIGNsaWVudHMuXG4gKlxuICpcbiAqIEBleGFtcGxlXG4gKiBgYGB0c1xuICogY29uc3QgcXVlcnkgPSBncWwoYHF1ZXJ5IEdldFVzZXIoJGlkOiBJRCEpIHsgdXNlcihpZDogJGlkKSB7IG5hbWUgfSB9YCk7XG4gKiBgYGBcbiAqXG4gKiBUaGUgcXVlcnkgYXJndW1lbnQgaXMgdW5rbm93biFcbiAqIFBsZWFzZSByZWdlbmVyYXRlIHRoZSB0eXBlcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdxbChzb3VyY2U6IHN0cmluZyk6IHVua25vd247XG5cbi8qKlxuICogVGhlIGdxbCBmdW5jdGlvbiBpcyB1c2VkIHRvIHBhcnNlIEdyYXBoUUwgcXVlcmllcyBpbnRvIGEgZG9jdW1lbnQgdGhhdCBjYW4gYmUgdXNlZCBieSBHcmFwaFFMIGNsaWVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBncWwoc291cmNlOiBcIlxcbiAgcXVlcnkgR2V0Q29udGVudEtleXMoJGtleUxpc3Q6IFtTdHJpbmddISwgJGxhbmc6IFN0cmluZyEpIHtcXG4gICAgY29udGVudEtleXMoa2V5TGlzdDogJGtleUxpc3QsIGxhbmc6ICRsYW5nKSB7XFxuICAgICAga2V5XFxuICAgICAgY29udGVudFxcbiAgICB9XFxuICB9XFxuXCIpOiAodHlwZW9mIGRvY3VtZW50cylbXCJcXG4gIHF1ZXJ5IEdldENvbnRlbnRLZXlzKCRrZXlMaXN0OiBbU3RyaW5nXSEsICRsYW5nOiBTdHJpbmchKSB7XFxuICAgIGNvbnRlbnRLZXlzKGtleUxpc3Q6ICRrZXlMaXN0LCBsYW5nOiAkbGFuZykge1xcbiAgICAgIGtleVxcbiAgICAgIGNvbnRlbnRcXG4gICAgfVxcbiAgfVxcblwiXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdxbChzb3VyY2U6IHN0cmluZykge1xuICByZXR1cm4gKGRvY3VtZW50cyBhcyBhbnkpW3NvdXJjZV0gPz8ge307XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZTxURG9jdW1lbnROb2RlIGV4dGVuZHMgRG9jdW1lbnROb2RlPGFueSwgYW55Pj4gPSBURG9jdW1lbnROb2RlIGV4dGVuZHMgRG9jdW1lbnROb2RlPCAgaW5mZXIgVFR5cGUsICBhbnk+ICA/IFRUeXBlICA6IG5ldmVyOyJdLCJuYW1lcyI6WyJ0eXBlcyIsImRvY3VtZW50cyIsIkdldENvbnRlbnRLZXlzRG9jdW1lbnQiLCJncWwiLCJzb3VyY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/__generated__/gql.ts\n");

/***/ }),

/***/ "./src/__generated__/graphql.ts":
/*!**************************************!*\
  !*** ./src/__generated__/graphql.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GetContentKeysDocument\": () => (/* binding */ GetContentKeysDocument)\n/* harmony export */ });\n/* eslint-disable */ const GetContentKeysDocument = {\n    \"kind\": \"Document\",\n    \"definitions\": [\n        {\n            \"kind\": \"OperationDefinition\",\n            \"operation\": \"query\",\n            \"name\": {\n                \"kind\": \"Name\",\n                \"value\": \"GetContentKeys\"\n            },\n            \"variableDefinitions\": [\n                {\n                    \"kind\": \"VariableDefinition\",\n                    \"variable\": {\n                        \"kind\": \"Variable\",\n                        \"name\": {\n                            \"kind\": \"Name\",\n                            \"value\": \"keyList\"\n                        }\n                    },\n                    \"type\": {\n                        \"kind\": \"NonNullType\",\n                        \"type\": {\n                            \"kind\": \"ListType\",\n                            \"type\": {\n                                \"kind\": \"NamedType\",\n                                \"name\": {\n                                    \"kind\": \"Name\",\n                                    \"value\": \"String\"\n                                }\n                            }\n                        }\n                    }\n                },\n                {\n                    \"kind\": \"VariableDefinition\",\n                    \"variable\": {\n                        \"kind\": \"Variable\",\n                        \"name\": {\n                            \"kind\": \"Name\",\n                            \"value\": \"lang\"\n                        }\n                    },\n                    \"type\": {\n                        \"kind\": \"NonNullType\",\n                        \"type\": {\n                            \"kind\": \"NamedType\",\n                            \"name\": {\n                                \"kind\": \"Name\",\n                                \"value\": \"String\"\n                            }\n                        }\n                    }\n                }\n            ],\n            \"selectionSet\": {\n                \"kind\": \"SelectionSet\",\n                \"selections\": [\n                    {\n                        \"kind\": \"Field\",\n                        \"name\": {\n                            \"kind\": \"Name\",\n                            \"value\": \"contentKeys\"\n                        },\n                        \"arguments\": [\n                            {\n                                \"kind\": \"Argument\",\n                                \"name\": {\n                                    \"kind\": \"Name\",\n                                    \"value\": \"keyList\"\n                                },\n                                \"value\": {\n                                    \"kind\": \"Variable\",\n                                    \"name\": {\n                                        \"kind\": \"Name\",\n                                        \"value\": \"keyList\"\n                                    }\n                                }\n                            },\n                            {\n                                \"kind\": \"Argument\",\n                                \"name\": {\n                                    \"kind\": \"Name\",\n                                    \"value\": \"lang\"\n                                },\n                                \"value\": {\n                                    \"kind\": \"Variable\",\n                                    \"name\": {\n                                        \"kind\": \"Name\",\n                                        \"value\": \"lang\"\n                                    }\n                                }\n                            }\n                        ],\n                        \"selectionSet\": {\n                            \"kind\": \"SelectionSet\",\n                            \"selections\": [\n                                {\n                                    \"kind\": \"Field\",\n                                    \"name\": {\n                                        \"kind\": \"Name\",\n                                        \"value\": \"key\"\n                                    }\n                                },\n                                {\n                                    \"kind\": \"Field\",\n                                    \"name\": {\n                                        \"kind\": \"Name\",\n                                        \"value\": \"content\"\n                                    }\n                                }\n                            ]\n                        }\n                    }\n                ]\n            }\n        }\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvX19nZW5lcmF0ZWRfXy9ncmFwaHFsLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxrQkFBa0IsR0EwQ1gsTUFBTUEseUJBQXlCO0lBQUMsUUFBTztJQUFXLGVBQWM7UUFBQztZQUFDLFFBQU87WUFBc0IsYUFBWTtZQUFRLFFBQU87Z0JBQUMsUUFBTztnQkFBTyxTQUFRO1lBQWdCO1lBQUUsdUJBQXNCO2dCQUFDO29CQUFDLFFBQU87b0JBQXFCLFlBQVc7d0JBQUMsUUFBTzt3QkFBVyxRQUFPOzRCQUFDLFFBQU87NEJBQU8sU0FBUTt3QkFBUztvQkFBQztvQkFBRSxRQUFPO3dCQUFDLFFBQU87d0JBQWMsUUFBTzs0QkFBQyxRQUFPOzRCQUFXLFFBQU87Z0NBQUMsUUFBTztnQ0FBWSxRQUFPO29DQUFDLFFBQU87b0NBQU8sU0FBUTtnQ0FBUTs0QkFBQzt3QkFBQztvQkFBQztnQkFBQztnQkFBRTtvQkFBQyxRQUFPO29CQUFxQixZQUFXO3dCQUFDLFFBQU87d0JBQVcsUUFBTzs0QkFBQyxRQUFPOzRCQUFPLFNBQVE7d0JBQU07b0JBQUM7b0JBQUUsUUFBTzt3QkFBQyxRQUFPO3dCQUFjLFFBQU87NEJBQUMsUUFBTzs0QkFBWSxRQUFPO2dDQUFDLFFBQU87Z0NBQU8sU0FBUTs0QkFBUTt3QkFBQztvQkFBQztnQkFBQzthQUFFO1lBQUMsZ0JBQWU7Z0JBQUMsUUFBTztnQkFBZSxjQUFhO29CQUFDO3dCQUFDLFFBQU87d0JBQVEsUUFBTzs0QkFBQyxRQUFPOzRCQUFPLFNBQVE7d0JBQWE7d0JBQUUsYUFBWTs0QkFBQztnQ0FBQyxRQUFPO2dDQUFXLFFBQU87b0NBQUMsUUFBTztvQ0FBTyxTQUFRO2dDQUFTO2dDQUFFLFNBQVE7b0NBQUMsUUFBTztvQ0FBVyxRQUFPO3dDQUFDLFFBQU87d0NBQU8sU0FBUTtvQ0FBUztnQ0FBQzs0QkFBQzs0QkFBRTtnQ0FBQyxRQUFPO2dDQUFXLFFBQU87b0NBQUMsUUFBTztvQ0FBTyxTQUFRO2dDQUFNO2dDQUFFLFNBQVE7b0NBQUMsUUFBTztvQ0FBVyxRQUFPO3dDQUFDLFFBQU87d0NBQU8sU0FBUTtvQ0FBTTtnQ0FBQzs0QkFBQzt5QkFBRTt3QkFBQyxnQkFBZTs0QkFBQyxRQUFPOzRCQUFlLGNBQWE7Z0NBQUM7b0NBQUMsUUFBTztvQ0FBUSxRQUFPO3dDQUFDLFFBQU87d0NBQU8sU0FBUTtvQ0FBSztnQ0FBQztnQ0FBRTtvQ0FBQyxRQUFPO29DQUFRLFFBQU87d0NBQUMsUUFBTzt3Q0FBTyxTQUFRO29DQUFTO2dDQUFDOzZCQUFFO3dCQUFBO29CQUFDO2lCQUFFO1lBQUE7UUFBQztLQUFFO0FBQUEsRUFBZ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93b292aS8uL3NyYy9fX2dlbmVyYXRlZF9fL2dyYXBocWwudHM/ZGY1MyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuaW1wb3J0IHsgVHlwZWREb2N1bWVudE5vZGUgYXMgRG9jdW1lbnROb2RlIH0gZnJvbSAnQGdyYXBocWwtdHlwZWQtZG9jdW1lbnQtbm9kZS9jb3JlJztcbmV4cG9ydCB0eXBlIE1heWJlPFQ+ID0gVCB8IG51bGw7XG5leHBvcnQgdHlwZSBJbnB1dE1heWJlPFQ+ID0gTWF5YmU8VD47XG5leHBvcnQgdHlwZSBFeGFjdDxUIGV4dGVuZHMgeyBba2V5OiBzdHJpbmddOiB1bmtub3duIH0+ID0geyBbSyBpbiBrZXlvZiBUXTogVFtLXSB9O1xuZXhwb3J0IHR5cGUgTWFrZU9wdGlvbmFsPFQsIEsgZXh0ZW5kcyBrZXlvZiBUPiA9IE9taXQ8VCwgSz4gJiB7IFtTdWJLZXkgaW4gS10/OiBNYXliZTxUW1N1YktleV0+IH07XG5leHBvcnQgdHlwZSBNYWtlTWF5YmU8VCwgSyBleHRlbmRzIGtleW9mIFQ+ID0gT21pdDxULCBLPiAmIHsgW1N1YktleSBpbiBLXTogTWF5YmU8VFtTdWJLZXldPiB9O1xuLyoqIEFsbCBidWlsdC1pbiBhbmQgY3VzdG9tIHNjYWxhcnMsIG1hcHBlZCB0byB0aGVpciBhY3R1YWwgdmFsdWVzICovXG5leHBvcnQgdHlwZSBTY2FsYXJzID0ge1xuICBJRDogc3RyaW5nO1xuICBTdHJpbmc6IHN0cmluZztcbiAgQm9vbGVhbjogYm9vbGVhbjtcbiAgSW50OiBudW1iZXI7XG4gIEZsb2F0OiBudW1iZXI7XG59O1xuXG5leHBvcnQgdHlwZSBDb250ZW50S2V5UmVzcG9uc2VUeXBlID0ge1xuICBfX3R5cGVuYW1lPzogJ0NvbnRlbnRLZXlSZXNwb25zZVR5cGUnO1xuICBjb250ZW50PzogTWF5YmU8U2NhbGFyc1snU3RyaW5nJ10+O1xuICBrZXk/OiBNYXliZTxTY2FsYXJzWydTdHJpbmcnXT47XG59O1xuXG5leHBvcnQgdHlwZSBRdWVyeSA9IHtcbiAgX190eXBlbmFtZT86ICdRdWVyeSc7XG4gIGNvbnRlbnRLZXlzPzogTWF5YmU8QXJyYXk8TWF5YmU8Q29udGVudEtleVJlc3BvbnNlVHlwZT4+Pjtcbn07XG5cblxuZXhwb3J0IHR5cGUgUXVlcnlDb250ZW50S2V5c0FyZ3MgPSB7XG4gIGtleUxpc3Q6IEFycmF5PElucHV0TWF5YmU8U2NhbGFyc1snU3RyaW5nJ10+PjtcbiAgbGFuZzogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5leHBvcnQgdHlwZSBHZXRDb250ZW50S2V5c1F1ZXJ5VmFyaWFibGVzID0gRXhhY3Q8e1xuICBrZXlMaXN0OiBBcnJheTxJbnB1dE1heWJlPFNjYWxhcnNbJ1N0cmluZyddPj4gfCBJbnB1dE1heWJlPFNjYWxhcnNbJ1N0cmluZyddPjtcbiAgbGFuZzogU2NhbGFyc1snU3RyaW5nJ107XG59PjtcblxuXG5leHBvcnQgdHlwZSBHZXRDb250ZW50S2V5c1F1ZXJ5ID0geyBfX3R5cGVuYW1lPzogJ1F1ZXJ5JywgY29udGVudEtleXM/OiBBcnJheTx7IF9fdHlwZW5hbWU/OiAnQ29udGVudEtleVJlc3BvbnNlVHlwZScsIGtleT86IHN0cmluZyB8IG51bGwsIGNvbnRlbnQ/OiBzdHJpbmcgfCBudWxsIH0gfCBudWxsPiB8IG51bGwgfTtcblxuXG5leHBvcnQgY29uc3QgR2V0Q29udGVudEtleXNEb2N1bWVudCA9IHtcImtpbmRcIjpcIkRvY3VtZW50XCIsXCJkZWZpbml0aW9uc1wiOlt7XCJraW5kXCI6XCJPcGVyYXRpb25EZWZpbml0aW9uXCIsXCJvcGVyYXRpb25cIjpcInF1ZXJ5XCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIkdldENvbnRlbnRLZXlzXCJ9LFwidmFyaWFibGVEZWZpbml0aW9uc1wiOlt7XCJraW5kXCI6XCJWYXJpYWJsZURlZmluaXRpb25cIixcInZhcmlhYmxlXCI6e1wia2luZFwiOlwiVmFyaWFibGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwia2V5TGlzdFwifX0sXCJ0eXBlXCI6e1wia2luZFwiOlwiTm9uTnVsbFR5cGVcIixcInR5cGVcIjp7XCJraW5kXCI6XCJMaXN0VHlwZVwiLFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJTdHJpbmdcIn19fX19LHtcImtpbmRcIjpcIlZhcmlhYmxlRGVmaW5pdGlvblwiLFwidmFyaWFibGVcIjp7XCJraW5kXCI6XCJWYXJpYWJsZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJsYW5nXCJ9fSxcInR5cGVcIjp7XCJraW5kXCI6XCJOb25OdWxsVHlwZVwiLFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJTdHJpbmdcIn19fX1dLFwic2VsZWN0aW9uU2V0XCI6e1wia2luZFwiOlwiU2VsZWN0aW9uU2V0XCIsXCJzZWxlY3Rpb25zXCI6W3tcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImNvbnRlbnRLZXlzXCJ9LFwiYXJndW1lbnRzXCI6W3tcImtpbmRcIjpcIkFyZ3VtZW50XCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImtleUxpc3RcIn0sXCJ2YWx1ZVwiOntcImtpbmRcIjpcIlZhcmlhYmxlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImtleUxpc3RcIn19fSx7XCJraW5kXCI6XCJBcmd1bWVudFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJsYW5nXCJ9LFwidmFsdWVcIjp7XCJraW5kXCI6XCJWYXJpYWJsZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJsYW5nXCJ9fX1dLFwic2VsZWN0aW9uU2V0XCI6e1wia2luZFwiOlwiU2VsZWN0aW9uU2V0XCIsXCJzZWxlY3Rpb25zXCI6W3tcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImtleVwifX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiY29udGVudFwifX1dfX1dfX1dfSBhcyB1bmtub3duIGFzIERvY3VtZW50Tm9kZTxHZXRDb250ZW50S2V5c1F1ZXJ5LCBHZXRDb250ZW50S2V5c1F1ZXJ5VmFyaWFibGVzPjsiXSwibmFtZXMiOlsiR2V0Q29udGVudEtleXNEb2N1bWVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/__generated__/graphql.ts\n");

/***/ }),

/***/ "./src/pages/Landing.tsx":
/*!*******************************!*\
  !*** ./src/pages/Landing.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _generated_gql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../__generated__/gql */ \"./src/__generated__/gql.ts\");\n\n\n\n\nconst GET_CONTENT_KEYS = (0,_generated_gql__WEBPACK_IMPORTED_MODULE_3__.gql)(/* GraphQL */ `\n  query GetContentKeys($keyList: [String]!, $lang: String!) {\n    contentKeys(keyList: $keyList, lang: $lang) {\n      key\n      content\n    }\n  }\n`);\nconst Landing = ()=>{\n    const { loading , error , data  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery)(GET_CONTENT_KEYS, {\n        variables: {\n            keyList: [\n                \"home_title\"\n            ],\n            lang: \"pt_BR\"\n        }\n    });\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/giovanysantos/development/woovi/woovi-challenge-client/src/pages/Landing.tsx\",\n        lineNumber: 21,\n        columnNumber: 23\n    }, undefined);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: [\n            \"Error : \",\n            error.message\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/giovanysantos/development/woovi/woovi-challenge-client/src/pages/Landing.tsx\",\n        lineNumber: 22,\n        columnNumber: 21\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: JSON.stringify(data)\n        }, void 0, false, {\n            fileName: \"/Users/giovanysantos/development/woovi/woovi-challenge-client/src/pages/Landing.tsx\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/giovanysantos/development/woovi/woovi-challenge-client/src/pages/Landing.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Landing);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvTGFuZGluZy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2dCO0FBQ0M7QUFJM0MsTUFBTUcsbUJBQXdCRCxtREFBR0EsQ0FBQyxXQUFXLEdBQUcsQ0FBQzs7Ozs7OztBQU9qRCxDQUFDO0FBRUQsTUFBTUUsVUFBNEIsSUFBTTtJQUN0QyxNQUFNLEVBQUVDLFFBQU8sRUFBRUMsTUFBSyxFQUFFQyxLQUFJLEVBQUUsR0FBR04sd0RBQVFBLENBQUNFLGtCQUFrQjtRQUMxREssV0FBVztZQUFFQyxTQUFTO2dCQUFDO2FBQWE7WUFBRUMsTUFBTTtRQUFRO0lBQ3REO0lBRUEsSUFBSUwsU0FBUyxxQkFBTyw4REFBQ007a0JBQUU7Ozs7OztJQUN2QixJQUFJTCxPQUFPLHFCQUFPLDhEQUFDSzs7WUFBRTtZQUFTTCxNQUFNTSxPQUFPOzs7Ozs7O0lBRTNDLHFCQUNFLDhEQUFDQztrQkFDQyw0RUFBQ0M7c0JBQUlDLEtBQUtDLFNBQVMsQ0FBQ1Q7Ozs7Ozs7Ozs7O0FBRzFCO0FBRUEsaUVBQWVILE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93b292aS8uL3NyYy9wYWdlcy9MYW5kaW5nLnRzeD9jMmUzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgeyBncWwgfSBmcm9tIFwiLi4vX19nZW5lcmF0ZWRfXy9ncWxcIjtcblxuaW50ZXJmYWNlIElQcm9wcyB7fVxuXG5jb25zdCBHRVRfQ09OVEVOVF9LRVlTOiBhbnkgPSBncWwoLyogR3JhcGhRTCAqLyBgXG4gIHF1ZXJ5IEdldENvbnRlbnRLZXlzKCRrZXlMaXN0OiBbU3RyaW5nXSEsICRsYW5nOiBTdHJpbmchKSB7XG4gICAgY29udGVudEtleXMoa2V5TGlzdDogJGtleUxpc3QsIGxhbmc6ICRsYW5nKSB7XG4gICAgICBrZXlcbiAgICAgIGNvbnRlbnRcbiAgICB9XG4gIH1cbmApO1xuXG5jb25zdCBMYW5kaW5nOiBSZWFjdC5GQzxJUHJvcHM+ID0gKCkgPT4ge1xuICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0gPSB1c2VRdWVyeShHRVRfQ09OVEVOVF9LRVlTLCB7XG4gICAgdmFyaWFibGVzOiB7IGtleUxpc3Q6IFtcImhvbWVfdGl0bGVcIl0sIGxhbmc6IFwicHRfQlJcIiB9LFxuICB9KTtcblxuICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuICBpZiAoZXJyb3IpIHJldHVybiA8cD5FcnJvciA6IHtlcnJvci5tZXNzYWdlfTwvcD47XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPntKU09OLnN0cmluZ2lmeShkYXRhKX08L2gxPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGFuZGluZztcblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUXVlcnkiLCJncWwiLCJHRVRfQ09OVEVOVF9LRVlTIiwiTGFuZGluZyIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJ2YXJpYWJsZXMiLCJrZXlMaXN0IiwibGFuZyIsInAiLCJtZXNzYWdlIiwiZGl2IiwiaDEiLCJKU09OIiwic3RyaW5naWZ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/Landing.tsx\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Landing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Landing */ \"./src/pages/Landing.tsx\");\n\n\n\n\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_2__.ApolloClient({\n    uri: \"http://localhost:4000\",\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_2__.InMemoryCache()\n});\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_2__.ApolloProvider, {\n        client: client,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: \"flex items-center justify-center h-screen bg-white\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Landing__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/giovanysantos/development/woovi/woovi-challenge-client/src/pages/index.tsx\",\n                lineNumber: 14,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/giovanysantos/development/woovi/woovi-challenge-client/src/pages/index.tsx\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/giovanysantos/development/woovi/woovi-challenge-client/src/pages/index.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNtRDtBQUM3QztBQUVoQyxNQUFNSyxTQUFTLElBQUlKLHdEQUFZQSxDQUFDO0lBQzlCSyxLQUFLO0lBQ0xDLE9BQU8sSUFBSUwseURBQWFBO0FBQzFCO0FBRWUsU0FBU00sT0FBTztJQUM3QixxQkFDRSw4REFBQ0wsMERBQWNBO1FBQUNFLFFBQVFBO2tCQUN0Qiw0RUFBQ0k7WUFBS0MsV0FBVTtzQkFDZCw0RUFBQ04sZ0RBQU9BOzs7Ozs7Ozs7Ozs7Ozs7QUFJaEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dvb3ZpLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEFwb2xsb0NsaWVudCwgSW5NZW1vcnlDYWNoZSwgQXBvbGxvUHJvdmlkZXIgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCBMYW5kaW5nIGZyb20gXCIuL0xhbmRpbmdcIjtcblxuY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XG4gIHVyaTogXCJodHRwOi8vbG9jYWxob3N0OjQwMDBcIixcbiAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKCksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXtjbGllbnR9PlxuICAgICAgPG1haW4gY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBoLXNjcmVlbiBiZy13aGl0ZSc+XG4gICAgICAgIDxMYW5kaW5nIC8+XG4gICAgICA8L21haW4+XG4gICAgPC9BcG9sbG9Qcm92aWRlcj5cbiAgKTtcbn1cblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQXBvbGxvQ2xpZW50IiwiSW5NZW1vcnlDYWNoZSIsIkFwb2xsb1Byb3ZpZGVyIiwiTGFuZGluZyIsImNsaWVudCIsInVyaSIsImNhY2hlIiwiSG9tZSIsIm1haW4iLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();