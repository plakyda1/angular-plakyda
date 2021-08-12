// @ts-nocheck

import G6 from '@antv/g6';
import { Component, OnInit, NgZone } from '@angular/core';

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

@Component({
  templateUrl: './tree-canvas.component.html',
  styleUrls: ['./tree-canvas.component.scss']
})
export class TreeCanvasComponent implements OnInit {

  constructor(
    private zone: NgZone
  ) { }

  
  ngOnInit(): void {
    this.zone.runOutsideAngular(() => {
      G6.registerNode(
        'sql',
        {
          drawShape(cfg, group) {
            const rect = group.addShape('rect', {
              attrs: {
                x: -100,
                y: -40,
                width: 200,
                height: 70,
                radius: 10,
                stroke: '#454661',
                fill: '#171A2D',
                lineWidth: 1,
              },
              name: 'rect-shape',
            });
            if (cfg.name) {
              group.addShape('text', {
                attrs: {
                  text: cfg.name,
                  x: -35,
                  y: -15,
                  fill: '#E3E4FF',
                  fontSize: 14,
                  textBaseline: 'middle',
                },
                name: 'text-shape',
              });
              
              group.addShape('text', {
                attrs: {
                  text: cfg.name,
                  x: -35,
                  y: 5,
                  fill: '#E3E4FF',
                  fontSize: 12,
                  textBaseline: 'middle',
                },
                name: 'text-shape-2',
              });
              
              group.addShape('image', {
                attrs: {
                  x: -80,
                  y: -15,
                  width: 27,
                  height: 27,
                  img:'/assets/1.svg',
                },
                name: 'image-shape',
              });
            }
            return rect;
          },
        },
        'single-node',
      );

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
  
  
      const container = document.getElementById('root');
      const width = container.scrollWidth;
      const height = container.scrollHeight || 700;
      const graph = new G6.Graph({
        container: 'root',
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
