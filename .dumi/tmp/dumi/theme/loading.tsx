// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import nprogress from '/Users/zhaoqianyu/Documents/project/web-engineering/node_modules/.pnpm/nprogress@0.2.0/node_modules/nprogress';
import './nprogress.css';
import UserLoading from '/Users/zhaoqianyu/Documents/project/web-engineering/node_modules/.pnpm/dumi@2.3.8_@babel+core@7.24.6_@swc+helpers@0.5.1_@types+node@20.13.0_eslint@9.5.0_jest@29.7.0_4c2h4sazxrjthlvxy3nglmdmji/node_modules/dumi/dist/client/pages/Loading';
import React, { useLayoutEffect, type FC } from 'react';
import { useSiteData } from 'dumi';

const DumiLoading: FC = () => {
  const { setLoading } = useSiteData();

  useLayoutEffect(() => {
    setLoading(true);
    nprogress.start();

    return () => {
      setLoading(false);
      nprogress.done();
    }
  }, []);

  return <UserLoading />
}

export default DumiLoading;
