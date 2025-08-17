define("UsrDesktop_8t8i178", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "Label_8mv4tjq",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 8,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_8mv4tjq_caption)#)#",
					"labelType": "large-2",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#FFFFFF",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"headingLevel": "label",
					"visible": true
				},
				"parentName": "FixedGridSlot_qwe4asds",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ChartWidget_0ms0kx8",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 8,
						"row": 2,
						"rowSpan": 4
					},
					"type": "crt.ChartWidget",
					"config": {
						"title": "#ResourceString(ChartWidget_0ms0kx8_title)#",
						"color": "dark-blue",
						"theme": "without-fill",
						"scales": {
							"stacked": false,
							"xAxis": {
								"name": "",
								"formatting": {
									"type": "string",
									"maxLinesCount": 2,
									"maxLineLength": 10
								}
							},
							"yAxis": {
								"name": "",
								"formatting": {
									"type": "number",
									"thousandAbbreviation": {
										"enabled": true
									}
								}
							}
						},
						"series": [
							{
								"color": "burnt-coral",
								"type": "line",
								"label": "#ResourceString(ChartWidget_0ms0kx8_series_0)#",
								"legend": {
									"enabled": false
								},
								"data": {
									"providing": {
										"attribute": "ChartWidget_0ms0kx8_SeriesData_ie9ijp3",
										"schemaName": "UsrBooking",
										"filters": {
											"filter": {
												"items": {
													"9ca61fb8-cf7d-462d-93ad-121952d25236": {
														"filterType": 1,
														"comparisonType": 3,
														"isEnabled": true,
														"trimDateTimeParameterToDate": true,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "UsrTripDate"
														},
														"isAggregative": false,
														"dataValueType": 7,
														"rightExpression": {
															"expressionType": 1,
															"functionType": 1,
															"macrosType": 4
														}
													},
													"e8ac3e0a-7e68-4671-b800-f821fdc8c08e": {
														"filterType": 1,
														"comparisonType": 3,
														"isEnabled": false,
														"trimDateTimeParameterToDate": true,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "UsrTripDate"
														},
														"isAggregative": false,
														"dataValueType": 7,
														"rightExpression": {
															"expressionType": 1,
															"functionType": 1,
															"macrosType": 3
														}
													},
													"columnIsNotNullFilter": {
														"comparisonType": 2,
														"filterType": 2,
														"isEnabled": true,
														"isNull": false,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "UsrTripDate"
														}
													}
												},
												"logicalOperation": 1,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "UsrBooking"
											},
											"filterAttributes": []
										},
										"aggregation": {
											"column": {
												"orderDirection": 0,
												"orderPosition": -1,
												"isVisible": true,
												"expression": {
													"expressionType": 1,
													"functionArgument": {
														"expressionType": 0,
														"columnPath": "UsrTripFare"
													},
													"functionType": 2,
													"aggregationType": 2,
													"aggregationEvalType": 0
												}
											}
										},
										"dependencies": [],
										"rowCount": 50,
										"grouping": {
											"type": "by-date-part",
											"column": [
												{
													"orderDirection": 0,
													"orderPosition": -1,
													"isVisible": true,
													"expression": {
														"expressionType": 1,
														"functionArgument": {
															"expressionType": 0,
															"columnPath": "UsrTripDate"
														},
														"functionType": 3,
														"datePartType": 6
													}
												}
											]
										}
									},
									"formatting": {
										"type": "number",
										"decimalSeparator": ".",
										"decimalPrecision": 2,
										"thousandSeparator": ","
									}
								},
								"dataLabel": {}
							}
						],
						"seriesOrder": {
							"type": "by-grouping-value",
							"direction": 1
						},
						"layout": {}
					},
					"sectionBindingColumnRecordId": "$Id"
				},
				"parentName": "FixedGridSlot_qwe4asds",
				"propertyName": "items",
				"index": 1
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"dataSources": {}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});