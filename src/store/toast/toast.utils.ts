import {IToastStore} from './toast.types';

const DURATION = 5000;

const vectors = {
  default: null,
  info: require('../../assets/vectors/toast_info.svg'),
  error: require('../../assets/vectors/toast_error.svg'),
  success: require('../../assets/vectors/toast_success.svg'),
  warning: require('../../assets/vectors/toast_warning.svg'),
};

export const showToastAction =
  (set: any) => (severity: IToastStore['severity'], message: string) => {
    set((state: IToastStore) => {
      if (state.timeoutId) {
        clearTimeout(state.timeoutId);
      }

      const newTimeoutId = setTimeout(() => {
        set({
          icon: null,
          show: false,
          message: '',
          severity: 'default',
        });
      }, DURATION);

      return {
        message,
        severity,
        show: true,
        icon: vectors[severity],
        timeoutId: newTimeoutId,
      };
    });
  };

export const hideToastAction =
  (set: any, initialState: Omit<IToastStore, 'actions'>) => () => {
    set((state: IToastStore) => {
      if (state.timeoutId) {
        clearTimeout(state.timeoutId);
      }
      return {...initialState};
    });
  };
