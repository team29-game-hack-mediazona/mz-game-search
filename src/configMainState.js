export const ROOM_LAPTOP_OPEN = Symbol('ROOM_LAPTOP_OPEN')
export const ROOM_LAPTOP_BROKE = Symbol('ROOM_LAPTOP_BROKE')
export const ROOM_LAPTOP_TO_TRASH = Symbol('ROOM_LAPTOP_TO_TRASH')
export const ROOM_LAPTOP_DROP = Symbol('ROOM_LAPTOP_DROP')

export const ROOM_PHONE_OPEN = Symbol('ROOM_PHONE_OPEN')
export const ROOM_PHONE_BROKE = Symbol('ROOM_PHONE_BROKE')
export const ROOM_PHONE_TO_TRASH = Symbol('ROOM_PHONE_TO_TRASH')
export const ROOM_PHONE_DROP = Symbol('ROOM_PHONE_DROP')

export const ROOM_FLAG_BROKE = Symbol('ROOM_FLAG_BROKE')
export const ROOM_FLAG_TO_TRASH = Symbol('ROOM_FLAG_TO_TRASH')
export const ROOM_FLAG_DROP = Symbol('ROOM_FLAG_DROP')
export const ROOM_FLAG_TO_CABINET = Symbol('ROOM_FLAG_TO_CABINET')

export const ROOM_CALENDAR_BROKE = Symbol('ROOM_CALENDAR_BROKE')
export const ROOM_CALENDAR_TO_TRASH = Symbol('ROOM_CALENDAR_TO_TRASH')
export const ROOM_CALENDAR_DROP = Symbol('ROOM_CALENDAR_DROP')
export const ROOM_CALENDAR_TO_CABINET = Symbol('ROOM_CALENDAR_TO_CABINET')

export const ROOM_STICKER_OPEN = Symbol('ROOM_STICKER_OPEN')
export const ROOM_STICKER_BROKE = Symbol('ROOM_STICKER_BROKE')
export const ROOM_STICKER_TO_TRASH = Symbol('ROOM_STICKER_TO_TRASH')
export const ROOM_STICKER_DROP = Symbol('ROOM_STICKER_DROP')
export const ROOM_STICKER_TO_CABINET = Symbol('ROOM_STICKER_TO_CABINET')

export const ROOM_TRASH_FIRE = Symbol('ROOM_TRASH_FIRE')

export const mainState = {
  objects: [
    {
      name: 'room-laptop',
      image: 'room-laptop-fade',
      imageZoom: 'room-laptop-zoom',
      x: 285,
      y: 413,
      wheelOffsetX: 100,
      wheelOffsetY: 50,
      options: [
        {
          title: 'Открыть',
          choice: ROOM_LAPTOP_OPEN,
          points: 0,
        },
        {
          title: 'Повредить',
          choice: ROOM_LAPTOP_BROKE,
          points: -15,
        },
        {
          title: 'Выкинуть в мусорку',
          choice: ROOM_LAPTOP_TO_TRASH,
          points: -10,
        },
        {
          title: 'Выкинуть в окно',
          choice: ROOM_LAPTOP_DROP,
          points: -10,
        },
        {
          title: 'Положить обратно',
          choice: null,
          points: 0,
        }
      ]
    },
    {
      name: 'room-phone',
      image: 'room-phone-fade',
      imageZoom: 'room-phone-zoom',
      x: 328,
      y: 533,
      wheelOffsetX: 75,
      wheelOffsetY: 0,
      options: [
        {
          title: 'Открыть',
          choice: ROOM_PHONE_OPEN,
          points: 0,
        },
        {
          title: 'Повредить',
          choice: ROOM_PHONE_BROKE,
          points: -15,
        },
        {
          title: 'Выкинуть в мусорку',
          choice: ROOM_PHONE_TO_TRASH,
          points: -10,
        },
        {
          title: 'Выкинуть в окно',
          choice: ROOM_PHONE_DROP,
          points: -10,
        }
      ]
    },
    {
      name: 'room-flag',
      image: 'room-flag-fade',
      imageZoom: 'room-flag-zoom',
      x: 231,
      y: 193,
      wheelOffsetX: 120,
      wheelOffsetY: 100,
      options: [
        {
          title: 'Порвать',
          choice: ROOM_CALENDAR_BROKE,
          points: 0,
        },
        {
          title: 'Выкинуть в мусорку',
          choice: ROOM_CALENDAR_TO_TRASH,
          points: -1,
        },
        {
          title: 'Положить в шкаф',
          choice: ROOM_CALENDAR_TO_CABINET,
          points: 2,
        },
        {
          title: 'Выкинуть в окно',
          choice: ROOM_CALENDAR_DROP,
          points: 0,
        },
        {
          title: 'Ничего не делать',
          choice: null,
          points: 0,
        }
      ]
    },
    {
      name: 'room-calendar',
      image: 'room-calendar-fade',
      imageZoom: 'room-calendar-zoom',
      x: 1227,
      y: 278,
      wheelOffsetX: -200,
      wheelOffsetY: 100,
      options: [
        {
          title: 'Порвать',
          choice: ROOM_CALENDAR_BROKE,
          points: 10,
        },
        {
          title: 'Выкинуть в мусорку',
          choice: ROOM_CALENDAR_TO_TRASH,
          points: 10,
        },
        {
          title: 'Положить в шкаф',
          choice: ROOM_CALENDAR_TO_CABINET,
          points: 2,
        },
        {
          title: 'Выкинуть в окно',
          choice: ROOM_CALENDAR_DROP,
          points: 10,
        },
        {
          title: 'Повесить обратно',
          choice: null,
          points: 0,
        }
      ]
    },
    {
      name: 'room-sticker',
      image: 'room-sticker-fade',
      imageZoom: 'room-sticker-zoom',
      x: 1156,
      y: 466,
      wheelOffsetX: -175,
      wheelOffsetY: 10,
      options: [
        {
          title: 'Порвать',
          choice: ROOM_STICKER_BROKE,
          points: 10,
        },
        {
          title: 'Выкинуть в мусорку',
          choice: ROOM_STICKER_TO_TRASH,
          points: -10,
        },
        {
          title: 'Положить в шкаф',
          choice: ROOM_STICKER_TO_CABINET,
          points: -10,
        },
        {
          title: 'Выкинуть в окно',
          choice: ROOM_STICKER_DROP,
          points: 5,
        },
        {
          title: 'Ничего не делать',
          choice: null,
          points: 0,
        }
      ]
    },
    {
      name: 'room-trash',
      image: 'room-trash',
      imageZoom: 'room-trash-zoom',
      x: 700,
      y: 480,
      wheelOffsetX: -200,
      wheelOffsetY: 100,
      options: [
        {
          title: 'Поджечь',
          choice: ROOM_TRASH_FIRE,
          points: -100
        },
        {
          title: 'Не трогать',
          choice: null,
          points: 0
        },
      ]
    },
  ]
}
