abstract class FooCommand {
    abstract execute(): string;
}

// class BarErrorCommand extends FooCommand{}

class BarCommand extends FooCommand {
    execute() {
        return `Command Bar executed`;
    }
}

const barCommand = new BarCommand();
console.log(barCommand.execute());
