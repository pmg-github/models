import { IsNotEmpty, Length } from "class-validator";

export class NewsletterContentType {
  id: number | undefined = undefined;
  reference: string | undefined = undefined;
  name: string | undefined = undefined;
}
export class NewsletterProjectModel {
  code: string | undefined = undefined;
  name: string | undefined = undefined;
  date: Date | undefined = undefined;
  numberOfRecipients: number | undefined = undefined;
  numberOfSuccess: number | undefined = undefined;
  numberOfFailed: number | undefined = undefined;
  numberOfBounced: number | undefined = undefined;
  numberOfOpened: number | undefined = undefined;
  numberOfClicks: number | undefined = undefined;
}

export class NewsletterModel {
  id: number | undefined = undefined;
  projectCode: string | undefined = undefined;
  languageCode: string | undefined = undefined;
  subject: string | undefined = undefined;
  introTitle: string | undefined = undefined;
  introDescription: string | undefined = undefined;
  introName: string | undefined = undefined;
  introFunction: string | undefined = undefined;
  introFileID: number | undefined = undefined;
  pollCode: string | undefined = undefined;
  statusId: number | undefined = undefined;
  statusReference: string | undefined = undefined;
  statusName: string | undefined = undefined;
  scheduledOn: Date | undefined = undefined;
  timestampStart: Date | undefined = undefined;
  timestampEnd: Date | undefined = undefined;
  numberOfRecipients: number | undefined = undefined;
  numberOfSuccess: number | undefined = undefined;
  numberOfFailed: number | undefined = undefined;
  numberOfBounced: number | undefined = undefined;
  numberOfOpened: number | undefined = undefined;
  numberOfClicks: number | undefined = undefined;
}

export class NewsletterContentModel {
  id: number | undefined = undefined;
  typeId: number | undefined = undefined;
  projectCode: string | undefined = undefined;
  languageCode: string | undefined = undefined;
  articleReference: string | undefined = undefined;
  sortOrder: number | undefined = undefined;
  title: string | undefined = undefined;
  description: string | undefined = undefined;
  moreLabel: string | undefined = undefined;
  moreLink: string | undefined = undefined;
  infoLabel: string | undefined = undefined;
  infoLink: string | undefined = undefined;
}

export class NewsletterQuicklinkModel {
  id: number | undefined = undefined;
  jobCode: string | undefined = undefined;
  languageCode: string | undefined = undefined;
  articleReference: string | undefined = undefined;
  title: string | undefined = undefined;
  url: string | undefined = undefined;
  sortOrder: number | undefined = undefined;
}

export interface NewsletterTileModel {
  id: number;
  reference: string;
  date: Date;
  displayDate: string;
  title: string;
  redirectUrl: string;
}

export class NewsletterArticleSaveRequest {
  @IsNotEmpty()
  id!: number;

  @IsNotEmpty()
  @Length(12, 12)
  jobCode!: string;

  @IsNotEmpty()
  @Length(2, 2)
  languageCode!: string;

  @IsNotEmpty()
  articleReference!: string;

  //articleTypeId?
  //sortOrder? (andere API)
  // colorId? (unused)

  @IsNotEmpty()
  typeId!: number; // viewtypeId

  @IsNotEmpty()
  fileId!: number;

  // quicklicks => not here!

  // Can be empty => default fallback is used when empty DB values!!!
  title!: string;
  description!: string;
  moreLabel!: string;
  moreLink!: string;

  constructor(data: Partial<NewsletterArticleSaveRequest>) {
    Object.assign(this, data);
  }
}
