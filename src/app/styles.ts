export class Styles {
    public styles =
    [{
        "selector": "node",
        "style": {
            "content": "data(id)",
            "font-size": "12px",
            "text-valign": "center",
            "text-halign": "center",
            "background-color": "#555",
            "text-outline-color": "#555",
            "text-outline-width": "2px",
            "color": "#fff",
            "overlay-padding": "6px",
            "z-index": "10"
        }
    }, {
        "selector": "node[?attr]",
        "style": {
            "shape": "rectangle",
            "background-color": "#aaa",
            "text-outline-color": "#aaa",
            "width": "16px",
            "height": "16px",
            "font-size": "6px",
            "z-index": "1"
        }
    }, {
        "selector": "node[?query]",
        "style": {
            "background-clip": "none",
            "background-fit": "contain"
        }
    }, {
        "selector": "node:selected",
        "style": {
            "border-width": "6px",
            "border-color": "#AAD8FF",
            "border-opacity": "0.5",
            "background-color": "#77828C",
            "text-outline-color": "#77828C"
        }
    }, {
        "selector": "edge",
        "style": {
            'curve-style': 'bezier',
            "opacity": "0.8",
            "line-color": "#bbb",
            "width": "1",
            "overlay-padding": "3px",
            "font-size": "6px"
        }
    }, {
        "selector": "node.unhighlighted",
        "style": {
            "opacity": "0.2"
        }
    }, {
        "selector": "edge.arrow",
        "style": {
            "target-arrow-shape": "triangle",
            "target-arrow-color": "#bbb"
        }
    }, {
        "selector": "edge.version",
        "style": {
            "content": "data(label)",
        }
    }, {
        "selector": "edge.unhighlighted",
        "style": {
            "opacity": "0.05"
        }
    }, {
        "selector": ".highlighted",
        "style": {
            "z-index": "999999"
        }
    }, {
        "selector": "node.highlighted",
        "style": {
            "border-width": "6px",
            "border-color": "#AAD8FF",
            "border-opacity": "0.5",
            "background-color": "#394855",
            "text-outline-color": "#394855"
        }
    }, {
        "selector": "edge.filtered",
        "style": {
            "opacity": "0"
        }
    }, {
        "selector": "node[type=\"Technology\"]",
        "style": {
            "shape": "roundrectangle",
            "background-color": "#ACB2B0",
            "text-outline-color": "#ACB2B0"
        }
    }, {
        "selector": "node[type=\"Library\"]",
        "style": {
            "shape": "bottomroundrectangle",
            "background-color": "#ACB2B0",
            "text-outline-color": "#ACB2B0"
        }
    }, {
        "selector": "node[type=\"Intent\"]",
        "style": {
            "shape": "tag",
            "background-color": "#BAB6AB",
            "text-outline-color": "#BAB6AB"
        }
    }, {
        "selector": "node[type=\"Data Type\"]",
        "style": {
            "shape": "triangle",
            "background-color": "#BAB6AB",
            "text-outline-color": "#BAB6AB"
        }
    }, {
        "selector": "node[type=\"Service\"]",
        "style": {
            "shape": "tag",
            "background-color": "#BAB6AB",
            "text-outline-color": "#BAB6AB"
        }
    }, {
        "selector": "node.hidden",
        "style": {
            "display": "none"
        }
    }, {
        "selector": "node.filtered",
        "style": {
            "display": "none"
        }
    }]
}