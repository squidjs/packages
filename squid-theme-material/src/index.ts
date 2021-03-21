import SquidPlugin from 'squid-packages';

const MaterialPlugin: SquidPlugin = {

    hookConfig: (options) => {

        return {
            ...options,
            param: {
                ...options.param,
                theme: {
                    ...options.param.theme,
                    background: '#263238',
                    border: '#2A373E',
                    text: '#607D8B',
                    textHover: '#B0BEC5',
                    foreground: '#B0BEC5',
                    cursor: '#009688',
                    cursorAccent: '#FFFFFF',
                    selection: '#546E7A',
                    black: '#1E272C',
                    red: '#f07178',
                    green: '#c3e88d',
                    yellow: '#ffcb6b',
                    blue: '#82aaff',
                    magenta: '#c792ea',
                    cyan: '#89ddff',
                    white: '#eeffff',
                    brightBlack: '#1E272C',
                    brightRed: '#f07178',
                    brightGreen: '#c3e88d',
                    brightYellow: '#ffcb6b',
                    brightBlue: '#82aaff',
                    brightMagenta: '#c792ea',
                    brightCyan: '#89ddff',
                    brightWhite: '#eeffff',
                },
            },
        };
    },
}

export default MaterialPlugin;
