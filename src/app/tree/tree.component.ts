// @ts-nocheck

import { Component, OnInit, ComponentFactoryResolver, Injector, NgZone } from '@angular/core';
import G6 from '@antv/g6';
import { DynamicComponent } from '../dynamic/dynamic.component';

const data = {
  nodes: [
    {
      id: '2',
      dataType: 'alps',
      name: 'cf-api-eventsource',
      subtitle: 'alps_file2',
      status: true,
      conf: [
        {
          label: 'conf',
          value: 'pai_graph.conf',
        },
        {
          label: 'dot',
          value: 'pai_graph.dot',
        },
        {
          label: 'init',
          value: 'init.rc',
        },
      ],
    },
    {
      id: '3',
      dataType: 'alps',
      name: 'alps_file3',
      conf: [
        {
          label: 'conf',
          value: 'pai_graph.conf',
        },
        {
          label: 'dot',
          value: 'pai_graph.dot',
        },
        {
          label: 'init',
          value: 'init.rc',
        },
      ],
    },
    {
      id: '4',
      dataType: 'sql',
      name: 'sql_file1',
      conf: [
        {
          label: 'conf',
          value: 'pai_graph.conf',
        },
        {
          label: 'dot',
          value: 'pai_graph.dot',
        },
        {
          label: 'init',
          value: 'init.rc',
        },
      ],
    },
    {
      id: '5',
      dataType: 'sql',
      name: 'sql_file2',
      conf: [
        {
          label: 'conf',
          value: 'pai_graph.conf',
        },
        {
          label: 'dot',
          value: 'pai_graph.dot',
        },
        {
          label: 'init',
          value: 'init.rc',
        },
      ],
    },
    {
      id: '6',
      dataType: 'feature_etl',
      name: 'feature_etl_1',
      conf: [
        {
          label: 'conf',
          value: 'pai_graph.conf',
        },
        {
          label: 'dot',
          value: 'pai_graph.dot',
        },
        {
          label: 'init',
          value: 'init.rc',
        },
      ],
    },
    {
      id: '7',
      dataType: 'feature_etl',
      name: 'feature_etl_1',
      conf: [
        {
          label: 'conf',
          value: 'pai_graph.conf',
        },
        {
          label: 'dot',
          value: 'pai_graph.dot',
        },
        {
          label: 'init',
          value: 'init.rc',
        },
      ],
    },
    {
      id: '8',
      dataType: 'feature_extractor',
      name: 'feature_extractor',
      conf: [
        {
          label: 'conf',
          value: 'pai_graph.conf',
        },
        {
          label: 'dot',
          value: 'pai_graph.dot',
        },
        {
          label: 'init',
          value: 'init.rc',
        },
      ],
    },
  ],
  edges: [
    {
      source: '2',
      target: '4',
    },
    {
      source: '3',
      target: '4',
    },
    {
      source: '4',
      target: '5',
    },
    {
      source: '5',
      target: '6',
    },
    {
      source: '6',
      target: '7',
    },
    {
      source: '6',
      target: '8',
    },
    {
      source: '8',
      target: '5',
    },
  ],
};

