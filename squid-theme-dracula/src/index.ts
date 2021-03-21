import SquidPlugin from 'squid-packages';

const DraculaPlugin: SquidPlugin = {

    hookConfig: (options) => {

        return {
            ...options,
            param: {
                ...options.param,
                theme: {
                    ...options.param.theme,
                    background: '#282a36',
                    border: '#44475a',
                    text: '#44475a',
                    textHover: '#6272a4',
                    foreground: '#f8f8f2',
                    cursor: '#6272a4',
                    cursorAccent: '#f8f8f2',
                    selection: '#44475a',
                    black: '#21222C',
                    red: '#FF5555',
                    green: '#50FA7B',
                    yellow: '#F1FA8C',
                    blue: '#BD93F9',
                    magenta: '#FF79C6',
                    cyan: '#FF79C6',
                    white: '#F8F8F2',
                    brightBlack: '#6272A4',
                    brightRed: '#FF6E6E',
                    brightGreen: '#69FF94',
                    brightYellow: '#FFFFA5',
                    brightBlue: '#D6ACFF',
                    brightMagenta: '#FF92DF',
                    brightCyan: '#A4FFFF',
                    brightWhite: '#FFFFFF',
                },
            },
        };
    },
}

export default DraculaPlugin;
