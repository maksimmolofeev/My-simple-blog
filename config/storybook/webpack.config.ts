import path from 'path';
import { BuildPaths } from '../build/types/config';
import webpack, { DefinePlugin } from "webpack"
import { buildCssLoader } from '../build/loaders/buildCssLoader';



export default ({config}: {config: webpack.Configuration}) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src')
    }
    config.resolve?.modules?.push(paths.src)
    config.resolve?.extensions?.push('.ts', '.tsx')
    config.resolve?.modules?.unshift(paths.src);

    if (config.module?.rules) {
        config.module.rules = config.module?.rules?.map((rule: webpack.RuleSetRule | '...') => {
            if (rule !== '...' && /svg/.test(rule.test as string)) {
                return { ...rule, exclude: /\.svg$/i };
            }
            
            return rule;
        });
    }

    config.module?.rules?.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });
    config.module?.rules?.push(buildCssLoader(true))

    config.plugins?.push(new DefinePlugin({
        __IS_DEV__: true,
    }));

    return config
}