const data2 = {
  nodes: [
    {
      id: '2',
      dataType: 'alps',
      name: 'alps_file2',
      conf: [
        {
          label: 'conf',
          value: 'pai_graph.conf',
        },
        {
          label: 'dot',
          value: 'pai_graph.dot',
        },
        {
          label: 'init',
          value: 'init.rc',
        },
      ],
    },
    {
      id: '3',
      dataType: 'alps',
      name: 'alps_file3',
      conf: [
        {
          label: 'conf',
          value: 'pai_graph.conf',
        },
        {
          label: 'dot',
          value: 'pai_graph.dot',
        },
        {
          label: 'init',
          value: 'init.rc',
        },
      ],
    },
    {
      id: '4',
      dataType: 'sql',
      name: 'sql_file1',
      conf: [
        {
          label: 'conf',
          value: 'pai_graph.conf',
        },
        {
          label: 'dot',
          value: 'pai_graph.dot',
        },
        {
          label: 'init',
          value: 'init.rc',
        },
      ],
    },
    {
      id: '5',
      dataType: 'sql',
      name: 'sql_file2',
      conf: [
        {
          label: 'conf',
          value: 'pai_graph.conf',
        },
        {
          label: 'dot',
          value: 'pai_graph.dot',
        },
        {
          label: 'init',
          value: 'init.rc',
        },
      ],
    },
    {
      id: '6',
      dataType: 'feature_etl',
      name: 'feature_etl_1',
      conf: [
        {
          label: 'conf',
          value: 'pai_graph.conf',
        },
        {
          label: 'dot',
          value: 'pai_graph.dot',
        },
        {
          label: 'init',
          value: 'init.rc',
        },
      ],
    },
    {
      id: '7',
      dataType: 'feature_etl',
      name: 'feature_etl_1',
      conf: [
        {
          label: 'conf',
          value: 'pai_graph.conf',
        },
        {
          label: 'dot',
          value: 'pai_graph.dot',
        },
        {
          label: 'init',
          value: 'init.rc',
        },
      ],
    },
    {
      id: '8',
      dataType: 'feature_extractor',
      name: 'feature_extractor',
      conf: [
        {
          label: 'conf',
          value: 'pai_graph.conf',
        },
        {
          label: 'dot',
          value: 'pai_graph.dot',
        },
        {
          label: 'init',
          value: 'init.rc',
        },
      ],
    },{
      id: '9',
      dataType: 'feature_extractor',
      name: 'feature_extractor',
      conf: [
        {
          label: 'conf',
          value: 'pai_graph.conf',
        },
        {
          label: 'dot',
          value: 'pai_graph.dot',
        },
        {
          label: 'init',
          value: 'init.rc',
        },
      ],
    },
  ],
  edges: [
    {
      source: '1',
      target: '2',
    },
    {
      source: '1',
      target: '3',
    },
    {
      source: '2',
      target: '4',
    },
    {
      source: '3',
      target: '4',
    },
    {
      source: '4',
      target: '5',
    },
    {
      source: '5',
      target: '6',
    },
    {
      source: '6',
      target: '7',
    },
    {
      source: '6',
      target: '8',
    },
    {
      source: '6',
      target: '9',
    },
    {
      source: '8',
      target: '4',
    },
  ],
};


