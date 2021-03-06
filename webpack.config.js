
const backgroundConfig = {
    entry: [
        './src/team-page/maps/background.ts',
        './src/team-page/members/background.ts',
        './src/team-page/seasons/background.ts',
        './src/util/background/fetchCached.ts',
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'babel-loader',
            },
            {
                test: /\.js$/,
                use: ['source-map-loader'],
                enforce: 'pre',
            },
        ],
    },
    output: {
        filename: 'background.js',
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
}

const contentScripts = [
    'content.ts',
    'team-page/seasons/index.ts',
    'team-page/members/index.ts',
];

const contentScriptConfigs = contentScripts.map(contentScriptPath => {
    const jsFilePath = contentScriptPath.replace(".ts", ".js");
    return {
        entry: './src/' + contentScriptPath,
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'babel-loader'
                },
                {
                    test: /\.js$/,
                    use: ['source-map-loader'],
                    enforce: 'pre',
                }
            ]
        },
        output: {
            filename: 'content/' + jsFilePath,
        },
        resolve: {
            extensions: ['.ts', '.js'],
        },
    }
});

const allConfigs = contentScriptConfigs;
allConfigs.push(backgroundConfig);

module.exports = allConfigs;
