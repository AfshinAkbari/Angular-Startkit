export enum UserType {
  Normal = 0,
  Moderator = 1,
  Admin = 2
}

export const UserTypeLabel = new Map<number, string>([
  [UserType.Normal, 'عادی'],
  [UserType.Moderator, 'مدیر'],
  [UserType.Admin, 'ارشد']
]);
