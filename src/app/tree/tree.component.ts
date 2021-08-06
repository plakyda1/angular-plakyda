// @ts-nocheck

import { Component, OnInit, ComponentFactoryResolver, Injector } from '@angular/core';
import G6 from '@antv/g6';
import { DynamicComponent } from '../dynamic/dynamic.component';


@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  constructor(
    private resolver: ComponentFactoryResolver,
    private injector: Injector
  ) { }

  ngOnInit(): void {
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
      'cubic', // extend the built-in edge 'cubic'
    );

    const that = this;
    const data = {
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
          source: '8',
          target: '4',
        },
      ],
    };

    G6.registerNode(
      'sql',
      {
        drawShape(cfg, group) {
          debugger
          // const rect = group.addShape('rect', {
          //   name: 'rect-shape',
          // });
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

            debugger

            console.log(content)

            const rect = group.addShape('dom', {
              attrs: {
                x: -75,
                y: -25,
                width: 150,
                height: 50,
                html: content.outerHTML
              },
              name: 'dom-shape',
            });

            return rect;


          }
        },
      },
      'single-node',
    );

    const container = document.getElementById('root');
    const width = container.scrollWidth;
    const height = container.scrollHeight || 500;
    const graph = new G6.Graph({
      container: 'root',
      renderer: 'svg',
      width,
      height,
      layout: {
        type: 'dagre',
        // nodesepFunc: (d) => {
        //   if (d.id === '3') {
        //     return 100;
        //   }
        //   return 50;
        // },
        // ranksep: 70,
        // controlPoints: true,
      },
      defaultNode: {
        type: 'sql',
      },
      defaultEdge: {
        type: 'polyline',
        style: {
          radius: 0,
          offset: 45,
          endArrow: true,
          lineWidth: 2,
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
  }

}
