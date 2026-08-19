const HTMLRGB = [
  {
    name: "INDIANRED",
    hex: "#CD5C5C",
    rgb: [205, 92, 92],
  },
  {
    name: "LIGHTCORAL",
    hex: "#F08080",
    rgb: [240, 128, 128],
  },
  {
    name: "SALMON",
    hex: "#FA8072",
    rgb: [250, 128, 114],
  },
  {
    name: "DARKSALMON",
    hex: "#E9967A",
    rgb: [233, 150, 122],
  },
  {
    name: "LIGHTSALMON",
    hex: "#FFA07A",
    rgb: [255, 160, 122],
  },
  {
    name: "CRIMSON",
    hex: "#DC143C",
    rgb: [220, 20, 60],
  },
  {
    name: "RED",
    hex: "#FF0000",
    rgb: [255, 0, 0],
  },
  {
    name: "DARKRED",
    hex: "#8B0000",
    rgb: [139, 0, 0],
  },
  {
    name: "PINK",
    hex: "#FFC0CB",
    rgb: [255, 192, 203],
  },
  {
    name: "LIGHTPINK",
    hex: "#FFB6C1",
    rgb: [255, 182, 193],
  },
  {
    name: "HOTPINK",
    hex: "#FF69B4",
    rgb: [255, 105, 180],
  },
  {
    name: "DEEPPINK",
    hex: "#FF1493",
    rgb: [255, 20, 147],
  },
  {
    name: "MEDIUMVIOLETRED",
    hex: "#C71585",
    rgb: [199, 21, 133],
  },
  {
    name: "PALEVIOLETRED",
    hex: "#DB7093",
    rgb: [219, 112, 147],
  },
  {
    name: "CORAL",
    hex: "#FF7F50",
    rgb: [255, 127, 80],
  },
  {
    name: "TOMATO",
    hex: "#FF6347",
    rgb: [255, 99, 71],
  },
  {
    name: "ORANGERED",
    hex: "#FF4500",
    rgb: [255, 69, 0],
  },
  {
    name: "DARKORANGE",
    hex: "#FF8C00",
    rgb: [255, 140, 0],
  },
  {
    name: "ORANGE",
    hex: "#FFA500",
    rgb: [255, 165, 0],
  },
  {
    name: "GOLD",
    hex: "#FFD700",
    rgb: [255, 215, 0],
  },
  {
    name: "YELLOW",
    hex: "#FFFF00",
    rgb: [255, 255, 0],
  },
  {
    name: "LIGHTYELLOW",
    hex: "#FFFFE0",
    rgb: [255, 255, 224],
  },
  {
    name: "LEMONCHIFFON",
    hex: "#FFFACD",
    rgb: [255, 250, 205],
  },
  {
    name: "LIGHTGOLDENRODYELLOW",
    hex: "#FAFAD2",
    rgb: [250, 250, 210],
  },
  {
    name: "PAPAYAWHIP",
    hex: "#FFEFD5",
    rgb: [255, 239, 213],
  },
  {
    name: "MOCCASIN",
    hex: "#FFE4B5",
    rgb: [255, 228, 181],
  },
  {
    name: "PEACHPUFF",
    hex: "#FFDAB9",
    rgb: [255, 218, 185],
  },
  {
    name: "PALEGOLDENROD",
    hex: "#EEE8AA",
    rgb: [238, 232, 170],
  },
  {
    name: "KHAKI",
    hex: "#F0E68C",
    rgb: [240, 230, 140],
  },
  {
    name: "DARKKHAKI",
    hex: "#BDB76B",
    rgb: [189, 183, 107],
  },
  {
    name: "LAVENDER",
    hex: "#E6E6FA",
    rgb: [230, 230, 250],
  },
  {
    name: "THISTLE",
    hex: "#D8BFD8",
    rgb: [216, 191, 216],
  },
  {
    name: "PLUM",
    hex: "#DDA0DD",
    rgb: [221, 160, 221],
  },
  {
    name: "VIOLET",
    hex: "#EE82EE",
    rgb: [238, 130, 238],
  },
  {
    name: "ORCHID",
    hex: "#DA70D6",
    rgb: [218, 112, 214],
  },
  {
    name: "FUCHSIA",
    hex: "#FF00FF",
    rgb: [255, 0, 255],
  },
  {
    name: "MAGENTA",
    hex: "#FF00FF",
    rgb: [255, 0, 255],
  },
  {
    name: "MEDIUMORCHID",
    hex: "#BA55D3",
    rgb: [186, 85, 211],
  },
  {
    name: "MEDIUMPURPLE",
    hex: "#9370DB",
    rgb: [147, 112, 219],
  },
  {
    name: "REBECCAPURPLE",
    hex: "#663399",
    rgb: [102, 51, 153],
  },
  {
    name: "BLUEVIOLET",
    hex: "#8A2BE2",
    rgb: [138, 43, 226],
  },
  {
    name: "DARKVIOLET",
    hex: "#9400D3",
    rgb: [148, 0, 211],
  },
  {
    name: "DARKORCHID",
    hex: "#9932CC",
    rgb: [153, 50, 204],
  },
  {
    name: "DARKMAGENTA",
    hex: "#8B008B",
    rgb: [139, 0, 139],
  },
  {
    name: "PURPLE",
    hex: "#800080",
    rgb: [128, 0, 128],
  },
  {
    name: "INDIGO",
    hex: "#4B0082",
    rgb: [75, 0, 130],
  },
  {
    name: "SLATEBLUE",
    hex: "#6A5ACD",
    rgb: [106, 90, 205],
  },
  {
    name: "DARKSLATEBLUE",
    hex: "#483D8B",
    rgb: [72, 61, 139],
  },
  {
    name: "MEDIUMSLATEBLUE",
    hex: "#7B68EE",
    rgb: [123, 104, 238],
  },
  {
    name: "GREENYELLOW",
    hex: "#ADFF2F",
    rgb: [173, 255, 47],
  },
  {
    name: "CHARTREUSE",
    hex: "#7FFF00",
    rgb: [127, 255, 0],
  },
  {
    name: "LAWNGREEN",
    hex: "#7CFC00",
    rgb: [124, 252, 0],
  },
  {
    name: "LIME",
    hex: "#00FF00",
    rgb: [0, 255, 0],
  },
  {
    name: "LIMEGREEN",
    hex: "#32CD32",
    rgb: [50, 205, 50],
  },
  {
    name: "PALEGREEN",
    hex: "#98FB98",
    rgb: [152, 251, 152],
  },
  {
    name: "LIGHTGREEN",
    hex: "#90EE90",
    rgb: [144, 238, 144],
  },
  {
    name: "MEDIUMSPRINGGREEN",
    hex: "#00FA9A",
    rgb: [0, 250, 154],
  },
  {
    name: "SPRINGGREEN",
    hex: "#00FF7F",
    rgb: [0, 255, 127],
  },
  {
    name: "MEDIUMSEAGREEN",
    hex: "#3CB371",
    rgb: [60, 179, 113],
  },
  {
    name: "SEAGREEN",
    hex: "#2E8B57",
    rgb: [46, 139, 87],
  },
  {
    name: "FORESTGREEN",
    hex: "#228B22",
    rgb: [34, 139, 34],
  },
  {
    name: "GREEN",
    hex: "#008000",
    rgb: [0, 128, 0],
  },
  {
    name: "DARKGREEN",
    hex: "#006400",
    rgb: [0, 100, 0],
  },
  {
    name: "YELLOWGREEN",
    hex: "#9ACD32",
    rgb: [154, 205, 50],
  },
  {
    name: "OLIVEDRAB",
    hex: "#6B8E23",
    rgb: [107, 142, 35],
  },
  {
    name: "OLIVE",
    hex: "#6B8E23",
    rgb: [128, 128, 0],
  },
  {
    name: "DARKOLIVEGREEN",
    hex: "#556B2F",
    rgb: [85, 107, 47],
  },
  {
    name: "MEDIUMAQUAMARINE",
    hex: "#66CDAA",
    rgb: [102, 205, 170],
  },
  {
    name: "DARKSEAGREEN",
    hex: "#8FBC8B",
    rgb: [143, 188, 139],
  },
  {
    name: "LIGHTSEAGREEN",
    hex: "#20B2AA",
    rgb: [32, 178, 170],
  },
  {
    name: "DARKCYAN",
    hex: "#008B8B",
    rgb: [0, 139, 139],
  },
  {
    name: "TEAL",
    hex: "#008080",
    rgb: [0, 128, 128],
  },
  {
    name: "AQUA",
    hex: "#00FFFF",
    rgb: [0, 255, 255],
  },
  {
    name: "CYAN",
    hex: "#00FFFF",
    rgb: [0, 255, 255],
  },
  {
    name: "LIGHTCYAN",
    hex: "#E0FFFF",
    rgb: [224, 255, 255],
  },
  {
    name: "PALETURQUOISE",
    hex: "#AFEEEE",
    rgb: [175, 238, 238],
  },
  {
    name: "AQUAMARINE",
    hex: "#7FFFD4",
    rgb: [127, 255, 212],
  },
  {
    name: "TURQUOISE",
    hex: "#40E0D0",
    rgb: [64, 224, 208],
  },
  {
    name: "MEDIUMTURQUOISE",
    hex: "#48D1CC",
    rgb: [72, 209, 204],
  },
  {
    name: "DARKTURQUOISE",
    hex: "#00CED1",
    rgb: [0, 206, 209],
  },
  {
    name: "CADETBLUE",
    hex: "#5F9EA0",
    rgb: [95, 158, 160],
  },
  {
    name: "STEELBLUE",
    hex: "#4682B4",
    rgb: [70, 130, 180],
  },
  {
    name: "LIGHTSTEELBLUE",
    hex: "#B0C4DE",
    rgb: [176, 196, 222],
  },
  {
    name: "POWDERBLUE",
    hex: "#B0E0E6",
    rgb: [176, 224, 230],
  },
  {
    name: "LIGHTBLUE",
    hex: "#ADD8E6",
    rgb: [173, 216, 230],
  },
  {
    name: "SKYBLUE",
    hex: "#87CEEB",
    rgb: [135, 206, 235],
  },
  {
    name: "LIGHTSKYBLUE",
    hex: "#87CEFA",
    rgb: [135, 206, 250],
  },
  {
    name: "DEEPSKYBLUE",
    hex: "#00BFFF",
    rgb: [0, 191, 255],
  },
  {
    name: "DODGERBLUE",
    hex: "#1E90FF",
    rgb: [30, 144, 255],
  },
  {
    name: "CORNFLOWERBLUE",
    hex: "#6495ED",
    rgb: [100, 149, 237],
  },
  {
    name: "ROYALBLUE",
    hex: "#4169E1",
    rgb: [65, 105, 225],
  },
  {
    name: "BLUE",
    hex: "#0000FF",
    rgb: [0, 0, 255],
  },
  {
    name: "MEDIUMBLUE",
    hex: "#0000CD",
    rgb: [0, 0, 205],
  },
  {
    name: "DARKBLUE",
    hex: "#00008B",
    rgb: [0, 0, 139],
  },
  {
    name: "NAVY",
    hex: "#00008B",
    rgb: [0, 0, 128],
  },
  {
    name: "MIDNIGHTBLUE",
    hex: "#191970",
    rgb: [25, 25, 112],
  },
  {
    name: "CORNSILK",
    hex: "#FFF8DC",
    rgb: [255, 248, 220],
  },
  {
    name: "BLANCHEDALMOND",
    hex: "#FFEBCD",
    rgb: [255, 235, 205],
  },
  {
    name: "BISQUE",
    hex: "#FFE4C4",
    rgb: [255, 228, 196],
  },
  {
    name: "NAVAJOWHITE",
    hex: "#FFDEAD",
    rgb: [255, 222, 173],
  },
  {
    name: "WHEAT",
    hex: "#F5DEB3",
    rgb: [245, 222, 179],
  },
  {
    name: "BURLYWOOD",
    hex: "#DEB887",
    rgb: [222, 184, 135],
  },
  {
    name: "TAN",
    hex: "#D2B48C",
    rgb: [210, 180, 140],
  },
  {
    name: "ROSYBROWN",
    hex: "#BC8F8F",
    rgb: [188, 143, 143],
  },
  {
    name: "SANDYBROWN",
    hex: "#F4A460",
    rgb: [244, 164, 96],
  },
  {
    name: "GOLDENROD",
    hex: "#DAA520",
    rgb: [218, 165, 32],
  },
  {
    name: "DARKGOLDENROD",
    hex: "#B8860B",
    rgb: [184, 134, 11],
  },
  {
    name: "PERU",
    hex: "#CD853F",
    rgb: [205, 133, 63],
  },
  {
    name: "CHOCOLATE",
    hex: "#D2691E",
    rgb: [210, 105, 30],
  },
  {
    name: "SADDLEBROWN",
    hex: "#8B4513",
    rgb: [139, 69, 19],
  },
  {
    name: "SIENNA",
    hex: "#A0522D",
    rgb: [160, 82, 45],
  },
  {
    name: "BROWN",
    hex: "#A52A2A",
    rgb: [165, 42, 42],
  },
  {
    name: "MAROON",
    hex: "#800000",
    rgb: [128, 0, 0],
  },
  {
    name: "WHITE",
    hex: "#FFFFFF",
    rgb: [255, 255, 255],
  },
  {
    name: "SNOW",
    hex: "#FFFAFA",
    rgb: [255, 250, 250],
  },
  {
    name: "HONEYDEW",
    hex: "#F0FFF0",
    rgb: [240, 255, 240],
  },
  {
    name: "MINTCREAM",
    hex: "#F5FFFA",
    rgb: [245, 255, 250],
  },
  {
    name: "AZURE",
    hex: "#F0FFFF",
    rgb: [240, 255, 255],
  },
  {
    name: "ALICEBLUE",
    hex: "#F0F8FF",
    rgb: [240, 248, 255],
  },
  {
    name: "GHOSTWHITE",
    hex: "#F8F8FF",
    rgb: [248, 248, 255],
  },
  {
    name: "WHITESMOKE",
    hex: "#F5F5F5",
    rgb: [245, 245, 245],
  },
  {
    name: "SEASHELL",
    hex: "#FFF5EE",
    rgb: [255, 245, 238],
  },
  {
    name: "BEIGE",
    hex: "#F5F5DC",
    rgb: [245, 245, 220],
  },
  {
    name: "OLDLACE",
    hex: "#FDF5E6",
    rgb: [253, 245, 230],
  },
  {
    name: "FLORALWHITE",
    hex: "#FDF5E6",
    rgb: [253, 245, 230],
  },
  {
    name: "IVORY",
    hex: "#FFFFF0",
    rgb: [255, 255, 240],
  },
  {
    name: "ANTIQUEWHITE",
    hex: "#FAEBD7",
    rgb: [250, 235, 215],
  },
  {
    name: "LINEN",
    hex: "#FAF0E6",
    rgb: [250, 240, 230],
  },
  {
    name: "LAVENDERBLUSH",
    hex: "#FFF0F5",
    rgb: [255, 240, 245],
  },
  {
    name: "MISTYROSE",
    hex: "#FFE4E1",
    rgb: [255, 228, 225],
  },
  {
    name: "GAINSBORO",
    hex: "#DCDCDC",
    rgb: [220, 220, 220],
  },
  {
    name: "LIGHTGRAY",
    hex: "#D3D3D3",
    rgb: [211, 211, 211],
  },
  {
    name: "SILVER",
    hex: "#C0C0C0",
    rgb: [192, 192, 192],
  },
  {
    name: "DARKGRAY",
    hex: "#A9A9A9",
    rgb: [169, 169, 169],
  },
  {
    name: "GRAY",
    hex: "#808080",
    rgb: [128, 128, 128],
  },
  {
    name: "DIMGRAY",
    hex: "#696969",
    rgb: [105, 105, 105],
  },
  {
    name: "LIGHTSLATEGRAY",
    hex: "#778899",
    rgb: [119, 136, 153],
  },
  {
    name: "SLATEGRAY",
    hex: "#708090",
    rgb: [112, 128, 144],
  },
  {
    name: "DARKSLATEGRAY",
    hex: "#2F4F4F",
    rgb: [47, 79, 79],
  },
  {
    name: "BLACK",
    hex: "#000000",
    rgb: [0, 0, 0],
  },
];

function distFromRgb(r, g, b) {
  return function (A, B) {
    const dA = (A.rgb[0] - r) ** 2 + (A.rgb[1] - g) ** 2 + (A.rgb[2] - b) ** 2;
    const dB = (B.rgb[0] - r) ** 2 + (B.rgb[1] - g) ** 2 + (B.rgb[2] - b) ** 2;
    return dA - dB;
  };
}

