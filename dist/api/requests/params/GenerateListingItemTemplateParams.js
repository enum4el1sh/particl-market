"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
class GenerateListingItemTemplateParams {
    /**
     * generateParams[]:
     * [0]: generateItemInformation
     * [1]: generateShippingDestinations
     * [2]: generateItemImages
     * [3]: generatePaymentInformation
     * [4]: generateEscrow
     * [5]: generateItemPrice
     * [6]: generateMessagingInformation
     * [7]: generateListingItemObjects
     * [8]: generateObjectDatas
     * [9]: profileId
     * [10]: generateListingItem
     * [11]: marketId
     *
     * @param generateParams
     */
    constructor(generateParams = []) {
        // GenerateListingItemTemplateParamsInterface
        this.generateItemInformation = true;
        this.generateShippingDestinations = true;
        this.generateItemImages = true;
        this.generatePaymentInformation = true;
        this.generateEscrow = true;
        this.generateItemPrice = true;
        this.generateMessagingInformation = true;
        this.generateListingItemObjects = true;
        this.generateObjectDatas = true;
        this.profileId = null;
        this.generateListingItem = false;
        this.marketId = null;
        // set params only if there are some -> by default all are true
        if (!_.isEmpty(generateParams)) {
            this.generateItemInformation = generateParams[0] ? true : false;
            this.generateShippingDestinations = generateParams[1] ? true : false;
            this.generateItemImages = generateParams[2] ? true : false;
            this.generatePaymentInformation = generateParams[3] ? true : false;
            this.generateEscrow = generateParams[4] ? true : false;
            this.generateItemPrice = generateParams[5] ? true : false;
            this.generateMessagingInformation = generateParams[6] ? true : false;
            this.generateListingItemObjects = generateParams[7] ? true : false;
            this.generateObjectDatas = generateParams[8] ? true : false;
            this.profileId = generateParams[9] ? generateParams[9] : null;
            this.generateListingItem = generateParams[10] ? true : false;
            this.marketId = generateParams[11] ? generateParams[11] : null;
        }
    }
    toParamsArray() {
        return [
            this.generateItemInformation,
            this.generateShippingDestinations,
            this.generateItemImages,
            this.generatePaymentInformation,
            this.generateEscrow,
            this.generateItemPrice,
            this.generateMessagingInformation,
            this.generateListingItemObjects,
            this.generateObjectDatas,
            this.profileId,
            this.generateListingItem,
            this.marketId
        ];
    }
}
exports.GenerateListingItemTemplateParams = GenerateListingItemTemplateParams;
//# sourceMappingURL=GenerateListingItemTemplateParams.js.map