export class PromotionDto {
    _id: string;
    name: string;
    validFrom: Date;
    validTo: Date;
    overviewImageBase64: string;
    deleted: boolean;
}

export class PromotionDetailDto {
    _id: string;
    imageBase64: string;       
    description: string;
}