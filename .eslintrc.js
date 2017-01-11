module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "env": {
      "browser": true,
      "node": true
    },
    "rules": {
      "react/no-did-mount-set-state": "off",
    }
};
