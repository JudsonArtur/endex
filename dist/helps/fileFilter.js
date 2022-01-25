"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileFilter = void 0;
const fileFilter = (req, file, callback) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif|mp4|mp3)$/)) {
        return callback(null, false);
    }
    callback(null, true);
};
exports.fileFilter = fileFilter;
//# sourceMappingURL=fileFilter.js.map