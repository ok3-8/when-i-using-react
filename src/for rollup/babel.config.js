module.exports = {
    presets: [
        [
        "@babel/preset-env",
            {
                targets: {
                node: "current"
                }
            }
        ],
        ["@babel/preset-typescript"],
        ["@babel/preset-react"]
    ],
    plugins: [
        "transform-es2015-modules-commonjs",
        "@babel/proposal-class-properties",
        "@babel/proposal-object-rest-spread"
    ]
};