@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  constructor(
    private resolver: ComponentFactoryResolver,
    private injector: Injector,
    private zone: NgZone
  ) { }

  ngOnInit(): void {
    this.zone.runOutsideAngular(() => {
      G6.registerEdge(
        'circle-running',
        {
          afterDraw(cfg, group) {
            debugger
            // get the first shape in the group, it is the edge's path here=
            const shape = group.get('children')[0];
            // the start position of the edge's path

            const startPoint = shape.getPoint(0);
      
            if(!startPoint) {
              return
              
            }
            // add red circle shape
            const circle = group.addShape('circle', {
              attrs: {
                x: startPoint.x,
                y: startPoint.y,
                fill: '#5B8FF9',
                r: 3
              },
              name: 'circle-shape'
            });
      
            // animation for the red circle
            circle.animate(
              ratio => {
                // the operations in each frame. Ratio ranges from 0 to 1 indicating the prograss of the animation. Returns the modified configurations
                // get the position on the edge according to the ratio
                const tmpPoint = shape.getPoint(ratio);
                // returns the modified configurations here, x and y here
                return {
                  x: tmpPoint.x,
                  y: tmpPoint.y
                };
              },
              {
                repeat: true, // Execute the animation repeatedly
                duration: 1000 // the duration for executing once
              }
            );
          }
        },
        'line' // Edge type
      )

      const lineDash = [4, 2, 1, 2];
      G6.registerEdge(
        'line-dash',
        {
          afterDraw(cfg, group) {
            // get the first shape in the group, it is the edge's path here=
            const shape = group.get('children')[0];
            let index = 0;
            // Define the animation
            shape.animate(
              () => {
                index++;
                if (index > 9) {
                  index = 0;
                }
                const res = {
                  lineDash,
                  lineDashOffset: -index,
                };
                // returns the modified configurations here, lineDash and lineDashOffset here
                return res;
              },
              {
                repeat: true, // whether executes the animation repeatly
                duration: 3000, // the duration for executing once
              },
            );
          },
        },
        // 'cubic', // extend the built-in edge 'cubic'
        'polyline', // extend the built-in edge 'cubic'
      );
  
      const that = this;
  
      G6.registerNode(
        'sql',
        {
          drawShape(cfg, group) {
            // const rect = group.addShape('rect', {
            //   attrs: {
            //     x: -75,
            //     y: -25,
            //     width: 150,
            //     height: 50,
            //     radius: 10,
            //     stroke: '#5B8FF9',
            //     fill: '#C6E5FF',
            //     lineWidth: 3,
            //   },
            //   name: 'rect-shape',
            // });
            // if (cfg.name) {
            //   group.addShape('text', {
            //     attrs: {
            //       text: cfg.name,
            //       x: 0,
            //       y: 0,
            //       fill: '#00287E',
            //       fontSize: 14,
            //       textAlign: 'center',
            //       textBaseline: 'middle',
            //       fontWeight: 'bold',
            //     },
            //     name: 'text-shape',
            //   });
            // }
            // return rect;
            if (cfg.name) {
  
              // dynamically instantiate a HTMLMarkerComponent
              const factory = that.resolver.resolveComponentFactory(DynamicComponent);
  
              // we need to pass in the dependency injector
              const component = factory.create(that.injector);
  
              // wire up the @Input() or plain variables (doesn't have to be strictly an @Input())
              component.instance.data = cfg;
  
              // we need to manually trigger change detection on our in-memory component
              // s.t. its template syncs with the data we passed in
              component.changeDetectorRef.detectChanges();
  
              // pass in the HTML from our dynamic component
              const content = component.location.nativeElement;
  
              // debugger
  
              console.log(content)
  
              const rect = group.addShape('dom', {
                attrs: {
                  x: -100,
                  y: -40,
                  width: 200,
                  height: 80,
                  html: content.outerHTML
                },
                name: 'dom-shape',
              });
    
              return rect
    
            }

          },
        },
        'single-node',
      );
  
      const container = document.getElementById('root');
      const width = container.scrollWidth;
      const height = container.scrollHeight || 700;
      const graph = new G6.Graph({
        container: 'root',
        renderer: 'svg',
        width,
        height,
        layout: {
          type: 'dagre',
          nodesepFunc: (d) => {
            // if (d.id === '3') {
            //   return 100;
            // }
            return 80;
          },
          ranksep: 40,
          controlPoints: true,
        },
        defaultNode: {
          type: 'sql',
        },
        defaultEdge: {
          type: 'line-dash',
          // type: 'circle-running',
          style: {
            radius: 0,
            offset: 0,
            endArrow: true,
            lineWidth: 1,
            stroke: '#C2C8D5',
          },
        },
        nodeStateStyles: {
          selected: {
            stroke: '#d9d9d9',
            fill: '#5394ef',
          },
        },
        modes: {
          default: [
            'drag-canvas',
            'zoom-canvas',
            'click-select',
            {
              type: 'tooltip',
              formatText(model) {
                const cfg = model.conf;
                const text = [];
                cfg.forEach((row) => {
                  text.push(row.label + ':' + row.value + '<br>');
                });
                return text.join('\n');
              },
              offset: 30,
            },
          ],
        },
        fitView: true,
      });
      graph.data(data);
      graph.render();
  
      graph.update
  
      if (typeof window !== 'undefined')
        window.onresize = () => {
          if (!graph || graph.get('destroyed')) return;
          if (!container || !container.scrollWidth || !container.scrollHeight) return;
          graph.changeSize(container.scrollWidth, container.scrollHeight);
        };
  
        let flag = true
  
  
        // setInterval(() => {
        //   const realData = flag ? data : data2
  
        //   graph.data(realData)
        //   graph.render()
        //   flag = !flag
          
        // }, 2*1000)
        graph.on('node:mouseenter', (evt) => {
          debugger
          const { item } = evt;
          graph.setItemState(item, 'hover', true);
        });

    })
    

  }

}
