"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MagJobSaveRequest = exports.MagJobActionStatusEnum = void 0;
var MagJobActionStatusEnum;
(function (MagJobActionStatusEnum) {
    MagJobActionStatusEnum["DONE"] = "DONE";
    MagJobActionStatusEnum["TODO"] = "TODO";
    MagJobActionStatusEnum["BUSY"] = "BUSY";
    MagJobActionStatusEnum["NO_STATUS"] = "----";
})(MagJobActionStatusEnum || (exports.MagJobActionStatusEnum = MagJobActionStatusEnum = {}));
class MagJobSaveRequest {
    // Not sure what validation rules should be on here, for now no validtion rules, everything is optional
    title;
    briefing;
    inlasMagazine;
    baseJobCode;
    parts;
    language;
    customerReference;
    customerContactNumber;
    numberOfPages;
    numberOfCharacters;
    rubriek;
}
exports.MagJobSaveRequest = MagJobSaveRequest;
