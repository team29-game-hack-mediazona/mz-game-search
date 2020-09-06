import { State, Sprite, Text } from 'phaser'

// less 50
const POINTS_L1 = 'Вы не готовы к обыску.'
const POINTS_L2 = 'Вы неплохо готовы к обыску.'
const POINTS_L3 = 'Вы хорошо готовы к обыску.' 

const RECOMEND_PC = '• Подумайте, что еще можно сделать с компьютером'
const RECOMEND_PHONE = '• Подумайте, что еще можно сделать с телефоном'
const RECOMEND_ADV = '• Во время обыска страшно остаться наедине с силовиками. Загляните в список контактов на телефоне.'
const RECOMEND_PRIORITY = '• Подумайте, какие объекты были важнее'
const RECOMENT_NO_BROKE = '• Не стоит ломать ноутбук или телефон'

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

    let recomendationText = '';
    if (!this.game.objects.isCrypted('phone')) recomendationText += `\n${RECOMEND_PHONE}`;
    if (!this.game.objects.isCrypted('laptop') || !this.game.objects.isLogout('vk')) recomendationText += `\n${RECOMEND_PC}`;
    if (!this.game.objects.isPhoned('adv')) recomendationText += `\n${RECOMEND_ADV}`;
    if (this.game.objects.isBroken('room-phone') || this.game.objects.isBroken('room-laptop')) recomendationText += `\n${RECOMENT_NO_BROKE}`;
    if (this.game.objects.isUnavaliable('room-flag') || this.game.objects.isUnavaliable('room-calendar')) recomendationText += `\n${RECOMEND_PRIORITY}`

    let titleText = '';
    switch (this.game.result) {
      case 'fire':
        titleText = 'Вы решились на отчаянный шаг и подожгли мусорку.\nВместо силовиков дверь вам выломали пожарные.\nКвартира сгорела.'
        const fire = new Sprite(this.game, 200, 200, 'fire');
        this.game.add.existing(fire);
        pointsText = '';
        recomendationText = '';
        break;
      case 'open':
        titleText = 'Вы открыли дверь.\nВ квартиру ввалились около десятка мрачных людей:\nсиловики в форме, люди в штатском и понятые.'
        break;
      default:
        titleText = 'Время истекло.\nОперативникам надоело стоять под дверью, и они ее выломали.'
        break;
    }

    this.game.add.text(100, 200, titleText, { font: 'bold 20pt Arial', fill: 'white' })
    this.game.add.text(100, 400, pointsText, { font: 'bold 18pt Arial', fill: 'white' })
    this.game.add.text(100, 500, recomendationText, { font: 'bold 16pt Arial', fill: 'white' })
  }

  render() {
    // this.game.debug.spriteInfo(this.debugged, 32, 32);
  }
}
