// @ts-nocheck

const getRandom = () => (Math.random() + 1).toString(36).substring(7)

const getReference = (id) => ({
    "id": `${id}`,
    "metadata": {
      "name": `${id}`,
      "kind": "WorkflowTemplate"
    },
    "source": {
      "path": "path/path/resource2.yaml"
    },
    "desiredManifest": "YAML STRING",
    "syncStatus": "Synced",
    "healthStatus": "Degraded",
    "referencedBy": [],
    "references": []
})

const stresstest = (withoutSelf) => {
  for (let index = 0; index < 200; index++) {
    withoutSelf.data.workflowTemplate.references.push(getReference(getRandom())) 
    withoutSelf.data.workflowTemplate.referencedBy.push(getReference(getRandom())) 
  }

  return withoutSelf
}

export const withoutSelf = {
  "data": {
    "workflowTemplate": {
      "id": "id1",
      "metadata": {
        "name": "demo-workflow-template",
        "kind": "WorkflowTemplate"
      },
      "source": {
        "path": "path/path/resource.yaml"
      },
      "desiredManifest": "YAML STRING",
      "syncStatus": "Synced",
      "healthStatus": "Degraded",
      "referencedBy": [
        {
          "id": "id2",
          "metadata": {
            "name": "demo-workflow-template1",
            "kind": "WorkflowTemplate"
          },
          "source": {
            "path": "path/path/resource1.yaml"
          },
          "desiredManifest": "YAML STRING",
          "syncStatus": "Synced",
          "healthStatus": "Degraded",
          "referencedBy": [],
          "references": []
        }
      ],
      "references": [
        {
          "id": "id3",
          "metadata": {
            "name": "demo-workflow-template2",
            "kind": "WorkflowTemplate"
          },
          "source": {
            "path": "path/path/resource2.yaml"
          },
          "desiredManifest": "YAML STRING",
          "syncStatus": "Synced",
          "healthStatus": "Degraded",
          "referencedBy": [],
          "references": []
        },
        {
          "id": "id4",
          "metadata": {
            "name": "demo-workflow-template3",
            "kind": "WorkflowTemplate"
          },
          "source": {
            "path": "path/path/resource3.yaml"
          },
          "desiredManifest": "YAML STRING",
          "syncStatus": "Synced",
          "healthStatus": "Degraded",
          "referencedBy": [
              {
                  "id": "id10",
                  "metadata": {
                    "name": "demo-workflow-template10",
                    "kind": "WorkflowTemplate"
                  },
                  "source": {
                    "path": "path/path/resource10.yaml"
                  },
                  "desiredManifest": "YAML STRING",
                  "syncStatus": "Synced",
                  "healthStatus": "Degraded",
                  "referencedBy": [],
                  "references": []
                },
                {
                  "id": "id11",
                  "metadata": {
                    "name": "demo-workflow-template11",
                    "kind": "WorkflowTemplate"
                  },
                  "source": {
                    "path": "path/path/resource11.yaml"
                  },
                  "desiredManifest": "YAML STRING",
                  "syncStatus": "Synced",
                  "healthStatus": "Degraded",
                  "referencedBy": [],
                  "references": []
                }
          ],
          "references": [
              {
                "id": "id6",
                "metadata": {
                  "name": "demo-workflow-template6",
                  "kind": "WorkflowTemplate"
                },
                "source": {
                  "path": "path/path/resource6.yaml"
                },
                "desiredManifest": "YAML STRING",
                "syncStatus": "Synced",
                "healthStatus": "Degraded",
                "referencedBy": [],
                "references": []
              },
              {
                "id": "id7",
                "metadata": {
                  "name": "demo-workflow-template7",
                  "kind": "WorkflowTemplate"
                },
                "source": {
                  "path": "path/path/resource7.yaml"
                },
                "desiredManifest": "YAML STRING",
                "syncStatus": "Synced",
                "healthStatus": "Degraded",
                "referencedBy": [],
                "references": []
              }
            ]
        }
      ]
    }
  }
}

