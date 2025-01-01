# Command Pattern in JavaScript

The Command Pattern is a design pattern that <em>decouples</em> the code that invokes a task from the code that actually performs it. This can be particularly useful when you want to execute, queue, or undo commands independently from each other.

## Use Case: Smart Home Remote Control
Imagine you have a remote control that can turn devices on and off, adjust settings, or even queue actions for later. Each device (e.g., light, fan, TV) is controlled through separate commands, which can be queued, executed, or reversed independently.

### Example

Let’s look at a simplified example of how this works.

```javascript 
// RemoteControl class that executes commands
class RemoteControl {
  execute(command) {
    return command.execute();
  }
}

// Commands for different actions
class LightOnCommand {
  constructor(light) {
    this.light = light;
  }

  execute() {
    return this.light.on();
  }
}

class LightOffCommand {
  constructor(light) {
    this.light = light;
  }

  execute() {
    return this.light.off();
  }
}

class FanOnCommand {
  constructor(fan) {
    this.fan = fan;
  }

  execute() {
    return this.fan.on();
  }
}

class FanOffCommand {
  constructor(fan) {
    this.fan = fan;
  }

  execute() {
    return this.fan.off();
  }
}

// Receiver classes that handle actual actions
class Light {
  on() {
    return "The light is ON";
  }

  off() {
    return "The light is OFF";
  }
}

class Fan {
  on() {
    return "The fan is ON";
  }

  off() {
    return "The fan is OFF";
  }
}

// Using the commands with RemoteControl
const remote = new RemoteControl();
const livingRoomLight = new Light();
const fan = new Fan();

console.log(remote.execute(new LightOnCommand(livingRoomLight))); // "The light is ON"
console.log(remote.execute(new FanOnCommand(fan)));               // "The fan is ON"
console.log(remote.execute(new FanOffCommand(fan)));              // "The fan is OFF"
console.log(remote.execute(new LightOffCommand(livingRoomLight))); // "The light is OFF"
```

In this example:

- **Receiver Classes (Light, Fan)**: These classes perform the actual tasks, like turning devices on and off.
- **Command Classes (LightOnCommand, LightOffCommand, FanOnCommand, FanOffCommand)**: Each command encapsulates an action, calling the respective method on the device.
- **Invoker (RemoteControl)**: The remote control class only knows how to execute commands, without needing to understand the details of each device.

With this structure, we can easily add more commands for other devices or new actions (like dimming lights) without modifying the `RemoteControl` class. This decoupling also makes it easy to undo actions or create a queue for automation.

### Pros and Cons of the Command Pattern

#### Pros
1. **Extensibility**: Adding new devices or commands (like dimming a light) is simple and doesn't impact other parts of the system.
2. **Decoupled Code**: The `RemoteControl` is generic and doesn't depend on specific devices, making it reusable.
3. **Reversibility**: Commands can include undo methods to reverse actions if needed.

#### Cons
1. **Additional Complexity**: Simple actions may feel overly complex due to the extra command classes.
2. **Memory Overhead**: Each command is an object, which can add up in memory usage, especially in systems with many devices.

The Command Pattern excels in scenarios where actions need to be queued, delayed, or executed independently, making it a valuable addition for applications with complex workflows or undoable tasks.