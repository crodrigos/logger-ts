declare class Logger {
    private static instance;
    private logs;
    private constructor();
    static GetInstance(): Logger;
    private Add;
    static Log(message: string): void;
    static Warn(message: string): void;
    static Error(message: string): void;
    Log(message: string): void;
    Warn(message: string): void;
    Error(message: string): void;
    private Format;
}

export { Logger as default };
