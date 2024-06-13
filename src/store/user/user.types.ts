import {IUser} from 'types/user';
import {ICardInputFrom} from 'types/card.types';

interface IUserStoreActions {
  addCard: (card: ICardInputFrom) => void;
  removeCard: (id: string) => void;
  selectCard: (id: string | null) => void;
  initUser: (user: IUser) => void;
  initialize: () => void;
  logout: () => void;
  reset: () => void;
}

export interface IUserStore {
  user: IUser | null;
  cards: ICardInputFrom[];
  selectedCard: ICardInputFrom | null;
  actions: IUserStoreActions;
}
