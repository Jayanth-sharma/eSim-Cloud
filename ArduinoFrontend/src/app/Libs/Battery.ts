import { CircuitElement } from './CircuitElement';
/**
 * Battery9V class
 */
export class Battery9v extends CircuitElement {
  /**
   * Battery9V constructor
   * @param canvas Raphael Canvas (Paper)
   * @param x  position x
   * @param y  position y
   */
  constructor(public canvas: any, x: number, y: number) {
    super('Battery9v', x, y, 'Battery9v.json', canvas);
  }
  /** init is called when the component is complety drawn to the canvas */
  init() {
    this.nodes[1].addValueListener((_, calledby, __) => {
      // if both the terminals of battery are connected with each other
      if (calledby.parent.id === this.id) {
        /// TODO: Show Toast and Stop Simulation
        console.log('Short Circuit');
        window['showToast']('Short Circuit');
      }
    });
  }
  /**
   * Function provides component details
   * @param keyName Unique Class name
   * @param id Component id
   * @param body body of property box
   * @param title Component title
   */
  properties(): { keyName: string; id: number; body: HTMLElement; title: string; } {
    const body = document.createElement('div');
    return {
      keyName: 'Battery9v',
      id: this.id,
      body,
      title: '9v Battery'
    };
  }
  /**
   * Initialize variable when start simulation is pressed
   */
  initSimulation(): void {
    this.nodes[0].setValue(9, null);
  }
  closeSimulation(): void {
  }
  simulate(): void {
  }

}

/**
 * CoinCell3V class
 */
export class CoinCell extends CircuitElement {
  /**
   * CoinCell 3V constructor
   * @param canvas Raphael Canvas (Paper)
   * @param x  position x
   * @param y  position y
   */
  constructor(public canvas: any, x: number, y: number) {
    super('CoinCell', x, y, 'CoinCell.json', canvas);
  }
  /**
   * Function provides component details
   * @param keyName Unique Class name
   * @param id Component id
   * @param body body of property box
   * @param title Component title
   */
  properties(): { keyName: string; id: number; body: HTMLElement; title: string; } {
    const body = document.createElement('div');
    return {
      keyName: this.keyName,
      id: this.id,
      body,
      title: 'Coin Cell'
    };
  }
  initSimulation(): void {
  }
  closeSimulation(): void {
  }
  simulate(): void {
  }
}
