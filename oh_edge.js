/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'dr-sugiyama, sans-serif': '<script src=\"http://use.edgefonts.net/dr-sugiyama:n4:all.js\"></script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Rectangle',
                            display: 'none',
                            type: 'rect',
                            rect: ['54px', '127px', '193px', '145px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'Rectangle2',
                            display: 'none',
                            type: 'rect',
                            rect: ['302px', '127px', '193px', '145px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'RectangleCopy',
                            display: 'none',
                            type: 'rect',
                            rect: ['54px', '127px', '193px', '145px', 'auto', 'auto'],
                            fill: ["rgba(87,21,21,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'Rectangle2Copy',
                            display: 'none',
                            type: 'rect',
                            rect: ['302px', '127px', '193px', '145px', 'auto', 'auto'],
                            fill: ["rgba(87,21,21,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'RectangleCopy2',
                            display: 'block',
                            type: 'rect',
                            rect: ['54px', '175px', '193px', '145px', 'auto', 'auto'],
                            fill: ["rgba(143,51,51,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'Rectangle2Copy2',
                            display: 'block',
                            type: 'rect',
                            rect: ['302px', '175px', '193px', '145px', 'auto', 'auto'],
                            fill: ["rgba(143,51,51,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Ellipse',
                            type: 'ellipse',
                            rect: ['360px', '30px', '65px', '65px', 'auto', 'auto'],
                            cursor: 'nw-resize',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['86px', '50px', '247px', '26px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​​Click to change colour&nbsp;</p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'birdmp4',
                            display: 'none',
                            type: 'video',
                            tag: 'video',
                            rect: ['-216px', '-9px', '986px', '554px', 'auto', 'auto'],
                            clip: 'rect(0px 985.59478479788px 554.33349609375px 0px)',
                            source: [vid+"bird.mp4.mp4"],
                            preload: 'auto'
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '550px', '400px'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 5000,
                    autoPlay: true,
                    data: [
                        [
                            "eid3",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid9",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${Rectangle2Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid14",
                            "display",
                            1995,
                            0,
                            "linear",
                            "${Rectangle2Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid6",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12",
                            "display",
                            1995,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid23",
                            "display",
                            0,
                            0,
                            "linear",
                            "${birdmp4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid25",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${birdmp4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid22",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${Rectangle}",
                            '175px',
                            '175px'
                        ],
                        [
                            "eid21",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '175px',
                            '175px'
                        ],
                        [
                            "eid15",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy2}",
                            '175px',
                            '175px'
                        ],
                        [
                            "eid19",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy}",
                            '175px',
                            '175px'
                        ],
                        [
                            "eid4",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${RectangleCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid13",
                            "display",
                            1995,
                            0,
                            "linear",
                            "${RectangleCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy2}",
                            'block',
                            'block'
                        ],
                        [
                            "eid7",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${Rectangle2Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid5",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid11",
                            "display",
                            1995,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid2",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy2}",
                            'block',
                            'block'
                        ],
                        [
                            "eid8",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${RectangleCopy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid20",
                            "top",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy}",
                            '175px',
                            '175px'
                        ],
                        [
                            "eid16",
                            "top",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy2}",
                            '175px',
                            '175px'
                        ],
                            [ "eid24", "trigger", 3000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${birdmp4}', [0] ] ],
                            [ "eid26", "trigger", 4995, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${birdmp4}', [] ] ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("oh_edgeActions.js");
})("EDGE-16607838");
