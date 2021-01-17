import Firebase from 'firebase';

export interface IUserInfo extends Firebase.UserInfo {}

export interface IContent {
  docId?: string | null;
  description?: string | null;
  genre?: string | null;
  id?: string | null;
  maturity?: number | null;
  slug?: string | null;
  title?: string | null;
}
