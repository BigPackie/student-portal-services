export class NewsItemDto {
    name: string;
    validFrom: Date;
    validTo: Date;
    overviewImageBase64: string;
}

export class NewsItemDetailDto {
    _id: string;
    imageBase64: string;       
    description: string;
}