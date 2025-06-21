interface Log {
    message: string,
    date: Date,
    type: LogType
}

enum LogType {
    Log = "✅",
    Warning = "🟨",
    Error = "❌"
}

export const LOG_ICON = "✅"
export const WARN_ICON = "🟨"
export const ERROR_ICON = "❌"

export class Logger {

    private static instance: Logger;

    private logs: Log[] = [];

    private constructor() { }

    public static GetInstance(): Logger {
        if (!this.instance) {
            this.instance = new Logger();
        }
        return this.instance;
    }

    private Add(log: Log) {
        this.logs.push(log);
        console.log(this.Format(log))
    }

    public static Log(message: string) {
        Logger.GetInstance().Log(message)
    }

    public static Warn(message: string) {
        Logger.GetInstance().Warn(message);
    }

    public static Error(message: string) {
        Logger.GetInstance().Error(message);
    }

    public Log(message: string): void {
        this.Add({
            message: message,
            date: new Date(),
            type: LogType.Log
        })
    }

    public Warn(message: string): void {
        this.Add({
            message: message,
            date: new Date(),
            type: LogType.Warning
        })
    }

    public Error(message: string): void {
        this.Add({
            message: message,
            date: new Date(),
            type: LogType.Error
        })
    }

    private Format(log: Log): string {
        let icon : string = log.type;
        return `[${
            log.date.getFullYear().toString().padStart(2, "0")}-${
            log.date.getMonth().toString().padStart(2, "0")}-${
            log.date.getDay().toString().padStart(2, "0")} ${
            log.date.getHours().toString().padStart(2, "0")}:${
            log.date.getMinutes().toString().padStart(2, "0")}:${
            log.date.getSeconds().toString().padStart(2, "0")}] ${
            icon} ${
            log.message
        }`
    }

}

export default Logger