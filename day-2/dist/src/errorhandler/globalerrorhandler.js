"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = void 0;
function globalErrorHandler(err, req, res, next) {
    // console.log()
    return res.status(500).send("something broke");
}
exports.globalErrorHandler = globalErrorHandler;
//# sourceMappingURL=globalerrorhandler.js.map