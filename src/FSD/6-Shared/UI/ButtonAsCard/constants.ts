import { EUIKitIcon } from "FSD/Shared/UI/Icon";
import { EIcon } from "FSD/Shared/UI/Icon/constants.ts";

type TButtonAsCardPresetsConfigItem = {
  titleKey: string;
  subtitleKey?: string;
  confirmKey?: string;
  icon?: EUIKitIcon;
  iconLeft?: EUIKitIcon;
  isVisibleSwitch?: boolean;
}

export enum EButtonAsCardPreset {

  /* Common */
  sendGreetingEmailHrefSwitch = "sendGreetingEmailHrefSwitch",

  /* user */
  userToAdd="userToAdd",
}

export const ButtonAsCardPresetsConfig: Record<EButtonAsCardPreset, TButtonAsCardPresetsConfigItem> = {
  /* Common */
  [EButtonAsCardPreset.sendGreetingEmailHrefSwitch]: {
    titleKey   : "toSendGreetingEmail",
    subtitleKey: "willSendLinkToChangePassword",
    confirmKey : "removeUser",
    icon       : EUIKitIcon.edit,
    iconLeft   : EUIKitIcon.edit
  },

  /* user */
  [EButtonAsCardPreset.userToAdd]: {
    titleKey: "toAddUser",
    icon    : EUIKitIcon.plus,
    iconLeft: EIcon.addUser
  }
};
