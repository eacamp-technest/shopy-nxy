type ToastSeverity = 'default' | 'info' | 'success' | 'warning' | 'error';

interface IToastStoreActions {
  showToast: (by: ToastSeverity, message: string) => void;
  hideToast: () => void;
}

export interface IToastStore {
  message: string;
  show: boolean;
  icon: null | string;
  severity: ToastSeverity;
  timeoutId: NodeJS.Timeout | null;
  actions: IToastStoreActions;
}
