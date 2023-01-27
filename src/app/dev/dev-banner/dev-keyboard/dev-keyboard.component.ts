import { Component, OnInit } from '@angular/core';

interface Keys {
  label: string;
  class?: string;
  pressed: boolean;
}

@Component({
  selector: 'app-dev-keyboard',
  templateUrl: './dev-keyboard.component.html',
  styleUrls: ['./dev-keyboard.component.scss'],
})
export class DevKeyboardComponent implements OnInit {
  keys: Keys[][] = [
    [
      {
        label: '`',
        pressed: false,
      },
      {
        label: '1',
        pressed: false,
      },
      {
        label: '2',
        pressed: false,
      },
      {
        label: '3',
        pressed: false,
      },
      {
        label: '4',
        pressed: false,
      },
      {
        label: '5',
        pressed: false,
      },
      {
        label: '6',
        pressed: false,
      },
      {
        label: '7',
        pressed: false,
      },
      {
        label: '8',
        pressed: false,
      },
      {
        label: '9',
        pressed: false,
      },
      {
        label: '0',
        pressed: false,
      },
      {
        label: '-',
        pressed: false,
      },
      {
        label: '=',
        pressed: false,
      },
      {
        label: 'Del',
        class: 'key-backspace',
        pressed: false,
      },
    ],
    [
      {
        label: 'Tab',
        class: 'key-tab',
        pressed: false,
      },
      {
        label: 'Q',
        pressed: false,
      },
      {
        label: 'W',
        pressed: false,
      },
      {
        label: 'E',
        pressed: false,
      },
      {
        label: 'R',
        pressed: false,
      },
      {
        label: 'T',
        pressed: false,
      },
      {
        label: 'Y',
        pressed: false,
      },
      {
        label: 'U',
        pressed: false,
      },
      {
        label: 'I',
        pressed: false,
      },
      {
        label: 'O',
        pressed: false,
      },
      {
        label: 'P',
        pressed: false,
      },
      {
        label: '[',
        pressed: false,
      },
      {
        label: ']',
        pressed: false,
      },
      {
        label: '\\',
        pressed: false,
      },
    ],
    [
      {
        label: 'Caps',
        class: 'key-caps',
        pressed: false,
      },
      {
        label: 'A',
        pressed: false,
      },
      {
        label: 'S',
        pressed: false,
      },
      {
        label: 'D',
        pressed: false,
      },
      {
        label: 'F',
        pressed: false,
      },
      {
        label: 'G',
        pressed: false,
      },
      {
        label: 'H',
        pressed: false,
      },
      {
        label: 'J',
        pressed: false,
      },
      {
        label: 'K',
        pressed: false,
      },
      {
        label: 'L',
        pressed: false,
      },
      {
        label: ';',
        pressed: false,
      },
      {
        label: "'",
        pressed: false,
      },
      {
        label: 'Enter',
        class: 'key-enter',
        pressed: false,
      },
    ],
    [
      {
        label: 'Shift',
        class: 'key-shift',
        pressed: false,
      },
      {
        label: 'Z',
        pressed: false,
      },
      {
        label: 'X',
        pressed: false,
      },
      {
        label: 'C',
        pressed: false,
      },
      {
        label: 'V',
        pressed: false,
      },
      {
        label: 'B',
        pressed: false,
      },
      {
        label: 'N',
        pressed: false,
      },
      {
        label: 'M',
        pressed: false,
      },
      {
        label: ',',
        pressed: false,
      },
      {
        label: '.',
        pressed: false,
      },
      {
        label: '/',
        pressed: false,
      },
      {
        label: 'Shift',
        class: 'key-shift',
        pressed: false,
      },
    ],
    [
      {
        label: 'Ctrl',
        class: 'key-ctrl',
        pressed: false,
      },
      {
        label: 'Win',
        class: 'key-win',
        pressed: false,
      },
      {
        label: 'Alt',
        class: 'key-alt',
        pressed: false,
      },
      {
        label: '',
        class: 'key-space',
        pressed: false,
      },
      {
        label: 'Alt',
        class: 'key-alt',
        pressed: false,
      },
      {
        label: 'Fn',
        class: 'key-fn',
        pressed: false,
      },
      {
        label: 'Ctrl',
        class: 'key-ctrl',
        pressed: false,
      },
    ],
  ];

  constructor() {}

  ngOnInit(): void {
    // Press a new key every 500m/s
    setInterval(
      function (keys: Keys[][]) {
        const randRow = Math.floor(Math.random() * keys.length); // Get random row
        const randKey = Math.floor(Math.random() * keys[randRow].length); // Get random key in row
        const key = keys[randRow][randKey];

        key.pressed = !key.pressed; // Set key as pressed

        // Set key as unpressed after 200m/s
        setTimeout(
          function (key: Keys) {
            key.pressed = !key.pressed;
          },
          200,
          key
        );
      },
      300,
      this.keys
    );
  }
}
