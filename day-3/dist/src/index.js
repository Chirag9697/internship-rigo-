"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const app = (0, express_1.express)();
app.get('/', (req, res) => {
    res.send("hello world");
});
app.listen(3000, () => {
    console.log("listening on port 3000");
});
//# sourceMappingURL=index.js.map