import Phaser, { Button } from 'phaser'
import Selectable from '../../components/Selectable'
import { centerGameObjects } from '../../utils'
import BackButton from '../../components/BackButton'
import ChoiceWheel from '../../UI/ChoiceWheelHelper'

export default class extends Phaser.State {
  init () { }
  preload () {
  }

  create () {
    this.laptopBg = this.add.sprite(0, 0, 'laptopBg')
    this.laptopZoom = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'laptopZoom')
    centerGameObjects([this.laptopZoom])

    this.chromeButton = new Button(this.game, 480, 676, 'chrome', () => this.state.start('BrowserLaptopScreen'))

    this.veracrypt = new Selectable(this.game, 699, 678, 'veracrypt');
    this.game.add.existing(this.veracrypt)
    this.veracrypt.onSelect.add(
      (props) => ChoiceWheel.openAt(
        this.veracrypt.x + 100,
        this.veracrypt.y + 50,
        [
          { title: 'зашифровать компьютер' },
          { title: 'удалить приложение' }
        ],
        'rtl'
      ).then(() => this.hide())
    )
    this.game.add.existing(this.chromeButton)
    BackButton.addButton(this.game, this.state, 'MainPhoneScreen', 'close')
  }
}
