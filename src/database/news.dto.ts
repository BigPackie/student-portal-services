export class NewsItemDto {
    validFrom: Date;
    validTo: Date;
    overviewImageBase64: Buffer;
    detailImageId: string;
    detailText: string;
}