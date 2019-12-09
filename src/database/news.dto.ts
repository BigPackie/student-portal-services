export class NewsItemDto {
    _id: string;
    name: string;
    validFrom: Date;
    validTo: Date;
    overviewImageBase64: string;
    deleted: boolean;
}

export class NewsItemDetailDto {
    _id: string;
    imageBase64: string;       
    description: string;
}