import type {InitOptions} from "./types";
import initAction from './actions/init';

type IInitOptions = Omit<InitOptions, 'checkVersionUpdate'>;
/**
 * 初始化工具
 */
export const init = async (options: IInitOptions) => {
  return await initAction({
    ...options,
    checkVersionUpdate: false,
  })
}
