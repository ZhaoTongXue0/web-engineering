import npmType from "../utils/npm-type";
import {execSync} from "child_process";
import {PKG_NAME, PKG_VERSION} from "../utils/constants";
import ora from "ora";
import log from "../utils/log";

/**
 * 检查最新版本号
 */
const checkVersionUpdate = async (): Promise<string | null> => {
  const npm = await npmType;

  // 使用node内置模块execSync来同步执行一个shell命令
  // 检查包最新版本的命令： npm view [包名] version
  const latestVersion = execSync(`${npm} view ${PKG_NAME} version`).toString('utf8').trim();

  // 当前版本 === 最新版本 执行结束
  if (PKG_VERSION === latestVersion) return null;

  // 如果版本不同，按照.分开，得到x.y.z 主版本号.次版本号.补丁版本号
  const versionNumber = PKG_VERSION.split('.').map(Number);
  const newVersionNumber = latestVersion.split('.').map(Number);

  // 依次比较版本号每一位大小
  for (let i = 0; i < versionNumber.length; i++) {
    if (versionNumber[i] === newVersionNumber[i]) {
      return null;
    } else if (versionNumber[i] < newVersionNumber[i]) {
      // 返回最新版本
      return latestVersion;
    }
  }
}


/**
 * 检查包的版本
 * @param install - 自动安装最新包
 */
export default async (install = true) => {
  const checking = ora(`[${PKG_NAME}] 正在检查最新版本中...`);
  // 启动检查
  checking.start();

  try {
    const npm = await npmType;
    const latestVersion = await checkVersionUpdate();
    //结束检查
    checking.stop();

    if (latestVersion && install) {
      const update = ora(`[${PKG_NAME}] 存在新版本，将升级至 ${latestVersion}`);
      update.start();

      execSync(`${npm} i -g ${PKG_NAME}`);
      update.stop();

    } else if (latestVersion) {
      log.warn(`最新版本为 ${latestVersion}，本地版本为 ${PKG_VERSION}，请尽快升级到最新版本。\n你可以执行 ${npm} i -g ${PKG_NAME}@latest 来安装此版本\n`,);

    } else if (install) {
      log.info(`当前没有可用的更新`);
    }
  } catch (e) {
    checking.stop();
    log.error(e);
  }
}
