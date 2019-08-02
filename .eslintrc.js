module.exports = { 
    parser: 'babel-eslint',
    extends: "airbnb",
    env: {
        browser: true,
        node: true
    },
    rules: {
        "react/jsx-one-expression-per-line": [enabled, { "allow": "single-child" }],
        'max-len': ["error", { "code": 200, "ignoreStrings": true, "tabWidth": 4 }]
    }
};