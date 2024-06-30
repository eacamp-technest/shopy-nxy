import {useCallback} from 'react';
import {check, PERMISSIONS, request} from 'react-native-permissions';
import {isIos} from 'constants/common.consts';

const APP_PERMISSIONS = {
  CAMERA: isIos ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA,
  MEDIA: isIos
    ? PERMISSIONS.IOS.PHOTO_LIBRARY
    : PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
};

const APP_POPUP_MESSAGES = {
  CAMERA: {
    title: 'Camera is not authorized',
    message: 'Allow Shoppay to access your camera in the phone settings.',
  },
  MEDIA: {
    title: 'Gallery is not authorized',
    message: 'Allow Shoppay to access your gallery in the phone settings.',
  },
};

type PERMISSIONS_STATUS =
  | 'unavailable'
  | 'denied'
  | 'blocked'
  | 'granted'
  | 'limited';

type APP_PERMISSIONS_TYPE = keyof typeof APP_PERMISSIONS;

export const usePermissions = () => {
  // const navigation = useNavigation<AppNavigation>();

  const openBlockedPopup = useCallback(
    (_title: string, _description: string) => {
      // navigation.navigate(Routes.popUpEdit, {
      //   animationConfig: AnimationPresets.popUpGeneral,
      //   position: 'center',
      //   gestureEnabled: false,
      //   children: <GoToSettingsPopup title={title} description={description} />,
      // });
    },
    [],
  );

  return useCallback(
    async (
      permission: APP_PERMISSIONS_TYPE,
      cb?: (status: PERMISSIONS_STATUS, firstTimeChecked?: boolean) => void,
      params?: {
        askPermission?: boolean;
        showBlockedPopup?: boolean;
      },
    ) => {
      if (APP_PERMISSIONS[permission]) {
        const {askPermission = true, showBlockedPopup = true} = params || {};

        const status = await check(APP_PERMISSIONS[permission]!);

        if (status === 'blocked' && showBlockedPopup) {
          openBlockedPopup(
            APP_POPUP_MESSAGES[permission].title,
            APP_POPUP_MESSAGES[permission].message,
          );

          return;
        }

        if (status !== 'granted' && askPermission) {
          cb && cb(await request(APP_PERMISSIONS[permission]!), true);
        } else {
          cb && cb(status);
        }
      } else {
        cb && cb('granted');
      }
    },
    [openBlockedPopup],
  );
};
