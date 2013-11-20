
window.graphData = {
    ubench: {
        labels: ['copy', 'corrections', 'fannkuch', 'fasta_double',
                 'fasta_float', 'memops', 'primes', 'skinning'],

        native: [
            4.363,
            4.795,
            2.141,
            5.177,
            4.537,
            4.821,
            4.896,
            5.742
        ],

        spidermonkey: [
            6.845,
            5.642,
            3.649,
            10.553,
            10.515,
            7.433,
            6.648,
            15.227
        ],

        v8: [
            6.328,
            5.686,
            3.409,
            11.645,
            11.845,
            7.354,
            7.015,
            14.327
        ]
    },

    apps: { 
        labels: ['box2d', 'bullet', 'lua_binarytrees', 'lua_scimark', 'zlib'],
        native: [
            4.559,
            4.786,
            5.870,
            5.054,
            5.106
        ],

        spidermonkey: [
            8.150,
            11.278,
            6.939,
            8.032,
            13.265
        ],

        v8: [
            13.063,
            17.135,
            12.081,
            12.143,
            13.244
        ]
    }
};
