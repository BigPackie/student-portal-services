export class NewsItemDto {
    name: string;
    validFrom: Date;
    validTo: Date;
    overviewImageBase64: string;
}

export class NewsItemDetailDto {
    image: string;       
    description: string;
}