jQuery("#simulation")
  .on("click", ".t-c6c716c7-1186-4ff9-8902-e9f54335788d .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#t-Label_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Label_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/c95676cf-ac24-429b-82c5-9e3a0970deea"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Label_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/a0131635-5bdf-4983-b50b-8781316d28fb"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusout", ".t-c6c716c7-1186-4ff9-8902-e9f54335788d .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#t-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 1000
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".t-c6c716c7-1186-4ff9-8902-e9f54335788d .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#t-Label_1") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-c6c716c7-1186-4ff9-8902-e9f54335788d #t-Label_1": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#t-c6c716c7-1186-4ff9-8902-e9f54335788d #t-Label_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#t-c6c716c7-1186-4ff9-8902-e9f54335788d #t-Label_1 span": {
                      "attributes": {
                        "color": "#E4E4E4",
                        "text-align": "center",
                        "text-decoration": "underline",
                        "font-family": "Arial,Arial",
                        "font-size": "9.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Input_2") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-c6c716c7-1186-4ff9-8902-e9f54335788d #t-Input_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "9.0pt"
                      }
                    }
                  },{
                    "#t-c6c716c7-1186-4ff9-8902-e9f54335788d #t-Input_2 input": {
                      "attributes": {
                        "color": "#E4E4E4",
                        "text-align": "center",
                        "text-decoration": "underline",
                        "font-family": "Arial,Arial",
                        "font-size": "9.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Label_4") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-c6c716c7-1186-4ff9-8902-e9f54335788d #t-Label_4": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#t-c6c716c7-1186-4ff9-8902-e9f54335788d #t-Label_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#t-c6c716c7-1186-4ff9-8902-e9f54335788d #t-Label_4 span": {
                      "attributes": {
                        "color": "#E4E4E4",
                        "text-align": "center",
                        "text-decoration": "underline",
                        "font-family": "Arial,Arial",
                        "font-size": "9.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Label_6") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-c6c716c7-1186-4ff9-8902-e9f54335788d #t-Label_6": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#t-c6c716c7-1186-4ff9-8902-e9f54335788d #t-Label_6 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#t-c6c716c7-1186-4ff9-8902-e9f54335788d #t-Label_6 span": {
                      "attributes": {
                        "color": "#E4E4E4",
                        "text-align": "center",
                        "text-decoration": "underline",
                        "font-family": "Arial,Arial",
                        "font-size": "9.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".t-c6c716c7-1186-4ff9-8902-e9f54335788d .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#t-Label_1")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Input_2")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Label_4")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Label_6")) {
      jEvent.undoCases(jFirer);
    }
  });