export interface FormsType {
  control?: any;
  onSubmit: any;
  errors: any;
  isLoading: boolean;
  register: any;
  handleSubmit: any;
}

export interface RegisterFormFieldsType {
  email: string;
  password: string;
  how_did_hear: string;
}
export interface LoginFormFieldsType {
  email: string;
  password: string;
}
export interface FogetPasswordFormFieldsType {
  email: string;
}
export interface OnboardingProfileFormFieldsType {
  displayName: string;
  expertise: string;
  biography: string;
}
