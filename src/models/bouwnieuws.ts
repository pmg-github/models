import { Transform } from "class-transformer";
import {
  ArrayMaxSize,
  ArrayUnique,
  IsArray,
  IsBoolean,
  IsObject,
  IsString,
  Length,
  Matches,
  Validate,
  ValidateIf,
  ValidateNested,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";
import type { AvailableVideo } from "./video";

export type BouwnieuwsLanguage = "nl" | "fr";
export type BouwnieuwsStatus = 0 | 1 | 2 | 3;

export const bouwnieuwsStatusLabels = {
  0: "Concept",
  1: "Klaar voor PVP",
  2: "Video opgeladen",
  3: "Gepubliceerd",
} as const;

export interface BouwnieuwsProject<TDate = string> {
  projectCode: string;
  title: string | null;
  releaseDate: TDate | null;
  jobCode: string | null;
  verschenen: string | null;
  status: BouwnieuwsStatus;
}

export interface BouwnieuwsProjects {
  content: BouwnieuwsProject[];
  hasMore: boolean;
}

export type BouwnieuwsVideo = Omit<AvailableVideo, "availableLanguages">;

export interface BouwnieuwsSelectionVideo extends BouwnieuwsVideo {
  addedAt: string | null;
  isIntro: boolean;
}

export interface BouwnieuwsCatalogVideo extends BouwnieuwsVideo {
  id: number;
  title: string;
  availableLanguages: BouwnieuwsLanguage[];
}

export interface BouwnieuwsSelection {
  project: BouwnieuwsProject;
  items: BouwnieuwsSelectionVideo[];
}

export interface BouwnieuwsSkippedVideo {
  jobCode: string;
  title: string | null;
}

export interface BouwnieuwsCopyResult {
  items: BouwnieuwsSelectionVideo[];
  skipped: BouwnieuwsSkippedVideo[];
}

export interface BouwnieuwsComparisonRow {
  jobCode: string;
  title: string | null;
  languageCode: string;
  currentPosition: number | null;
  otherPosition: number | null;
  currentIntroPosition: number | null;
  otherIntroPosition: number | null;
  change: "added" | "removed" | "moved" | "intro" | "unchanged";
}

export interface BouwnieuwsSelectionParams {
  projectCode: string;
  lang: BouwnieuwsLanguage;
}

export interface BouwnieuwsCopyQuery {
  sourceProjectCode: string;
  sourceLanguageCode: BouwnieuwsLanguage;
}

export class BouwnieuwsSelectionItem {
  @IsString()
  @Length(1, 100)
  @Matches(/^\S(?:[\s\S]*\S)?$/)
  jobCode!: string;

  @IsString()
  @Matches(/^(nl|fr)$/i)
  languageCode!: string;

  @ValidateIf((_object, value) => value !== undefined)
  @IsBoolean()
  isIntro?: boolean;
}

export interface StoredBouwnieuwsSelectionItem extends BouwnieuwsSelectionItem {
  addedAt: Date | string | null;
}

@ValidatorConstraint({ name: "bouwnieuwsIntroLimit", async: false })
class BouwnieuwsIntroLimit implements ValidatorConstraintInterface {
  validate(items: unknown) {
    return (
      Array.isArray(items) &&
      items.filter(
        (item) => item && typeof item === "object" && item.isIntro === true,
      ).length <= 5
    );
  }

  defaultMessage() {
    return "Selecteer maximaal 5 introvideo's.";
  }
}

export class BouwnieuwsSelectionSaveRequest {
  @IsArray()
  @ArrayMaxSize(500)
  @ArrayUnique((item: BouwnieuwsSelectionItem | null) =>
    typeof item?.jobCode === "string" && typeof item?.languageCode === "string"
      ? JSON.stringify([
          item.jobCode.toLowerCase(),
          item.languageCode.toLowerCase(),
        ])
      : item,
  )
  @IsObject({ each: true })
  @ValidateNested({ each: true })
  @Transform(({ value }) =>
    Array.isArray(value)
      ? value.map((item) =>
          item && typeof item === "object" && !Array.isArray(item)
            ? Object.assign(new BouwnieuwsSelectionItem(), item)
            : item,
        )
      : value,
  )
  @Validate(BouwnieuwsIntroLimit)
  items!: BouwnieuwsSelectionItem[];
}
