import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types/config";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port,
    //автоматическое открытие вкладки
    open: true,
    // для работы роутинга на дев сервере
    historyApiFallback: true,
  };
}
