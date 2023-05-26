"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SegmentDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const enum_1 = require("../enum");
class SegmentDto {
}
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsEnum)(enum_1.Availability),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], SegmentDto.prototype, "generalSettings", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsEnum)(enum_1.Availability),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], SegmentDto.prototype, "productAttributes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsEnum)(enum_1.Availability),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], SegmentDto.prototype, "pricing", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsEnum)(enum_1.Availability),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], SegmentDto.prototype, "delivery", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsEnum)(enum_1.Availability),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], SegmentDto.prototype, "sellingChannels", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsEnum)(enum_1.Availability),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], SegmentDto.prototype, "seo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsEnum)(enum_1.Availability),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], SegmentDto.prototype, "media", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsEnum)(enum_1.Availability),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], SegmentDto.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsEnum)(enum_1.Availability),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], SegmentDto.prototype, "formula", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsEnum)(enum_1.Availability),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], SegmentDto.prototype, "faq", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsEnum)(enum_1.Availability),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], SegmentDto.prototype, "reviews", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsEnum)(enum_1.Availability),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], SegmentDto.prototype, "translations", void 0);
exports.SegmentDto = SegmentDto;
//# sourceMappingURL=segment.dto.js.map