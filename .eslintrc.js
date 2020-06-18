module.exports = {
    env: {
        es2020: true,
    },
    extends: ['airbnb', 'prettier', 'prettier/react'],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 11,
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'prettier'],
    rules: {
        'prettier/prettier': 'error',
        'react-jsx-filename-extensions': [
            'warn',
            {
                extensions: ['.jsx', '.js'],
            },
        ],
        'import/prettier-default-export': 'off',
    },
};
