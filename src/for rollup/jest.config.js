module.exports = {
    setupFiles: [
      './jest.setup.js',
    ],
    moduleFileExtensions: [
      'js',
      'jsx',
    ],
    testPathIgnorePatterns: [
      "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$",
      "./node_modules/"
    ],
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    coverageDirectory: "coverage",
    collectCoverage: true,
    coverageReporters: [
      "lcov", // 会生成lcov测试结果以及HTML格式的漂亮的测试覆盖率报告
      "text" // 会在命令行界面输出简单的测试报告
    ],
    collectCoverageFrom: [
      './src/*.tsx',
    ],
    transform: {
        '^.+\\.(jsx?)$': './node_modules/babel-jest',
        '.*\\.(tsx?)$': './node_modules/ts-jest'
    },
  };