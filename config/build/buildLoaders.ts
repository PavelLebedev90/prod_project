import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  // лоадер для стилей
  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      //MiniCssExtractPlugin создает отдельный файл со стилями при сборке
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: "css-loader",
        // для поддержки css модулей
        options: {
          modules: {
            // чтобы классы не модульных файлов стилей не преобразовывались в набор символов
            auto: (resPath: string) => Boolean(resPath.includes(".module.")),
            localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64:8]",
          },
        },
      },
      // Compiles Sass to CSS
      "sass-loader",
    ],
  };
  // если не используем тайпскрипт - нужен babel-loader
  const typescriptLoader = {
    // настройка для ts
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/, // исключения
  };

  return [typescriptLoader, cssLoader];
}
