// Copyright (c) 2017-2019, The Particl Market developers
// Distributed under the GPL software license, see the accompanying
// file COPYING or https://github.com/particl/particl-market/blob/develop/LICENSE

import { inject, named } from 'inversify';
import { validate, request } from '../../../core/api/Validate';
import { Logger as LoggerType } from '../../../core/Logger';
import { Types, Core, Targets } from '../../../constants';
import { ListingItemTemplateService } from '../../services/ListingItemTemplateService';
import { RpcRequest } from '../../requests/RpcRequest';
import { ListingItemTemplate } from '../../models/ListingItemTemplate';
import { RpcCommandInterface } from '../RpcCommandInterface';
import { Commands} from '../CommandEnumType';
import { BaseCommand } from '../BaseCommand';
import { ListingItemFactory } from '../../factories/ListingItemFactory';

export class ListingItemTemplateGetCommand extends BaseCommand implements RpcCommandInterface<ListingItemTemplate> {

    public log: LoggerType;

    constructor(
        @inject(Types.Core) @named(Core.Logger) public Logger: typeof LoggerType,
        @inject(Types.Service) @named(Targets.Service.ListingItemTemplateService) private listingItemTemplateService: ListingItemTemplateService,
        @inject(Types.Factory) @named(Targets.Factory.ListingItemFactory) private listingItemFactory: ListingItemFactory
    ) {
        super(Commands.TEMPLATE_GET);
        this.log = new Logger(__filename);
    }

    /**
     * data.params[]:
     *  [0]: id or hash
     *
     * when data.params[0] is number then findById, else findOneByHash
     *
     * @param data
     * @returns {Promise<ListingItemTemplate>}
     */
    @validate()
    public async execute( @request(RpcRequest) data: RpcRequest): Promise<ListingItemTemplate> {
        let listingItemTemplate;
        let base64;
        let count = 0;

        if (typeof data.params[0] === 'number') {
            listingItemTemplate = await this.listingItemTemplateService.findOne(data.params[0]);
        } else {
            listingItemTemplate = await this.listingItemTemplateService.findOneByHash(data.params[0]);
        }

        let returnData = listingItemTemplate.toJSON();

        const listingItemMessage = await this.listingItemFactory.getMessage(listingItemTemplate.toJSON());
        if (listingItemMessage) {
            const images = listingItemMessage.information.images;
            for (const image of images) {
                base64 = image.data[0].data;
                returnData.ItemInformation.ItemImages[count].OriginalRawImage = base64;
                ++count;
            }
        }
        
        return returnData;
    }

    public usage(): string {
        return this.getName() + ' <listingTemplateId> ';
    }

    public help(): string {
        return this.usage() + ' -  ' + this.description() + ' \n'
            + '    <listingTemplateId>           - Numeric - The ID of the listing item template that we \n'
            + '                                     want to retrieve. ';
    }

    public description(): string {
        return 'Get ListingItemTemplate using its id.';
    }

    public example(): string {
        return 'template ' + this.getName() + ' 1';
    }
}
