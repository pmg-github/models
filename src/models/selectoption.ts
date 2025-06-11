import {
  validate,
  IsBoolean,
  IsOptional,
  IsString,
  IsArray,
  ValidateNested,
  IsNumber,
  isNumberString,
  IsNumberString,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
  Validate,
} from "class-validator";

@ValidatorConstraint({ name: "isStringOrNumber", async: false })
class IsStringOrNumberConstraint implements ValidatorConstraintInterface {
  validate(value: unknown, _args: ValidationArguments) {
    return typeof value === "string" || typeof value === "number";
  }
  defaultMessage(_args: ValidationArguments) {
    return "value must be a string or a number";
  }
}

export interface SelectOptionViewModel {
  // New property names to use instead of id/name => remove old properties when other code is replaced!
  key: string;
  value: number | string;
}

export class SelectOptionViewModelDto {
  @IsString() key!: string;
  @Validate(IsStringOrNumberConstraint) value!: string | number;

  constructor(data: Partial<SelectOptionViewModelDto>) {
    Object.assign(this, data);
  }
}

export interface SelectOptionIconViewModel
  extends SelectOptionDescriptionViewModel {
  // New property names to use instead of id/name => remove old properties when other code is replaced!
  Icon: string;
}

export interface SelectOptionDescriptionViewModel
  extends SelectOptionViewModel {
  description?: string;
}

export interface SelectOptionDescriptionTagsViewModel
  extends SelectOptionDescriptionViewModel {
  tags?: string;
}
