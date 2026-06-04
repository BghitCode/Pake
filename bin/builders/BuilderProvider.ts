import BaseBuilder from './BaseBuilder';
import MacBuilder from './MacBuilder';
import WinBuilder from './WinBuilder';
import LinuxBuilder from './LinuxBuilder';
import { BghitappAppOptions } from '@/types';

const { platform } = process;

const buildersMap: Record<
  string,
  new (options: BghitappAppOptions) => BaseBuilder
> = {
  darwin: MacBuilder,
  win32: WinBuilder,
  linux: LinuxBuilder,
};

export default class BuilderProvider {
  static create(options: BghitappAppOptions): BaseBuilder {
    const Builder = buildersMap[platform];
    if (!Builder) {
      throw new Error('The current system is not supported!');
    }
    return new Builder(options);
  }
}
