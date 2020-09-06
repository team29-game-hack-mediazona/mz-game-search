import { State, Sprite, Text } from 'phaser'

// less 50
const POINTS_L1 = 'Вы не готовы к обыску.'
const POINTS_L2 = 'Вы неплохо готовы к обыску.'
const POINTS_L3 = 'Вы хорошо готовы к обыску.' 

export default class extends State {
  init() { }
  preload() { }

  create() {
    const bg = new Sprite(this.game, 0, 0, 'bootscreen');
    this.game.add.existing(bg);

    if (!this.game.objects.isUnavaliable('room-sticker')) {
      console.log('Не уничтожен пароль! -10 очков')
      this.game.points = this.game.points - 10
    }

    let pointsText = `Вы получили ${this.game.points} баллов\n`
    if (this.game.points < 25) {
      pointsText += POINTS_L1
    } else if (this.game.points < 50) {
      pointsText += POINTS_L2
    } else {
      pointsText += POINTS_L3
    }

    let titleText = '';
    switch (this.game.result) {
      case 'fire':
        titleText = 'Вы решились на отчаянный шаг и подожгли мусорку.\nВместо силовиков дверь вам выломали пожарные.\nКвартира сгорела.'
        const fire = new Sprite(this.game, 200, 200, 'fire');
        this.game.add.existing(fire);
        pointsText = '';
        break;
      case 'open':
        titleText = 'Вы открыли дверь.\nВ квартиру ввалились около десятка мрачных людей:\nсиловики в форме, люди в штатском и понятые.'
        break;
      default:
        titleText = 'Время истекло.\nОперативникам надоело стоять под дверью, и они ее выломали.'
        break;
    }

    this.game.add.text(100, 200, titleText, { font: 'bold 20pt Arial', fill: 'white' })
    this.game.add.text(100, 400, pointsText, { font: 'bold 14pt Arial', fill: 'white' })
  }

  render() {
    // this.game.debug.spriteInfo(this.debugged, 32, 32);
  }
}
