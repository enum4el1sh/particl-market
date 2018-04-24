"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const RequestBody_1 = require("../../core/api/RequestBody");
// tslint:disable:variable-name
class LocationMarkerUpdateRequest extends RequestBody_1.RequestBody {
}
tslib_1.__decorate([
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", Number)
], LocationMarkerUpdateRequest.prototype, "item_location_id", void 0);
tslib_1.__decorate([
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", Number)
], LocationMarkerUpdateRequest.prototype, "lat", void 0);
tslib_1.__decorate([
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", Number)
], LocationMarkerUpdateRequest.prototype, "lng", void 0);
exports.LocationMarkerUpdateRequest = LocationMarkerUpdateRequest;
// tslint:enable:variable-name
//# sourceMappingURL=LocationMarkerUpdateRequest.js.map