# konami
Simple konami code library. Detects keydown sequence and executes function.

### Usage

```javascript
Konami()
```

or

```javascript
var f = function() {
  alert("Hello!");
};

var s = ["up arrow", "down arrow", "numpad 1", "f6", ".", "enter"];

Konami(s, f);
```