export const withoutSelfStress = stresstest({
    "data": {
      "workflowTemplate": {
        "id": "id1",
        "metadata": {
          "name": "demo-workflow-template",
          "kind": "WorkflowTemplate"
        },
        "source": {
          "path": "path/path/resource.yaml"
        },
        "desiredManifest": "YAML STRING",
        "syncStatus": "Synced",
        "healthStatus": "Degraded",
        "referencedBy": [
          {
            "id": "id2",
            "metadata": {
              "name": "demo-workflow-template1",
              "kind": "WorkflowTemplate"
            },
            "source": {
              "path": "path/path/resource1.yaml"
            },
            "desiredManifest": "YAML STRING",
            "syncStatus": "Synced",
            "healthStatus": "Degraded",
            "referencedBy": [],
            "references": []
          }
        ],
        "references": [
          {
            "id": "id3",
            "metadata": {
              "name": "demo-workflow-template2",
              "kind": "WorkflowTemplate"
            },
            "source": {
              "path": "path/path/resource2.yaml"
            },
            "desiredManifest": "YAML STRING",
            "syncStatus": "Synced",
            "healthStatus": "Degraded",
            "referencedBy": [],
            "references": []
          },
          {
            "id": "id4",
            "metadata": {
              "name": "demo-workflow-template3",
              "kind": "WorkflowTemplate"
            },
            "source": {
              "path": "path/path/resource3.yaml"
            },
            "desiredManifest": "YAML STRING",
            "syncStatus": "Synced",
            "healthStatus": "Degraded",
            "referencedBy": [
                {
                    "id": "id10",
                    "metadata": {
                      "name": "demo-workflow-template10",
                      "kind": "WorkflowTemplate"
                    },
                    "source": {
                      "path": "path/path/resource10.yaml"
                    },
                    "desiredManifest": "YAML STRING",
                    "syncStatus": "Synced",
                    "healthStatus": "Degraded",
                    "referencedBy": [],
                    "references": []
                  },
                  {
                    "id": "id11",
                    "metadata": {
                      "name": "demo-workflow-template11",
                      "kind": "WorkflowTemplate"
                    },
                    "source": {
                      "path": "path/path/resource11.yaml"
                    },
                    "desiredManifest": "YAML STRING",
                    "syncStatus": "Synced",
                    "healthStatus": "Degraded",
                    "referencedBy": [],
                    "references": []
                  }
            ],
            "references": [
                {
                  "id": "id6",
                  "metadata": {
                    "name": "demo-workflow-template6",
                    "kind": "WorkflowTemplate"
                  },
                  "source": {
                    "path": "path/path/resource6.yaml"
                  },
                  "desiredManifest": "YAML STRING",
                  "syncStatus": "Synced",
                  "healthStatus": "Degraded",
                  "referencedBy": [],
                  "references": []
                },
                {
                  "id": "id7",
                  "metadata": {
                    "name": "demo-workflow-template7",
                    "kind": "WorkflowTemplate"
                  },
                  "source": {
                    "path": "path/path/resource7.yaml"
                  },
                  "desiredManifest": "YAML STRING",
                  "syncStatus": "Synced",
                  "healthStatus": "Degraded",
                  "referencedBy": [],
                  "references": []
                }
              ]
          }
        ]
      }
    }
  })

  export const transfromData = (graph) => {
      const flatNodesList = []
      const flatEdgesList = []


      const buildReferencesBy =(id, references) => {
        references.forEach(element => {
            if(element.referencedBy.length) {
              buildReferencesBy(element.id, element.referencedBy)
            }   

            if(element.references.length) {
                buildReferences(element.id, element.references)
            }    

            flatNodesList.push(element)
            flatEdgesList.push({source: element.id, target:id})

        });
      }
      
      const buildReferences =(id, references) => {
          references.forEach(element => {
              if(element.references.length) {
                buildReferences(element.id, element.references)
              }   
              
              if(element.referencedBy.length) {
                buildReferencesBy(element.id, element.referencedBy)
              }   

              flatNodesList.push(element)
              flatEdgesList.push({source: id, target:element.id})

          });
      }

    if (graph.references.length) {
        flatNodesList.push(graph)
        buildReferences(graph.id, graph.references)
        buildReferencesBy(graph.id, graph.referencedBy)
    }

    return {
        nodes: flatNodesList,
        edges: flatEdgesList
    }
  }